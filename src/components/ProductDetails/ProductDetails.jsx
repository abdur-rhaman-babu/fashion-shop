import { useLoaderData, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { fashionId } = useParams();
  const id = parseInt(fashionId);
  const fashions = useLoaderData();
  const fashion = fashions.find((fashion) => fashion.id === id);
  console.log(fashion);

  const { productName, image, price, stock, description } = fashion;
  return (
    <div>
      <div className="border flex gap-5 border-blue-300 p-4 rounded-lg space-y-3 shadow-lg">
        <div>
          <img className="mx-auto h-56" src={image} alt="" />
        </div>
        <div  className="space-y-3">
          <h1 className="text-2xl font-bold">{productName}</h1>
          <h1 className="text-xl font-medium">{description}</h1>

          <div className="flex flex-grow items-center gap-6">
            <p>Price: ${stock ? <>{price}</> : ""}</p>
            <p
              className={`border border-green-300 text-green-300 py-2 px-4 rounded-lg ${
                !stock && "border-red-500 text-red-500"
              }`}
            >
              {stock ? "in Stock" : "out of stock"}
            </p>
          </div>
            <button className="font-bold py-2 px-4 rounded-lg bg-blue-700 text-white">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
