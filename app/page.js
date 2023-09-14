"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useEffect } from "react";
import { useAuth } from "./context/authContext";
import { useRouter } from "next/navigation";

export default function Home() {
  const { currentUser, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !currentUser) {
      router.push("/login");
    }
  }, [currentUser, isLoading]);

  return (
    <main>
      <Header />
      <Footer />
    </main>
  );
}
