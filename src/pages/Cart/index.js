import { Navbar } from "../../components/Navbar";
import { useCart } from "../../context/cardContext";
import { HorizontalCard } from "../../components/HorizontalCard";
import { PriceDetails } from "../../components/PriceDetails";
import { useNavigate } from "react-router-dom";

export const Cart = ({ product }) => {
  const { cart } = useCart();

  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <main className="flex flex-col  pt-4 items-center">
        <h1 className="text-3xl font-extrabold">My Cart</h1>
        {cart.length > 0 ? (
          <>
            <div className="flex gap-8">
              <div className="pt-4 flex flex-col gap-4">
                {cart?.length > 0 &&
                  cart.map((product) => (
                    <HorizontalCard key={product.id} product={product} />
                  ))}
              </div>

              <PriceDetails />
            </div>
          </>
        ) : (
          <>
            <div>
              <p
                onClick={() => navigate("/")}
                className="underline p-2 text-2xl hover:cursor-pointer text-slate-700"
              >
                Click Here To Add Items
              </p>
            </div>
          </>
        )}
      </main>
    </>
  );
};
