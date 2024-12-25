
export const generateMetadata = async ({params}) =>{

  const title = await new Promise((resolve) =>{
    setTimeout(() =>{
      resolve(`iPhone ${params.productId}`)
    }, 100);
  });

  return{
    title: `Product ${title}`
  }
}

const ProductDetails = ({params}) => {
  return (
    <div>
      <h1>Product Details {params.productId}</h1>
    </div>
  );
};

export default ProductDetails;
