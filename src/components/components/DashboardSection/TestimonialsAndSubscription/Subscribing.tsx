"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { Toaster, toast } from "react-hot-toast";
import { motion } from "framer-motion";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

interface SubscribingProps {
  title: string;
  bg: string;
}

const Subscribing = ({ title, bg }: SubscribingProps) => {
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState("");
  const [wasSubmitted, setWasSubmitted] = React.useState(false);
  const [isEmailFocused, setIsEmailFocused] = React.useState(false);

  const validateEmail = (email: string) => {
    if (!EMAIL_REGEX.test(email)) {
      setError("Please enter a valid email address");
      return false;
    }
    setError("");
    return true;
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    if (isEmailFocused) {
      validateEmail(newEmail);
    }
  };

  const handleEmailFocus = () => {
    setIsEmailFocused(true);
  };

  const handleEmailBlur = () => {
    setIsEmailFocused(false);
    if (email) {
      validateEmail(email);
    }
  };

  const onSubmit = async () => {
    if (isEmailFocused) return;
    setWasSubmitted(true);
    setIsEmailFocused(true);
    if (!email) {
      setError("Email is required");
      return;
    }
    if (!validateEmail(email)) {
      return;
    }

    try {
      const response = await fetch("/api/sub-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        toast.success("Subscribed successfully!");
        setEmail("");
        setError(""); // Clear error on success
      } else {
        toast.error("Failed to subscribe");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong");
    } finally {
      setIsEmailFocused(false);
    }
  };

  return (
    <>
      <Toaster position="top-center" />
      {/* Main Wrapper with Fade-in & Slide-up Animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full flex justify-center p-7"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="w-[90%] h-[407px] flex flex-col items-center justify-end pb-14 bg-cover bg-center rounded-[40px]"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/dpaigt2bx/image/upload/v1738233979/photorealistic-lohri-festival-celebration-with-offerings-candle_ko7ebb.jpg')`,
          }}
        >
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-white text-[50px] font-david-libre font-bold mb-6"
          >
            {title}
          </motion.h1>

          {/* Form Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col w-full max-w-md"
          >
            <div className="flex flex-col sm:flex-row items-center gap-4 bg-white rounded-xl shadow-md px-4 py-2">
              {/* Input with Focus Animation */}
              <motion.div
                initial={{ scale: 1 }}
                whileFocus={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="flex-1 w-full"
              >
                <Input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  onFocus={handleEmailFocus}
                  onBlur={handleEmailBlur}
                  placeholder="Enter your email"
                  className={`border-none focus:ring-0 focus:outline-none ${
                    error ? "border-red-500" : ""
                  }`}
                  aria-invalid={!!error}
                  aria-describedby={error ? "email-error" : undefined}
                />
              </motion.div>

              {/* Button with Hover & Press Animation */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  onClick={onSubmit}
                  className="bg-yellow-500 text-white hover:bg-yellow-600 rounded-xl px-6 py-2"
                >
                  Subscribe
                </Button>
              </motion.div>
            </div>

            {/* Error Message with Fade-in Animation */}
            {wasSubmitted && error && (
              <motion.span
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                id="email-error"
                className="text-red-500 text-sm mt-1 bg-white/80 px-2 py-1 rounded"
              >
                {error}
              </motion.span>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Subscribing;
