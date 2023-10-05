import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Box, Text, Input, Stack, Avatar } from "@chakra-ui/react";
import {
	ShoppingCartSimple,
	Bell,
	EnvelopeSimple,
} from "@phosphor-icons/react";

export const Navbar = () => {
	const countCart = useSelector((state) => state.product.countCart);

	return (
		<Box
			h={"80px"}
			display={"flex"}
			justifyContent={"center"}
		>
			<Stack
				spacing={10}
				direction={"row"}
				p={"20px"}
				h={"100%"}
				w={"70%"}
				alignItems={"center"}
				display={"flex"}
				justifyContent={"space-around"}
			>
				<Box fontFamily={"'Pixelify Sans', cursive"} fontSize={"24px"}>
					<Link to="/">Kelompok 3</Link>
				</Box>
				<Box>
					<Input
						border={"1px solid black"}
						placeholder="Search"
						h={"20px"}
						p={"20px"}
						w={"500px"}
						borderRadius={"10px"}
					/>
				</Box>

				<Box
					display={"flex"}
					h={"100%"}
					justifyContent={"center"}
					alignItems={"center"}
				>
					<Box
						w={"100%"}
						h={"100%"}
						display={"flex"}
						justifyContent={"end"}
						p={"10px"}
						alignItems={"center"}
					>
						<Link to="/cart">
							<ShoppingCartSimple size={26} />
						</Link>
						<Text
							position={"relative"}
							top={"-3"}
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
					<Box
						w={"100%"}
						h={"100%"}
						display={"flex"}
						justifyContent={"end"}
						p={"10px"}
						alignItems={"center"}
					>
						<Link to="/cart">
							<Bell size={26} />
						</Link>
						<Text
							position={"relative"}
							top={"-3"}
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
							0
						</Text>
					</Box>
					<Box
						w={"100%"}
						h={"100%"}
						display={"flex"}
						justifyContent={"end"}
						p={"10px"}
						alignItems={"center"}
					>
						<Link to="/cart">
							<EnvelopeSimple size={32} />
						</Link>
						<Text
							position={"relative"}
							top={"-3"}
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
							0
						</Text>
					</Box>
					<Box>
						<Avatar bg="green.900" w={"40px"} />
					</Box>
				</Box>
			</Stack>
		</Box>
	);
};
