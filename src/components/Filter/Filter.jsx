import React from "react";
import styles from "./filter.module.css";

const Filter = () => {
  const activateFilter = (e) => {
    const buttons = document.querySelectorAll(`.${styles.filterButton}`);
    buttons.forEach((btn) => btn.classList.remove(styles.active));
    e.target.classList.add(styles.active);
  };

  return (
    <div className={styles.filterHeader}>
      <div className={styles.filterContainer}>
        <div className={styles.labels}>
          <div className={styles.wrapper}>
            <div className={styles.filterLabel}>All</div>
            <div className={styles.selections}>
              <button
                className={`${styles.filterButton} ${styles.active}`}
                onClick={activateFilter}
              >
                All
              </button>
              <button className={styles.filterButton} onClick={activateFilter}>
                Games
              </button>
            </div>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.filterLabel}>Technology</div>
            <div className={styles.selections}>
              <button className={styles.filterButton} onClick={activateFilter}>
                VR
              </button>
              <button className={styles.filterButton} onClick={activateFilter}>
                AI
              </button>
              <button className={styles.filterButton} onClick={activateFilter}>
                Animation
              </button>
              <button className={styles.filterButton} onClick={activateFilter}>
                Robotics
              </button>
            </div>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.filterLabel}>Language</div>
            <div className={styles.selections}>
              <button className={styles.filterButton} onClick={activateFilter}>
                Python
              </button>
              <button className={styles.filterButton} onClick={activateFilter}>
                HTML/CSS/JS
              </button>
              <button className={styles.filterButton} onClick={activateFilter}>
                C#
              </button>
            </div>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.filterLabel}>Platform</div>
            <div className={styles.selections}>
              <button className={styles.filterButton} onClick={activateFilter}>
                Scratch
              </button>
              <button className={styles.filterButton} onClick={activateFilter}>
                Roblox
              </button>
              <button className={styles.filterButton} onClick={activateFilter}>
                Unity
              </button>
            </div>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.filterLabel}>Ages</div>
            <div className={styles.selections}>
              <button className={styles.filterButton} onClick={activateFilter}>
                3-6
              </button>
              <button className={styles.filterButton} onClick={activateFilter}>
                7-10
              </button>
              <button className={styles.filterButton} onClick={activateFilter}>
                11-14
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
