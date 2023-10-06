import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers";

export const store = configureStore({
	reducer: {
		product: productReducer,
	},
});
