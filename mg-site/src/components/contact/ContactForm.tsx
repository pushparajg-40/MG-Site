import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import { GOOGLE_FORM_FIELD_IDS } from "../../constants";
import { useLocationPath } from "../../hooks/useLocationPath";
import { usePhoneNumberDetails } from "../../hooks/usePhoneNumberDetails";
import PhoneInput, {
  isValidPhoneNumber,
  parsePhoneNumber,
  type Value,
} from "react-phone-number-input";
import "react-phone-number-input/style.css";

interface StatusMessage {
  type: "success" | "error" | null;
  text: string;
}

export default function ContactForm() {
  const { pageName } = useLocationPath();
  const { getNumberDetails } = usePhoneNumberDetails();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [phoneError, setPhoneError] = useState<string | null>(null);

  const [status, setStatus] = useState<StatusMessage>({ type: null, text: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleGoogleFormSubmit = async () => {
    try {
      const googleFormApiUrl = import.meta.env.VITE_GOOGLE_FORM_API_URL;

      const { countryName } = getNumberDetails(formData.mobile);
      const timstamp = new Date()?.toLocaleString();
      const googleFormData = new FormData();
      
      googleFormData.append(GOOGLE_FORM_FIELD_IDS.name, formData.name);
      googleFormData.append(GOOGLE_FORM_FIELD_IDS.email, formData.email);
      googleFormData.append(GOOGLE_FORM_FIELD_IDS.mobile, formData.mobile);
      googleFormData.append(GOOGLE_FORM_FIELD_IDS.message, formData.message);
      googleFormData.append(GOOGLE_FORM_FIELD_IDS.timestamp, timstamp);
      googleFormData.append(GOOGLE_FORM_FIELD_IDS.page, pageName);
      googleFormData.append(GOOGLE_FORM_FIELD_IDS.country, countryName!);
      
      // debug console
      // console.log(">>>",formData, ">>>",countryName,">>>", googleFormData,">>>", googleFormApiUrl);

      await fetch(googleFormApiUrl, {
        method: "POST",
        body: googleFormData,
        mode: "no-cors",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleSubmit = async () => {
    try {
      emailjs.init("YNl6-hgl7eAO4_9f4");

      await emailjs.send("service_hy9quj8", "template_t68k20j", {
        from_name: formData.name,
        reply_to: formData.email,
        from_email: formData.email,
        mobile_number: formData.mobile,
        message: formData.message,
        from_page: pageName,
      });

      setStatus({
        type: "success",
        text: "Your message has been sent successfully! We will get back to you soon.",
      });
    } catch (error) {
      console.log("Error in mail :", error);

      setStatus({
        type: "error",
        text: "Failed to send your message. Please try again later.",
      });
    }
  };

  const handleFormAction = async (
    event: React.SubmitEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    const isValid = validateForm();
    if (!isValid) return;

    setIsLoading(true);

    try {
      await handleSubmit();
      await handleGoogleFormSubmit();
    } catch (e) {
      console.error("submission failed");
      setStatus({ type: "error", text: "Please fill valid details" });
    } finally {
      setFormData({
        name: "",
        email: "",
        mobile: "",
        message: "",
      });
      setIsLoading(false);
    }
  };

  const handlePhoneChange = (value: Value) => {
    setFormData((prev) => {
      return {
        ...prev,
        mobile: value || "",
      };
    });

    if (phoneError) setPhoneError(null);
  };

  const validatePhone = () => {
    const value = formData.mobile;

    if (!value) {
      setPhoneError("Mobile number is required");
      return false;
    }

    if (!isValidPhoneNumber(value)) {
      setPhoneError("Enter a valid mobile number");
      return false;
    }

    const phone = parsePhoneNumber(value);

    if (!phone) {
      setPhoneError("Invalid phone number format");
      return false;
    }

    setPhoneError(null);
    return true;
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: "error", text: "Please fill in all required fields." });
      return false;
    }

    if (!validatePhone()) return false;

    return true;
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
        onSubmit={handleFormAction}
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
          {/* <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
            <select className="bg-transparent text-[#101828] text-sm outline-none pr-1">
              <option value="IN">IN</option>
            </select>
          </div> */}
          {/* <img
            src="assets/updated/phone.svg"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
            alt=""
          />
          <input
            type="tel"
            placeholder="Your mobile number"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full pl-10 p-3 border border-[#D0D5DD] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          /> */}

          <PhoneInput
            international
            defaultCountry="IN"
            value={formData.mobile}
            onChange={handlePhoneChange}
            onBlur={validatePhone}
            limitMaxLength
            countryCallingCodeEditable={false}
            required
            className="phone-input text-gray-400"
            placeholder="Enter mobile number"
            style={{
              border: "1px solid #dee2e6",
              borderRadius: "6px",
              paddingLeft: "8px",
            }}
          />
          {phoneError && <p className="mt-1 text-red-400 text-sm">{phoneError}</p>}
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

          <Link
            to="/terms"
            className="text-[#202124] hover:underline font-bold"
          >
            {"  "} Terms and condition {"  "}
          </Link>
          and
          <Link
            to="/privacy"
            className="text-[#202124] hover:underline font-bold"
          >
             {"  "} Privacy Policy {"  "}
          </Link>
        </p>
      </form>
    </div>
  );
}
