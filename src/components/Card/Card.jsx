import { Link } from "react-router-dom";

const Card = ({ fashion }) => {
  const { productName, image, price, stock,id } = fashion;
  return (
    <div className="border flex flex-col border-blue-300 p-4 rounded-lg space-y-3 shadow-lg">
      <img className="mx-auto h-56" src={image} alt="" />
      <h1 className="text-2xl font-bold">{productName}</h1>
      <div className="flex flex-grow items-center justify-between">
        <p>Price: ${stock ? <>{price}</> : ''}
        </p>
        <p
          className={`border border-green-300 text-green-300 py-2 px-4 rounded-lg ${
            !stock && "border-red-500 text-red-500"
          }`}
        >
          {stock ? "in Stock" : "out of stock"}
        </p>
      </div>
      <Link to={`/fashion/${id}`}>
      <button className="bg-blue-700 py-2 px-4 rounded-lg text-white font-bold">
        Show Details
      </button>
      </Link>
    </div>
  );
};

export default Card;
