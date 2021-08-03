export default function getRemoteImageSrc(imagePath) {
  const { REACT_APP_PUBLIC_URI } = process.env;
  if (!imagePath) return false;
  if (!imagePath.startsWith("http")) return `${REACT_APP_PUBLIC_URI}${imagePath}`;
  return imagePath;
}