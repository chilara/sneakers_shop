import {
  Container,
  Flex,
  Img,
  Text,
  Box,
  Button,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";
import product1 from "../../asset/product1.jpg";
import p2 from "../../asset/p2.jpg";
import p3 from "../../asset/p3.jpg";
import p4 from "../../asset/p4.jpg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Products } from "./products";
import Product from "./product";
import "./style/shop.css";

const Shop = () => {
  const [img, setImg] = useState(product1);

  return (
    <Container
      maxW={"7xl"}
      mt={"3rem"}
      px={{ lg: "6rem", md: "2rem", base: "0" }}
    >
      <Flex
        flexDir={{ lg: "row", md: "row", base: "column" }}
        gap={{ lg: "7rem", md: "3rem" }}
        alignItems={"center"}
      >
        <Flex flexDir={"column"}>
          <Img
            src={img}
            alt="product_1"
            width={"420px"}
            h={"420px"}
            borderRadius={"15px"}
          />
          <Flex
            mt={"2rem"}
            justifyContent={"space-between"}
            gap={{ lg: "0rem", md: "1.5rem", base: ".5rem" }}
          >
            {/* {Products.map((item, index) => (
              <Product key={index} productImage={item.productImage} />
            ))} */}
            <a onClick={() => setImg(product1)} className="current">
              <Img
                src={product1}
                alt="product_1"
                width={"85px"}
                h={"85px"}
                borderRadius={"8px"}
                cursor={"pointer"}

                // width={"420px"}
                // h={"420px"}
                // borderRadius={"15px"}
              />
            </a>
            <a onClick={() => setImg(p2)} className="current">
              <Img
                src={p2}
                alt="product_1"
                width={"85px"}
                h={"85px"}
                borderRadius={"8px"}
                cursor={"pointer"}
                // width={"420px"}
                // h={"420px"}
                // borderRadius={"15px"}
              />
            </a>
            <a onClick={() => setImg(p3)} className="current">
              <Img
                src={p3}
                alt="product_1"
                width={"85px"}
                h={"85px"}
                borderRadius={"8px"}
                cursor={"pointer"}
                className="current"
                // width={"420px"}
                // h={"420px"}
                // borderRadius={"15px"}
              />
            </a>
            <a onClick={() => setImg(p4)} className="current">
              <Img
                src={p4}
                alt="product_1"
                width={"85px"}
                h={"85px"}
                borderRadius={"8px"}
                cursor={"pointer"}
                className="current"
                // width={"420px"}
                // h={"420px"}
                // borderRadius={"15px"}
              />
            </a>
          </Flex>
        </Flex>
        <Box width={{ lg: "45%", base: "100%" }} mt={{ lg: "0", base: "2rem" }}>
          <Text
            textTransform={"uppercase"}
            fontSize={"13px"}
            color={"orange.400"}
            fontWeight={600}
            mb={"1rem"}
          >
            sneaker company
          </Text>
          <Text
            textTransform={"capitalize"}
            fontWeight={700}
            fontSize={{ lg: "38px", base: "32px" }}
            lineHeight={"110%"}
            color={"blackAlpha.800"}
            mb={".5rem"}
          >
            fall limited edition sneakers
          </Text>
          <Text
            color={"blackAlpha.600"}
            fontSize={{ lg: "16px", base: "14px" }}
            mt={{ lg: "1.5rem", base: "1.2rem" }}
          >
            These low-profile sneakers are your perfect causal companion.
            Featuring a durable outer rubber sole, they"ll withstand everything
            the weather can offer.
          </Text>
          <Flex
            gap={".5rem"}
            mt={"1.1rem"}
            flexDir={{ lg: "column", md: "column", base: "row" }}
            alignItems={{ lg: "normal", md: "normal", base: "center" }}
            justifyContent={"space-between"}
          >
            <Flex gap={"1rem"} alignItems={"center"}>
              <Text
                fontWeight={700}
                fontSize={{ lg: "22px", base: "24px" }}
                color={"blackAlpha.800"}
              >
                $125.00
              </Text>
              <Text
                fontSize={"12px"}
                color={"orange.400"}
                fontWeight={600}
                padding={"2px 5px"}
                backgroundColor={"orange.100"}
                borderRadius={"5px"}
                textAlign={"center"}
              >
                50%
              </Text>
            </Flex>
            <Text
              fontSize={"14px"}
              color={"blackAlpha.400"}
              textDecorationLine={"line-through"}
            >
              $250.00
            </Text>
          </Flex>
          <Flex
            gap={{ lg: "2rem", base: ".5rem" }}
            width={"100%"}
            mt={"2rem"}
            flexDir={{ lg: "row", base: "column" }}
          >
            <Box
              display={"flex"}
              justifyContent={{ lg: "left", base: "center" }}
              // width={"50%"}
            >
              <Button
                color={"orange.400"}
                fontSize={"28px"}
                borderRightRadius={"0"}
                borderRight={"0"}
                width={{ lg: "20%", md: "100%" }}
                height={{ lg: "40px", base: "50px" }}
              >
                -
              </Button>
              <Input
                backgroundColor={"gray.100"}
                w={{ lg: "20%", base: "80%" }}
                height={{ lg: "40px", base: "50px" }}
                borderRadius={"0"}
                borderRight={"0"}
                borderLeft={"0"}
                variant="unstyled"
                type="number"
                textAlign={"center"}
              ></Input>
              <Button
                color={"orange.400"}
                fontSize={"22px"}
                borderLeftRadius={"0"}
                borderLeft={"0"}
                width={{ lg: "20%", md: "100%" }}
                height={{ lg: "40px", base: "50px" }}
              >
                +
              </Button>
            </Box>
            <Button
              width={{ lg: "50%", md: "50%" }}
              height={{ lg: "40px", base: "50px" }}
              backgroundColor={"orange.400"}
              color={"#fff"}
              fontSize={"13px"}
              display={"flex"}
              gap={".5rem"}
              justifyContent={"center"}
              mb={"2rem"}
            >
              <AiOutlineShoppingCart />
              Add to cart
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

export default Shop;
