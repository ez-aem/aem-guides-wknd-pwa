import React from 'react';
import getRemoteImageSrc from "../utils/getRemoteImageSrc";

export default function Image({ imgSrc, title }) {

  return (
    <div style={styles.imageContainer} className="loading-skeleton">
      {imgSrc && <img src={getRemoteImageSrc(imgSrc)} style={styles.image} alt={title} />}
    </div>
  )
}

const styles = {
  imageContainer: {
    position: "relative",
    paddingTop: "55%",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    maxWidth: "100%",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    objectFit: "cover"
  },
}