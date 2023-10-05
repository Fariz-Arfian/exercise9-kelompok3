import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";
import { ShoppingCart } from "@phosphor-icons/react";

export const Navbar = () => {
	const countCart = useSelector((state) => state.counter.countCart);

	return (
		<Box>
			<Box
				display={"flex"}
				justifyContent={"center"}
				alignItems={"center"}
				mb={"50px"}
			>
				<Box
					w={"50%"}
					border={"1px solid black"}
					display={"flex"}
					justifyContent={"end"}
				>
					<Link to="/cart">
						<ShoppingCart size={32} />
					</Link>
					<Text position={"relative"} top={"-1"} left={"-0.5"}>
						{countCart}
					</Text>
				</Box>
			</Box>
		</Box>
	);
};
