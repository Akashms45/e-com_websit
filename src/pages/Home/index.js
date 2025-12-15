import { Navbar } from "../../components/Navbar";
import { useEffect, useState } from "react";
import { getAllProduct } from "../../api/getAllProduct";
import { Cards } from "../../components/cards";
import { useCart } from "../../context/cardContext";
import { getAllCategories } from "../../api/getAllCategories";
import { getCategoriesProduct } from "../../utils/getCategoriesProduct";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const { cart } = useCart();
  console.log({ cart });

  useEffect(() => {
    (async () => {
      const products = await getAllProduct();
      const categories = await getAllCategories();
      const updatedCategory = [...categories, { id: 0, name: "all" }];
      setProducts(products);
      setCategories(updatedCategory);
    })();
  }, []);

  const onCategoriClick = (categories) => {
    setSelectedCategory(categories);
  };

  const filterCategories = getCategoriesProduct(products, selectedCategory);
  return (
    <>
      <Navbar />
      <main className=" gap-8 ">
        <div className="flex flex-wrap gap-6 justify-center p-3">
          {categories?.length > 0 &&
            categories.map((categorie) => (
              <div
                onClick={() => onCategoriClick(categorie.name)}
                className="flex p-2 bg-rose-300  rounded-md hover:cursor-pointer text-black font-semibold"
              >
                {categorie.name}
              </div>
            ))}
        </div>
        <div className="flex flex-wrap justify-center pt-6 gap-8">
          {filterCategories?.length > 0 &&
            filterCategories.map((product) => (
              <Cards key={product.id} product={product} />
            ))}
        </div>
      </main>
    </>
  );
};
