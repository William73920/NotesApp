import React, { useState } from "react";
import styles from "./newnote.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { colors } from "@/app/utils/colors";
import { useAuth } from "@/app/context/authContext";
import { BsCheck2 } from "react-icons/bs";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const Newnote = ({ showMenu, setShowMenu, setNotes, notes }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { currentUser } = useAuth();
  const [selectedColor, setSelectedColor] = useState("#FFFFFF");

  const handleColor = (color) => {
    setSelectedColor(color);
  };

  const handleSubmit = () => {
    const newNote = {
      title,
      content,
      selectedColor,
      dateCreated: new Date().toLocaleString(),
    };
    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
    setShowMenu(false);
  };

  const modules = {
    toolbar: [
      [{ size: [] }],
      ["bold", "italic", "underline", "strike"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
    ],
    clipboard: {
      matchVisual: false,
    },
  };

  return (
    <div className={styles.container}>
      <div className={styles.close} onClick={() => setShowMenu(false)}>
        <AiOutlineClose />
      </div>
      <input
        className={styles.title}
        type="text"
        placeholder="Enter Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <ReactQuill
        theme="snow"
        value={content}
        onChange={setContent}
        placeholder="typing..."
        modules={modules}
      />

      <div className={styles.bottom}>
        <div className={styles.colorsContainer}>
          {colors.map((color) => (
            <span
              style={{ backgroundColor: color }}
              className={styles.colors}
              onClick={() => handleColor(color)}
              key={color}
            >
              {selectedColor === color && <BsCheck2 size={15} color="black" />}
            </span>
          ))}
        </div>

        <button
          className={styles.add}
          disabled={title === "" && content === ""}
          onClick={handleSubmit}
        >
          <AiOutlinePlus size={24} />
        </button>
      </div>
    </div>
  );
};

export default Newnote;
