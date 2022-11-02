import img from "../SRCIMG/banner1.jpg";
import classes from "./checkOut.module.css";
import { useSelector } from "react-redux";
import { editPrice, TotalPrice } from "../../store/function";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { billActions } from "../../store/bill";
import { useNavigate } from "react-router-dom";
import { cartActions } from "../../store/cartStore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CheckOut = () => {
  const cart = useSelector((state) => state.cart); //lay data tu cart
  const isUser = useSelector((state) => state.currentUser.email);
  const fullnameInputRef = useRef();
  const emailInputRef = useRef();
  const phoneInputRef = useRef();
  const addressInputRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitBillingFormHandler = (e) => {
    e.preventDefault();
    const enteredFullnameInputRef = fullnameInputRef.current.value;
    const enteredEmailInputRef = emailInputRef.current.value;
    const enteredPhoneInputRef = phoneInputRef.current.value;
    const enteredAddressInputRef = addressInputRef.current.value;

    const billInfor = {
      //tao bien de luu vao store
      name: enteredFullnameInputRef,
      email: enteredEmailInputRef,
      phone: enteredPhoneInputRef,
      address: enteredAddressInputRef,
      orderNumber: 0,
    };

    dispatch(billActions.getInfo(billInfor)); // luu bill vao store
    // navigate("/"); //chuyen ve home
    toast.success("Thank for your order ! We will contact you soon !", {
      //thong bao
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setTimeout(() => {
      dispatch(cartActions.logoutCart()); //xoa cart
      navigate("/");
    }, 5000);
  };

  return (
    //gom banner o tren, bill o ben trai, detail total ben phai
    <div className={classes.checkOut}>
      <div className={classes.checkOutBannerImg}>
        <img src={img} />
        <div className={classes.bannerDescription}>
          <h1>Checkout Page</h1>
          <h3>Last Chance! Free shipping on all orders ends today ! </h3>
        </div>
      </div>
      {/* section chua order information  */}
      <div className={classes.checkOutSection}>
        {/* thong tin khach hang o ben trai  */}
        {isUser &&
          cart.length > 0 && ( //neu khach hang da dang nhap va co gio hang thi cho checkout
            <div className={classes.customerInformation}>
              <h2>BILLING DETAIL</h2>
              <form onSubmit={submitBillingFormHandler}>
                <div>
                  <label>FULLNAME:</label>
                  <input
                    placeholder="Enter your fullname"
                    ref={fullnameInputRef}
                  ></input>
                </div>
                <div>
                  <label>EMAIL:</label>
                  <input
                    placeholder="Enter your email"
                    ref={emailInputRef}
                  ></input>
                </div>
                <div>
                  <label>PHONE NUMBER:</label>
                  <input
                    placeholder="Enter your phone number"
                    ref={phoneInputRef}
                  ></input>
                </div>
                <div>
                  <label>ADDRESS:</label>
                  <input
                    placeholder="Enter your address "
                    ref={addressInputRef}
                  ></input>
                </div>
                <button>Place Order</button>
              </form>
            </div>
          )}
        {/* thong tin gio hang o ben phai  */}
        <div className={classes.checkOutCartInfo}>
          <h2>YOUR ORDER</h2>
          {cart.map((ele, index) => {
            return (
              <div key={index} className={classes.orderDetail}>
                <div>
                  <h3>{ele.name}</h3>
                </div>
                <div>
                  <span>{ele.quantity}</span>
                  <span> x </span>
                  <span>{editPrice(ele.price)} </span>
                </div>
              </div>
            );
          })}
          <div className={classes.total}>
            <h2>Total (VND):</h2>
            <h3>{editPrice(TotalPrice(cart).toString())} </h3>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default CheckOut;
