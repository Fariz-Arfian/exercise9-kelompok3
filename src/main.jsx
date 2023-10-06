import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { BrowserRouter } from "react-router-dom";
import { ChakraBaseProvider, theme } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<ChakraBaseProvider theme={theme}>
				<Provider store={store}>
					<App />
				</Provider>
			</ChakraBaseProvider>
		</BrowserRouter>
	</React.StrictMode>
);
