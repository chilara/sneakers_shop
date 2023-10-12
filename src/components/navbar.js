import { Container, Flex, Img, Text } from "@chakra-ui/react";
import logo from "../asset/logo.png";
import avi from "../asset/avi.png";
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
            <Text fontSize={"16px"} color={"blackAlpha.600"} cursor={"pointer"}>
              Collections
            </Text>
            <Text fontSize={"16px"} color={"blackAlpha.600"} cursor={"pointer"}>
              Men
            </Text>
            <Text fontSize={"16px"} color={"blackAlpha.600"} cursor={"pointer"}>
              Women
            </Text>
            <Text fontSize={"16px"} color={"blackAlpha.600"} cursor={"pointer"}>
              About
            </Text>
            <Text fontSize={"16px"} color={"blackAlpha.600"} cursor={"pointer"}>
              Contact
            </Text>
          </Flex>
        </Flex>
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          gap={"2rem"}
        >
          <AiOutlineShoppingCart cursor={"pointer"} />
          <Img src={avi} alt="avatar" width={"40px"} h={"40px"} />
        </Flex>
      </Flex>
    </Container>
  );
};

export default Navbar;
