"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { useAuth } from "../context/authContext";
import { useRouter } from "next/navigation";
import { auth, provider } from "../firebase/firebase-config";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import Loader from "../components/Loader/Loader";

const Page = () => {
  const [email, setEmail] = useState("");
  const { currentUser, isLoading } = useAuth();
  const router = useRouter();
  const [error, setError] = useState("");

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
      await signInWithEmailAndPassword(auth, email, password);
      setError("");
    } catch (error) {
      setError("Invalid login credentials");
    }
  };

  return isLoading || (!isLoading && currentUser) ? (
    <Loader />
  ) : (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.heading}>Login</div>
        <div className={styles.register}>
          <form onSubmit={handleSubmit} className={styles.form_container}>
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
            {error && <div>{error}</div>}
            <button className={styles.signup}>Sign In</button>
          </form>
          <div className={styles.container2}>
            <span>Don't have an account? </span>
            <Link className={styles.linkbutton} href="/register">
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
