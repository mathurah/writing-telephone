import Head from "next/head";
import styles from "../styles/Prompt.module.css";

export default function Prompt() {
  return (
    <div className={styles.promptContainer}>
      <div>
        <p>
          In a future world where books have been outlawed, a group of teens
          form a secret book club where they meet to read and discuss their
          favorite novels.
        </p>
      </div>
    </div>
  );
}
