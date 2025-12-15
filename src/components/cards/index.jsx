import { useCart } from "../../context/cardContext";
import { findProductInCart } from "../../utils/findProductInCart";
import { findProductInWishlist } from "../../utils/findProductInWishlist";
import { useNavigate } from "react-router-dom";

export const Cards = ({ product }) => {
  const navigate = useNavigate();
  const { favorite, cart, cartDispatch } = useCart();

  const isProductInCart = findProductInCart(cart, product.id);
  const isProductInWishlist = findProductInWishlist(favorite, product.id);

  // ✅ identify logged-in user
  const currentUser = localStorage.getItem("currentUser");

  const onCartClick = () => {
    if (!currentUser) {
      navigate("/auth/login");
      return;
    }

    if (!isProductInCart) {
      const updatedCart = [...cart, product];

      localStorage.setItem(`cart_${currentUser}`, JSON.stringify(updatedCart));

      cartDispatch({
        type: "ADD_TO_CART",
        payload: { product },
      });
    } else {
      navigate("/cart");
    }
  };

  const onWishlistClick = () => {
    if (!currentUser) {
      navigate("/auth/login");
      return;
    }

    if (!isProductInWishlist) {
      const updatedWishlist = [...favorite, product];

      localStorage.setItem(
        `wishlist_${currentUser}`,
        JSON.stringify(updatedWishlist)
      );

      cartDispatch({
        type: "ADD_TO_WISHLIST",
        payload: { product },
      });
    } else {
      navigate("/wishlist");
    }
  };

  return (
    <div className="card card-vertical d-flex direction-column relative shadow">
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
            {isProductInWishlist ? "Go To Wishlist" : "Add To Wishlist"}
          </button>
        </div>
      </div>
    </div>
  );
};
