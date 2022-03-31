import React from "react";
import Link from "next/link";
import styles from "../styles/Menu.module.css";

function Menu() {
  return (
    <div>
      <nav className={styles.nav}>
        <ul>
          <Link href="/" passHref>
            <li>Home</li>
          </Link>
          <Link href="/blogges" passHref>
            <li>Blogges</li>
          </Link>
          <Link href="/contact" passHref>
            <li>Contact</li>
          </Link>
          <Link href="/about" passHref>
            <li>About</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
