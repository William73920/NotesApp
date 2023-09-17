import React from "react";
import styles from "./notedetails.module.css";
import { AiOutlineClose } from "react-icons/ai";

const Notedetails = ({ setShowNotesData, selectedNote }) => {
  return (
    <div
      style={{ background: selectedNote.color }}
      className={styles.container}
    >
      <div className={styles.close} onClick={() => setShowNotesData(false)}>
        <AiOutlineClose size={24} />
      </div>
      <div className={styles.notes}>
        <h1 className={styles.title}>{selectedNote.title}</h1>
        <p
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: selectedNote.content }}
        ></p>
      </div>
    </div>
  );
};

export default Notedetails;
