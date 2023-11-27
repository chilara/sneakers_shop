import { Container, Flex, Img, Box } from "@chakra-ui/react";
import logo from "../asset/logo.png";
import avi from "../asset/avi.png";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggler = () => {
    setOpen(!open);
  };

  const closeNavbar = () => {
    setOpen(false);
  };

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
          <Flex gap={"1rem"} alignItems={"center"}>
            <Box
              style={{ padding: "5px" }}
              display={{ lg: "none", base: "flex" }}
              gap={"0.2rem"}
              flexDir={"column"}
              border={"none"}
              onClick={toggler}
            >
              <Box width={"20px"} height={"3px"} bgColor={"#000"}></Box>
              <Box width={"20px"} height={"3px"} bgColor={"#000"}></Box>
              <Box width={"20px"} height={"3px"} bgColor={"#000"}></Box>
            </Box>
            <Img
              src={logo}
              alt="logo"
              width={{ lg: "100px", base: "80px" }}
              h={{ lg: "20px", base: "20px" }}
            />
          </Flex>
          <Flex gap={"2rem"} display={{ lg: "flex", base: "none" }}>
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
        {/* {open && (
          <>
            <Flex
              flexDir={"column"}
              display={{ lg: "none", base: "flex" }}
              gap={"3rem"}
              padding={"10% 7%"}
              width={"100%"}
              height={"100%"}
              right={"0%"}
              color={"white"}
              bgColor={"blue"}
              position={"fixed"}
              zIndex={10}
            >
              <Box>
                <Link
                  to="/"
                  fontSize={"16px"}
                  color={"white"}
                  cursor={"pointer"}
                >
                  Collections
                </Link>
              </Box>
              <Box onClick={closeNavbar}>
                <AiOutlineClose
                  style={{ backgroundColor: "white" }}
                  width={"100px"}
                />
              </Box>
            </Flex>
          </>
        )} */}
      </Flex>
    </Container>
  );
};

export default Navbar;
