import React from "react";
import CardComponent from "../Card/Card.jsx";
import { useState, useEffect } from "react";
import styles from "./Section.module.css";
import { CircularProgress } from "@mui/material";
import Filters from "../Filters/Filters.jsx";
import Carousel from "../../components/Carousel/Carousel.jsx";

const Section = ({ title, data, filterSource, type }) => {
  const [filters, setFilters] = useState([{ key: "all", label: "All" }]);
  const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);
  const [carouselToggle, setCarouselToggle] = useState(true);

  const handleToggle = () => {
    setCarouselToggle((prevState) => !prevState);
  };

  useEffect(() => {
    if (filterSource) {
      filterSource().then((response) => {
        const { data } = response;
        setFilters([...filters, ...data]);
      });
    }
  }, []);

  const showFilters = filters.length > 1; //Just for Songs
  const cardsToRender = data.filter((card) =>
    showFilters && selectedFilterIndex !== 0
      ? card.genre.key === filters[selectedFilterIndex].key
      : card
  );

  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>
          {type === "song"
            ? null
            : !carouselToggle
            ? "Collapse All"
            : "Show All"}
        </h4>
      </div>

      {showFilters && (
        <div className={styles.filterWrapper}>
          <Filters
            filters={filters}
            selectedFilterIndex={selectedFilterIndex}
            setSelectedFilterIndex={setSelectedFilterIndex}
          />
        </div>
      )}
      {data.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardsWrapper}>
          {!carouselToggle ? (
            <div className={styles.wrapper}>
              {cardsToRender.map((ele) => (
                <CardComponent data={ele} type={type} />
              ))}
            </div>
          ) : (
            <Carousel
              data={cardsToRender}
              renderComponent={(data) => (
                <CardComponent data={data} type={type} />
              )}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Section;
