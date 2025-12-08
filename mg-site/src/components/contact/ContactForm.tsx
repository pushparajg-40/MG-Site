import { useState } from "react";
import emailjs from "@emailjs/browser";

interface StatusMessage {
  type: "success" | "error" | null;
  text: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [status, setStatus] = useState<StatusMessage>({ type: null, text: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.message ||
      !formData.mobile
    ) {
      setStatus({
        type: "error",
        text: "Please fill in all required fields.",
      });
      return;
    }

    setIsLoading(true);

    try {
      emailjs.init("Cr4AdzrgWBrjzXPjH");

      await emailjs.send("service_kvvw26k", "template_vtyyphm", {
        from_name: formData.name,
        reply_to: formData.email,
        from_email: formData.email,
        mobile_number: formData.mobile,
        message: formData.message,
      });

      setStatus({
        type: "success",
        text: "Your message has been sent successfully! We will get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        mobile: "",
        message: "",
      });
    } catch (error) {
      console.log("Error in mail :", error);

      setStatus({
        type: "error",
        text: "Failed to send your message. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="lg:w-1/2">
      {status.type && (
        <div
          className={`mb-4 p-4 rounded-md ${
            status.type === "success"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {status.text}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="md:bg-white md:p-8 rounded-lg md:shadow-lg"
      >
        <div className="mb-4">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-[#D0D5DD] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4 relative">
          <img
            src="assets/mail.svg"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
            alt=""
          />
          <input
            type="email"
            placeholder="Your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full pl-10 p-3 border border-[#D0D5DD] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4 relative">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
            <select className="bg-transparent text-[#101828] text-sm outline-none pr-1">
              <option value="IN">IN</option>
            </select>
          </div>
          <input
            type="tel"
            placeholder="+91 9876543210"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full pl-20 p-3 border border-[#D0D5DD] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <textarea
            placeholder="How can we help you?"
            rows={4}
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-[#D0D5DD] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full text-center text-white font-semibold py-3 px-8 rounded-full flex justify-center items-center bg-gradient-to-r from-[#8B8B8B] to-[#1783F7] hover:from-[#787878] hover:to-[#0653A7] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Sending..." : "Submit"}
        </button>

        <p className="text-[#8F94A1] md:text-lg mt-4 text-center">
          By contacting us, you agree to our
          <a
            href="terms.html"
            className="text-[#202124] hover:underline font-bold"
          >
            {" "}
            Terms and condition
          </a>{" "}
          and
          <a
            href="privacy.html"
            className="text-[#202124] hover:underline font-bold"
          >
            {" "}
            Privacy Policy
          </a>
        </p>
      </form>
    </div>
  );
}
