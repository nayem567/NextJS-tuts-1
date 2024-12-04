import React from "react";

const ReviewDetail = ({params}) => {
  return (
    <div>
      <h1> Review {params.reviewId} for Product {params.Id} </h1>
    </div>
  );
};

export default ReviewDetail;
