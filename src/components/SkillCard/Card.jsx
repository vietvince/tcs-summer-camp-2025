import React, { useState } from "react";
import Link from "@docusaurus/Link";
import styles from "./card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faRegHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import { faUserLock, faUnlock } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, desc, img, href, alt }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isLocked, setIsLocked] = useState(true);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  const toggleLock = () => {
    setIsLocked(!isLocked);
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardcontainer}>
        <Link to={href} className={styles.link}>
          <img src={img} alt={alt} className={styles.image} />
        </Link>
        <div className={styles.desc}>
          <h6>{title}</h6>
          {desc}
        </div>
        <div className={styles.cardfooter}>
          <button className={styles.dd_toggle} onClick={toggleLike}>
            <FontAwesomeIcon
              icon={isLiked ? faSolidHeart : faRegHeart}
              style={
                isLiked
                  ? { color: "red", backgroundColor: "white" }
                  : {
                      color: "#575554",
                      backgroundColor: "white",
                    }
              }
            />
          </button>
          <button className={styles.dd_toggle} onClick={toggleLock}>
            <FontAwesomeIcon
              icon={isLocked ? faUserLock : faUnlock}
              style={
                isLocked
                  ? { color: "#575554", backgroundColor: "white" }
                  : { color: "green", backgroundColor: "white" }
              }
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
