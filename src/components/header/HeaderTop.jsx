/* eslint-disable react/prop-types */
import { BsTelephoneFill , BsX , BsList } from "react-icons/bs";
import { Link } from "react-router-dom";

const HeaderTop = ({toggle , setToggle}) => {
  return (
    <div className="header-top">
    <div
      onClick={() => setToggle((prev) =>!prev)}
      className="header-top-menu"
    >
    {toggle? <BsX/> : <BsList/>}
    
    </div>
      <div className="header-top-phone">
        <BsTelephoneFill /> 123-456-789
      </div>
      <div className="header-top-text">Welcome To Online Book Store</div>
      <Link to="/login" className="header-top-link">
        Login
      </Link>
    </div>
  );
};

export default HeaderTop;
