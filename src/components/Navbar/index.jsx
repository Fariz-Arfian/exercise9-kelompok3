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
				spacing={{base: "5", md:"10"}}
				direction={"row"}
				p={"20px"}
				h={"100%"}
				w={{base: "100%", lg: "70%"}}
				alignItems={"center"}
				display={"flex"}
				justifyContent={"space-between"}
			>
				<Box fontFamily={"'Pixelify Sans', cursive"} fontSize={{base: "16px",md: "24px"}}>
					<Link to="/">Kelompok 3</Link>
				</Box>
				<Box>
					<Input
						border={"1px solid black"}
						placeholder="Search"
						h={"20px"}
						p={"20px"}
						w={{sm: "300px",lg: "500px"}}
						borderRadius={"10px"}
						display={{base: "none", md: "block"}}
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
						p={{base: "0", md: "10px"}}
						alignItems={"center"}
					>
						<Link to="/cart">
							<ShoppingCartSimple size={20} />
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
						justifyContent={"center"}
						p={{base: "0", md: "10px"}}
						alignItems={"center"}
					>
						<Link to="">
							<Bell size={20} />
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
						p={{base: "0", md: "10px"}}
						alignItems={"center"}
					>
						<Link to="">
							<EnvelopeSimple size={20} />
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
						<Avatar bg="green.900" w={{base: "30px",md: "40px"}} h={{base: "30px",md: "40px"}} />
					</Box>
				</Box>
			</Stack>
		</Box>
	);
};
