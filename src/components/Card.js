import { Link } from "react-router-dom";

import { Theme } from "../CONSTANTS";
import Image from "./Image";

const getDescriptionHTML = (html) => ({ __html: html });

export default function Card({ _path, title, description, imgSrc }) {

  return (
    <div style={styles.container}>
      <Link to={`/detail?_path=${_path}`} style={styles.link}>
        <Image imgSrc={imgSrc} title={title} />
        <h5 style={styles.title}>{title}</h5>
        {description && <div dangerouslySetInnerHTML={getDescriptionHTML(description)}></div>}
      </Link>
    </div>
  )
}

const styles = {
  container: {
    flex: 1,
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