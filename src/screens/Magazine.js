import { Theme } from "../CONSTANTS";
import AEMTitle from "../components/aem/aem-title";

export default function Magazine() {
  const pagePath = "/content/wknd-app/us/en/home/magazine";

  return (
    <div className="content" style={styles.container}>
      <AEMTitle key="title" styles={styles.pageTitle} pagePath={pagePath} itemPath="root/title" />
    </div>
  )
}

const styles = {
  container: {},
  pageTitle: {
    color: Theme.colors.background,
    padding: ".5rem 1rem 1rem",
  },
}