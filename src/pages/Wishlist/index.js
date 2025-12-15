import { Navbar } from "../../components/Navbar";
import { useCart } from "../../context/cardContext";
import { WishlistCard } from "../../components/WishlistCard";

export const Wishlist = () => {
  const { favorite } = useCart();

  return (
    <>
      <Navbar />
      <main className="flex flex-wrap">
        <h1 className="text-3xl font-extrabold ">My Wishlist</h1>
        <div className="flex flex-wrap gap-8 justify-center pt-8">
          {favorite?.length > 0 &&
            favorite.map((product) => (
              <WishlistCard key={product.id} product={product} />
            ))}
        </div>
      </main>
    </>
  );
};
