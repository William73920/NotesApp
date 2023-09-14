"use client";
import React from "react";
import styles from "./footer.module.css";
import { LiaSignOutAltSolid } from "react-icons/lia";
import { useAuth } from "@/app/context/authContext";

const Footer = () => {
  const { signOut } = useAuth();
  return (
    <div className={styles.footer}>
      <button onClick={signOut}>
        <LiaSignOutAltSolid size={24} />
      </button>
    </div>
  );
};

export default Footer;
