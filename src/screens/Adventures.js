import FeaturedTile from "../components/FeaturedTile";

import useGraphQL from "../api/useGraphQL";
import { ADVENTURES_DATA } from "../CONSTANTS";
import Card from "../components/Card";
import ErrorScreen from "../screens/Error";

function AdventuresList(data) {
  if (!data) return false;

  return (
    <div style={styles.list}>
      {data.map((item, index) => {
        const _path = item._path;
        const title = item?.adventureTitle || false;
        const description = item?.adventureDescription?.html || false;
        const descriptionJSON = item?.adventureDescription?.json || false;
        const imgSrc = item?.adventurePrimaryImage?._path || false;
        return (
          <Card
            _path={_path}
            title={title}
            description={description}
            descriptionJSON={descriptionJSON}
            imgSrc={imgSrc}
            key={index}
          />
        );
      })}
    </div>
  )
}

export default function Adventures() {
  let adventuresList = false;
  const { data, errorMessage } = useGraphQL(null, ADVENTURES_DATA);
  if (errorMessage) return <ErrorScreen error={errorMessage} />;

  if (data?.adventureList?.items) adventuresList = data.adventureList.items;

  return (
    <div style={styles.container}>
      <FeaturedTile
        imgSrc="/content/dam/wknd/en/adventures/cycling-southern-utah/AdobeStock_221043703.jpg"
        title="WKND Adventures"
        height="100px"
      />
      <h2 style={styles.title}>Our Adventures</h2>
      {AdventuresList(adventuresList)}
    </div>
  )
}

const styles = {
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    marginBottom: "6rem",
  },
  title: {
    padding: "1rem 1rem 0",
    margin: 0,
    textTransform: "uppercase",
  },
  list: {
    padding: "1rem",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "1rem",
  }
}