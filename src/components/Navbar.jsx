import React, { useRef } from "react";
import styles from "./navbar.module.css";

export default function Navbar({ handleSubmit }) {
  const searchEntryRef = useRef();

  const onSearch = (e) => {
    e.preventDefault();
    const entry = searchEntryRef.current.value;
    handleSubmit(entry);
    searchEntryRef.current.value = "";
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <i className="fab fa-youtube"></i>
        </div>
        <span className={styles.title}>YouTube</span>
        <form className={styles.formContainer} onSubmit={(e) => onSearch(e)}>
          <input className={styles.input} type="text" ref={searchEntryRef} />
          <button className={styles.searchBtn}>
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>
    </div>
  );
}
