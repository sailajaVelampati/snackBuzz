const HomeStyle = (theme, alpha) => ({
  root: {
    flexGrow: 1,
    color: "#273746",
    marginTop: "10vh",
  },
  AppBar: {
    background: "linear-gradient(to right bottom, #34495E, #1C2833)",
    color: "#F8F9F9",
    cursor: "pointer",
  },
  SearchBar: {
    backgroundColor: "#273746",
    color: "#F8F9F9",
    cursor: "pointer",
  },
  FullWidthCarousel: {
    padding: "20px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  rootDetails: {
    flexGrow: 1,
    backgroundColor: "#273746",
    color: "#F8F9F9",
    padding: "5vh 24px",
  },
  rootNotFound: {
    flexGrow: 1,
    backgroundColor: "#273746",
    color: "#F8F9F9",
    padding: "15vh 24px",
    textAlign: "center",
    height: "100vh",
  },

  rootShowCard: {
    display: "flex",
    background: "linear-gradient(to right bottom, #7BA6CE, #545F69)",
  },
  cardStyle: {
    border: "1px solid #273746",
    borderRadius: "5px",
    margin: "10px",
    "& img": {
      margin: "0 auto",
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  },
  cardStyleOverlay: {
    border: "1px solid #273746",
    borderRadius: "5px",
    margin: "10px",
    opacity: 1,
    transition: "opacity 2s",
    webkitTransition: "opacity 2s" /* Safari */,
    "& img": {
      margin: "0 auto",
      width: "50%",
      height: "50%",
      objectFit: "cover",
    },
    "& div p": {
      textAlign: "center",
      display: "inline",
    },
  },
  cardStyleButton: {
    margin: "0 auto",
    display: "block",
  },
  detailsShowCard: {
    display: "flex",
    flexDirection: "column",
  },
  contentShowCard: {
    flex: "1 0 auto",
    padding: "0px 20px",
  },
  showImage: {
    display: "block",
    height: "100%",
    weight: "100%",
  },
});

export default HomeStyle;
