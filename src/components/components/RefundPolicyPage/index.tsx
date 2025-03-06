import { Container } from "@/components/ui/container";
import Typography from "@/components/ui/typography";
import React from "react";
import ScrollUpButton from "../button/ScrollUpButton";

const RefundPolicyPage = () => {
  return (
    <>
      <Container className="md:px-12 px-4 mb-[300px] md:text-left text-justify ">
        <Typography className="text-end lg:text-[128px] md:text-[60px] sm:[35px] text-[25px] !font-bold font-adamina">
          Refund Policy
        </Typography>
        <div className="font-afacad font-normal  md:text-[24px] text-[18px]  tracking-wide text-black ">
          <span className="block  md:text-[30px] text-[22px]  font-bold  md:leading-[39px] leading-[30px]">
            Effective Date:01-06-2024
          </span>{" "}
          At BookMyPuja, we strive to ensure that your spiritual journey and
          experiences with us are fulfilling and satisfactory. However, we
          understand that circumstances may arise where a refund or cancellation
          may be necessary. Please read our Refund Policy carefully to
          understand your rights and our procedures regarding refunds and
          cancellations.
          <Typography className="font-bold  md:text-[30px] text-[22px]   md:mt-10 mt-5  md:mb-4 mb-2 ">
            Interpretation and Definitions
          </Typography>
          <ol className="list-decimal list-inside space-y-6 marker:font-bold  md:mb-10 mb-5 ">
            <li>
              <span className="font-bold">
                {" "}
                Refunds for Pujas Not Performed
              </span>
              <br />
              If a puja that you have booked through BookMyPuja is not performed
              due to unforeseen circumstances or issues on our end, you are
              eligible for a full refund. <br />
              This applies to:{" "}
              <ul className="list-disc list-inside indent-5">
                <li>Pujas that were scheduled but not conducted. </li>
                <li>
                  Pujas that were canceled by the temple or priest without
                  rescheduling options.
                </li>
                <li>
                  {" "}
                  Any technical or administrative issues leading to the
                  non-performance of the puja.
                </li>{" "}
              </ul>
            </li>
            <li>
              <span className="font-bold">Refunds for Failed Transactions</span>{" "}
              In case of any failed transactions during the booking or payment
              process, BookMyPuja will ensure that the amount is refunded to
              your original payment method. This includes:{" "}
              <ul className="list-disc list-inside indent-5">
                <li>
                  Failed or declined transactions due to technical errors.
                </li>{" "}
                <li>
                  {" "}
                  Duplicate transactions. Unauthorized or incorrect charges.
                </li>
              </ul>{" "}
            </li>
            <li>
              <span className="font-bold">Processing Refunds</span> Once your
              refund request is approved, we will initiate the refund process.
              The timeframe for processing the refund and crediting the amount
              to your bank account or payment method is typically:{" "}
              <ul className="list-disc list-inside indent-5">
                <li>
                  {" "}
                  5-7 working days for payments made via credit card, debit
                  card, or UPI.{" "}
                </li>
                <li>
                  {" "}
                  10-15 working days for payments made via bank transfers or
                  other payment methods, depending on your bank’s processing
                  times.
                </li>{" "}
                Please note that the exact duration may vary based on your bank
                or payment provider.
              </ul>{" "}
            </li>
            <li>
              <span className="font-bold">How to Request a Refund </span>
              <br />
              To request a refund, please follow these steps:{" "}
              <ol className="list-decimal list-inside indent-5 marker:font-normal">
                <li>
                  Contact Us: Reach out to our customer support team via
                  WhatsApp or email at support@bookmypuja.app with the details
                  of your booking and the reason for the refund request.{" "}
                </li>
                <li>
                  Provide Necessary Details: Include your booking reference
                  number, transaction ID, and any other relevant information to
                  help us process your request swiftly.
                </li>
                <li>
                  {" "}
                  Await Confirmation: Our team will review your request and
                  respond within 2-3 working days. You will be notified via
                  email or WhatsApp about the status of your refund.
                </li>
              </ol>{" "}
            </li>
            <li>
              <span className="font-bold"> Cancellation Policy </span>
              <br />
              <ul className="list-disc list-inside indent-5">
                <li>
                  Before Puja Performance: You can cancel your puja booking up
                  to 24 hours before the scheduled time for a full refund.
                  Cancellations made less than 24 hours before the puja will be
                  eligible for a partial refund, depending on the temple’s
                  policy.
                </li>
                <li>
                  {" "}
                  No Refunds for Completed Pujas: Once a puja has been
                  performed, no refunds will be issued, as the service has
                  already been rendered.
                </li>
              </ul>{" "}
            </li>
            <li>
              <span className="font-bold">Special Cases </span> <br />
              <ul className="list-disc list-inside indent-5">
                <li>
                  Force Majeure: In the event of natural disasters, pandemics,
                  or other force majeure events that prevent the puja from being
                  performed, we will offer a full refund or the option to
                  reschedule.
                </li>
                <li>
                  {" "}
                  Technical Issues: If a puja cannot be performed due to
                  technical issues on our platform, we will offer a full refund
                  or the option to reschedule.
                </li>
              </ul>{" "}
            </li>
            <li>
              <span className="font-bold">Contact Information </span>
              <br />
              For any questions or concerns regarding our Refund Policy, please
              contact us at:{" "}
              <ul className="list-disc list-inside indent-5">
                <li> Email: support@bookmypuja.app </li>
                <li>WhatsApp:+917012508438 </li>
                <li> Phone: +917012508438</li>
              </ul>
            </li>
            <li>
              <span className="font-bold">Changes to This Policy </span>
              <br />
              BookMyPuja reserves the right to modify or update this Refund
              Policy at any time. Any changes will be effective immediately upon
              posting on our website. We encourage you to review this policy
              periodically to stay informed of our refund practices.
            </li>
          </ol>
          We appreciate your understanding and cooperation. Thank you for
          choosing BookMyPuja for your spiritual needs and services.
        </div>
      </Container>
      <ScrollUpButton />
    </>
  );
};

export default RefundPolicyPage;
