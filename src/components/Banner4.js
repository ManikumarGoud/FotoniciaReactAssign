import React from "react";
import "../styles.css";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

const Banner4 = () => {
    const classes = useStyles();
   return( <div className="Banner4">
       <div style={{display : "flex",justifyContent:"center"}}>
       <h3><b>Best Selling...</b></h3>
       <Button variant="outlined" style={{background: '#689F38',marginLeft:"10px"}}>View All</Button>
       </div>
       <div >
       <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpqnkJ4gzZaWEbOYeMaqz3yV-VxRrCBplog_3t8OaBkCDf3RCRWw"
        />
      </CardActionArea>
      </Card>
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://www.freepngimg.com/thumb/apple/9-apple-png-image-thumb.png"
        />
      </CardActionArea>
      </Card>
      </div>
   </div>)
}

export default Banner4;