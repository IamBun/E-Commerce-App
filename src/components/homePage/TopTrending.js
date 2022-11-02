import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { popupActions } from "../../store/popup";
import Popup from "./Popup";
import Products from "./Products";
import classes from "./topTrending.module.css";

const TopTrending = () => {
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.currentData); //lay data tu store
  const isShow = useSelector((state) => state.popup.isShow); //lay bien isShow tu store de hien thi tat mo popup, bien nay thay doi khi goi dispatch

  useEffect(() => {
    //lay du lieu data tu lan dau, du lieu thay doi thi kich hoat thay doi
    setProducts(data);
    dispatch(popupActions.hidePopup()); // luc moi chay thi tat popup
  }, [data]);

  const showPopupHandler = (index) => {
    //khi click vao anh thi show popup, nhan vao index
    dispatch(popupActions.showPopup(index)); //goi dispatch de show popup
  };

  return (
    <>
      <div className={classes.topTrending}>
        {/* Voi moi phan tu du lieu, in ra man hinh thong tin tom tat cua san pham do  */}
        {products.map((ele, index) => {
          return (
            <div key={index}>
              {index < 8 && ( //lay toi da 8 phan tu dau tien
                <Products
                  index={index} //truyen index vao de khi click thi lay ra theo index click
                  item={ele} //item la obj chua thong tin cu the cua san pham
                  click={showPopupHandler} //khi click vao thi showpopup
                ></Products>
              )}
            </div>
          );
        })}
      </div>
      {isShow && (
        // Show popup ra man hinh khi bien isShow true
        <div className={classes.popupBackground}>
          <Popup />
        </div>
      )}
    </>
  );
};

export default TopTrending;
