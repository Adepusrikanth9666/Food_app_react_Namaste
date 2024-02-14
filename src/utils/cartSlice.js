import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // mutaing the state here...
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0; //[]
    },
  },
});

// this cardSlice will return in the below:
// {
//     action:{
//         addItems
//     },
//     reducer
// }

export const { addItem, removeItem, clearCart } = cardSlice.actions;

export default cardSlice.reducer;
