// utils/lazyImage.js
const lazyImage = (src) => {
  if (typeof IntersectionObserver === "undefined") {
    return src; // No lazy loading support
  }

  const img = new Image();
  img.src = src;
  return img.src;
};

export default lazyImage;
