import { useCart } from "../../context/cardContext";
import { getTotalCartAmount } from "../../utils/getTotalCartAmount";

export const PriceDetails = () => {
  const { cart } = useCart();

  const totalCartPrice = getTotalCartAmount(cart);

  const deliveryCharge = 49;

  return (
    <div className="w-[400px] h-[280px] bg-[#fafafa] p-4">
      <p className="text-2xl border-b p-2">Price Details</p>

      <div className="flex flex-col gap-5 border-b p-2">
        <div className="flex">
          <p>Price ${cart.length} items</p>
          <p className="ml-auto">Rs. {totalCartPrice}</p>
        </div>
        <div className="flex">
          <p>Delivery Charge</p>
          <p className="ml-auto">Rs. {deliveryCharge}</p>
        </div>
      </div>

      <div className="flex border-b p-2">
        <p>Total Amount</p>
        <p className="ml-auto">Rs. {totalCartPrice + deliveryCharge}</p>
      </div>

      <div className="p-2">
        <button className="button btn-icon bg-rose-600 cart-btn d-flex align-center justify-center gap cursor btn-margin text-slate-50">
          Place Order
        </button>
      </div>
    </div>
  );
};
