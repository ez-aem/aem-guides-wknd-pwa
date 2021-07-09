import FeaturedTile from "../components/FeaturedTile";
import { HOME_SCREEN_DATA } from "../CONSTANTS";
import useGraphQL from "../api/useGraphQL";
import ErrorScreen from "../screens/Error";

function AdventuresList(data) {
  if (!data) return <div>no data</div>;
  return data.adventureList.items.map((item, index) => (
    <FeaturedTile
      key={index}
      link={`/detail?_path=${item._path}`}
      title="Featured Adventure"
      subtitle={item.adventureTitle}
      imgSrc={item.adventurePrimaryImage._path || false}
    />
  ))
}
export default function Home() {
  let teaser = false;
  let teaserTitle = false;
  let teaserImageSrc = false;

  const { data, errorMessage } = useGraphQL(null, HOME_SCREEN_DATA);
  if (errorMessage) return <ErrorScreen error={errorMessage} />;

  if (data?.appByPath?.item) teaser = data.appByPath.item;
  if (teaser?.appTitle) teaserTitle = teaser.appTitle;
  if (teaser?.appHeroImage?._path) teaserImageSrc = teaser.appHeroImage._path;

  return (
    <div style={styles.container}>
      <FeaturedTile
        title={teaserTitle}
        imgSrc={teaserImageSrc}
        link="/adventures"
      />
      {AdventuresList(data)}
    </div>
  );
}

const styles = {
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  }
}