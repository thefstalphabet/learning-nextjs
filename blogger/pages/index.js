import Image from "next/image";
import React from "react";
import styles from "../styles/Dashboard.module.css";

function Home() {
  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboard_body}>
        <h1>Pro-blogging</h1>
        <p>Welcome to the pro-blogging application</p>
        <Image
          className={styles.banner}
          src="/banner.jpg"
          alt="Banner"
          width={700}
          height={300}
        />
        <div className={styles.popular_blogges}>
          <h2>Popular Blogges</h2>
          <div className={styles.blogges}>
            <div className={styles.blogge}>
              <h3>How to use Window</h3>
              <p>
                typesetting industry. Lorem Ipsum has been the standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap
              </p>
            </div>
            <div className={styles.blogge}>
              <h3>How to use Linux</h3>
              <p>
                typesetting industry. Lorem Ipsum has been the standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap
              </p>
            </div>
            <div className={styles.blogge}>
              <h3>How to use Computer</h3>
              <p>
                typesetting industry. Lorem Ipsum has been the standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap
              </p>
            </div>
            <div className={styles.blogge}>
              <h3>How to use Laptop</h3>
              <p>
                typesetting industry. Lorem Ipsum has been the standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
