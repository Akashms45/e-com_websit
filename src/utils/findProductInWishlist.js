export const findProductInWishlist = (favorite, id) =>
  favorite?.length > 0 && favorite.some((product) => product.id === id);
