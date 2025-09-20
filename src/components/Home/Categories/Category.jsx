import { useEffect, useState } from "react";
import api_clients from "../../../services/api_clients";
import CategoryItems from "./CategoryItems";

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    api_clients.get("/categories").then((res) => setCategories(res.data));
  }, []);
  return (
    <section>
    <div className="py-12 px-4 max-w-7xl mx-auto">
            {/* Category Heading  */}
            <div className="flex justify-between items-center px-4 md:px-8 mb-4">
                <h2 className="text-3xl font-bold">Browse Categories</h2>
                <a href="" className="btn btn-secondary px-6 py-6 rounded-full">View All</a>
            </div>

            {/* Category Grid  */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-8 mb-4">
                {categories.map((category, index) => (
                <CategoryItems key={category.id} index={index} category={category} />
                ))}
            </div>
      </div>
    </section>
  );
};

export default Category;
