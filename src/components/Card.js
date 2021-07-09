import { Link } from "react-router-dom";

import { Theme } from "../CONSTANTS";
import getRemoteImageSrc from "../utils/getRemoteImageSrc";

const getDescriptionHTML = (html) => ({ __html: html });

export default function Card({ _path, title, description, imgSrc }) {

  return (
    <div style={styles.container}>
      <Link to={`/detail?_path=${_path}`} style={styles.link}>
        <img src={getRemoteImageSrc(imgSrc)} style={styles.image} alt={title} />
        <h5 style={styles.title}>{title}</h5>
        {description && <div dangerouslySetInnerHTML={getDescriptionHTML(description)}></div>}
      </Link>
    </div>
  )
}

const styles = {
  container: {

  },
  image: {
    width: "100%",
    maxWidth: "100%",
    height: "100px",
    objectFit: "cover",
  },
  link: {
    textDecoration: "none",
    color: Theme.colors.text,
  },
  title: {
    textTransform: "uppercase",
    marginTop: ".5rem"
  },
  description: {
    margin: 0,
  }
}