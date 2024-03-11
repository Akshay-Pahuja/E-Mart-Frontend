import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";

const RefundPolicy = () => {
  return (
    <>
      <Meta title={"Refund Policy"} />
      <BreadCrumb title="Refund Policy" />
      <Container class1="policy-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="policy">
              <h2>Refund Policy</h2>
              <p>
                Thank you for shopping at BetterMart. We value your satisfaction and offer a straightforward refund policy to ensure a positive shopping experience. Please read the following terms and conditions regarding refunds and returns:
              </p>
              <h3>Refund Eligibility</h3>
              <p>
                To be eligible for a refund, you must meet the following criteria:
              </p>
              <ul>
                <li>The product must be in its original condition.</li>
                <li>The product must be unused, undamaged, and in its original packaging.</li>
                <li>You must initiate the refund process within [number of days] days of receiving the product.</li>
                <li>A proof of purchase or order number is required.</li>
              </ul>
              <h3>Refund Process</h3>
              <p>
                If you meet the refund eligibility criteria, please follow these steps to initiate a refund:
              </p>
              <ol>
                <li>Contact our customer support team at [email/phone number] within [number of days] days of receiving the product.</li>
                <li>Provide the necessary information, including your order number and reason for the refund request.</li>
                <li>Our customer support representative will guide you through the return process and provide you with the return address.</li>
                <li>Ship the product back to us in its original packaging, including all accessories and components.</li>
                <li>Once we receive the returned product and verify its condition, we will process the refund.</li>
                <li>The refund will be issued to the original payment method used for the purchase.</li>
              </ol>
              <h3>Non-Refundable Items</h3>
              <p>
                Certain items are exempt from our refund policy. These include:
              </p>
              <ul>
                <li>Perishable goods such as food, flowers, or magazines.</li>
                <li>Gift cards and downloadable software products.</li>
                <li>Personalized or custom-made products.</li>
                <li>Intimate or sanitary goods, such as undergarments or beauty products.</li>
              </ul>
              <h3>Contact Us</h3>
              <p>
                If you have any questions or concerns about our refund policy, please contact our customer support team at [email/phone number]. We are here to assist you and ensure your satisfaction.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default RefundPolicy;
