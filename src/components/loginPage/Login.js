import img from "../SRCIMG/banner1.jpg";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { validateSignInUser } from "../../store/function";
import { useDispatch } from "react-redux";
import { currentUserActions } from "../../store/user";
import { useNavigate } from "react-router-dom";
import classes from "./login.module.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signInHandler = (e) => {
    //click login
    e.preventDefault();

    const enteredEmailInputRef = emailInputRef.current.value; //lay gia tri tu input
    const enteredPasswordInputRef = passwordInputRef.current.value;

    //tao obj user de luu
    const currentUser = {
      email: enteredEmailInputRef,
      password: enteredPasswordInputRef,
    };

    if (validateSignInUser(currentUser)) {
      // xu ly dang nhap thanh cong o day
      dispatch(currentUserActions.login(currentUser.email)); // gui dispatch de luu email user hien tai
      navigate("/", { replace: true }); //dang nhap thanh cong, chuyen trang home
    }
  };
  return (
    <div className={classes.login}>
      <img src={img}></img>
      <form onSubmit={signInHandler} className={classes.form}>
        <h1>Sign In</h1>
        <input type="text" placeholder="Email" ref={emailInputRef}></input>
        <input
          type="password"
          placeholder="Password"
          ref={passwordInputRef}
        ></input>
        <button>SIGN IN</button>
        {/* Goi y chua co tai khoan thi chuyen den trang dang ky  */}
        <h3>
          Create an account ? <Link to="/register"> Sign up</Link>
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

export default Login;
