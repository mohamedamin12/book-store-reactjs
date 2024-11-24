import "./services.css";
import { BsTruck, BsGift, BsArrowClockwise, BsSend } from "react-icons/bs";
const Services = () => {
  return (
    <div className="services">
      <div className="service-item">
        <BsTruck className="services-icon" />
        <b>Free Shipping</b>
      </div>
      <div className="service-item">
        <BsGift className="services-icon" />
        <b>Gift Card</b>
      </div>
      <div className="service-item">
        <BsArrowClockwise className="services-icon" />
        <b>7 Days Return</b>
      </div>
      <div className="service-item">
        <BsSend className="services-icon" />
        <b>Contact Us</b>
      </div>
    </div>
  );
};

export default Services;
