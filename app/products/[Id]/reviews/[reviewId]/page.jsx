import React from "react";
import { notFound } from "next/navigation";

const ReviewDetail = ({ params }) => {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }

  return (
    <div>
      <h1>
        Review {params.reviewId} for Product {params.Id}{" "}
      </h1>
    </div>
  );
};

export default ReviewDetail;
