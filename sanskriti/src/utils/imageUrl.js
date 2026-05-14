const BACKEND_URL = "https://araybhat-1.onrender.com";

export const getImageUrl = (imagePath) => {
  if (!imagePath) {
    return "";
  }

  if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
    return imagePath;
  }

  if (imagePath.startsWith("/")) {
    return `${BACKEND_URL}${imagePath}`;
  }

  return `${BACKEND_URL}/uploads/${imagePath}`;
};
