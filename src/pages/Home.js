import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import { alpha, makeStyles } from "@material-ui/core/styles";
import Skeleton from "@material-ui/lab/Skeleton";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { useSelector, useDispatch } from "react-redux";

import HomeStyle from "./HomeStyle";
import {
  MultiElementCarousel,
  FullWidthCarousel,
} from "../components/carousel";
import { requestProducts } from "../actions";

const useStyles = makeStyles((theme) => HomeStyle(theme, alpha));

export default function Home(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const [productList, setProductList] = useState(null);

  useEffect(() => {
    // dispatch funtion to request all the products
    dispatch(requestProducts());
  }, {});

  useEffect(() => {
    if (products) {
      setProductList(groupByBrand(products));
    }
  }, [products]);

  const groupByBrand = (result) => {
    // This function groupd s all the products by brand -
    // to get the netflix king of carousel I am grouping it
    return result.reduce(function (productList, product) {
      if (!product.brand) {
        product.brand = "Others";
      }
      if (product.brand.indexOf(",") !== -1) {
        product.brand = product.brand.split(",");
        product.brand.map((item) => {
          productList[item.trim()] = productList[item.trim()] || [];
          productList[item.trim()].push(product);
        });
        return productList;
      } else {
        productList[product.brand] = productList[product.brand] || [];
        productList[product.brand].push(product);
        return productList;
      }
    }, {});
  };

  return (
    <div data-testid="homeRoot" className={classes.root}>
      {
        <div>
          <FullWidthCarousel
            data-testid="fullCarousel"
            type="full"
            autoPlay={true}
            className={classes.FullWidthCarousel}
          />
        </div>
      }
      {productList
        ? Object.keys(productList).map((key, index) => {
            return (
              <div key={index}>
                <Typography variant="subtitle1">
                  <b>{key} brand</b>
                </Typography>
                <MultiElementCarousel data={productList[key]} />
              </div>
            );
          })
        : Array.from(new Array(3)).map((item, index) => (
            <Grid key={index} container wrap="nowrap">
              {Array.from(new Array(6)).map((item, innerIndex) => (
                <Box key={innerIndex} width={210} marginRight={0.5} my={5}>
                  <Skeleton variant="rect" width={210} height={118} />
                  <Box pt={0.5}>
                    <Skeleton />
                    <Skeleton width="60%" />
                  </Box>
                </Box>
              ))}
            </Grid>
          ))}
    </div>
  );
}
