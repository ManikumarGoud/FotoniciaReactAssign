import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import axios from "axios";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    display: "flex",
    justifyContent: "space-between"
  },
  media: {
    height: 140
  }
});

let categoriesList = [];
let menuItems = [];
let categoryHtml = "";

const CardItem = () => {
  const classes = useStyles();

  const data =
    "https://jsonware.com/json/688410e8f4013fbe56009d8e1621f2a4.json";
  //state
  const [details, setDetails] = useState([]);

  let apiUrl = data;

  /*let getResult = await getApiResult();

  console.log(getResult);

  getResult.map((x, index) => {

    let htmlContent = `<CardActionArea>
      <CardMedia
        className="${classes.media}"
        image="${x.listItem[index].image}"
        title="${x.headerTitle}"
      />
      <CardContent style={{textAlign :"center"}}>
        <Typography gutterBottom variant="h5" component="h2">
        ${x.headerTitle}
        </Typography>
      </CardContent>
    </CardActionArea>`;

    menuItems.push(htmlContent); 

  });

  let htmlResult = menuItems.join(' ');

  console.log(`<Card className={classes.root}>
        ${htmlResult}
      </Card>`)
*/

  let getResult = [
    {
      headerTitle: "Fruits",
      listItem: [
        {
          image:
            "https://png.pngtree.com/element_our/png/20180903/orange-png-png_75700.jpg",
          name: "Orange"
        },
        {
          image:
            "https://www.freepngimg.com/thumb/apple/9-apple-png-image-thumb.png",
          name: "Apple"
        },
        {
          image:
            "https://5.imimg.com/data5/RM/TY/MY-13308502/fresh-watermelon-500x500.png",
          name: "Watermellon"
        },
        {
          image:
            "https://c7.uihere.com/files/947/615/656/banana-food-fruit-clip-art-bananas-png-clipart-image-thumb.jpg",
          name: "Banana"
        },
        {
          image:
            "https://png.pngtree.com/element_pic/00/16/09/0657ce7dc878850.jpg",
          name: "Cherry"
        }
      ]
    },
    {
      headerTitle: "Pizza",
      listItem: [
        {
          image: "https://www.pngarts.com/files/3/Pizza-PNG-Image.png",
          name: "Pizza 1"
        },
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpqnkJ4gzZaWEbOYeMaqz3yV-VxRrCBplog_3t8OaBkCDf3RCRWw",
          name: "Pizza 2"
        },
        {
          image:
            "https://png.pngtree.com/element_origin_min_pic/16/11/02/4dc2c71756d114bf0f3333a33514ffa4.jpg",
          name: "Pizza 3"
        },
        {
          image:
            "https://pngimage.net/wp-content/uploads/2018/06/rebanada-de-pizza-png-1.png",
          name: "Pizza 4"
        },
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWVHTyPRtMWuw3Wx0sn-bsOrLCYqy2di2QUfw4V75uchLbrfYT",
          name: "Pizza 5"
        }
      ]
    },
    {
      headerTitle: "Drink",
      listItem: [
        {
          image: "http://pngimg.com/uploads/cocktail/cocktail_PNG155.png",
          name: "Drink 1"
        },
        {
          image:
            "https://images.vexels.com/media/users/3/135691/isolated/preview/175702226dd92b9a70d23b87ebed4a5d-cocktail-drink-by-vexels.png",
          name: "Drink 2"
        },
        {
          image:
            "https://s7d9.scene7.com/is/image/SAQ/cosmo-golden-gate-ec?$saq-fiche-cocktail$",
          name: "Drink 3"
        },
        {
          image:
            "https://www.belvederevodka.com/upload/maraschino-vermouth-belvedere-vodka-martini.png",
          name: "Drink 4"
        },
        {
          image:
            "https://png.pngtree.com/element_origin_min_pic/16/09/27/1057e9dc08462c6.jpg",
          name: "Drink 5"
        }
      ]
    },
    {
      headerTitle: "Wine",
      listItem: [
        {
          image:
            "http://www.probottleshots.com/wp-content/uploads/2014/03/napa-bottle-photographer-Tinacci.jpg",
          name: "Wine 1"
        },
        {
          image:
            "http://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Wine-Bottle-PNG-Transparent-Image-1-500x1025.png",
          name: "Wine 2"
        },
        {
          image:
            "https://png.pngtree.com/element_pic/17/07/21/3f0516b906aa8dd783c6e0aefaa52567.jpg",
          name: "Wine 3"
        },
        {
          image:
            "https://pronto-core-cdn.prontomarketing.com/2/wp-content/uploads/sites/1633/2016/03/l-creek-shiraz-cab-no-vintage-transparent-background.jpg",
          name: "Wine 4"
        },
        {
          image:
            "http://atlas-content-cdn.pixelsquid.com/stock-images/old-glass-bottle-corkscrew-mdnO39D-600.jpg",
          name: "Wine 5"
        }
      ]
    }
  ];

  return (
    <Card className={classes.root}>
      {getResult.map((x, index) => {
        return (
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={x.listItem[index].image}
              title={x.headerTitle}
            />
            <CardContent style={{ textAlign: "center" }}>
              <Typography gutterBottom variant="h5" component="h2">
                {x.headerTitle}
              </Typography>
            </CardContent>
          </CardActionArea>
        );
      })}
    </Card>
  );
};

export default CardItem;

function getApiResult() {
  return new Promise(function (resolve, reject) {
    // Do async job
    axios
      .get("https://jsonware.com/json/688410e8f4013fbe56009d8e1621f2a4.json")
      .then((data) => {
        console.log(data);
        categoriesList = data.data.MyData;
        resolve(categoriesList);
      });
  });
}
