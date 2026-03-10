import { useState } from "react";
import emailjs from "@emailjs/browser";
import { GOOGLE_FORM_FIELD_IDS } from "../constants";
import { useLocationPath } from "../hooks/useLocationPath";
import { usePhoneNumberDetails } from "../hooks/usePhoneNumberDetails";
import PhoneInput, {
  isValidPhoneNumber,
  parsePhoneNumber,
  type Value,
} from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { cn } from "../lib/utils";
import RoundedArrowRightIcon from "./ui/RoundedArrowRightIcon";

interface StatusMessage {
  type: "success" | "error" | null;
  text: string;
}

export interface ContactFormV2Props {
  bordered?: boolean;
  showContactAgreeText?: boolean;
  ctaFull?: boolean;
  isFooterFormSize?: boolean;
}

const defaultFormState = {
  firstName: "",
  lastName: "",
  email: "",
  companyName: "",
  jobTitle: "",
  mobile: "",
  message: "",
};

export default function ContactFormV2({
  bordered = false,
  showContactAgreeText = false,
  ctaFull = false,
  isFooterFormSize,
}: ContactFormV2Props) {
  const { pageName } = useLocationPath();
  const { getNumberDetails } = usePhoneNumberDetails();

  const [formData, setFormData] = useState(defaultFormState);
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

      googleFormData.append(
        GOOGLE_FORM_FIELD_IDS.firstName,
        formData.firstName,
      );
      googleFormData.append(GOOGLE_FORM_FIELD_IDS.lastName, formData.lastName);
      googleFormData.append(GOOGLE_FORM_FIELD_IDS.email, formData.email);
      googleFormData.append(
        GOOGLE_FORM_FIELD_IDS.companyName,
        formData.companyName,
      );
      googleFormData.append(GOOGLE_FORM_FIELD_IDS.jobTitle, formData.jobTitle);
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

      const emailPayload = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email_address: formData.email,
        company_name: formData.companyName,
        job_title: formData.jobTitle,
        phone_number: formData.mobile,
        message: formData.message,
        from_page: pageName,
      };

      await emailjs.send("service_hy9quj8", "template_t68k20j", emailPayload);

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
      setFormData(defaultFormState);
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
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.companyName ||
      !formData.jobTitle ||
      !formData.email ||
      !formData.message
    ) {
      setStatus({ type: "error", text: "Please fill in all required fields." });
      return false;
    }

    if (!validatePhone()) return false;

    return true;
  };

  return (
    <div
      className={cn(
        "bg-white dark:bg-[#1C1C1C] rounded-xl p-4 sm:p-6 space-y-6 w-full",
        bordered ? "border border-[#d5d8dc] dark:border-[#2A2A2A]" : "border border-[#E4E7EC] dark:border-[#2A2A2A]",
        isFooterFormSize ? `lg:w-5/12 ml-auto` : "lg:w-6/12 mx-auto",
      )}
    >
      <h2 className="text-[#667085] dark:text-white font-medium text-sm md:text-base lg:text-lg leading-relaxed">
        Ready to take your business to the next level? Contact us today and see
        how we can help.
      </h2>
      {status.type && (
        <div
          className={`p-4 rounded-md ${
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
        className="rounded-lg grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4"
      >
        <div className="flex flex-col gap-2">
          <label
            htmlFor="firstName"
            className="text-sm font-medium text-[#667085] dark:text-white"
          >
            First Name
          </label>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-4 py-2.5 text-sm md:text-base border border-[#D0D5DD] rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="lastName"
            className="text-sm font-medium text-[#667085] dark:text-white"
          >
            Last Name
          </label>
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full p-2 border border-[#D0D5DD] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-[#667085] dark:text-white">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Email ID"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-[#D0D5DD] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="companyName"
            className="text-sm font-medium text-[#667085] dark:text-white"
          >
            Company Name
          </label>
          <input
            type="text"
            placeholder="Your Company"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full p-2 border border-[#D0D5DD] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="jobTitle"
            className="text-sm font-medium text-[#667085] dark:text-white"
          >
            Job Title
          </label>
          <input
            type="text"
            placeholder="Your Designation"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            className="w-full p-2 border border-[#D0D5DD] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="mobile" className="text-sm font-medium text-[#667085] dark:text-white">
            Phone Number
          </label>
          <PhoneInput
            international
            defaultCountry="IN"
            value={formData.mobile}
            onChange={handlePhoneChange}
            onBlur={validatePhone}
            limitMaxLength
            countryCallingCodeEditable={false}
            required
            className="phone-input text-[#667085] dark:text-white w-full rounded-lg border border-[#D0D5DD] px-3 py-2.5 text-sm md:text-base bg-white"
            placeholder="Enter mobile number"
          />
          {phoneError && (
            <p className="mt-1 text-red-400 text-sm">{phoneError}</p>
          )}
        </div>

        <div className="col-span-2 flex flex-col gap-2">
          <label
            htmlFor="message"
            className="text-sm font-medium text-[#667085] dark:text-white"
          >
            Message
          </label>
          <textarea
            placeholder="Leave us a message..."
            rows={4}
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2.5 text-sm md:text-base border border-[#D0D5DD] rounded-lg bg-white resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          ></textarea>
        </div>

        {showContactAgreeText ? (
          <div className="col-span-2 text-[#667085] dark:text-white text-[10px] text-center">
            By contacting us, you agree to our{" "}
            <a href="/terms" className="text-gray-100">
              {" "}
              Terms and condition
            </a>{" "}
            and{" "}
            <a href="/privacy" className="text-gray-100">
              Privacy Policy
            </a>
          </div>
        ) : null}
        <div className={cn(ctaFull ? "col-span-2" : "md:col-start-2")}>
          <button
            type="submit"
            disabled={isLoading}
            className={cn(
              "text-center text-gray-800 font-semibold py-3 md:py-3.5 px-6 rounded-full w-full bg-white hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed border border-[#d5d8dc]",
              ctaFull
                ? "flex justify-center items-center gap-2"
                : "flex justify-between items-center gap-1",
            )}
          >
            {isLoading ? "Sending..." : "Send Message"}
            <RoundedArrowRightIcon className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
}
