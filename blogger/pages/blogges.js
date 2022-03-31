import Link from "next/link";
import React from "react";
import styles from "../styles/Blogges.module.css";

function Blogges() {
  return (
    <div className={styles.blogges}>
      <div className={styles.blogge}>
        <Link href="how to use window" passHref><h3>How to use Window</h3></Link>
        <p>
          typesetting industry. Lorem Ipsum has been the standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap
        </p>
      </div>
    </div>
  );
}

export default Blogges;
