import React from "react";
import "../styles.css";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardItem from "./CardItem";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    card: {
      height: 140,
      width: 100,
    },
    control: {
        padding: theme.spacing(2),
      },
    
  }));

const Category = () => {
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();
    return(<div className="Category">
        <p><b>Shop By Category</b></p>
        <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center"  spacing={spacing} style={{padding:"10px"}} >
          {/* {[0,1, 2, 3].map((value) => (
            <Grid key={value} item>
              <CardItem className={classes.card} />
            </Grid>
          ))} */}
          <CardItem className={classes.card}  />
          
        </Grid>
      </Grid>
    </Grid><br></br>
    <Button variant="outlined" style={{background: '#689F38',flexGrow:1}}>See More</Button>
    
    
    </div>)
};

export default Category;