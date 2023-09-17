import React, { useEffect, useState } from "react";
import styles from "./note.module.css";
import { MdDelete } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";

const Note = ({
  title,
  content,
  index,
  notes,
  setNotes,
  color,
  setShowNotesData,
  setSelectedNote,
}) => {
  const handleDeleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  const handleClick = () => {
    setShowNotesData(true);
    setSelectedNote({ title, content, color });
  };

  return (
    <div style={{ background: color }} className={styles.note}>
      <h1>{title.length > 10 ? title.slice(0, 10).concat("...") : title}</h1>
      <p
        dangerouslySetInnerHTML={{
          __html:
            content.length > 20 ? content.slice(0, 20).concat("...") : content,
        }}
      />
      <div className={styles.buttonContainer}>
        <button onClick={handleClick}>
          <TbListDetails size={24} className={styles.icon} />
        </button>
        <button>
          <MdDelete size={24} onClick={() => handleDeleteNote(index)} />
        </button>
      </div>
    </div>
  );
};

export default Note;
