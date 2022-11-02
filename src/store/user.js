import { createSlice } from "@reduxjs/toolkit";

let getUserFromStorage = localStorage.getItem("currentUser");

const currentUserSlice = createSlice({
  name: "currentUserSlice",
  initialState: { email: getUserFromStorage },
  reducers: {
    login(state, action) {
      //khi dang nhap thi nhan email nguoi dung hien tai, luu vao storage
      state.email = action.payload;
      localStorage.setItem("currentUser", state.email);
    },
    logout(state) {
      // khi logout thi xoa email, xoa gio hang, xoa nguoi dung hien tai
      state.email = null;
      localStorage.removeItem("currentUser");
      localStorage.removeItem("cart");
    },
  },
});

export const currentUserActions = currentUserSlice.actions;
export default currentUserSlice.reducer;
