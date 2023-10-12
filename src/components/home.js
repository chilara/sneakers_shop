import React from "react";
import Navbar from "./navbar";
import { Container } from "@chakra-ui/react";
import Content from "./content";

const Home = () => {
  return (
    <Container maxW={"7xl"} px={"3rem"}>
      <Navbar />
      <Content />
    </Container>
  );
};

export default Home;
