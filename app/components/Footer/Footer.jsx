"use client";
import React, { useState } from "react";
import styles from "./footer.module.css";
import { LiaSignOutAltSolid } from "react-icons/lia";
import { useAuth } from "@/app/context/authContext";
import { FaNotesMedical } from "react-icons/fa";
import Newnote from "../NewNote/Newnote";

const Footer = ({ setShowMenu }) => {
  const { signOut } = useAuth();
  return (
    <div className={styles.footer}>
      <button onClick={signOut}>
        <LiaSignOutAltSolid size={24} />
      </button>
      <button onClick={() => setShowMenu(true)}>
        <FaNotesMedical size={24} />
      </button>
    </div>
  );
};

export default Footer;
