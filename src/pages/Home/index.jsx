/* eslint-disable react/prop-types */
// import addTocart from "../../redux/reducers/counter";
import { useDispatch } from "react-redux";
import { Navbar } from "../../components/Navbar";
import { Allproducts } from "../../App";
// import Img from "../../assets/powerbankbaseus.webp"
import {
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
						spacing={10}
						templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
						w={"1100px"}
					>
						{Allproducts.map((items, index) => (
							<>
								<div key={index}>
									<Card
										border={"1px solid black"}
										p={"10px"}
										h={"350px"}
									>
										<CardHeader
											h={"170px"}
											alignItems={"center"}
											display={"flex"}
											justifyContent={"center"}
										>
											<Heading>IMG</Heading>
										</CardHeader>
										<CardBody textAlign={"start"}>
											<Text h={"48px"}>{items.nameProduct}</Text>
											<Text fontWeight={"700"}>
												{items.hargaProduct}
											</Text>
											<Text fontSize={"12px"}>{items.storeName}</Text>
											<Text fontSize={"12px"}>
												{items.storeLocation}
											</Text>
										</CardBody>
										<CardFooter
											justifyContent={"end"}
											position={"absolute"}
											bottom={"2"}
                                            right={"2"}
										>
											<Button
												onClick={() => dispatch(addTocart(items))}
												bgColor={"blue.400"}
												p={"6px 10px"}
												mt={"10px"}
											>
												+Keranjang
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
