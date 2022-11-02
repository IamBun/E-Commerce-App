import store from "../../store/store";
import { dataActions } from "../../store/data";
import { useDispatch, useSelector } from "react-redux";
import classes from "./popup.module.css";
import { popupActions } from "../../store/popup";
import { useNavigate } from "react-router-dom";
import { editPrice } from "../../store/function";

const Popup = (props) => { //Popup hien ra khi click vao mot san pham trong Toptrending, nhan props obj chua thong tin san pham
  const index = useSelector((state) => state.popup.index); //lay ra index cua san pham
  const products = useSelector((state) => state.data.currentData[index]); //lay ra san pham cu the

  const dispatch = useDispatch();
  const navigate = useNavigate();

  window.addEventListener("keydown", function (e) { //click esc thi tat popup
    if (e.keyCode === 27) { //keycode nut esc === 27
      dispatch(popupActions.hidePopup()); // gui dispatch tat popup
    }
  });

  const closePopup = () => { //click vao dau x thi tat popup
    dispatch(popupActions.hidePopup());
  };

  const viewDetailHandler = (ele) => { //click vao viewDetail thi dieu huong den trang chi tiet
    // console.log(ele.$oid); // Lay ra id cua san pham
    navigate(`/detail/${ele.$oid}`);
  };

  return (
    <div className={classes.popup}>
      <div className={classes.popupImg}>
        <img src={products.img1}></img>
      </div>
      <div className={classes.popupDescription}>
        <h3 onClick={closePopup}>x</h3>
        <h2>{products.name}</h2>
        <h2>{editPrice(products.price)}</h2>
        <p>{products.short_desc}</p>
        {/* click button thi thuc hien ham viewDetail, voi ele lay ra la id cua products  */}
        <button
          onClick={() => {
            viewDetailHandler(products._id);
          }}
        >
          View detail
        </button>
      </div>
    </div>
  );
};

export default Popup;
