import React from "react";
import { Img } from "@chakra-ui/react";

const Product = ({ productImage }) => {
  return (
    <div>
      <Img
        src={productImage}
        alt="productImage"
        width={"85px"}
        h={"85px"}
        borderRadius={"8px"}
        cursor={"pointer"}
      />
    </div>
  );
};

export default Product;
