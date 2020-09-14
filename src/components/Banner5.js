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

const Banner5 = () => {
    const classes = useStyles();
   return(<div className="Banner5">
       <div style={{display : "flex",justifyContent:"center"}}>
   <h3><b>Table Design...</b></h3>
   <Button variant="outlined" style={{background: '#689F38',marginLeft:"10px"}}>View All</Button>
   </div>
   <div  >
   <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRFV3LIh_nnKMiHynmg0CG7VX7GbyuuECtBJw&usqp=CAU"
        />
      </CardActionArea>
      </Card>
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTuShPOYSs5BfzzyQ53U6Y1eYOUUye6WWbJ5g&usqp=CAU"
        />
      </CardActionArea>
      </Card>
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRFV3LIh_nnKMiHynmg0CG7VX7GbyuuECtBJw&usqp=CAU"
        />
      </CardActionArea>
      </Card>
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRD7ROJQpAUAm5Uy4ne7DgsK751zmYNvhe5mQ&usqp=CAU"
        />
      </CardActionArea>
      </Card>
      </div>
   </div>)
}

export default Banner5;