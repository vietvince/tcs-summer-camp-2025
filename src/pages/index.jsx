import React from "react";
import Card from "@site/src/components/SkillCard/Card";
import Header from "../components/Header/Header";
import styles from "./index.module.css";
import tutorials from "./_data";
import Filter from "../components/Filter/Filter";

const Home = () => {
  return (
    <>
      <Header />
      <Filter />
      <main className={styles.appcontainer}>
        <div className={styles.cardgrid}>
          {tutorials.map((tutorial, idx) => {
            return (
              <Card
                key={idx}
                title={tutorial.title}
                desc={tutorial.desc}
                img={tutorial.img}
                votes={tutorial.votes}
                href={tutorial.href}
                alt={tutorial.alt}
              />
            );
          })}
        </div>
      </main>
    </>
  );
};

export default Home;
