import React,{useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    display: "flex",
    justifyContent: "space-between",
  },
  media: {
    height: 140,
  },
});

const CardItem = () =>  {
  const classes = useStyles();
  const data = "https://jsonware.com/json/d165e3c84928e700a9af40b4a6509254.json";
  //state
  const [details, setDetails] = useState([]);
  //fetchDetails
  const fetchDetails =  () => {
    fetch(data)
    .then(result => result.json())
    .then(data => console.log(data))
    .then(data => (setDetails(data)))
    //.catch(error => console.log(error));
  };
  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://png.pngtree.com/element_our/png/20180903/orange-png-png_75700.jpg"
          title="Fruits"
        />
        <CardContent style={{textAlign :"center"}}>
          <Typography gutterBottom variant="h5" component="h2">
          Fruits
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://www.pngarts.com/files/3/Pizza-PNG-Image.png"
          title="Pizza"
        />
        <CardContent style={{textAlign :"center"}}>
          <Typography gutterBottom variant="h5" component="h2">
            Pizza
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="http://pngimg.com/uploads/cocktail/cocktail_PNG155.png"
          title="Drink"
        />
        <CardContent style={{textAlign :"center"}}>
          <Typography gutterBottom variant="h5" component="h2">
            Drink
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="http://www.probottleshots.com/wp-content/uploads/2014/03/napa-bottle-photographer-Tinacci.jpg"
          title="Wine"
        />
        <CardContent style={{textAlign :"center"}}>
          <Typography gutterBottom variant="h5" component="h2">
            Wine
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
  );
}

export default CardItem;
