import { Outlet, useLoaderData } from "react-router-dom";
import Categories from "../Categories/Categories";
import Banner from "../../components/Banner/Banner";

const Home = () => {
    const categories = useLoaderData()
    return (
        <div>
            <Banner/>
            <div className="font-bold text-4xl text-center">
                <h1>Choose Your Favourite Fashion</h1>
                <p className="text-base font-normal">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae vel veritatis quae quos sed tempore aspernatur repellat non iusto! Provident. </p>
            </div>
            <div className="lg:flex justify-between my-10 gap-5">
            <div className="lg:w-2/12 mt-14">
            <Categories categories = {categories}/>
            </div>
            <div className="lg:w-10/12">
            <Outlet/>
            </div>
            </div>
        </div>
    );
};

export default Home;