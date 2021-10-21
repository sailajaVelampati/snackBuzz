import React, { useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { alpha, makeStyles } from "@material-ui/core/styles";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import EventSeatIcon from "@material-ui/icons/EventSeat";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";

import HomeStyle from "../pages/HomeStyle";
import { requestCart } from "../actions";

const useStyles = makeStyles((theme) => HomeStyle(theme, alpha));

const Layout = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const { history } = props;

  useEffect(() => {
    dispatch(requestCart());
  }, []);

  return (
    <>
      <AppBar
        data-testid="layoutApplicationBar"
        className={classes.AppBar}
        position="fixed"
      >
        <Toolbar data-testid="toolBar">
          {props.location.pathname !== "/" ? (
            <ArrowBackIosIcon
              data-testid="arrowBack"
              onClick={() => history.push(`/`)}
            />
          ) : null}
          <Typography
            onClick={() => history.push(`/`)}
            className={classes.title}
            variant="h6"
            noWrap
            data-testid="AppTitle"
          >
            SNACK <EventSeatIcon style={{ color: "red" }} /> BUZZ
          </Typography>
          cart : {cart.length}
        </Toolbar>
      </AppBar>
      <div className="content">{props.children}</div>
    </>
  );
};
export default withRouter(Layout);
