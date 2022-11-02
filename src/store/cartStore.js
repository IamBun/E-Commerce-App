import { createSlice } from "@reduxjs/toolkit";

const cart = localStorage.getItem("cart") //Tim trong localStorage, neu chua co thi tao cart la mang rong
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: cart,
  reducers: {
    addToCart(state, action) {
      state.push(action.payload); // them san pham moi vao mang cart
      localStorage.setItem("cart", JSON.stringify(state)); //luu vao local storage
    },
    updateCart(state, action) {
      for (let i = 0; i < state.length; i++) {
        //kiem tra id san pham voi id cac san pham trong gio hang
        if (state[i].id === action.payload.id) {
          //tim san pham duoc update qua id, cap nhat quantity moi
          state[i].quantity = action.payload.quantity;
        }
        //neu san pham do quantity=0 thi xoa khoi mang
        if (state[i].quantity < 1) {
          state.splice(i, 1);
        }
      }

      localStorage.setItem("cart", JSON.stringify(state)); //luu
    },
    deleteCart(state, action) {
      //xoa san pham
      for (let i = 0; i < state.length; i++) {
        //kiem tra id san pham voi id cac san pham trong gio hang
        if (state[i].id === action.payload.id) {
          state.splice(i, 1); //xoa khoi mang
        }
      }

      localStorage.setItem("cart", JSON.stringify(state));
    },

    logoutCart(state) {
      //xoa cart
      state.splice(0, state.length); //xoa cart tu vi tri dau tien, xoa tat ca san pham, tra ve mang rong
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
