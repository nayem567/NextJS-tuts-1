import React from "react";

const ProductDetails = ({params}) => {
  return (
    <div>
      <h1>Product Details {params.Id}</h1>
    </div>
  );
};

export default ProductDetails;
