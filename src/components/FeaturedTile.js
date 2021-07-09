import React from 'react';
import { Link } from "react-router-dom";

import { Theme } from "../CONSTANTS";
import getRemoteImageSrc from "../utils/getRemoteImageSrc";

export default function FeaturedTile(props) {
  const { title, imgSrc, subtitle, height, link = "/" } = props;
  const textColor = imgSrc ? Theme.colors.background : Theme.colors.text;
  const containerBackground = imgSrc ? `url(${getRemoteImageSrc(imgSrc)})` : "transparent";

  const styles = {
    container: {
      width: "100vw",
      height: height ? height : "auto",
      textDecoration: "none",
      display: "flex",
      flexDirection: "column",
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
    },
    imgBG: {
      flex: 1,
      background: containerBackground,
      padding: link ? 0 : "20px",
      display: "flex",
      backgroundSize: "cover",
    },
    titleSkeleton: {
      height: "2.5rem",
      width: "85%",
      boxShadow: "0 0 5px rgb(0 0 0 / 50%)",
    }
  }

  if (!height) styles.container.flex = 1;

  const content = () => (
    <>
      {!title && <div style={styles.titleSkeleton} className="loading-skeleton"></div>}
      {title && <h2 style={styles.title}>{title}</h2>}
      {subtitle && <h4 style={styles.subtitle}>{subtitle}</h4>}
    </>
  )

  const contentWrapper = () => {
    if (link) return <Link to={link} style={styles.link}>{content()}</Link>
    else return content();
  }

  return (
    <div style={styles.container} className={imgSrc ? "" : "loading-skeleton"}>
      <div style={styles.imgBG}>
        {contentWrapper()}
      </div>
    </div>
  )
}