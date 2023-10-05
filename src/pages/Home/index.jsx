/* eslint-disable react/prop-types */
// import addTocart from "../../redux/reducers/counter";
import { useDispatch } from "react-redux";
import { Navbar } from "../../components/Navbar";
import { Allproducts } from "../../App";
// import Img from "../../assets/powerbankbaseus.webp"
import {
	Stack,
	Box,
	SimpleGrid,
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Heading,
	Text,
	Button,
	Center,
	flexbox,
} from "@chakra-ui/react";

import { addTocart } from "../../redux/reducers/counter";
import { redirect } from "react-router-dom";
export const Home = () => {
	// const product = useSelector((state) => state.counter.nameProduct);
	const dispatch = useDispatch();

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
										p={"15px"}
										h={"350px"}
										borderRadius="lg"
										boxShadow="md"
									>
										<CardHeader
											h={"170px"}
											alignItems={"center"}
											display={"flex"}
											justifyContent={"center"}
										>
											<Heading>IMG</Heading>
										</CardHeader>

										<CardBody>
										<Stack spacing=".5" textAlign={"start"}>
										<Text fontSize="md" >{items.nameProduct}</Text>
										<Text fontSize="lg" color="green.900" fontWeight={"700"}>
											{items.hargaProduct}
										</Text>
										<Text fontSize={"12px"} fontWeight={"bold"}>{items.storeName}</Text>
										<Text fontSize={"12px"}>
											{items.storeLocation}</Text>
										</Stack>
										</CardBody>
										<CardFooter
											justifyContent={"start"}
											
										>
											<Button
												onClick={() => dispatch(addTocart(items))}
												bgColor={"green.900"}
												color={"white"}
												p={"10px 10px 10px 10px"}
												mt={"15px"}
												mb={"10px"}
												w="100%"
												boxShadow={"lg"}
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
