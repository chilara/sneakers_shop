import { Container, Flex, Img } from "@chakra-ui/react";
import logo from "../asset/logo.png";
import avi from "../asset/avi.png";
import { Link } from "react-router-dom";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <Container
      maxW={"7xl"}
      border={"0px, 0px, 1px, 0px"}
      borderBottom={"2px solid #1018280F"}
      padding={"24px, 0px, 24px, 0px"}
      h={"80px"}
      mt={"2rem"}
    >
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Flex justifyContent={"flex-start"} alignItems={"center"} gap={"4rem"}>
          <Img src={logo} alt="logo" />
          <Flex gap={"2rem"}>
            <Link
              to="/"
              fontSize={"16px"}
              color={"blackAlpha.600"}
              cursor={"pointer"}
            >
              Collections
            </Link>
            {/* <Link fontSize={"16px"} color={"blackAlpha.600"} cursor={"pointer"}>
              Men
            </Link>
            <Link fontSize={"16px"} color={"blackAlpha.600"} cursor={"pointer"}>
              Women
            </Link>
            <Link fontSize={"16px"} color={"blackAlpha.600"} cursor={"pointer"}>
              About
            </Link>
            <Link fontSize={"16px"} color={"blackAlpha.600"} cursor={"pointer"}>
              Contact
            </Link> */}
          </Flex>
        </Flex>
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          gap={"2rem"}
        >
          <Link to="/cart">
            <AiOutlineShoppingCart cursor={"pointer"} />
          </Link>
          <Img src={avi} alt="avatar" width={"40px"} h={"40px"} />
        </Flex>
      </Flex>
    </Container>
  );
};

export default Navbar;
