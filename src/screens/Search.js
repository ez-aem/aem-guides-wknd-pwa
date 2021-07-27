import React, { useState } from "react"
import { Theme } from "../CONSTANTS";
import AEMTitle from "../components/aem/aem-title";
import AEMText from "../components/aem/aem-text";
import AEMTeaser from "../components/aem/aem-teaser";
import AEMImage from "../components/aem/aem-image";
import AEMResponsiveGrid from "../components/aem/aem-responsive-grid";
import AEMCarousel from "../components/aem/aem-carousel";
import Error from "./Error";
import useGraphQL from "../api/useGraphQL";
import { Link } from 'react-router-dom';
import SearchByCategory from "../components/SearchByCategory";

export default function Search() {
  const pagePath = "/content/wknd-app/us/en/search";

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
      </div>
      <div style={styles.searchByCategory}>
        <SearchByCategory />
      </div>
    </div>
  )
}

const styles = {
  container: {},
  searchBox: {
    height: "10rem",
    minHeight: "10rem",
    position: "relative",
    overflow: "hidden"
  },
  searchResults: {
    padding: "1rem"
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
  searchByCategory: {
    padding: "1rem",
  }
}

// Render individual Adventure item
function AdventureItem(props) {

  //Must have title, path, and image
  if (!props || !props._path || !props.adventureTitle || !props.adventurePrimaryImage) {
    return null;
  }
  return (
    <li className="adventure-item">
      <Link to={`/adventure:${props._path}`}>
        <img className="adventure-item-image" src={props.adventurePrimaryImage._path}
          alt={props.adventureTitle} />
      </Link>
      <div className="adventure-item-length-price">
        <div className="adventure-item-length">{props.adventureTripLength}</div>
        <div className="adventure-item-price">{props.adventurePrice}</div>
      </div>
      <div className="adventure-item-title">{props.adventureTitle}</div>
    </li>
  );
}