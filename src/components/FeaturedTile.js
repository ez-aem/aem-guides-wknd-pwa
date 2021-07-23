import { Link } from "react-router-dom";

import { Theme } from "../CONSTANTS";
import getRemoteImageSrc from "../utils/getRemoteImageSrc";

export default function FeaturedTile(props) {
  const { title, imgSrc, subtitle, height, link = "/", contentWrapperStyles = {} } = props;
  const textColor = props.textColor ?
    props.textColor :
    imgSrc ?
      Theme.colors.background :
      Theme.colors.text;

  const styles = {
    container: {
      width: "100vw",
      maxWidth: "100%",
      height: height ? height : "auto",
      textDecoration: "none",
      display: "flex",
      flexDirection: "column",
    },
    contentWrapper: {
      ...contentWrapperStyles,
      padding: "20px",
      color: textColor
    },
    link: {
      flex: 1,
      textDecoration: "none",
    },
    title: {
      fontSize: "30px",
      color: "inherit",
      textTransform: "uppercase",
      margin: 0,
    },
    subtitle: {
      textTransform: "uppercase",
      fontSize: "16px",
      color: "inherit",
      margin: 0,
    },
    imgBG: {
      flex: 1,

      padding: link ? 0 : "20px",
      display: "flex",
    },
    titleSkeleton: {
      height: "2.5rem",
      width: "85%",
      boxShadow: "0 0 5px rgb(0 0 0 / 50%)",
    }
  }

  if (!height) styles.container.flex = 1;
  if (imgSrc) {
    styles.imgBG.background = `url(${getRemoteImageSrc(imgSrc)})`;
    styles.imgBG.backgroundSize = "cover";
  } else {
    styles.imgBG.backgroundColor = "transparent";
  }

  const content = () => (
    <>
      {!title && <div style={styles.titleSkeleton} className="loading-skeleton"></div>}
      {(title || subtitle) && <div style={styles.contentWrapper}>
        {title && <h2 style={styles.title}>{title}</h2>}
        {subtitle && <p style={styles.subtitle}>{subtitle}</p>}
      </div>}
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