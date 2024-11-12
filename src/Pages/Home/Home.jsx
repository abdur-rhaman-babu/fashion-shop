import { useLoaderData, useNavigate } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";

const Home = () => {
  const fashions = useLoaderData();
  const navigate = useNavigate()
  return (
    <div>
      <Banner />
      <div className="font-bold text-4xl text-center">
        <h1>Choose Your Favourite Fashion</h1>
        <p className="text-base font-normal">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          vel veritatis quae quos sed tempore aspernatur repellat non iusto!
          Provident.{" "}
        </p>
      </div>
      <div className="my-14">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5">
          {fashions.slice(0, 8).map((fashion) => (
            <Card key={fashion.id} fashion={fashion} />
          ))}
        </div>
      </div>
      <div className="text-center mb-5">
        <button onClick={()=>navigate('/fashions')} className="font-bold bg-blue-700 text-white py-2 px-4 rounded-lg">View More</button> 
      </div>
    </div>
  );
};

export default Home;
