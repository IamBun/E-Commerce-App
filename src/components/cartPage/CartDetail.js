import classes from "./cartDetail.module.css";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { BiSubdirectoryLeft } from "react-icons/bi";
import { BiSubdirectoryRight } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const CartDetail = () => {
  const cart = useSelector((state) => state.cart); // lay cart tu store
  const navigate = useNavigate();

  const backToShop = () => {
    //click continue thi quay lai shopping tiep
    navigate("/shop");
  };

  const goCheckOutPage = () => {
    //di tinh tien
    navigate("/checkout");
  };

  return (
    <>
      {/* Tieu de, chia grid 6 cot  */}
      <div className={classes.title}>
        <h3>IMAGE</h3>
        <h3>PRODUCTS</h3>
        <h3>PRICE</h3>
        <h3>QUANTITY</h3>
        <h3>TOTAL</h3>
        <h3>REMOVE</h3>
      </div>
      {/* Voi moi san pham trong gio hang thi in ra thong tin chi tiet, chia grid 6 cot nhu o tren de khop nhau  */}
      <div className={classes.detail}>
        {cart.map((ele, index) => (
          <CartItem key={index} item={ele} /> //nhan obj item la thong tin chi tiet san pham
        ))}
      </div>
      {/* Button chuyen trang  */}
      <div className={classes.buttonTransPage}>
        {/* Quay lai shop  */}
        <div className={classes.buttonLeft} onClick={backToShop}>
          <button>
            <BiSubdirectoryLeft />
            Continue Shopping
          </button>
        </div>
        {/* Di tinh tien  */}
        <div className={classes.buttonRight} onClick={goCheckOutPage}>
          <button>
            Proceed to checkout
            <BiSubdirectoryRight />
          </button>
        </div>
      </div>
    </>
  );
};
export default CartDetail;
