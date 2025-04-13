import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@heroui/input";
import { Textarea } from "@heroui/input";
import { Button } from "@heroui/button";
import Spline from "@splinetool/react-spline";
import {BsSendFill} from "react-icons/bs"

export default function ContactForm() {
  interface ContactForm {
    fullName: string;
    email: string;
    phone: string;
    message: string;
  }

  type FormErrors = Partial<Record<keyof ContactForm, string>>;
  const [form, setForm] = useState<ContactForm>({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors: Partial<ContactForm> = {};

    if (!form.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    validate();
    const newErrors: FormErrors = {};

    if (!form.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    if (!form.message.trim()) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      // ✅ Submit logic here
      console.log("Form submitted:", form);
    }
  };

  return (
    <div className="relative overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-12   rounded-2xl mt-12">
      <motion.form
        animate={{ opacity: 1, x: 0 }}
        className="space-y-5 lg:w-[500px] z-40"
        initial={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.6 }}
        onSubmit={handleSubmit}
      >
        <div className="w-full">
          <Input
            isRequired
            className={` ${errors.fullName ? "border-red-500" : ""}`}
            color="warning"
            defaultValue="John Doe"
            label="Full Name"
            name="fullName"
            type="text"
            value={form.fullName}
            onChange={handleChange}
          />
          {errors.fullName && (
            <p className="text-sm text-red-600 mt-1">{errors.fullName}</p>
          )}
        </div>

        <div className="w-full">
          <Input
            isRequired
            className={` ${errors.email ? "border-red-500" : ""}`}
            color="warning"
            defaultValue="junior@heroui.com"
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="text-sm text-red-600 mt-1">{errors.email}</p>
          )}
        </div>
        <div className="w-full">
          <Input
            color="warning"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
          />
        </div>
        <div className="w-full">
          <Textarea
            isRequired
            className={` ${errors.message ? "border-red-500" : ""}`}
            color="warning"
            label="Message"
            labelPlacement="outside"
            placeholder="Enter your message"
            value={form.message}
            onChange={handleChange}
          />
          {errors.message && (
            <p className="text-sm text-red-600 mt-1">{errors.message}</p>
          )}
        </div>

        <Button
          className="w-full h-12 md:h-20 text-gray-900 font-bold text-lg bg-warning flex items-center justify-center font-oswald"
          type="submit"
        >
          Send Message <BsSendFill/>
        </Button>
      </motion.form>

      <motion.div
        animate={{ opacity: 1, x: 0 }}
        className="flex flex-col gap-6 items-center justify-center"
        initial={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.6 }}
      >
        {/* Replace the below with your actual 3D model */}
        <div className="hidden md:block w-full h-[120vh] -top-36 lg:-top-40 lg:left-48 absolute object-contain">
          <Spline scene="https://prod.spline.design/pXOFah9ki2nYi0Sn/scene.splinecode" />
        </div>
      </motion.div>
    </div>
  );
}
