import { Link } from "react-router-dom";

import { Theme } from "../CONSTANTS";
import Image from "./Image";

const truncate = (text) => {
  const maxLength = 65;
  text = text.substr(0, maxLength);
  text = text.substr(0, Math.min(text.length, text.lastIndexOf(" "))) + "...";
  return text;
}

export default function Card({ _path, title, description, imgSrc, descriptionJSON }) {

  let descriptionText = false;
  if (descriptionJSON) {
    const filteredJSON = descriptionJSON.filter(({ nodeType }) => nodeType !== "header");
    if (filteredJSON.length > 0) descriptionText = truncate(filteredJSON[0].content[0].value);
  }

  return (
    <div style={styles.container}>
      <Link to={`/detail?_path=${_path}`} style={styles.link}>
        <Image imgSrc={imgSrc} title={title} />
        <h3 style={styles.title}>{title}</h3>
        {descriptionText && <p style={styles.description}>{descriptionText}</p>}
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
    marginTop: ".5rem",
    // fontFamily: "Source Sans Pro",
    // fontWeight: "bold",
    // fontSize: ".9rem",
  },
  description: {
    margin: 0,
  }
}