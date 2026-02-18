import React, { useState, useRef, useCallback } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface ApiResponse {
    question: string;
    answer: string;
    followups: string[];
    sources?: string;
    answered: boolean;
    timestamp: string;
}

interface SidebarData {
    question: string;
    answer: string;
    followups: string[];
    sources?: string;
}

const API_BASE = "http://20.198.169.185:5005";

const PRESET_QUESTIONS: string[] = [
    "What are the AI Services help to build my product?",
    "What exactly does your AI product do",
    "Are there case studies or success stories from Aviation industries?",
    "Does it integrate with my existing systems (CRM, ERP, APIs, etc.)?",
    "Who owns the data and the AI-generated outputs?",
    "How is sensitive data protected?",
    "How long does it take to implement?",
    "What type of customer support is available (email, chat, 24/7)?",
    "Is there a service-level agreement (SLA)?",
];

// ─── Skeleton Loader ──────────────────────────────────────────────────────────
function LoadingContent(): React.ReactElement {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <style>{`
        @keyframes shimmer { 0%{background-position:200% 0} 100%{background-position:-200% 0} }
        @keyframes spin-loader { to{transform:rotate(360deg)} }
      `}</style>
            {(
                [
                    ["100%", "44px", "8px"],
                    ["100%", "13px", "0"],
                    ["90%", "13px", "0"],
                    ["82%", "13px", "0"],
                    ["72%", "13px", "16px"],
                    ["52%", "15px", "0"],
                    ["38%", "12px", "8px"],
                ] as [string, string, string][]
            ).map(([w, h, mb], i) => (
                <div
                    key={i}
                    style={{
                        width: w, height: h, marginBottom: mb, borderRadius: "4px",
                        background: "linear-gradient(90deg,#1e1e1e 25%,#2a2a2a 50%,#1e1e1e 75%)",
                        backgroundSize: "200% 100%", animation: "shimmer 1.4s infinite",
                    }}
                />
            ))}
            {[0, 1, 2].map((i) => (
                <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                    <div style={{
                        width: 18, height: 18, borderRadius: "50%", flexShrink: 0,
                        background: "linear-gradient(90deg,#1e1e1e 25%,#2a2a2a 50%,#1e1e1e 75%)",
                        backgroundSize: "200% 100%", animation: "shimmer 1.4s infinite",
                    }} />
                    <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 4 }}>
                        <div style={{
                            height: 13, width: "60%", borderRadius: 4,
                            background: "linear-gradient(90deg,#1e1e1e 25%,#2a2a2a 50%,#1e1e1e 75%)",
                            backgroundSize: "200% 100%", animation: "shimmer 1.4s infinite",
                        }} />
                        <div style={{
                            height: 11, width: "80%", borderRadius: 4,
                            background: "linear-gradient(90deg,#1e1e1e 25%,#2a2a2a 50%,#1e1e1e 75%)",
                            backgroundSize: "200% 100%", animation: "shimmer 1.4s infinite",
                        }} />
                    </div>
                </div>
            ))}
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 8 }}>
                <div style={{
                    width: 16, height: 16, borderRadius: "50%",
                    border: "2px solid #6366f1", borderTopColor: "transparent",
                    animation: "spin-loader 0.8s linear infinite",
                }} />
                <span style={{ color: "#828282", fontSize: 12 }}>Thinking…</span>
            </div>
        </div>
    );
}

function InlineText({ text }: { text: string }): React.ReactElement {
    const cleaned = text.replace(/\s{2,}$/, "").trim();
    const parts = cleaned.split(/(\*\*[^*]+\*\*)/g);
    return (
        <>
            {parts.map((part, i) =>
                /^\*\*[^*]+\*\*$/.test(part) ? (
                    <strong key={i} style={{ color: "#ffffff", fontWeight: 600 }}>
                        {part.slice(2, -2)}
                    </strong>
                ) : (
                    <span key={i}>{part}</span>
                )
            )}
        </>
    );
}

// ─── Answer Text Renderer ─────────────────────────────────────────────────────
function AnswerText({ text }: { text: string }): React.ReactElement {
    // Parse lines into a structured tree
    interface LineNode {
        type: "paragraph" | "bullet" | "subbullet";
        text: string;
        children: LineNode[];
    }

    const rawLines = text.split("\n");
    const nodes: LineNode[] = [];

    let i = 0;
    while (i < rawLines.length) {
        const line = rawLines[i];

        // Top-level bullet: "- text" (no leading spaces)
        if (/^- /.test(line)) {
            const bulletText = line.replace(/^- /, "");
            const node: LineNode = { type: "bullet", text: bulletText, children: [] };

            // Collect sub-bullets and continuation lines
            while (i + 1 < rawLines.length) {
                const next = rawLines[i + 1];
                // Sub-bullet: "  - text" (2+ spaces then dash)
                if (/^\s{2,}- /.test(next)) {
                    node.children.push({ type: "subbullet", text: next.replace(/^\s+- /, ""), children: [] });
                    i++;
                } else if (/^\s{2,}[^-]/.test(next) || next.trim() === "") {
                    // continuation / empty — skip blank, absorb continuation into bullet text
                    if (next.trim() !== "") {
                        node.text += " " + next.trim();
                    }
                    i++;
                } else {
                    break;
                }
            }
            nodes.push(node);
        }
        // Numbered list: "1. text"
        else if (/^\d+\. /.test(line)) {
            const num = line.match(/^(\d+)\./)?.[1] ?? "";
            const bulletText = line.replace(/^\d+\. /, "");
            nodes.push({ type: "bullet", text: `__num__${num}__${bulletText}`, children: [] });
        }
        // Non-empty paragraph line
        else if (line.trim() !== "") {
            // Merge consecutive paragraph lines
            let combined = line.trim();
            while (i + 1 < rawLines.length && rawLines[i + 1].trim() !== "" && !/^[-\d]/.test(rawLines[i + 1])) {
                i++;
                combined += " " + rawLines[i].trim();
            }
            nodes.push({ type: "paragraph", text: combined, children: [] });
        }
        i++;
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
            {nodes.map((node, ni) => {
                // Paragraph
                if (node.type === "paragraph") {
                    const isBold = /^\*\*/.test(node.text) && node.text.endsWith("**");
                    return (
                        <p key={ni} style={{
                            color: isBold ? "#fff" : "#c0c0c0",
                            fontSize: 13, fontWeight: isBold ? 600 : 400,
                            lineHeight: "1.75", margin: 0,
                        }}>
                            <InlineText text={node.text} />
                        </p>
                    );
                }

                // Numbered bullet
                const isNumbered = node.text.startsWith("__num__");
                const numMatch = node.text.match(/^__num__(\d+)__(.*)$/);
                const num = numMatch?.[1];
                const bulletContent = numMatch?.[2] ?? node.text;

                return (
                    <div key={ni} style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                        {/* Top-level bullet row */}
                        <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                            {/* Bullet marker */}
                            {isNumbered ? (
                                <span style={{
                                    minWidth: 20, height: 20, borderRadius: "50%",
                                    background: "linear-gradient(135deg,#6366f1,#8b5cf6)",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    fontSize: 10, fontWeight: 700, color: "#fff",
                                    marginTop: 2, flexShrink: 0,
                                }}>
                  {num}
                </span>
                            ) : (
                                <span style={{
                                    minWidth: 6, height: 6, borderRadius: "50%",
                                    background: "#6366f1",
                                    marginTop: 7, flexShrink: 0,
                                }} />
                            )}
                            <span style={{ color: "#d0d0d0", fontSize: 13, lineHeight: "1.65" }}>
                <InlineText text={isNumbered ? bulletContent : node.text} />
              </span>
                        </div>

                        {/* Sub-bullets */}
                        {node.children.length > 0 && (
                            <div style={{
                                display: "flex", flexDirection: "column", gap: 4,
                                marginLeft: 16, marginTop: 6,
                            }}>
                                {node.children.map((child, ci) => (
                                    <div key={ci} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                    <span style={{
                        minWidth: 4, height: 4, borderRadius: "50%",
                        background: "#555", marginTop: 7, flexShrink: 0,
                    }} />
                                        <span style={{ color: "#a0a0a0", fontSize: 12.5, lineHeight: "1.6" }}>
                      <InlineText text={child.text} />
                    </span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}
// ─── Sidebar Response Content ─────────────────────────────────────────────────
function ResponseContent({
                             data,
                             onFollowupClick,
                         }: {
    data: SidebarData;
    onFollowupClick: (q: string) => void;
}): React.ReactElement {
    const { question, answer, followups, sources } = data;

    return (
        <div style={{ animation: "fadeUp 0.35s ease both" }}>
            <style>{`@keyframes fadeUp{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}`}</style>

            {/* Question chip */}
            <div style={{
                background: "linear-gradient(135deg,#232323 0%,#1a1a1a 100%)",
                border: "1px solid #353535", borderRadius: 8,
                padding: "12px 16px", marginBottom: 20,
                color: "#e0e0e0", fontSize: 13.5, fontWeight: 500, lineHeight: "1.5",
            }}>
                {question}
            </div>

            <AnswerText text={answer} />

            {sources && (
                <div style={{
                    display: "flex", alignItems: "center", gap: 6, marginBottom: 24,
                    padding: "8px 12px", background: "#141414",
                    border: "1px solid #222", borderRadius: 6,
                }}>
          <span style={{ fontSize: 10.5, color: "#828282", letterSpacing: "0.06em", textTransform: "uppercase" as const }}>
            Source
          </span>
                    <span style={{ color: "#2e2e2e", fontSize: 11 }}>·</span>
                    <a
                        href={sources.startsWith("http") ? sources : `https://${sources}`}
                        target="_blank" rel="noreferrer"
                        style={{
                            color: "#7c6fff", fontSize: 12, textDecoration: "none",
                            borderBottom: "1px solid #7c6fff40", wordBreak: "break-all" as const,
                        }}
                    >
                        {sources.replace(/^https?:\/\//, "")}
                    </a>
                </div>
            )}

            {followups.length > 0 && (
                <div>
                    <p style={{
                        color: "#828282", fontSize: 11, fontWeight: 600,
                        letterSpacing: "0.08em", textTransform: "uppercase" as const, marginBottom: 10,
                    }}>
                        Other Suggestions
                    </p>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                        {followups.map((q, i) => (
                            <button
                                key={i}
                                onClick={() => onFollowupClick(q)}
                                style={{
                                    background: "#181818", border: "1px solid #2a2a2a", borderRadius: 6,
                                    padding: "10px 12px", color: "#999", fontSize: 11.5,
                                    lineHeight: "1.5", textAlign: "left" as const, cursor: "pointer",
                                    transition: "all 0.2s", fontFamily: "inherit",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = "#222";
                                    e.currentTarget.style.borderColor = "#444";
                                    e.currentTarget.style.color = "#ddd";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = "#181818";
                                    e.currentTarget.style.borderColor = "#2a2a2a";
                                    e.currentTarget.style.color = "#999";
                                }}
                            >
                                {q}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

// ─── Main SearchSection ───────────────────────────────────────────────────────
const SearchSection: React.FC = () => {
    const [selectedQ, setSelectedQ]       = useState<string | null>(null);
    const [sidebarOpen, setSidebarOpen]   = useState<boolean>(false);
    const [loading, setLoading]           = useState<boolean>(false);
    const [responseData, setResponseData] = useState<SidebarData | null>(null);
    const [apiError, setApiError]         = useState<string | null>(null);
    const [followUp, setFollowUp]         = useState<string>("");

    const scrollRef = useRef<HTMLDivElement>(null);
    const abortRef  = useRef<AbortController | null>(null);

    const askQuestion = useCallback(async (question: string): Promise<void> => {
        if (abortRef.current) abortRef.current.abort();
        abortRef.current = new AbortController();

        setSelectedQ(question);
        setSidebarOpen(true);
        setLoading(true);
        setApiError(null);
        setResponseData(null);

        setTimeout(() => {
            if (scrollRef.current) scrollRef.current.scrollTop = 0;
        }, 50);

        try {
            const res = await fetch(`${API_BASE}/chat`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ question }),
                signal: abortRef.current.signal,
            });

            if (!res.ok) throw new Error(`Server returned ${res.status} ${res.statusText}`);

            const json: ApiResponse = await res.json();

            setResponseData({
                    question: json.question,
                    answer:   json.answer,
                    followups: json.followups ?? [],
                    sources:  json.sources,
                });

        } catch (err) {
            if ((err as Error).name === "AbortError") return;
            setApiError(`Could not reach the server: ${(err as Error).message}`);
        } finally {
            setLoading(false);
        }
    }, []);

    const handleClose = (): void => {
        setSidebarOpen(false);
        setTimeout(() => {
            setSelectedQ(null);
            setResponseData(null);
            setApiError(null);
        }, 350);
    };

    const handleFollowUp = (e?: React.FormEvent): void => {
        e?.preventDefault();
        const q = followUp.trim();
        if (!q || loading) return;
        setFollowUp("");
        askQuestion(q);
    };

    return (
        <>
            <style>{`
        @keyframes spin-sb { to { transform: rotate(360deg); } }

        .mg-chip {
          background: #2b2b2b;
          border: none;
          color: #e0e0e0;
          padding: 10px 12px;
          font-size: 11.5px;
          line-height: 1.5;
          text-align: left;
          cursor: pointer;
          transition: background 0.2s;
          font-family: inherit;
          width: 100%;
          display: block;
        }
        .mg-chip:hover {
          background: #363636;
        }
        .mg-chip.active {
          background: #1f2040;
          outline: 1px solid #6366f1;
          color: #c4c4ff;
        }
      `}</style>

            {/* ── Right column: search bar + chip grid ── */}
            <div className="w-full flex flex-col gap-0">

                {/* Search bar — white, full width, with star icon */}
                <form onSubmit={handleFollowUp} className="w-full">
                    <div className="relative w-full flex items-center">
                        {/* Left star icon */}
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <img src="assets/updated/star_icon.svg" alt="" className="w-[18px] h-[18px]"/>
                        </div>

                        {/* Input */}
                        <input
                            type="text"
                            value={followUp}
                            onChange={(e) => setFollowUp(e.target.value)}
                            className="w-full h-[46px] italic pl-10 pr-12 text-sm bg-white text-black placeholder-black/60 outline-none border-none"
                            placeholder="Ask us anything about your requirement"
                        />

                        {/* Send button — appears only when user has typed something */}
                        {followUp.trim() && (
                            <button
                                type="submit"
                                className="absolute right-2 flex items-center justify-center w-7 h-7 rounded-sm bg-black text-white transition-all duration-200 hover:bg-gray-800"
                                aria-label="Submit question"
                            >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                     strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="12" y1="19" x2="12" y2="5"/>
                                    <polyline points="5 12 12 5 19 12"/>
                                </svg>
                            </button>
                        )}
                    </div>
                </form>
                {/* 3-column chip grid — no gaps between chips, matching the design */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 1fr",
                        gap: "16px",
                        marginTop: "16px",
                    }}
                >
                    {PRESET_QUESTIONS.map((q, idx) => (
                        <button
                            key={idx}
                            onClick={() => askQuestion(q)}
                            className={` mg-chip${selectedQ === q ? " active" : ""}`}
                        >
                            {q}
                        </button>
                    ))}
                </div>
            </div>

            {/* ── Sidebar ── */}
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    right: 0,
                    height: "100vh",
                    width: 460,
                    background: "#0f0f0f",
                    borderLeft: "1px solid #1e1e1e",
                    zIndex: 1000,
                    display: "flex",
                    flexDirection: "column",
                    transform: sidebarOpen ? "translateX(0)" : "translateX(100%)",
                    transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1)",
                    boxShadow: sidebarOpen ? "-12px 0 50px rgba(0,0,0,0.85)" : "none",
                }}
            >
                {/* Header */}
                <div style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "18px 24px", borderBottom: "1px solid #1a1a1a", flexShrink: 0,
                }}>
                    <div>
                        <p style={{
                            fontSize: 10, color: "#444", letterSpacing: "0.12em",
                            textTransform: "uppercase" as const, marginBottom: 4,
                        }}>
                            Mindgraph
                        </p>
                        <h3 style={{ fontSize: 15, fontWeight: 600, color: "#e0e0e0", margin: 0 }}>
                            Your Preferred search results
                        </h3>
                    </div>
                    <button
                        onClick={handleClose}
                        style={{
                            background: "#1a1a1a", border: "1px solid #2a2a2a",
                            borderRadius: "50%", width: 30, height: 30,
                            display: "flex", alignItems: "center", justifyContent: "center",
                            cursor: "pointer", color: "#666", fontSize: 13,
                            transition: "all 0.2s", flexShrink: 0,
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = "#2a2a2a"; e.currentTarget.style.color = "#fff"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = "#1a1a1a"; e.currentTarget.style.color = "#666"; }}
                    >
                        ✕
                    </button>
                </div>

                {/* Scrollable body */}
                <div
                    ref={scrollRef}
                    style={{
                        flex: 1, overflowY: "auto", padding: "20px 24px",
                        scrollbarWidth: "thin" as const, scrollbarColor: "#1e1e1e #0f0f0f",
                    }}
                >
                    {loading && <LoadingContent />}

                    {!loading && apiError && (
                        <div style={{
                            background: "#1a0f0f", border: "1px solid #3d1515",
                            borderRadius: 8, padding: 16, color: "#ff6b6b",
                            fontSize: 13, lineHeight: "1.6",
                        }}>
                            <p style={{ fontWeight: 600, marginBottom: 6 }}>⚠ Error</p>
                            <p>{apiError}</p>
                        </div>
                    )}

                    {!loading && responseData && (
                        <ResponseContent data={responseData} onFollowupClick={askQuestion} />
                    )}
                </div>

                {/* Footer input */}
                <div style={{ padding: "14px 24px 18px", borderTop: "1px solid #1a1a1a", flexShrink: 0 }}>
                    <div style={{
                        display: "flex", alignItems: "center", background: "#151515",
                        border: "1px solid #252525", borderRadius: 8,
                        padding: "0 12px", height: 44, gap: 8,
                    }}>
                        <span style={{ color: "#6366f1", fontSize: 14, flexShrink: 0 }}>✦</span>
                        <input
                            value={followUp}
                            onChange={(e) => setFollowUp(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleFollowUp()}
                            placeholder="Ask Anything here"
                            style={{
                                flex: 1, background: "transparent", border: "none",
                                outline: "none", color: "#ccc", fontSize: 13,
                                fontFamily: "inherit",
                            }}
                        />
                        <button
                            onClick={() => handleFollowUp()}
                            disabled={!followUp.trim() || loading}
                            style={{
                                background: followUp.trim() && !loading ? "#6366f1" : "#1e1e1e",
                                border: "none", borderRadius: 5, width: 26, height: 26,
                                display: "flex", alignItems: "center", justifyContent: "center",
                                cursor: followUp.trim() && !loading ? "pointer" : "default",
                                color: "#fff", fontSize: 13, flexShrink: 0,
                                transition: "background 0.2s",
                            }}
                        >
                            {loading ? (
                                <span style={{
                                    width: 10, height: 10, border: "2px solid #828282",
                                    borderTopColor: "#fff", borderRadius: "50%",
                                    display: "inline-block", animation: "spin-sb 0.7s linear infinite",
                                }} />
                            ) : "↑"}
                        </button>
                    </div>
                </div>
            </div>

            {/* Backdrop */}
            {sidebarOpen && (
                <div
                    onClick={handleClose}
                    style={{
                        position: "fixed", inset: 0,
                        background: "rgba(0,0,0,0.35)",
                        zIndex: 999, backdropFilter: "blur(2px)",
                    }}
                />
            )}
        </>
    );
};

export default SearchSection;