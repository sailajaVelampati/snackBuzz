import HomeStyle from "./HomeStyle";
import { alpha, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => HomeStyle(theme, alpha));
const Notfound = () => {
  const classes = useStyles();
  return (
    <div className={classes.rootNotFound}>
      <h3>404 page not found</h3>
      <p>We are sorry but the page you are looking for does not exist.</p>
    </div>
  );
};

export default Notfound;
