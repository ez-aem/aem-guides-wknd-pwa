import { useLocation } from "react-router-dom";

import useGraphQL from "../api/useGraphQL";
import { ARTICLE_DATA } from "../CONSTANTS";
import ErrorScreen from "../screens/Error";
import Image from "../components/Image";


export default function Detail() {

  const query = new URLSearchParams(useLocation().search);
  const _path = query.get("_path");
  const { data, errorMessage } = useGraphQL(null, `${ARTICLE_DATA}${_path}`);
  if (errorMessage) return <ErrorScreen error={errorMessage} />;

  const title = data?.adventureByPath?.item?.adventureTitle || false;
  const descriptionJSON = data?.adventureByPath?.item?.adventureDescription?.json || false;
  const imgSrc = data?.adventureByPath?.item?.adventurePrimaryImage?._path || false;

  return (
    <div style={styles.container} className="detail-screen">
      {!title && <div className="loading-skeleton" style={styles.titleSkeleton}></div>}
      {title && <h1 style={styles.title}>{title}</h1>}
      <Image imgSrc={imgSrc} alt={title} />
      <div style={styles.description}>
        {descriptionJSON && descriptionJSON.map((node, key) => {
          const Element = node.nodeType === "header" ? `${node.style}` : "p";
          return <Element key={key}>{node.content.map(({ value }) => value)}</Element>
        })}
      </div>
    </div>
  )
}

const styles = {
  container: {
    flex: 1,
  },
  title: {
    padding: "1rem",
    fontSize: "1.5rem",
    textTransform: "uppercase",
    maxWidth: "100%",
    margin: 0,
  },
  description: {
    padding: "1rem",
  },
  titleSkeleton: {
    height: "2.5rem",
    width: "85%",
    margin: "1rem"
  }
}