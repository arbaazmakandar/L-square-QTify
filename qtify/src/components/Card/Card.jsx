import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Tooltip, Link } from '@mui/material';
import styles from './Card.module.css'
import albumImage from '../../assets/album.png'
import Chip from '@mui/material/Chip';


const CardComponent = ({data, type}) => {

  switch(type){

    case "album":{
      const {image, follows, title, slug, songs} = data;
      return (
        <Tooltip title = {`${songs.length} songs`} placement='top' arrow> 
          <Link to={`/album/${slug}`} >
            <Card className={styles.card}>
                <CardMedia
                  component="img"
                  height="170"
                  image={image}
                  alt="Album"
                  className={styles.image}
                />
                <CardContent className={styles.cardContent} >
                  <Chip label={JSON.parse(follows) + " Likes"} variant="outlined" className={styles.chip} />
                </CardContent>
                <Typography variant="body2" color="text.secondary" className={styles.bottomText}>
                    {title}
                </Typography>
            </Card>
          </Link>
        </Tooltip>
      )

    }
    case "songs":{
      const {image, follows, title} = data;
      return (
        <Card className={styles.card}>
            <CardMedia
              component="img"
              height="170"
              image={image}
              alt="Album"
              className={styles.image}
            />
            <CardContent className={styles.cardContent} >
                <Chip label={{follows} + "Follows"}  variant="outlined" className={styles.chip}/>
            </CardContent>
            <Typography variant="body2" color="text.secondary" className={styles.bottomText}>
                New English Songs
            </Typography>
        </Card>
      )

    }

  }
 
}

export default CardComponent