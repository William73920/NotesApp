"use client";
import React, { useEffect } from "react";
import styles from "./page.module.css";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase/firebase-config";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/authContext";

const Page = () => {
  const router = useRouter();
  const { currentUser, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && currentUser) {
      router.push("/");
    }
  }, [currentUser, isLoading]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return isLoading || (!isLoading && currentUser) ? (
    "loading"
  ) : (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.heading}>Register</div>
        <div className={styles.register}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="off"
              className={styles.email}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="off"
              className={styles.password}
            />
            <button className={styles.signup}>Sign Up</button>
          </form>
          <div className={styles.container2}>
            <span>Already have an account? </span>
            <Link className={styles.linkbutton} href="/login">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
