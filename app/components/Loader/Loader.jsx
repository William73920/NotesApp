import React from "react";
import { Hourglass } from "react-loader-spinner";
import styles from "./loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <Hourglass
        visible={true}
        height="80"
        width="80"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={["#306cce", "#72a1ed"]}
      />
    </div>
  );
};

export default Loader;
