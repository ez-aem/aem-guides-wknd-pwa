export default function getRemoteImageSrc(imagePath) {
  const { REACT_APP_PUBLIC_URI } = process.env;
  if (!imagePath) return false;
  if (!imagePath.startsWith("http")) {
    imagePath = `${REACT_APP_PUBLIC_URI}${imagePath}`;
    if (imagePath.includes("//content")) imagePath = imagePath.replace("//content", "/content");
  }
  return imagePath;
}