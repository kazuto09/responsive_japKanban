import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid"

const useStyles = makeStyles(() => {
  return {
    card: {
      margin: "0 auto",
      width: "80%",
      maxHeight:'calc(100%-300px)'
    },
    cardContent: {
      textAlign: "left"
    },
    paper: {
      margin: "0 0 0 0",
      width: "230px",
      minHeight: "100%"
    }
  };
});

const RenderCard = ({ index }) => {
  const swipeState = useSelector(state => state.swipe);
  const classes = useStyles();

  return (
  <Grid container direction="row" justify="center">
   <Paper className={classes.paper}>
     <h6 style={{textAlign:"left"}}>やるべきこと</h6>
    <Card className={classes.card}>
      <CardContent>
        {swipeState.officialNames[swipeState.index]}
      </CardContent>
    </Card>
  </Paper>
 </Grid>
  );
};
export default RenderCard;
