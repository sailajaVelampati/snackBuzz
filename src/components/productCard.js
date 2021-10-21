import React, { useState } from "react";
import { alpha, makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { Button } from "@material-ui/core";

import HomeStyle from "../pages/HomeStyle";
import { requestUpdateCart } from "../actions";
const useStyles = makeStyles((theme) => HomeStyle(theme, alpha));

export default function ProductCard(props) {
  const { data } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  const [showProductDetails, setShowProductDetails] = useState(false);

  const addToCart = (data) => {
    // add product to card -  please add only unique products, validations are not yet implemented
    setShowProductDetails(false);
    dispatch(requestUpdateCart(data));
  };

  return showProductDetails ? (
    <div
      className={classes.cardStyleOverlay}
      key={data.id}
      data-testid={`show-${data.id}`}
    >
      <img src={data.image} />
      <div>
        <p> {`$ ${data.price}`} </p>
        <p>{data.size}</p>
      </div>
      <Button
        onClick={() => addToCart(data)}
        className={classes.cardStyleButton}
      >
        ADD
      </Button>
    </div>
  ) : (
    <div
      className={classes.cardStyle}
      key={data.id}
      data-testid={`show-${data.id}`}
    >
      <img src={data.image} />
      <Button
        onClick={() => setShowProductDetails(true)}
        className={classes.cardStyleButton}
      >
        Select
      </Button>
    </div>
  );
}
