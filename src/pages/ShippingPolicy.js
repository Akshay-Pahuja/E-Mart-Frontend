import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import Meta from "../components/Meta";

const ShippingPolicy = () => {
  return (
    <>
      <Meta title={"Shipping Policy"} />
      <BreadCrumb title="Shipping Policy" />
      <Container class1="policy-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="policy">
              <h2>Shipping Policy</h2>
              <p>
                At BetterMart, we strive to provide a seamless and efficient shipping experience for our customers. This Shipping Policy outlines important information about our shipping process, delivery times, and related details.
              </p>
              <h3>Order Processing</h3>
              <p>
                We process orders within [number of days] business days after receiving them. Orders placed on weekends or holidays will be processed on the following business day. Once your order is processed, you will receive a confirmation email with tracking information.
              </p>
              <h3>Shipping Methods and Delivery Times</h3>
              <p>
                We offer several shipping methods to cater to your needs. The delivery times may vary depending on your location and the shipping method you choose. Please refer to the estimated delivery times below as a general guideline:
              </p>
              <ul>
                <li>Standard Shipping: [number of days] to [number of days] business days</li>
                <li>Express Shipping: [number of days] to [number of days] business days</li>
                <li>International Shipping: [number of days] to [number of days] business days (may vary based on location and customs clearance)</li>
              </ul>
              <p>
                Please note that these delivery times are estimates, and we cannot guarantee delivery on specific dates due to factors beyond our control, such as weather conditions or carrier delays.
              </p>
              <h3>Shipping Rates</h3>
              <p>
                Shipping rates are calculated based on the weight, size, and destination of the package. The shipping cost will be displayed during the checkout process. We may offer free shipping promotions for specific products or order values. Any applicable taxes or customs duties are the responsibility of the customer.
              </p>
              <h3>Order Tracking</h3>
              <p>
                Once your order is shipped, you will receive a tracking number via email. You can use this tracking number to monitor the progress of your shipment on our website or the carrier's website.
              </p>
              <h3>Shipping Restrictions</h3>
              <p>
                Some products may have shipping restrictions due to legal or logistical limitations. These restrictions may include specific countries, regions, or shipping methods. If any restrictions apply to your order, we will notify you during the checkout process.
              </p>
              <h3>Contact Us</h3>
              <p>
                If you have any questions or concerns about our shipping policy, please contact our customer support team at [email/phone number]. We are here to assist you and provide the necessary information to ensure a smooth shipping experience.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ShippingPolicy;
