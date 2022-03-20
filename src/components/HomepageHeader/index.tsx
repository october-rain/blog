import React from "react";
import clsx from "clsx";
import styles from "./index.module.scss";
import SvgBackground from '@site/static/img/mountains.svg'

const HomepageHeader = () => {
  return <header className={clsx("col col--4")}>
    <h1 className={clsx(styles.slogan)}>Welcome to my Blog !</h1>
    <SvgBackground />
  </header>;
};

export default HomepageHeader;