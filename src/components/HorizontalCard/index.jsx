import { useCart } from "../../context/cardContext";
import { findProductInWishlist } from "../../utils/findProductInWishlist";
import { useNavigate } from "react-router-dom";

export const HorizontalCard = ({ product }) => {
  const navigate = useNavigate();
  const { favorite, cartDispatch } = useCart();
  const isProductInWishlist = findProductInWishlist(favorite, product.id);

  const onWishlistClickRemove = () => {
    cartDispatch({
      type: "REMOVE_FROM_CART",
      payload: { id: product.id },
    });
  };

  const onWishlistClick = () => {
    isProductInWishlist &&
      cartDispatch({
        type: "MOVE_TO_WISHLIST",
        payload: { product },
      });
  };
  return (
    <div className="card-horizontal d-flex shadow w-[750px] h-[200px]">
      <div className="card-hori-image-container relative p-2">
        <img
          className="card-image object-contain"
          src={product.images[0]}
          alt="shoes"
        />
      </div>
      <div className="card-details d-flex direction-column">
        <div className="card-description">
          <p className="card-des">{product.title}</p>
          <p className="card-price">Rs. {product.price}</p>
        </div>
        <div className="quantity-container d-flex gap">
          <p className="q-title">Quantity: </p>
          <div className="count-container d-flex align-center gap">
            <button className="count">-</button>
            <span className="count-value">1</span>
            <button className="count">+</button>
          </div>
        </div>
        <div className="cta-btn d-flex gap">
          <div className="cta-btn">
            <button
              onClick={onWishlistClickRemove}
              className="button hori-btn bg-rose-600 btn-icon d-flex align-center justify-center gap cursor btn-margin text-slate-50"
            >
              <span className="material-symbols-outlined">
                remove_shopping_cart
              </span>
              Remove From Cart
            </button>
          </div>
          <div className="cta-btn">
            <button
              onClick={onWishlistClick}
              className="button hori-btn btn-outline-primary btn-icon d-flex align-center justify-center gap cursor btn-margin"
            >
              Move to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
