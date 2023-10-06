/* eslint-disable react/jsx-key */
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/reducers";
import { useState } from "react";
import { Box, Text, Button, Image } from "@chakra-ui/react";
import { MinusIcon, AddIcon, DeleteIcon } from "@chakra-ui/icons";
import { Navbar } from "../../components/Navbar";
import { ArrowLeft } from "@phosphor-icons/react";

export default function Cart() {
	const allItems = useSelector((state) => state.product.value);
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
		if (itemCounts[index] > 1) {
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
		<Box
			w="100vw"
			minH="100vh"
			display="flex"
			flexDirection="column"
			justifyContent="start"
			bgColor="white"
		>
			<Box w={"100%"}>
				<Navbar />
			</Box>
			<Box w="fit-content" ml={{sm: "10px",md: "50px"}} display={{base: "none",sm: "block"}}>
				<Link to="/">
					<ArrowLeft size={24} />
				</Link>
			</Box>
			<Box
				display="flex"
				w="100%"
				flexDirection="column"
				justifyContent={"center"}
				alignItems={"center"}
				mt={{md: "50px"}}
			>
				<Text fontSize={"20px"} fontWeight={"600"} mb={"20px"}>
					Keranjang
				</Text>
				{allItems?.length > 0 ? (
					allItems.map((items, index) => (
						<>
							<Box borderTop="8px solid #F3F3F2" w={{base:"100%", sm: "90%", md: "70%"}}>
								<Box
									key={index}
									display={"flex"}
									alignItems={"center"}
									justifyContent={"space-between"}
								>
									<Box
										display={"flex"}
										justifyContent={"start"}
										alignItems={"center"}
										w={"650px"}
									>
										<Image
											w={{ base: "100px", md: "100px"}}
											h={{ base: "110px", md: "110px"}}
											src={items.imgProduct}
										/>
										<Box
											textAlign="start"
											display="flex"
											flexDirection="column"
										>
											<Text p={{base: "5px",md: "10px"}} fontSize={{base: "11px",lg: "22px"}}>
												{items.nameProduct}
											</Text>
											<Text p={{base: "5px",md: "10px"}} fontSize={{base: "11px", md: "14px",lg: "22px"}} fontWeight={"700"}>
												{items.hargaProduct}
											</Text>
											<Text p={{base: "5px",md: "10px"}} fontSize={{base: "11px",lg: "16px"}}>
												{items.storeName}
											</Text>
											<Text p={{base: "5px",md: "10px"}} fontSize={{base: "8px",lg: "12px"}}>
												{items.storeLocation}
											</Text>
										</Box>
									</Box>
									<Box
										display={"flex"}
										justifyContent={"center"}
										alignItems={"center"}
										position={"relative"}
										bottom={{base: "-8",md: "-12", lg: "-16"}}
										right={"3"}
									>
										<Box
											display={"flex"}
											alignItems={"center"}
											justifyContent={"space-around"}
											mr={"10px"}
											border={"1px solid grey"}
											borderRadius={"5px"}
											p={"5px 4px"}
										>
											<Button
												size={{base: "xm",sm: "xs"}}
												h={{base: "15px",sm: "25px"}}
												p={"2px"}
												borderRadius={{base:"2px",md: "5px"}}
												fontSize={"8px"}
												onClick={() => decrement(index)}
												textAlign={"center"}
												justifyContent={"center"}
												alignItems={"center"}
												_focus={{ outline: "none" }}
												_hover={{
													border: "1px solid white",
													bgColor: "#F3F3F2",
												}}
											>
												<MinusIcon />
											</Button>
											<Text m={{base: "0 8px",md: "0 10px"}} fontSize={{base: "11px", sm:"16px"}}>
												{itemCounts[index] || 1}
											</Text>
											<Button
												size={{base: "xm",sm: "xs"}}
												h={{base: "15px",sm: "25px"}}
												p={"2px"}
												borderRadius={{base:"2px",md: "5px"}}
												fontSize={"8px"}
												_focus={{ outline: "none" }}
												_hover={{
													border: "1px solid white",
													bgColor: "#F3F3F2",
												}}
												onClick={() => increment(index)}
											>
												<AddIcon />
											</Button>
										</Box>
										<Box display={"flex"} alignItems={"center"}>
											<Button
												size={{base: "xs",sm: "md"}}
												color={"white"}
												bgColor={"red.900"}
												// fontSize={{base: "20px", md: "20px"}}
												onClick={() => handleRemoveFromCart(items.id)}
											>
												<DeleteIcon />
											</Button>
										</Box>
									</Box>
								</Box>
							</Box>
						</>
					))
				) : (
					<Box
						w={"100%"}
						minH={"60vh"}
						display={"flex"}
						justifyContent={"center"}
						alignItems={"center"}
					>
						<Box
							display={"flex"}
							justifyContent={"center"}
							alignItems={"center"}
							flexDirection={"column"}
						>
							<Text>Wah, Keranjang belanjamu kosong</Text>
							<Text mb={"20px"}>
								Yuk, isi dengan barang-barng impianmu!
							</Text>
							<Link to="/">
								<Button
									p={"10px 18px"}
									bgColor={"green.900"}
									color={"white"}
									_hover={{ opacity: "85%" }}
								>
									Mulai Belanja
								</Button>
							</Link>
						</Box>
					</Box>
				)}
			</Box>
		</Box>
	);
}
