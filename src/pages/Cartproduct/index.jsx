import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/reducers/counter";
import { useState } from "react";
import { Box, Text, Button } from "@chakra-ui/react";

export default function Cart() {
	const allItems = useSelector((state) => state.counter.value);
	const [itemCounts, setItemCounts] = useState({});
	const dispatch = useDispatch();

	const increment = (index) => {
		// Mengecek apakah item sudah ada dalam itemCounts
		if (itemCounts[index]) {
			setItemCounts({
				...itemCounts,
				[index]: itemCounts[index] + 1,
			});
		} else {
			setItemCounts({
				...itemCounts,
				[index]: 1,
			});
		}
	};
	const decrement = (index) => {
		if (itemCounts[index] > 0) {
			setItemCounts({
				...itemCounts,
				[index]: itemCounts[index] - 1,
			});
		}
	};

	const handleRemoveFromCart = (itemId) => {
		dispatch(removeFromCart(itemId));
	};

	return (
		<Box>
			<Link to="/">Back</Link>
			{allItems.map((items, index) => (
				<>
					<Box key={index} border={"1px solid black"} display={"flex"} flexDirection={"column"} alignItems={"center"}>
						<Text>{items.nameProduct}</Text>
						<Text>{items.hargaProduct}</Text>
						<Text>{items.storeName}</Text>
						<Text>{items.storeLocation}</Text>
						<Box display={"flex"}>
							<Button onClick={() => decrement(index)}>-</Button>
							<Text>{itemCounts[index] || 0}</Text>
							<Button onClick={() => increment(index)}>+</Button>
						</Box>
						<Button
							onClick={() => handleRemoveFromCart(items.id)}
						>
							Hapus Product
						</Button>
					</Box>
				</>
			))}
		</Box>
	);
}
