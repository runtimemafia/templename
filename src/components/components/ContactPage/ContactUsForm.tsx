"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Toaster, toast } from "react-hot-toast";

const ContactUsForm = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const formFields = [
    {
      id: "firstName",
      label: "First Name",
      placeholder: "First Enter Name",
    },
    {
      id: "lastName",
      label: "Last Name",
      placeholder: "Last Enter Name",
    },
    {
      id: "phone",
      label: "Phone Number",
      placeholder: "Phone Number",
    },
    {
      id: "email",
      label: "Email address",
      type: "email",
      placeholder: "Enter your email address",
    },
  ];

  const formSchema = z.object({
    firstName: z.string().min(2, { message: "First Name is required" }),
    phone: z
      .string()
      .regex(/^[0-9]{10}$/, { message: "Enter a valid 10-digit phone number" }),
    email: z.string().email({ message: "Invalid email address" }),
    comments: z
      .string()
      .min(5, { message: "Comment should be at least 5 characters" }),
    privacy: z.literal(true, {
      errorMap: () => ({ message: "You must agree to the privacy policy" }),
    }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: any) => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/add-to-sheet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Form submitted successfully!");

        reset(); // Reset form after successful submission
      } else {
        toast.error("Failed to submit form. Please Try Again");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong, Please try again later");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className=" lg:w-full md:w-[461px] sm:w-[342px]  py-10 ">
      <Toaster position="top-center" reverseOrder={false} />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
        <div className="flex flex-wrap lg:justify-between justify-center gap-8">
          {formFields.map((field) => (
            <div className="" key={field.id}>
              <Label
                htmlFor={field.id}
                className="mb-2 h-[27px] font-inter text-[20px] font-normal ml-5"
              >
                {field.label}
              </Label>
              <Input
                id={field.id}
                type={field.type || "text"}
                placeholder={field.placeholder}
                {...register(field.id)}
                className="lg:w-full md:w-[461px] sm:w-[342px] w-auto lg:min-w-auto min-w-[288px] lg:max-w-[288px] lg:h-[57px] md:h-[57px] sm:h-[47px] h-[47px] lg:!text-[16px] md:!text-[16px] sm:!text-[12px] !text-[12px] font-inter font-normal text-[rgba(92,101,116,1)] pl-4 rounded-[15px] border border-[rgba(92,101,116,1)] bg-white focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              {errors[field.id] && (
                <p className="text-red-500 text-sm mt-1">
                  {errors[field.id]?.message?.toString()}
                </p>
              )}
            </div>
          ))}
        </div>
        {/* Comments Field */}
        <div className="mb-8 lg:w-full  flex flex-col items-center  ">
          <div className="lg:w-full">
            {" "}
            <Label
              htmlFor="comments"
              className="min-w-[78px] h-[27px] mb-2 font-inter text-[20px] font-normal ml-5"
            >
              Comments
            </Label>
            <Textarea
              id="comments"
              placeholder="Enter your Query"
              {...register("comments")}
              className="lg:w-full md:w-[461px] sm:w-[342px] w-full min-w-[288px]  h-[156px]  lg:!text-[16px] md:!text-[16px] sm:!text-[12px] !text-[12px] font-inter font-normal text-[rgba(92,101,116,1)] pl-4 lg:rounded-[25px] md:rounded-[25px] sm:rounded-[15px] rounded-[15px] border border-[rgba(92,101,116,1)] bg-white  focus-visible:ring-0 focus-visible:ring-offset-0 "
            />{" "}
            {errors.comments && (
              <p className="text-red-500 text-sm mt-1">
                {errors.comments?.message?.toString()}
              </p>
            )}
          </div>
        </div>
        <div className="flex items-start text-justify lg:justify-normal md:justify-normal sm:justify-normal justify-center lg:mx-10 lg:w-full md:w-[461px] sm:w-[342px]   mb-10">
          <input
            type="checkbox"
            id="privacy"
            {...register("privacy")}
            className="p-2 mt-2 scale-150"
          />
          <Label
            htmlFor="privacy"
            className="lg:w-[409px] !leading-loose !tracking-wider  md:w-[461px] sm:w-[303px] w-[224px]  lg:h-[124px] md:h-[124px]  text-justify font-inter text-[16px] font-normal  ml-5 "
          >
            I agree to the privacy policy and consent to BookMyPuja using my
            contact details to share updates, spiritual tips, exclusive offers,
            and other relevant content.
          </Label>
        </div>{" "}
        {errors.privacy && (
          <p className="text-red-500 text-sm mt-1">
            {errors.privacy.message?.toString()}
          </p>
        )}
        {/* Submit Button */}
        <div className="flex justify-center ">
          <Button className=" bg-[rgba(101,85,143,1)] lg:w-[182px] md:w-[182px] sm:w-[135px] w-[135px]  lg:h-[67px] md:h-[67px] sm:h-[55px] h-[55px] hover:bg-purple-600 rounded-[100px] text-white text-[24px] font-medium ">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactUsForm;
