import { Theme } from "../CONSTANTS";
import AEMImage from "../components/aem/aem-image";
import AEMTitle from "../components/aem/aem-title";

export default function Search() {
  const pagePath = "/content/wknd-app/us/en/home/search";

  return (
    <div className="content" style={styles.container}>
      <div style={styles.searchBox}>
        <div style={styles.homepageHeroImage} className="homepage-hero-image-wrapper">
          <AEMImage key="search-image" styles={styles.homepageHeroImage} pagePath={pagePath} itemPath="root/image" />
        </div>
        <div style={styles.homepageHeroTitleSearch}>
          <div style={styles.homepageHeroTitle}>
            <AEMTitle key="search-title" styles={styles.homepageHeroTitle} pagePath={pagePath} itemPath="root/title" />
          </div>
          <input style={styles.homepageHeroSearch} placeholder="Find Adventures Near You" />
        </div>
        Search Box
      </div>
      <div style={styles.searchResults}>Search Results</div>
    </div>
  )
}

const styles = {
  container: {},
  searchBox: {},
  searchResults: {},
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
}