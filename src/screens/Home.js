import { Link } from "react-router-dom";

import "./Home.css";

import FeaturedTile from "../components/FeaturedTile";
import { Theme } from "../CONSTANTS";
import useGraphQL from "../api/useGraphQL";
import ErrorScreen from "../screens/Error";
import AEMTitle from "../components/aem/aem-title";
import AEMText from "../components/aem/aem-text";
import AEMTeaser from "../components/aem/aem-teaser";
import AEMImage from "../components/aem/aem-image";
import AEMResponsiveGrid from "../components/aem/aem-responsive-grid";
import AEMCarousel from "../components/aem/aem-carousel";


function AdventuresList(data) {
  if (!data) return <FeaturedTile />;
  return data.adventureList.items.map((item, index) => (
    <div style={{ width: "85vw" }}>
      <FeaturedTile
        key={index}
        link={`/detail?_path=${item._path}`}
        height="100%"
        title={item.adventureTitle}
        imgSrc={item.adventurePrimaryImage._path || false}
        contentWrapperStyles={{
          backgroundColor: "rgba(0,0,0,.5)",
          width: "50%",
          height: "100%",
        }}
        textColor={Theme.colors.text}
      />
    </div>
  ))
}

export default function Home() {
  // const persistentQuery = "wknd/adventures-all";
  // const { data, errorMessage } = useGraphQL(null, persistentQuery);
  const pagePath = "/content/wknd-app/us/en/home";

  // if (errorMessage) return <ErrorScreen error={errorMessage} />;

  return (
    <div className="content" style={styles.container}>
      <Link to="/search" style={styles.homepageHero}>
        <div style={styles.homepageHeroImage} className="homepage-hero-image-wrapper">
          <AEMImage key="search-image" styles={styles.homepageHeroImage} pagePath={pagePath} itemPath="root/image" />
        </div>
        <div style={styles.homepageHeroTitleSearch}>
          <div style={styles.homepageHeroTitle}>
            <AEMTitle key="search-title" styles={styles.homepageHeroTitle} pagePath={pagePath} itemPath="root/title" />
          </div>
          <input style={styles.homepageHeroSearch} placeholder="Find Adventures Near You" />
        </div>
      </Link>
      <Link to="/magazine" style={styles.homepageHero}>
        <div style={styles.homepageHeroImage} className="homepage-hero-image-wrapper">
          <AEMImage key="featured-article-image" styles={styles.homepageHeroImage} pagePath={pagePath} itemPath="root/image-featured-articles" />
        </div>
        <div style={styles.homepageHeroTitleSearch}>
          <div style={{ ...styles.homepageHeroTitle, textAlign: "left", paddingLeft: "1rem" }}>
            <AEMTitle key="featured-article-title" styles={styles.homepageHeroTitle} pagePath={pagePath} itemPath="root/title-featured-articles" />
          </div>
        </div>
      </Link>
    </div>
  );
}
//       <div style={styles.adventureList}>
//         {AdventuresList(data)}
//       </div>

const styles = {
  container: {
  },
  homepageHero: {
    flex: 1,
    position: "relative",
  },
  homepageHeroTitleSearch: {
    position: "absolute",
    top: ".5rem",
    left: 0,
    right: 0,
    marginTop: ".5rem",
    textAlign: "center",
    zIndex: 10,
  },
  homepageHeroTitle: {
    color: Theme.colors.background,
  },
  homepageHeroImage: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  homepageHeroSearch: {
    gridArea: "overlay",
    alignSelf: "flex-start",
    justifySelf: "center",
    padding: ".5rem 1rem",
    marginTop: ".25rem",
    borderRadius: "5rem",
    border: "none",
    boxShadow: "0 0 5px rgba(0,0,0,.1)",
  },
  adventureListContainer: {
    overflow: "hidden",
    flex: 1,
  },
  adventureList: {
    display: "flex",
    flexDirection: "row",
    overflowX: "auto"
  },
  carousel: {},
}