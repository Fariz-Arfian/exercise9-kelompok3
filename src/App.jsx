import { useState } from "react";
import "./App.css";
import { Home } from "./pages/Home";
import Cart from "./pages/Cartproduct";
import { Routes, Route } from "react-router-dom";

export const Allproducts = [
	{
		id: 1,
		imgProduct: "https://images.tokopedia.net/img/cache/100-square/VqbcmM/2023/4/15/f8bd63af-01c2-40da-a6a1-9e849e61eeb8.png.webp?ect=4g",
		nameProduct: "T-Shirt Katun Premium",
		hargaProduct: "Rp149.000",
		storeName: "V&E",
		storeLocation: "Jakarta Utara",
	},
	{
		id: 2,
		imgProduct: "https://images.tokopedia.net/img/cache/100-square/VqbcmM/2021/7/6/fca02035-f659-4797-84aa-84f1f1780f17.jpg.webp?ect=4g",
		nameProduct: "Hijack Sandals for All - Alto Orca Mach-1 (Black)",
		hargaProduct: "Rp647.100",
		storeName: "Hijacks Sandal",
		storeLocation: "Kota Bandung",
	},
	{
		id: 3,
		imgProduct: "https://images.tokopedia.net/img/cache/900/VqbcmM/2023/3/24/37289be8-e31f-4d82-b722-87a04cbc3218.jpg",
		nameProduct: "BASEUS ADAMAN FAST CHARGING POWER BANK",
		hargaProduct: "Rp196.000",
		storeName: "Baseus Official Store",
		storeLocation: "Kota Tenggerang",
	},
	{
		id: 4,
		imgProduct: "https://images.tokopedia.net/img/cache/100-square/VqbcmM/2023/9/4/c5c22de0-23c6-4abd-a086-19af2ab5de00.jpg.webp?ect=4g",
		nameProduct: "American Tourister Curio Koper Hardcase",
		hargaProduct: "Rp3.590.000",
		storeName: "American Tourister",
		storeLocation: "Kota Tenggerang Selatan",
	},
	{
		id: 5,
		imgProduct: "https://images.tokopedia.net/img/cache/100-square/VqbcmM/2022/10/31/b88fccc4-1a7b-4d06-b542-584db8924fb9.jpg.webp?ect=4g",
		nameProduct: "WH - Elvira Dining Table with 6 Elvise chair - Green",
		hargaProduct: "Rp119.790.000",
		storeName: "Malinda Furniture Gallery",
		storeLocation: "Jakart Barat",
	},
	{
		id: 6,
		imgProduct: "https://images.tokopedia.net/img/cache/900/VqbcmM/2021/10/12/bf83e009-42d9-4272-b5d7-093ad4325aed.jpg",
		nameProduct: "Kasur Exclusive Elite New Edition ",
		hargaProduct: "Rp2.499.000",
		storeName: "Elite Springbad",
		storeLocation: "Kab. Bandung Barat",
	},
	{
		id: 7,
		imgProduct: "https://images.tokopedia.net/img/cache/100-square/VqbcmM/2021/11/29/c9363c39-d5c2-44bc-bd48-8a6fcffbda8b.jpg.webp?ect=4g",
		nameProduct: "SAMSUNG 85QN900B TV 8K 85QN900B 85 INCH",
		hargaProduct: "Rp121.406.000",
		storeName: "Setia Makmur Elektronik",
		storeLocation: "jakarta Barat",
	},
	{
		id: 8,
		imgProduct: "https://images.tokopedia.net/img/cache/100-square/VqbcmM/2020/9/25/45b0e54c-4a16-43f2-830f-86e20f06f987.png.webp?ect=4g",
		nameProduct: "MIYAKO Kipas Angin Berdiri 16Inch KAS-1606X",
		hargaProduct: "Rp199.900",
		storeName: "Utama_electronic",
		storeLocation: "Jakarta Pusat",
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
