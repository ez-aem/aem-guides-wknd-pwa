import { useLocation } from "react-router-dom";

export default function Detail() {
  let query = new URLSearchParams(useLocation().search);
  return <h2>Detail Query: {query.get("_path")}</h2>
}