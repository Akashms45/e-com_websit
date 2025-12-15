import { useCart } from "../../context/cardContext";
import { findProductInCart } from "../../utils/findProductInCart";
import { useNavigate } from "react-router-dom";

export const WishlistCard = ({ product }) => {
  const navigate = useNavigate();
  const { cart, cartDispatch } = useCart();

  const isProductInCart = findProductInCart(cart, product.id);

  const onCartClick = () => {
    if (!isProductInCart) {
      // ✅ reducer will handle state + localStorage
      cartDispatch({
        type: "ADD_TO_CART",
        payload: { product },
      });
    } else {
      navigate("/cart");
    }
  };

  const onWishlistClick = () => {
    // ✅ reducer handles localStorage sync
    cartDispatch({
      type: "REMOVE_FROM_WISHLIST",
      payload: { id: product.id },
    });
  };

  return (
    <div className="card card-vertical d-flex direction-column relative shadow w-[400px]">
      <div className="card-image-container pt-2">
        <img
          className="card-image object-contain h-48 w-96"
          src={product.images[0]}
          alt={product.title}
        />
      </div>

      <div className="card-details">
        <div className="card-description">
          <p className="card-des">{product.title}</p>
          <p className="card-price">Rs. {product.price}</p>
        </div>

        <div className="cta-btn">
          <button
            onClick={onCartClick}
            className="button btn-icon bg-rose-600 cart-btn d-flex align-center justify-center gap cursor btn-margin text-slate-50"
          >
            <span className="material-symbols-outlined text-3xl">
              {isProductInCart ? "shopping_cart_checkout" : "shopping_cart"}
            </span>
            {isProductInCart ? "Go To Cart" : "Add To Cart"}
          </button>

          <button
            onClick={onWishlistClick}
            className="button btn-icon bg-rose-600 cart-btn d-flex align-center justify-center gap cursor btn-margin text-slate-50"
          >
            <span className="material-symbols-outlined text-3xl">favorite</span>
            Remove From Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};
