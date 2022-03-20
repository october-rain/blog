import React from "react";
import clsx from "clsx";
import styles from "./index.module.scss";
import SvgBackground from "@site/static/img/mountains.svg";

const HomepageHeader = () => {
  return (
    <div className={clsx("col col--4", styles.wrapper)}>
      <div className={styles.slogan}>
        <div>
          Welcome to
          <span>OctoberRain</span>
          's Channel ~
        </div>
        <div className={styles.subTitle}>计算机编程爱好者, 深耕前端</div>
      </div>
      <div className={styles.svgBackground}>
        <SvgBackground />
      </div>
    </div>
  );
};

export default HomepageHeader;
