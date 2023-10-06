/* eslint-disable react/prop-types */
// import addTocart from "../../redux/reducers/counter";
import { useDispatch } from "react-redux";
import { Navbar } from "../../components/Navbar";
import { Allproducts } from "../../App";
// import axios from "axios";

// import Img from "../../assets/powerbankbaseus.webp"
import {
	Stack,
	Box,
	SimpleGrid,
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Text,
	Button,
	Image,
} from "@chakra-ui/react";
import { addTocart } from "../../redux/reducers";
// import { useState } from "react";


export const Home = () => {
	// const product = useSelector((state) => state.counter.nameProduct);
	// const [data, setData] = useState()
	const dispatch = useDispatch();

	// const fatcData = async () => {
	// 	try {
	// 		const respons = await axios.get("")
	// 		setData(respons.data)
	// 	}
	// }

	return (
		<Box w={"100vw"} minH={"100vh"} mb={"50px"}>
			<Box
				w={"100%"}
				display={"flex"}
				flexDirection={"column"}
				justifyContent={"center"}
				alignItems={"center"}
			>
				<Box w={"100%"}>
					<Navbar />
				</Box>
				<Box
					display={"flex"}
					w={"90%"}
					justifyContent={"center"}
					alignItems={"center"}
					mt={{base: "10px", md: "50px" }}
				>
					<SimpleGrid
						spacing={3}
						templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
						w={"1100px"}
					>
						{Allproducts.map((items, index) => (
							<>
								<div key={index}>
									<Card
										border={"1px solid #F0FFF4"}
										// p={"15px"}
										h={"375px"}
										borderRadius="lg"
										boxShadow="md"
									>
										<CardHeader
											h={"170px"}
											alignItems={"center"}
											display={"flex"}
											justifyContent={"center"}
										>
											<Image h={"170px"} src={items.imgProduct} />
										</CardHeader>

										<CardBody p={"0 20px"}>
											<Stack spacing=".5" textAlign={"start"}>
												<Text
													overflow={"hidden"}
													h={"48px"}
													mt={"5px"}
													fontSize="md"
												>
													{items.nameProduct}
												</Text>
												<Text
													fontSize="lg"
													color="green.900"
													fontWeight={"700"}
												>
													{items.hargaProduct}
												</Text>
												<Text fontSize={"12px"} fontWeight={"bold"}>
													{items.storeName}
												</Text>
												<Text fontSize={"12px"}>
													{items.storeLocation}
												</Text>
											</Stack>
										</CardBody>
										<CardFooter justifyContent={"start"} p={"0px 20px"}>
											<Button
												onClick={() => dispatch(addTocart(items))}
												bgColor={"green.900"}
												color={"white"}
												p={"10px 10px 10px 10px"}
												// mt={"15px"}
												mb={"25px"}
												w="100%"
												boxShadow={"lg"}
												_hover={{
													color: "green.900",
													bgColor: "white",
													border: "1px solid",
													borderColor: "green.900",
												}}
											>
												+ Add to cart
											</Button>
										</CardFooter>
									</Card>
								</div>
							</>
						))}
					</SimpleGrid>
				</Box>
			</Box>
		</Box>
	);
};
