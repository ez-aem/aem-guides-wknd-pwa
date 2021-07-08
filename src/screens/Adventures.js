import FeaturedTile from "../components/FeaturedTile";

export default function Adventures() {
  return (
    <div style={styles.container}>
      <FeaturedTile
        imgSrc="/content/dam/wknd/en/adventures/cycling-southern-utah/AdobeStock_221043703.jpg"
        title="WKND Adventures"
        height="100px"
      />
    </div>
  )
}

const styles = {
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    // width: "100vw"
  }
}