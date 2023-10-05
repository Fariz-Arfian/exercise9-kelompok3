/* eslint-disable no-undef */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: [],
	countCart: 0,
};

export const counter = createSlice({
	name: "counter",
	initialState,
	reducers: {
		addTocart: (state, actions) => {
			const newItems = actions.payload;
			const checkItem = state.value.find(
				(item) => item.id === newItems.id
			);
			if (checkItem) {
				alert(
					"Item Sudah ada di keranjang, silahkan lanjutkan pembayaran"
				);
			} else {
				state.countCart += 1;
				state.value.push(newItems);
			}
		},

		removeFromCart: (state, action) => {
			const itemIdToRemove = action.payload;
			state.value = state.value.filter(
				(item) => item.id !== itemIdToRemove
			);
			state.countCart -= 1;
		},
	},
});

export const { addTocart, removeFromCart } = counter.actions;

export default counter.reducer;
