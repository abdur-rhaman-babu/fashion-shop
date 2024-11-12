import { Outlet, useLoaderData } from "react-router-dom";
import Categories from "../Categories/Categories";


const Fashions = () => {
  const categories = useLoaderData()
  return (
    <>
      <div>
      <div className="lg:flex justify-between my-10 gap-5">
        <div className="lg:w-2/12 mt-14">
          <Categories categories={categories} />
        </div>
        <div className="lg:w-10/12">
          <Outlet />
        </div>
      </div>
      </div>

    </>
  );
};

export default Fashions;
