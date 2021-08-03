import { useState } from "react";
import AEMTitle from "../components/aem/aem-title";
import AEMText from "../components/aem/aem-text";
import AEMTeaser from "../components/aem/aem-teaser";
import AEMImage from "../components/aem/aem-image";
import AEMResponsiveGrid from "../components/aem/aem-responsive-grid";
import AEMCarousel from "../components/aem/aem-carousel";
import Card from "../components/Card";
import useGraphQL from "../api/useGraphQL";
import ErrorScreen from "../screens/Error";

function AdventuresList(data) {
  if (!data) return false;

  return (
    <div style={styles.list}>
      {data.map((item, index) => {
        const _path = item._path;
        const title = item?.adventureTitle || false;
        const imgSrc = item?.adventurePrimaryImage?._path || false;
        return (
          <div style={styles.adventureCard} key={index}>
            <Card
              _path={_path}
              title={title}
              imgSrc={imgSrc}
            />
          </div>
        );
      })}
    </div>
  )
}

const { REACT_APP_CONTENT_PATH } = process.env;
const pagePath = `${REACT_APP_CONTENT_PATH}/home/magazine`;

export default function Magazine() {
  let adventuresList = false;
  const [query, setQuery] = useState('');
  const persistentQuery = 'wknd/adventures-all';
  const { data, errorMessage } = useGraphQL(query, persistentQuery);

  if (errorMessage) return <ErrorScreen error={errorMessage} />

  if (data?.adventureList?.items) adventuresList = data.adventureList.items;

  return (
    <div className="content" style={styles.container}>
      <div style={styles.pageTitle}>
        <AEMTitle key="title" pagePath={pagePath} itemPath="root/title" />
      </div>
      {adventuresList && AdventuresList(adventuresList)}
    </div>
  )
}

const styles = {
  container: {},
  pageTitle: {
    padding: "1rem",
  },
  adventureCard: {
    padding: "1rem",
  }
}