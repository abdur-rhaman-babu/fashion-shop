import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FaRegTimesCircle } from "react-icons/fa";

const AddCart = () => {
  const { carts } = useContext(AuthContext);
  // const { productName, image, price, stock, description } = cart;
  console.log(carts);
  return (
    <div>
      {carts.map((cart) => (
        <div key={cart.id}>
          <div className="border flex gap-5 border-blue-300 p-4 rounded-lg space-y-3 shadow-lg">
            <div>
              <img className="mx-auto h-56" src={cart?.image} alt="" />
            </div>
            <div className="space-y-3">
              <h1 className="text-2xl font-bold">{cart?.productName}</h1>
              <h1 className="text-xl font-medium">{cart?.description}</h1>

              <div className="flex flex-grow items-center gap-6">
                <p>Price: ${cart?.stock ? <>{cart?.price}</> : ""}</p>
                <p
                  className={`border border-green-300 text-green-300 py-2 px-4 rounded-lg ${
                    !cart?.stock && "border-red-500 text-red-500"
                  }`}
                >
                  {cart?.stock ? "in Stock" : "out of stock"}
                </p>
              </div>
            </div>
            <div className="font-bold text-3xl cursor-pointer">
              <FaRegTimesCircle />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddCart;
