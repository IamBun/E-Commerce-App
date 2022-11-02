import classes from "./cartItem.module.css";
import { BiTrash } from "react-icons/bi";
import { editPrice } from "../../store/function";
import { TotalPriceObj } from "../../store/function";
import { BiCaretLeft } from "react-icons/bi";
import { BiCaretRight } from "react-icons/bi";
import { cartActions } from "../../store/cartStore";
import { useDispatch } from "react-redux";

const CartItem = (props) => {
  // nhan props la thong tin chi tiet san pham
  const dispatch = useDispatch();

  const plusHandler = () => {
    //them so luong 1
    const newQuantity = props.item.quantity + 1;
    dispatch(
      // gui dispatch de cap nhat so luong moi, dua theo id san pham
      cartActions.updateCart({ quantity: newQuantity, id: props.item.id })
    );
  };

  const subHandler = () => {
    //giam so luong 1
    const newQuantity = props.item.quantity - 1;
    dispatch(
      // gui dispatch de cap nhat so luong moi, dua theo id san pham
      cartActions.updateCart({ quantity: newQuantity, id: props.item.id })
    );
  };

  const deleteItemHandler = () => {
    //gui dispatch xoa san pham, dua theo id
    //xoa san pham( nhap vao id )
    dispatch(cartActions.deleteCart({ id: props.item.id }));
  };

  return (
    <div className={classes.item}>
      <img src={props.item.image}></img>
      <h3>{props.item.name}</h3>
      <h3>{editPrice(props.item.price)} VND</h3>
      <form>
        <BiCaretLeft onClick={subHandler} />
        <label>{props.item.quantity}</label>
        <BiCaretRight onClick={plusHandler} />
      </form>
      <h3>{editPrice(TotalPriceObj(props.item).toString())} VND</h3>
      <div className={classes.deleteIcon} onClick={deleteItemHandler}>
        <BiTrash />
      </div>
    </div>
  );
};

export default CartItem;
