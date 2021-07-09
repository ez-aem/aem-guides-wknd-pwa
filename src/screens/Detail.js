import { useLocation } from "react-router-dom";

import useGraphQL from "../api/useGraphQL";
import { ARTICLE_DATA } from "../CONSTANTS";
import ErrorScreen from "../screens/Error";
import Image from "../components/Image";

const getDescriptionHTML = (html) => ({ __html: html });

export default function Detail() {

  const query = new URLSearchParams(useLocation().search);
  const _path = query.get("_path");
  const { data, errorMessage } = useGraphQL(null, `${ARTICLE_DATA}${_path}`);
  if (errorMessage) return <ErrorScreen error={errorMessage} />;

  const title = data?.adventureByPath?.item?.adventureTitle || false;
  const description = data?.adventureByPath?.item?.adventureDescription?.html || false;
  const imgSrc = data?.adventureByPath?.item?.adventurePrimaryImage?._path || false;
  console.log("data", data);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{title}</h1>
      <Image imgSrc={imgSrc} alt={title} />
      {description && <div style={styles.description} dangerouslySetInnerHTML={getDescriptionHTML(description)}></div>}
    </div>
  )
}

const styles = {
  container: {
    flex: 1,
    marginBottom: "60px",
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
  }
}