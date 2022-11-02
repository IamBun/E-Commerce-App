import classes from "./detailProduct.module.css";
import { useSelector } from "react-redux";
import Products from "../homePage/Products";
import { editPrice } from "../../store/function";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartStore";
import { useRef } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DetailProduct = (props) => {
  const data = useSelector((state) => state.data.currentData); //lay data tu store
  const userActive = useSelector((state) => state.currentUser.email); // lay user hien tai
  const cart = useSelector((state) => state.cart); //lay cart tu store

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const quantityInputRef = useRef();

  const product = data.find((ele) => ele._id.$oid === props.id); //tim ra product dua theo id san pham da duoc click lay tu component cha
  const related = data.filter(
    // loc cac san pham tuong tu category / khong lay san pham hien tai
    (ele) => ele.category === product.category && ele._id.$oid !== props.id
  );

  const showDetailHandler = (index) => {
    //show detail san pham lien quan
    const idDetail = related[index]._id.$oid;
    navigate(`/detail/${idDetail}`);
  };

  const backToShopHandler = (e) => {
    // button quay lai shop
    e.preventDefault();
    navigate("/shop");
  };

  //Xu ly du lieu add to cart
  const addToCartHandler = (e) => {
    e.preventDefault();
    const enteredQuantityInputRef = quantityInputRef.current.value;
    // tao bien cart Detail chua thong tin cart
    const cartDetail = {
      id: product._id.$oid,
      image: product.img1,
      name: product.name,
      price: product.price,
      quantity: Number(enteredQuantityInputRef),
    };
    if (!userActive) {
      //Neu chua dang nhap thi thong bao dang nhap
      toast.warn("Login to continue !");
      return false;
    }
    if (!!userActive) {
      // neu da dang nhap thi add to cart
      if (cart.length === 0) {
        // neu gio hang chua co gi thi add vao
        dispatch(cartActions.addToCart(cartDetail));
        toast.success(`Added`);
      }
      //neu nhu da co san pham trong gio hang thi thong bao, neu chua có mat hang do trong gio hang thi them vao
      if (cart.length > 0) {
        // neu da ton tai gio hang
        for (let i = 0; i < cart.length; i++) {
          //neu da co san trong gio hang thi thong bao
          if (cart[i].id === props.id) {
            toast.warning(
              `You have ${cart[i].name}. Modify your quantity in your cart`,
              {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              }
            );
            return -1;
          }
        }
        // duyet qua ma khong co thi them vao
        dispatch(cartActions.addToCart(cartDetail));
        toast.success(`Added`);
      }
    }
  };

  return (
    <>
      {data.length > 0 && (
        <div>
          <div className={classes.detailProduct}>
            {/* anh mini o ben trai  */}
            <div className={classes.miniImg}>
              <img src={product.img1}></img>
              <img src={product.img2}></img>
              <img src={product.img3}></img>
              <img src={product.img4}></img>
            </div>
            {/* anh chinh o giua  */}
            <div className={classes.imgMain}>
              <img src={product.img1}></img>
            </div>

            {/* thanh phan hien thi mo ta san pham o ben phai*/}
            <div className={classes.detailDescription}>
              <h1>{product.name}</h1>
              <h3>{editPrice(product.price)}</h3>
              <p>{product.short_desc}</p>
              <h3>Category : {product.category}</h3>
              <div className={classes.formButton}>
                {/* form de lay du lieu cho vao cart */}
                <form>
                  <label htmlFor="" for="qty">
                    Quantity:
                  </label>
                  <input
                    ref={quantityInputRef}
                    type="number"
                    name="qty"
                    id="qty"
                    min="1"
                    max="10"
                    step="1"
                    defaultValue={1}
                  />
                </form>
                <button onClick={addToCartHandler}>Add to cart</button>
              </div>
            </div>
          </div>

          {/* MIDDLE thanh phan mo ta cu the  */}
          <div className={classes.middle}>
            <span>Description</span>
            <h3>PRODUCT DESCRIPTION</h3>
            <p className={classes.description}>{product.long_desc}</p>
          </div>

          {/* BOTTOM gom cac san pham lien quan */}
          <div className={classes.bottom}>
            <h3>RELATED PRODUCTS</h3>
            <div className={classes.products}>
              {/* Neu co san pham lien quan thi hien thi ra man hinh  */}
              {related.length > 0 &&
                related.map((ele, index) => (
                  <Products
                    key={index}
                    item={ele} //obj chua thong tin san pham
                    click={showDetailHandler} //click show san pham
                    index={index} //index de hien thi
                  />
                ))}
            </div>
          </div>

          {/* Button de quay lai trang shop */}
          <div className={classes.backToShopBtn}>
            <button onClick={backToShopHandler}> Back To ShopPage</button>
          </div>
        </div>
      )}
      {/* Luc moi tai trang, Component duoc render lan dau chua co du lieu thi hien thi Loading...  */}
      {data.length === 0 && <h1>Loading...</h1>}
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
    </>
  );
};

export default DetailProduct;
