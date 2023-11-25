import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Navbar from "../src/components/navbar";
import Cart from "./pages/cart/cart";
import Shop from "./pages/shop/shop";
import { Container } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <ChakraProvider>
      <Container maxW={"7xl"} px={"4rem"}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </Container>
    </ChakraProvider>
  );
}

export default App;
