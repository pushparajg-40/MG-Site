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
import ContactFormV2 from "./ContactFormV2";

interface StatusMessage {
  type: "success" | "error" | null;
  text: string;
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

export default function FooterContactForm() {
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

      googleFormData.append(GOOGLE_FORM_FIELD_IDS.name, formData.firstName);
      googleFormData.append(GOOGLE_FORM_FIELD_IDS.name, formData.lastName);
      googleFormData.append(GOOGLE_FORM_FIELD_IDS.email, formData.email);
      googleFormData.append(GOOGLE_FORM_FIELD_IDS.email, formData.companyName);
      googleFormData.append(GOOGLE_FORM_FIELD_IDS.email, formData.jobTitle);
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
        from_name: `${formData.firstName} ${formData.lastName}`,
        reply_to: formData.email,
        from_email: formData.email,
        mobile_number: formData.mobile,
        message: formData.message,
        from_page: pageName,
        // company_name: formData.email,
        // job_title: formData.email,
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
    <div className="px-14 py-6 bg-[#000]">
      <div className="lg:relative w-full">
        {/* Background Image */}
        <img
          src="/assets/contact-form-footer-bg.jpg"
          alt="Contact background"
          className="sm:hidden md:block absolute inset-0 w-full h-full object-cover opacity-90"
        />

        {/* Form Container */}
        <div className="lg:relative lg:bottom-16 z-10 flex justify-end items-center lg:pr-12">
          <ContactFormV2 formSize={5} />
        </div>
      </div>
    </div>
  );
}
