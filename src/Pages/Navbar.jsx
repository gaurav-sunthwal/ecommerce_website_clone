import { Link } from "react-router-dom";
import "../Styling/Navbar.css";
import { LuSearch } from "react-icons/lu";
import { BsHandbag } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [emailinputFormType, setemailinputFormType] = useState(true);
  const [passwordinputFormType, setpasswordinputFormType] = useState(true);
  const [inputValue, setInputValue] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  function toggleItsVisiblity() {
    setIsVisible(!isVisible);
  }
  const handleEmailInputChange = (event) => {
    // Update the state with the new input value
    setemailinputFormType(event.target.value);
  };
  const handlePasswordInputChange = (event) => {
    // Update the state with the new input value
    setpasswordinputFormType(event.target.value);
  };
  const handleClick = (event) => {
    if(emailinputFormType === "garavsunthwal22005@gmail.com" && passwordinputFormType === "gaurav22005"){
      alert("Congratulations")
    }
    else{
      alert("No ")
      emailinputFormType("")
      passwordinputFormType("")
    }
    // Update the state with the new input value
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
            <div className="bag" ref={btnRef} onClick={onOpen}>
              <BsHandbag
                ref={btnRef}
                background={"transparent"}
                color={"white"}
                onClick={onOpen}
              />
              <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
              >
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerCloseButton />
                  <DrawerHeader>Create your account</DrawerHeader>

                  <DrawerBody>
                    <Input placeholder="Type here..." />
                  </DrawerBody>

                  <DrawerFooter>
                    <Button variant="outline" mr={3} onClick={onClose}>
                      Cancel
                    </Button>
                    <Button colorScheme="blue">Save</Button>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </div>
            <div className="userLogin">
              <FaRegUser
                ref={btnRef}
                background={"transparent"}
                color={"white"}
                onClick={onOpen}
              />
              <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
              >
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerCloseButton />
                  <DrawerHeader>Create your account</DrawerHeader>

                  <DrawerBody>
                    <form>
                      <Input onChange={handleEmailInputChange} type="email" placeholder="Enter Email..." />
                      <Input onChange={handlePasswordInputChange} type="password" placeholder="Password" marginTop={"12px"} />
                      <Button type="submit" onClick={handleClick} colorScheme="blue" p={"12px"} marginTop={"12px"}>Submit</Button>
                    </form>
                  </DrawerBody>

                  <DrawerFooter>
                    <Button variant="outline" mr={3} onClick={onClose}>
                      Cancel
                    </Button>
                    <Button colorScheme="blue">Save</Button>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </div>
          </div>
        </div>
      </nav>
      <SideBar />
      <div
        className="SideBar"
        style={{ display: isVisible ? "block" : "none" }}
      ></div>
    </>
  );
}

export default Navbar;

function SideBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return <></>;
}
