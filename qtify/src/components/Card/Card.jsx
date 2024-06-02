import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Tooltip, Link } from "@mui/material";
import styles from "./Card.module.css";
import Chip from "@mui/material/Chip";

const CardComponent = ({ data, type }) => {
  switch (type) {
    case "album": {
      const { image, follows, title, slug, songs } = data;
      return (
        <Tooltip title={`${songs.length} songs`} placement="top" arrow>
          <Link to={`/album/${slug}`}>
            <Card className={styles.card}>
              <CardMedia
                component="img"
                height="170"
                image={image}
                alt="Album"
                className={styles.image}
              />
              <CardContent className={styles.cardContent}>
                <Chip
                  label={JSON.parse(follows) + " Follows"}
                  variant="outlined"
                  className={styles.chip}
                />
              </CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                className={styles.bottomText}
              >
                {title}
              </Typography>
            </Card>
          </Link>
        </Tooltip>
      );
    }
    case "song": {
      const { image, likes, title } = data;
      return (
        <Card className={styles.card}>
          <CardMedia
            component="img"
            height="170"
            image={image}
            alt="Album"
            className={styles.image}
          />
          <CardContent className={styles.cardContent}>
            <Chip
              label={JSON.parse(likes) + " Likes"}
              variant="outlined"
              className={styles.chip}
            />
          </CardContent>
          <Typography
            variant="body2"
            color="text.secondary"
            className={styles.bottomText}
          >
            {title}
          </Typography>
        </Card>
      );
    }
    default:
      <></>;
  }
};

export default CardComponent;
