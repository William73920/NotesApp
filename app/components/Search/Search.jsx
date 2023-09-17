"use client";
import React, { useState } from "react";
import styles from "./search.module.css";
import { FcFilledFilter } from "react-icons/fc";
import ClickAwayListener from "react-click-away-listener";

const Search = ({ setSearchText, setAscending }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClickAway = () => {
    setShowMenu(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={styles.container}>
        <input
          type="text"
          placeholder="Type to search Notes"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <FcFilledFilter
          size={24}
          className={styles.filter}
          onClick={() => setShowMenu(true)}
        />
        {showMenu && (
          <div className={styles.menu}>
            <span
              className={styles.filterOptions}
              onClick={() => setAscending(true)}
            >
              Ascending
            </span>
            <span
              className={styles.filterOptions}
              onClick={() => setAscending(false)}
            >
              Descending
            </span>
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
};

export default Search;
