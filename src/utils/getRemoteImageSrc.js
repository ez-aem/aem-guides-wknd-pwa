import { URL } from "../CONSTANTS";

export default function getRemoteImageSrc(imagePath) {
  if (!imagePath.startsWith("http")) return `${URL}${imagePath}`;
  return imagePath;
}