import { useState } from "react";
import "./App.css";
import { Home } from "./pages/Home";
import Cart from "./pages/Cartproduct";
import { Routes, Route } from "react-router-dom";

export const Allproducts = [
	{
    id: 1,
    imgProduct : "../../assets/powerbankbaseus.webp",
		nameProduct: "Tshirt Persib",
		hargaProduct: "Rp149.000",
		storeName: "SIMASTORE",
		storeLocation: "Kota bandung",
	},
	{
    id: 2,
		nameProduct: "Sandal Piero Puna",
		hargaProduct: "Rp219.000",
		storeName: "iris96",
		storeLocation: "Kab. Lunmajang",
	},
	{
    id: 3,
		nameProduct: "POWER BANK BASEUS 20W",
		hargaProduct: "Rp186.000",
		storeName: "Baseus Official Store",
		storeLocation: "Kota Tenggerang",
	},
	{
    id: 4,
		nameProduct: "American Tourister Curio Koper Hardcase",
		hargaProduct: "Rp3.590.000",
		storeName: "American Tourister",
		storeLocation: "Kota Tenggerang Selatan",
	},
	{
    id: 5,
		nameProduct: "POWER BANK BASEUS 20W",
		hargaProduct: "Rp186.000",
		storeName: "Baseus Official Store",
		storeLocation: "Kota Tenggerang",
	},
	{
    id: 6,
		nameProduct: "POWER BANK BASEUS 20W",
		hargaProduct: "Rp186.000",
		storeName: "Baseus Official Store",
		storeLocation: "Kota Tenggerang",
	},
	{
    id: 7,
		nameProduct: "POWER BANK BASEUS 20W",
		hargaProduct: "Rp186.000",
		storeName: "Baseus Official Store",
		storeLocation: "Kota Tenggerang",
	},
	{
    id: 8,
		nameProduct: "POWER BANK BASEUS 20W",
		hargaProduct: "Rp186.000",
		storeName: "Baseus Official Store",
		storeLocation: "Kota Tenggerang",
	},
];

function App() {
	const [data, setData] = useState(Allproducts);
	return (
		<>
			<Routes>
				<Route path="/" element={<Home products={data} />} />
				<Route path="/cart" element={<Cart products={data} />} />
			</Routes>
		</>
	);
}

export default App;
