import React from 'react';
import styles from './styles.module.scss';
import { Banner, BoostYourLinksBlock, ShortenActionBlock, StatisticsSection } from "./components/molecules";

const title = "More than just shorter links";
const description = "Build your brand’s recognition and get detailed insights on how your links are performing.";
const buttonLabel = "Get Started";

const boostYourLinksBlockTitle = "Boost your links today";
const boostYourLinksBlockButton = "Get Started";

function App() {
  return (
    <div className={styles.App}>
      <Banner title={title} description={description} buttonLabel={buttonLabel} />
      <ShortenActionBlock />
      <StatisticsSection />
      <BoostYourLinksBlock title={boostYourLinksBlockTitle} buttonLabel={boostYourLinksBlockButton} />
    </div>
  );
}

export default App;
