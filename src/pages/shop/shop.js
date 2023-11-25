import {
  Container,
  Flex,
  Img,
  Text,
  Box,
  Button,
  Input,
} from "@chakra-ui/react";
import React from "react";
import product1 from "../../asset/product1.jpg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Products } from "./products";
import Product from "./product";

const Shop = () => {
  return (
    <Container maxW={"7xl"} mt={"3rem"} px={"4rem"} position={"relative"}>
      <Flex gap={"7rem"} alignItems={"center"}>
        <Flex flexDir={"column"}>
          <Img
            src={product1}
            alt="product_1"
            width={"420px"}
            h={"420px"}
            borderRadius={"15px"}
          />
          <Flex mt={"2rem"} justifyContent={"space-between"}>
            {Products.map((item, index) => (
              <Product key={index} productImage={item.productImage} />
            ))}
          </Flex>
        </Flex>
        <Box width={"45%"}>
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
            fontSize={"38px"}
            lineHeight={"110%"}
            color={"blackAlpha.800"}
            mb={".5rem"}
          >
            fall limited edition sneakers
          </Text>
          <Text color={"blackAlpha.600"} fontSize={"16px"} mt={"1.5rem"}>
            These low-profile sneakers are your perfect causal companion.
            Featuring a durable outer rubber sole, they"ll withstand everything
            the weather can offer.
          </Text>
          <Flex gap={"1rem"} mt={"1.1rem"} alignItems={"center"}>
            <Text fontWeight={700} fontSize={"22px"} color={"blackAlpha.800"}>
              $125.00
            </Text>
            <Box
              padding={"0 5px"}
              backgroundColor={"orange.100"}
              borderRadius={"5px"}
            >
              <Text fontSize={"12px"} color={"orange.400"} fontWeight={600}>
                50%
              </Text>
            </Box>
          </Flex>
          <Text
            fontSize={"14px"}
            color={"blackAlpha.400"}
            textDecorationLine={"line-through"}
          >
            $250.00
          </Text>
        </Box>
      </Flex>
      <Flex
        position={"absolute"}
        gap={"1.5rem"}
        top={430}
        left={595}
        width={"40%"}
      >
        <Box>
          <Button
            color={"orange.400"}
            fontSize={"28px"}
            borderRightRadius={"0"}
            borderRight={"0"}
          >
            -
          </Button>
          <Input
            backgroundColor={"gray.100"}
            w={"40px"}
            height={"40px"}
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
          >
            +
          </Button>
        </Box>
        <Button
          width={"40%"}
          backgroundColor={"orange.400"}
          color={"#fff"}
          fontSize={"13px"}
          display={"flex"}
          gap={".5rem"}
          justifyContent={"center"}
        >
          <AiOutlineShoppingCart />
          Add to cart
        </Button>
      </Flex>
    </Container>
  );
};

export default Shop;
