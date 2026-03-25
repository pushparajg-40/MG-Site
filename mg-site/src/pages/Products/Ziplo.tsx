import { useNavigate } from "react-router-dom";
import PageTransition from "../../components/PageTransition";
import RoundedArrowRightIcon from "../../components/ui/RoundedArrowRightIcon";

export default function Ziplo() {
    const navigate = useNavigate();

    const testingServices = [
        {
            title: "Security & Adversarial Testing",
            subtitle: "Protect Your Agent from Malicious Inputs",
            items: [
                "1,000+ prompt injection patterns tested against your agent's input handling",
                "Jailbreak testing via role-playing, hypotheticals, and creative prompt manipulation",
                "Indirect prompt injection detection across emails, PDFs, web pages, and user documents",
                "Context leakage prevention — system prompts, API keys, and internal instructions stay hidden",
                "Toxicity detection even under adversarial baiting scenarios",
            ],
        },
        {
            title: "Behavioral & Quality Validation",
            subtitle: "Ensure Your Agent Behaves as Intended",
            items: [
                "Hallucination detection — every claim verified against ground truth data",
                "Persona drift testing across long conversations and adversarial prompts",
                "Out-of-scope handling — graceful declines without revealing internal constraints",
                "Circular loop detection when the agent gets stuck in repetitive patterns",
                "Handoff accuracy verification ensuring full context transfer to humans or downstream systems",
            ],
        },
        {
            title: "Guardrail & Tool Verification",
            subtitle: "Validate Every Layer of Your Agent Stack",
            items: [
                "End-to-end agent testing — tools, system prompts, and business logic included",
                "Guardrail failure identification across all defined safety boundaries",
                "Tool call accuracy and error handling validation",
                "Framework-aware testing for LangChain, CrewAI, AutoGen, and custom setups",
                "Automated fix suggestions with copy-paste code for every failed test",
            ],
        },
        {
            title: "LLM Migration & Model Validation",
            subtitle: "Switch Models Without Surprises",
            items: [
                "Cross-provider validation when migrating between OpenAI, Anthropic, and other LLMs",
                "Behavioral parity testing — same quality, same guardrails, no regressions",
                "Side-by-side model comparison for informed upgrade decisions",
                "Continuous re-testing on model version changes",
                "CI/CD integration for automated testing on every deployment",
            ],
        },
        {
            title: "Adaptive Threat Intelligence",
            subtitle: "Stay Ahead of Evolving Attack Patterns",
            items: [
                "Adaptive attack engine that learns and evolves beyond static test suites",
                "Continuous test library updates reflecting the latest adversarial techniques",
                "Overnight test runs with results ready before the next dev cycle",
                "Slack and email alerts for immediate failure notifications",
                "30-day result history for trend analysis and compliance audits",
            ],
        },
    ];

    const riskReductions = [
        {
            icon: (
                <svg className="w-5 h-5 text-gray-600 dark:text-gray-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    <path d="M12 7v2" />
                    <path d="M12 13h.01" />
                </svg>
            ),
            title: "Catch failures before production",
            description: "Reduce user-facing incidents and agent downtime"
        },
        {
            icon: (
                <svg className="w-5 h-5 text-gray-600 dark:text-gray-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
            ),
            title: "Fix faster with copy-paste code",
            description: "Dramatically cut time-to-resolution for test failures"
        },
        {
            icon: (
                <svg className="w-5 h-5 text-gray-600 dark:text-gray-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
                    <rect x="9" y="9" width="6" height="6" />
                    <line x1="9" y1="1" x2="9" y2="4" />
                    <line x1="15" y1="1" x2="15" y2="4" />
                    <line x1="9" y1="20" x2="9" y2="23" />
                    <line x1="15" y1="20" x2="15" y2="23" />
                    <line x1="20" y1="9" x2="23" y2="9" />
                    <line x1="20" y1="14" x2="23" y2="14" />
                    <line x1="1" y1="9" x2="4" y2="9" />
                    <line x1="1" y1="14" x2="4" y2="14" />
                </svg>
            ),
            title: "Confidently migrate LLMs",
            description: "Zero unexpected behavioral regressions across providers"
        },
        {
            icon: (
                <svg className="w-5 h-5 text-gray-600 dark:text-gray-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 22h14" />
                    <path d="M5 2h14" />
                    <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" />
                    <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" />
                </svg>
            ),
            title: "Ship agents in hours, not weeks",
            description: "5-minute setup with overnight results ready at standup"
        },
        {
            icon: (
                <svg className="w-5 h-5 text-gray-600 dark:text-gray-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                    <path d="M3 3v5h5" />
                    <path d="M12 7v5l4 2" />
                </svg>
            ),
            title: "Continuous compliance-readiness",
            description: "Audit-ready test history and traceable failure documentation"
        },
        {
            icon: (
                <svg className="w-5 h-5 text-gray-600 dark:text-gray-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    <path d="m9 12 2 2 4-4" />
                </svg>
            ),
            title: "Reduce security exposure",
            description: "Harden against prompt injection, jailbreaks, and data leakage"
        }
    ];

    const differentiators = [
        { text: "Tests the complete agent — tools, system prompts, guardrails, and business logic, not just the model", indent: false },
        { text: "Actionable fix suggestions with copy-paste code for every failed test case", indent: true },
        { text: "Adaptive attack engine that evolves beyond static patterns to catch emerging vulnerabilities", indent: false },
        { text: "Speed-first architecture — agent verified to run first, thousands of tests executed overnight", indent: false },
        { text: "Seamless LLM migration validation ensuring behavioral parity across providers", indent: true },
        { text: "Built by engineers who have shipped 70+ AI agents in regulated industries", indent: true }
    ];

    return (
        <PageTransition>
            <main className="bg-white dark:bg-[#0B0C0E] min-h-screen text-black dark:text-white font-sans w-full transition-colors duration-300">
                {/* Hero Section */}
                <section className="w-full px-4 md:px-6 lg:px-20">
                    <div className="flex flex-col lg:flex-row justify-between items-stretch 2xl-plus:max-w-9xl 2xl-plus:mx-auto">
                        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start lg:pr-12 py-16 lg:py-24">
                            <h3 className="text-xl md:text-2xl font-medium mb-4 text-black dark:text-white transition-colors">
                                Ziplo Services
                            </h3>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-8 leading-[1.1] text-black dark:text-white transition-colors">
                                AI Agent Testing & <br className="hidden lg:block" /> Quality Assurance
                            </h1>
                            <div className="space-y-6 text-gray-600 dark:text-gray-300 text-sm md:text-base mb-10 leading-relaxed font-light transition-colors">
                                <p>
                                    Ziplo helps engineering teams ship AI agents with confidence.
                                    Before your agent reaches production, Ziplo runs comprehensive
                                    security, quality, and reliability tests — surfacing prompt injections,
                                    guardrail failures, hallucinations, and tool errors so you can fix them
                                    before your users find them.
                                </p>
                                <p>
                                    Through an intelligent, automated testing framework, Ziplo enables teams
                                    to validate AI agents against real-world attack patterns, edge cases, and
                                    behavioral benchmarks — delivering detailed fix suggestions, not just reports.
                                </p>
                                <p>
                                    From security hardening to behavioral validation and LLM migration testing,
                                    Ziplo provides fast, actionable, and developer-ready AI agent quality assurance.
                                </p>
                            </div>
                            <button
                                onClick={() => navigate("/contactUs")}
                                className="w-60 text-white dark:text-black font-semibold py-3 px-8 rounded-full flex items-center justify-center transition-all hover:opacity-90 
                                    bg-gradient-to-r from-[#8B8B8B] to-[#1783F7] 
                                    dark:from-white dark:to-white dark:bg-white 
                                    hover:from-[#787878] hover:to-[#0653A7] 
                                    dark:hover:from-gray-200 dark:hover:to-gray-400"
                            >
                                Talk to our experts
                                <RoundedArrowRightIcon className="w-5 h-5 mx-1" />
                            </button>
                        </div>
                        <div className="w-full lg:w-1/2 mt-16 lg:mt-0 flex">
                            <img
                                src="assets/ziplo.svg"
                                alt="Ziplo Action Dashboard"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section className="w-full px-4 md:px-6 lg:px-20 py-20 bg-gray-50 dark:bg-[#121415] border-t border-gray-200 dark:border-[#1C1E20] transition-colors">
                    <div className="2xl-plus:max-w-9xl 2xl-plus:mx-auto w-full">
                        <div className="text-center mb-16 mx-auto">
                            <h4 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-2 font-light transition-colors">Our Ziplo Testing Services</h4>
                            <h2 className="text-4xl md:text-5xl font-semibold text-black dark:text-white transition-colors">Test. Detect. Fix. Ship.</h2>
                        </div>

                        <div className="flex flex-wrap justify-center gap-x-12 gap-y-16 items-start">
                            {testingServices.map((service, idx) => (
                                <div key={idx} className="flex flex-col w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(100%/3-2rem)]">
                                    <h3 className="text-2xl md:text-3xl font-medium text-black dark:text-white mb-2 transition-colors">{service.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-8 font-light text-base md:text-lg transition-colors">{service.subtitle}</p>
                                    <ul className="space-y-4">
                                        {service.items.map((item, i) => (
                                            <li key={i} className="flex items-start text-gray-500 dark:text-gray-400 text-sm md:text-base leading-relaxed transition-colors">
                                                <span className="text-gray-400 dark:text-gray-500 mr-3 mt-1 text-[10px] transition-colors">●</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Measurable Quality & Risk Reduction */}
                <section className="w-full px-4 md:px-6 lg:px-20 py-24 bg-white dark:bg-black text-center border-t border-gray-200 dark:border-[#1C1E20] transition-colors">
                    <div className="2xl-plus:max-w-9xl 2xl-plus:mx-auto w-full">
                        <h2 className="text-3xl md:text-5xl font-semibold text-black dark:text-white mb-20 mx-auto transition-colors">
                            Measurable Quality & Risk Reduction
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20 mx-auto">
                            {riskReductions.map((item, idx) => (
                                <div key={idx} className="flex flex-col items-center">
                                    <div className="w-[50px] h-[50px] flex items-center justify-center border border-gray-300 dark:border-gray-700/50 bg-gray-50 dark:bg-[#16181A] rounded-xl mb-6 text-black dark:text-white shadow-sm transition-colors">
                                        {item.icon}
                                    </div>
                                    <h4 className="text-lg md:text-xl font-medium text-black dark:text-white mb-3 transition-colors">{item.title}</h4>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base max-w-[280px] font-light leading-relaxed transition-colors">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* What Makes Ziplo Different */}
                <section className="w-full px-4 md:px-6 lg:px-20 py-24 bg-white dark:bg-[#0B0C0E] border-t border-gray-200 dark:border-[#1C1E20] transition-colors">
                    <div className="2xl-plus:max-w-9xl 2xl-plus:mx-auto w-full">
                        <div className="text-center mb-14 mx-auto">
                            <h4 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 font-light transition-colors">What Makes Ziplo Different</h4>
                            <h2 className="text-3xl md:text-5xl font-semibold text-black dark:text-white tracking-wide transition-colors">
                                Developer-First. Agent-Native. Fix-Oriented
                            </h2>
                        </div>

                        <div className="mx-auto flex flex-col items-center px-4 w-full">
                            <ul className="text-gray-600 dark:text-gray-300 md:text-lg space-y-5 text-left w-full max-w-[850px] transition-colors">
                                {differentiators.map((diff, idx) => (
                                    <li key={idx} className={`flex items-start ${diff.indent ? 'ml-6 md:ml-12' : ''}`}>
                                        <span className="text-gray-400 dark:text-gray-500 mr-4 mt-2 text-[10px] transition-colors">●</span>
                                        <span className="font-light leading-relaxed">{diff.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
        </PageTransition>
    );
}
