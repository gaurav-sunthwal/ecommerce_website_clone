import { Link } from "react-router-dom";
import "../Styling/Navbar.css";
import { LuSearch } from "react-icons/lu";
import { BsHandbag } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [inputFormType, setinputFormType] = useState(true);
  const [inputValue, setInputValue] = useState(true);

  function toggleItsVisiblity() {
    setIsVisible(!isVisible);
  }
  const handleInputChange = (event) => {
    // Update the state with the new input value
    setInputValue(event.target.value);
  };
  function submitForm() {
//    alert("Welcome Back!")
   alert(`Input value is: ${inputValue}`);
  }
  function inputType() {
    setinputFormType(!inputFormType);
  }
  return (
    <>
      <nav>
        <div className="Left">
          <Link to={"/"}>
            <h1 className="logo">Go Crazy</h1>
          </Link>
        </div>
        <div className="Mid">
          <ul>
            <li className="manu">
              <Link to={"/Products"}>Products</Link>
            </li>
            <li className="manu">
              <Link to={"/Support"}>Support</Link>
            </li>
            <li className="manu">
              <Link to={"/giftstore"}>Gift Store</Link>
            </li>
            <li className="manu">
              <Link to={"/Blocks"}>Blocks</Link>
            </li>
          </ul>
        </div>
        <div className="Right">
          <div className="iconsManu">
            <div className="search">
              <LuSearch />
            </div>
            <div className="bag">
              <BsHandbag />
            </div>
            <div className="userLogin" onClick={toggleItsVisiblity}>
              <FaRegUser />
            </div>
          </div>
        </div>
      </nav>
      <div
        className="SideBar"
        style={{ display: isVisible ? "block" : "none" }}
      >
        <div
          className="SideBar userLogin"
          style={{ display: isVisible ? "block" : "none" }}
        >
          <div className="close" onClick={toggleItsVisiblity}>
            <IoCloseSharp />
          </div>
          <hr />
          <div className="info">
            <div className="tital">
              <h2>
                WelCome To <span className="logo">CRAZY</span>
              </h2>
            </div>
            <div className="loginForm">
              <div className="typeOfButton">
                <button className="loginBtn phoneBtn" onClick={inputType}>
                  Phone Number
                </button>
                <button className="loginBtn emailBtn" onClick={inputType}>
                  Email Id
                </button>
              </div>
              <div
                className="mobileNumber"
                style={{ display: inputFormType ? "none" : "block" }}
              >
                <div className="phoneNumberInput inputSec">
                  <p htmlFor="loginInput" className="inputName">
                    Phone Number
                  </p>
                  <input
                    type="tel"
                    className="loginInput"
                    placeholder="Phone Number"
                    onChange={handleInputChange} 
                    value={inputValue}
                  />
                  <button className="send">Send OTP</button>
                </div>
              </div>
              <div
                className="emailId"
                style={{ display: inputFormType ? "block" : "none" }}
              >
                <p htmlFor="loginInput" className="inputName">
                  Email Id & Password
                </p>
                <form>
                  <input
                    type="email"
                    className="loginInput"
                    placeholder="Enter Email ID"
                  />
                  <input
                    type="password"
                    className="loginInput"
                    placeholder="Enter Password"
                  />
                    <button className="send" type="submit" onClick={submitForm}>Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

function SideBar(props) {
  return <></>;
}
