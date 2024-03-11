import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";

const TermsAndConditions = () => {
  return (
    <>
      <Meta title={"Terms and Conditions"} />
      <BreadCrumb title="Terms and Conditions" />
      <Container class1="policy-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="policy">
              <h2 className="policy-heading">Terms and Conditions</h2>
              <p className="policy-text">
                Welcome to BetterMart! These Terms and Conditions outline the rules and regulations for the use of our e-commerce website. By accessing or using our website, you agree to comply with these terms. Please read them carefully.
              </p>
              <h3 className="policy-subheading">Account Registration</h3>
              <p className="policy-text">
                To access certain features or place orders on our website, you may be required to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must provide accurate and complete information during the registration process and promptly update any changes.
              </p>
              <h3 className="policy-subheading">Intellectual Property</h3>
              <p className="policy-text">
                The content, logos, trademarks, and other intellectual property displayed on our website are owned by or licensed to BetterMart. You are prohibited from using, copying, reproducing, modifying, or distributing any of the intellectual property without our prior written consent.
              </p>
              <h3 className="policy-subheading">Product Information</h3>
              <p className="policy-text">
                We strive to provide accurate and up-to-date product information on our website. However, we do not warrant the accuracy, completeness, or reliability of any product descriptions, images, pricing, or other information. It is your responsibility to verify the details of the products before making a purchase.
              </p>
              <h3 className="policy-subheading">Prohibited Activities</h3>
              <p className="policy-text">
                When using our website, you must not engage in any activities that are unlawful, fraudulent, or harmful. This includes, but is not limited to:
              </p>
              <ul className="policy-list">
                <li>Impersonating another person or entity</li>
                <li>Uploading or transmitting viruses or any other malicious code</li>
                <li>Interfering with the security or integrity of our website</li>
                <li>Violating any applicable laws or regulations</li>
              </ul>
              <h3 className="policy-subheading">Limitation of Liability</h3>
              <p className="policy-text">
                BetterMart and its affiliates, directors, employees, or agents will not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your use or inability to use our website or products. This includes any damages resulting from errors, interruptions, or delays in the operation of our website.
              </p>
              <h3 className="policy-subheading">Indemnification</h3>
              <p className="policy-text">
                You agree to indemnify and hold BetterMart and its affiliates, directors, employees, or agents harmless from any claims, demands, or damages arising out of your use of our website, your violation of these Terms and Conditions, or your violation of any rights of a third party.
              </p>
              <h3 className="policy-subheading">Changes to the Terms and Conditions</h3>
              <p className="policy-text">
                We reserve the right to update or modify these Terms and Conditions at any time without prior notice. Any changes will be effective immediately upon posting on our website. It is your responsibility to review the Terms and Conditions periodically for any updates.
              </p>
              <h3 className="policy-subheading">Contact Us</h3>
              <p className="policy-text">
                If you have any questions or concerns about these Terms and Conditions, please contact us at [email/phone number]. We are here to assist you and provide further clarification.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default TermsAndConditions;
