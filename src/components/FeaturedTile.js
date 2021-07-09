import { Link } from "react-router-dom";

import { Theme } from "../CONSTANTS";
import getRemoteImageSrc from "../utils/getRemoteImageSrc";

export default function FeaturedTile(props) {
  const { title, imgSrc, subtitle, height, link } = props;
  const textColor = imgSrc ? Theme.colors.background : Theme.colors.text;
  const containerBackground = imgSrc ? `url(${getRemoteImageSrc(imgSrc)})` : "transparent";

  const styles = {
    container: {
      width: "100vw",
      background: containerBackground,
      height: height ? height : "auto",
      textDecoration: "none",
      display: "flex",
      flexDirection: "column",
      padding: link ? 0 : "20px",
    },
    link: {
      flex: 1,
      textDecoration: "none",
      padding: "20px",
    },
    title: {
      fontSize: "30px",
      color: textColor,
      fontWeight: "bold",
      textTransform: "uppercase",
      margin: 0,
    },
    subtitle: {
      fontSize: "16px",
      color: textColor,
      fontWeight: "bold",
      textTransform: "uppercase",
      margin: 0,
    }
  }

  if (imgSrc) styles.container.backgroundSize = "cover";
  if (!height) styles.container.flex = 1;

  if (link) {
    return (
      <div style={styles.container} className={imgSrc ? "" : "loading-skeleton"}>
        <Link to={link} style={styles.link}>
          <h2 style={styles.title}>{title}</h2>
          {subtitle && <h4 style={styles.subtitle}>{subtitle}</h4>}
        </Link>
      </div>
    )
  } else {
    return (
      <div style={styles.container}>
        <h2 style={styles.title}>{title}</h2>
        {subtitle && <h4 style={styles.subtitle}>{subtitle}</h4>}
      </div>
    )
  }
}