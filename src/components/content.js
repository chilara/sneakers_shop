import { Container, Flex, Img, Text, Box } from "@chakra-ui/react";
import React from "react";
import product1 from "../asset/product1.jpg";

const Content = () => {
  return (
    <Container maxW={"7xl"} mt={"5rem"} px={"4rem"}>
      <Flex gap={"7rem"} alignItems={"center"}>
        <Img
          src={product1}
          alt="product_1"
          width={"450px"}
          h={"450px"}
          borderRadius={"15px"}
        />
        <Box width={"40%"}>
          <Text
            textTransform={"uppercase"}
            fontSize={"12px"}
            color={"orange.400"}
            fontWeight={600}
            mb={".5rem"}
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
          <Text color={"blackAlpha.600"}>
            These low-profile sneakers are your perfect causal companion.
            Featuring a durable outer rubber sole.
          </Text>
        </Box>
      </Flex>
    </Container>
  );
};

export default Content;
