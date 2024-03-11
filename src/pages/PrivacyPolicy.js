import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";

const PrivacyPolicy = () => {
  return (
    <>
      <Meta title={"Privacy Policy"} />
      <BreadCrumb title="Privacy Policy" />
      <Container class1="policy-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="policy">
              <h2>Privacy Policy</h2>
              <p>
                At BetterMart, we prioritize the privacy and security of our users' personal information. This Privacy Policy outlines how we collect, use, and protect the data you provide while using our e-commerce website.
              </p>
              <h3>Information Collection</h3>
              <p>
                We collect certain personal information when you register an account, place an order, or interact with our website. The information we collect may include your name, email address, shipping address, billing address, and payment details. We use secure methods to ensure the confidentiality of your payment information.
              </p>
              <h3>Information Usage</h3>
              <p>
                We use the collected information to process and fulfill your orders, communicate with you regarding your purchases, provide customer support, and improve our services. We may also use your information to personalize your experience on our website, send you promotional offers, and conduct market research.
              </p>
              <h3>Information Sharing</h3>
              <p>
                We may share your personal information with trusted third-party service providers who assist us in operating our website, conducting business, or providing services to you. These service providers have access to your information solely for performing tasks on our behalf and are obligated to keep it confidential.
              </p>
              <h3>Data Security</h3>
              <p>
                We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, please note that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
              <h3>Third-Party Links</h3>
              <p>
                Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or the content of those websites. We encourage you to review the privacy policies of any third-party websites you visit.
              </p>
              <h3>Updates to this Policy</h3>
              <p>
                We reserve the right to update or modify this Privacy Policy at any time. Any changes will be posted on this page, and the revised version will be effective as of the updated date mentioned at the top of the policy.
              </p>
              <p>
                By using BetterMart, you acknowledge that you have read and understood this Privacy Policy. If you have any questions or concerns about our privacy practices, please contact us.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default PrivacyPolicy;
