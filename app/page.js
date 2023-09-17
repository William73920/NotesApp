"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import { useAuth } from "./context/authContext";
import { useRouter } from "next/navigation";
import Note from "./components/Note/Note";
import Search from "./components/Search/Search";
import Newnote from "./components/NewNote/Newnote";
import Notedetails from "./components/NoteDetails/Notedetails";
import Loader from "./components/Loader/Loader";

export default function Home() {
  const { currentUser, isLoading } = useAuth();
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [ascending, setAscending] = useState(true);
  const [showNotesData, setShowNotesData] = useState(false);
  const [selectedNote, setSelectedNote] = useState({
    title: "",
    content: "",
    color: "",
  });

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem(currentUser));

    setNotes(storedNotes);
  }, [currentUser]);

  useEffect(() => {
    localStorage.setItem(currentUser, JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    if (!isLoading && !currentUser) {
      router.push("/login");
    }
  }, [currentUser, isLoading]);

  return !isLoading && !currentUser ? (
    <Loader />
  ) : (
    <main className={styles.body}>
      <Header />
      <Search setSearchText={setSearchText} setAscending={setAscending} />
      {showNotesData && (
        <Notedetails
          setShowNotesData={setShowNotesData}
          selectedNote={selectedNote}
        />
      )}

      {showMenu && (
        <Newnote
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          setNotes={setNotes}
          notes={notes}
        />
      )}
      <div className={styles.container}>
        {notes
          ?.sort((a, b) => {
            const dateA = new Date(a.dateCreated);
            const dateB = new Date(b.dateCreated);
            if (ascending) {
              return dateA - dateB;
            } else {
              return dateB - dateA;
            }
          })
          .filter((note) => note.title.toLowerCase().includes(searchText))
          .map((note, index) => (
            <Note
              key={index}
              setSelectedNote={setSelectedNote}
              color={note.selectedColor}
              title={note.title}
              content={note.content}
              index={index}
              notes={notes}
              setNotes={setNotes}
              showNotesData={showNotesData}
              setShowNotesData={setShowNotesData}
            />
          ))}
      </div>
      <Footer setShowMenu={setShowMenu} />
    </main>
  );
}
