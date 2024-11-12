import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  // console.log(categories);
  return (
    <div>
      <div className="flex flex-col text-2xl uppercase bg-zinc-200 rounded-lg gap-4">
        <NavLink
          className={({ isActive }) =>
            `${
              isActive ? "bg-blue-700 py-1 text-white" : ""
            } py-1 pl-2 duration-1000 hover:bg-blue-700 hover:py-1 hover:text-white`
          }
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
            to={`/category/${category.category}`}
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
