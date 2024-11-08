import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "../Card/Card";

const Fashion = () => {
  const [fashions, setFashion] = useState([]);
  const data = useLoaderData();
  const { category } = useParams();
  //   console.log(data)

  useEffect(() => {
    const filtered = [...data].filter(
      (fashion) => fashion.category === category
    );
    setFashion(filtered);
  }, [data, category]);
  return (
    <div>
      <h3 className="text-center my-3 font-bold text-3xl uppercase">{category}</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {fashions.map((fashion) => (
          <Card key={fashion.id} fashion={fashion} />
        ))}
      </div>
    </div>
  );
};

export default Fashion;
