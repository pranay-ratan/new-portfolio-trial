"use client";  // ✅ Ensure this is at the top

import Link from "next/link";
import styles from "./posts/styles.module.css";  // ✅ Ensure correct path
import { useState } from "react";

export default function PageHeader() {  // ✅ Make sure this is exported correctly
  const [clicked, setClicked] = useState(false);

  return (
    <header className={styles.header}>
      <Link href="/">Home</Link>
      <button onClick={() => setClicked(!clicked)}>
        {clicked ? "Clicked!" : "Click Me"}
      </button>
    </header>
  );
}
