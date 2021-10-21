import React from "react";
import { alpha, makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { Grid } from "@material-ui/core";
import HomeStyle from "../pages/HomeStyle";

const useStyles = makeStyles((theme) => HomeStyle(theme, alpha));

export default function HeroBanner(props) {
  const { data } = props;
  const classes = useStyles();
  return (
    <Card className={classes.rootShowCard}>
      <div className={classes.detailsShowCard}>
        <Grid container spacing={0}>
          <Grid item sm={2}>
            <img
              src={data.filterImage}
              alt={data.name}
              className={classes.showImage}
            />
          </Grid>
        </Grid>
      </div>
    </Card>
  );
}
