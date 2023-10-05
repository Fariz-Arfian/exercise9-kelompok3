import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Box, Text, Input, Stack } from "@chakra-ui/react";
import { ShoppingCart } from "@phosphor-icons/react";

export const Navbar = () => {
	const countCart = useSelector((state) => state.product.countCart);

	return (
		<Box>
			<Box display={"flex"} justifyContent={"space-around"}>
				<Box>
					<Text>Kelompok 3</Text>
				</Box>
				<Stack>
					<Input />
				</Stack>
				<Box
					display={"flex"}
					justifyContent={"center"}
					alignItems={"center"}
					mb={"50px"}
					// bg={"white"}
				>
					<Box
						w={"70%"}
						// border={"1px solid black"}
						display={"flex"}
						justifyContent={"end"}
						p={"10px"}
					>
						<Link to="/cart">
							<ShoppingCart size={32} />
						</Link>
						<Text
							position={"relative"}
							top={"-1"}
							left={"-0.5"}
							bgColor={"red"}
							h={"15px"}
							w={"15px"}
							borderRadius={"50%"}
							display={"flex"}
							alignItems={"center"}
							justifyContent={"center"}
							fontSize={"12px"}
							color={"white"}
						>
							{countCart}
						</Text>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};
