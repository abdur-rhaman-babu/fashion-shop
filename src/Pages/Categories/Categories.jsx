import { Link, NavLink, useLocation } from "react-router-dom";

const Categories = ({ categories }) => {
  // console.log(categories);
  const { pathname } = useLocation();
  // console.log(location);
  return (
    <div>
      <div className="flex flex-col text-2xl uppercase bg-zinc-200 rounded-lg gap-4">
        <NavLink
          className ={` py-1 pl-2 duration-1000 hover:bg-blue-700 hover:py-1 hover:text-white
            ${pathname === "/fashions" && 'bg-blue-700 py-1 text-white'}
          `}
          to="/fashions"
        >
          All Product
        </NavLink>

        {categories.map((category) => (
          <NavLink
            className={({ isActive }) =>
              `${
                isActive ? "bg-blue-700 py-1 text-white" : ""
              } py-1 pl-2 duration-1000 hover:bg-blue-700 hover:py-1 hover:text-white`
            }
            to={`/fashions/category/${category.category}`}
            key={category.category}
          >
            {category.category}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
