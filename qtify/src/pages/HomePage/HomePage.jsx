import React from "react";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import { useOutletContext } from "react-router";
import styles from "./HomePage.modules.css";
import { fetchFilters } from "../../api/api";

const HomePage = () => {
  const { data } = useOutletContext();
  const { newAlbums, topAlbums, songs } = data;

  return (
    <div>
      <Hero />
      <div className={styles.wrapper}>
        <Section title="Top Albums" data={topAlbums} type="album" />
        <Section title="New Albums" data={newAlbums} type="album" />
        <Section
          title="Songs"
          data={songs}
          filterSource={fetchFilters}
          type="song"
        />
      </div>
    </div>
  );
};

export default HomePage;
