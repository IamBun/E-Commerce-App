import img from "../SRCIMG/banner1.jpg";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { validateUserSignUp } from "../../store/function";
import classes from "./register.module.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  //lay du lieu tu input
  const fullnameInputRef = useRef();
  const passwordInputRef = useRef();
  const emailInputRef = useRef();
  const phoneInputRef = useRef();

  const navigate = useNavigate();

  const userArr = localStorage.getItem("userArr") //kiem tra co mang user o trong localstore chua ? Neu chua thi tao mang rong
    ? JSON.parse(localStorage.getItem("userArr"))
    : [];

  const registerHandler = (e) => {
    //ham click vao nut Reg
    e.preventDefault();

    //lay gia tri tu input
    const enteredFullnameInputRef = fullnameInputRef.current.value;
    const enteredEmailInputRef = emailInputRef.current.value;
    const enteredPasswordInputRef = passwordInputRef.current.value;
    const enteredPhoneInputRef = phoneInputRef.current.value;

    //tao obj luu cac gia tri lay dc
    const newUser = {
      fullname: enteredFullnameInputRef,
      email: enteredEmailInputRef,
      password: enteredPasswordInputRef,
      phone: enteredPhoneInputRef,
    };

    // neu validateSignUp newUser tra ve true thi luu vao local storage
    if (validateUserSignUp(newUser)) {
      userArr.push(newUser);
      localStorage.setItem("userArr", JSON.stringify(userArr));
      navigate("/login"); //chuyen qua trang login
    }
  };

  return (
    <div className={classes.register}>
      <img src={img}></img>
      <form onSubmit={registerHandler} className={classes.form}>
        <h1>Sign up</h1>
        <input
          placeholder="Full Name"
          type="text"
          ref={fullnameInputRef}
        ></input>
        <input placeholder="Email" type="email" ref={emailInputRef}></input>
        <input
          placeholder="Password"
          type="password"
          ref={passwordInputRef}
        ></input>
        <input placeholder="Phone" type="text" ref={phoneInputRef}></input>
        <button>SIGN UP</button>
        {/* Chuyen qua trang Login  */}
        <h3>
          Login ? <Link to="/login"> Click here</Link>
        </h3>
      </form>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Register;
