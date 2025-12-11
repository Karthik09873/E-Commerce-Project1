import { configureStore, createSlice } from "@reduxjs/toolkit";
import { coupons } from "./Coupons";

// ------------------------
// Coupon Slice
// ------------------------
const cuponSlice = createSlice({
  name: "cupon",
  initialState: {
    code: "",
    discount: 0,
    applied: false,
    message: "",
  },
  reducers: {
    applyCoupon: (state, action) => {
      const enteredCode = action.payload.toUpperCase();
      if (coupons[enteredCode]) {
        state.code = enteredCode;
        state.discount = coupons[enteredCode];
        state.applied = true;
        state.message = `Coupon "${enteredCode}" Applied! (${coupons[enteredCode]}% OFF)`;
      } else {
        state.applied = false;
        state.discount = 0;
        state.message = "Invalid Coupon Code!";
      }
    },
    setDiscount: (state, action) => {
      state.discount = action.payload;
      state.applied = true;
      state.message = `Successfully applied ${action.payload}% discount`;
    },
    clearDiscount: (state) => {
      state.discount = 0;
      state.applied = false;
      state.message = "";
    },
  },
});

// ------------------------
// Cart Slice
// ------------------------
const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add: (state, action) => {
      const exist = state.find((item) => item.id === action.payload.id);
      if (exist) exist.quantity++;
      else state.push({ ...action.payload, quantity: 1 });
    },
    increase: (state, action) => {
      const item = state.find((x) => x.id === action.payload);
      if (item) item.quantity++;
    },
    decrease: (state, action) => {
      const item = state.find((x) => x.id === action.payload);
      if (!item) return;
      if (item.quantity > 1) item.quantity--;
      else return state.filter((x) => x.id !== action.payload);
    },
    remove: (state, action) => state.filter((x) => x.id !== action.payload),
    clear: () => [],
  },
});

// ------------------------
// Orders Slice
// ------------------------
const ordersSlice = createSlice({
  name: "orders",
  initialState: [],
  reducers: {
    addOrder: (state, action) => {
      state.push(action.payload);
    },
  },
});

// ------------------------
// Export Actions
// ------------------------
export const { add, increase, decrease, remove, clear } = cartSlice.actions;
export const { applyCoupon, setDiscount, clearDiscount } = cuponSlice.actions;
export const { addOrder } = ordersSlice.actions;

// ------------------------
// Configure Store
// ------------------------
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    cupon: cuponSlice.reducer,
    orders: ordersSlice.reducer,
  },
});

export default store;
