import { useState } from "react";
import FeaturedTile from "../components/FeaturedTile";
import useGraphQL from "../api/useGraphQL";
import Card from "../components/Card";
import ErrorScreen from "./Error";

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
  const [query, setQuery] = useState('');
  const persistentQuery = 'wknd/adventures-all';
  //Use a custom React Hook to execute the GraphQL query
  const { data, errorMessage } = useGraphQL(query, persistentQuery);

  if (errorMessage) return <ErrorScreen error={errorMessage} />;

  if (data?.adventureList?.items) adventuresList = data.adventureList.items;

  return (
    <div className="content" style={styles.container}>
      <FeaturedTile
        imgSrc="/content/dam/wknd/en/adventures/cycling-southern-utah/AdobeStock_221043703.jpg"
        title="WKND Adventures"
        height="100px"
      />
      <h2 style={styles.title}>Our Adventures</h2>
    </div>
  )
}
// {AdventuresList(adventuresList)}

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

function filterQuery(activity) {
  return `
    {
      adventureList (filter: {
        adventureActivity: {
          _expressions: [
            {
              value: "${activity}"
            }
          ]
        }
      }){
        items {
          _path
        adventureTitle
        adventurePrice
        adventureTripLength
        adventurePrimaryImage {
          ... on ImageRef {
            _path
            mimeType
            width
            height
          }
        }
      }
    }
  }
  `;
}