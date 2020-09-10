import React from "react";
import "./styles.css";
import Swipe from "./components/swipe";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Paper from "@material-ui/core/Paper";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { CardContent } from "@material-ui/core";
import useMediaQuery from '@material-ui/core/useMediaQuery';

const styles = {
  slide: {
    minHeight: '96vh',
    minWidth: "100%",
    background: '#6AC0FF',
    opacity: 0.9,
  },
  slide1: {
    background: '#6AC0FF',
  },
  slide2: {
    background: '#6AC0FF',
  },
  slide3: {
    background: '#6AC0FF',
  },
  card: {
    minwidth: "80%",
    maxHeight:'6vh',
    marginBottom:'5px',
  },
};

const useStyles = makeStyles((theme) =>({
  root: {
    flexGrow: 1,
    backgroundColor: '#6AC0FF',
    position:'fixed',
    opacity: 0.9,
    minWidth:'100%',
    height:'4vh',
    paddingTop:'0',
    paddingBottom:'0',
  },
  paper: {
    flexGrow: 1,
    padding: theme.spacing(2),
    textAlign: 'center',
    backgroundColor:'whitesmoke',
    },
}));


function DotsMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
      <MobileStepper
       variant="dots"
       steps={6}
       // position="static"
       activeStep={activeStep}
       className={classes.root}
      // nextButton={
      //   <Button size="small" onClick={handleNext} disabled={activeStep === 4}>
      //     Next
      //     {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      //   </Button>
      // }
      // backButton={
      //   <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
      //     {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      //     Back
      //   </Button>
      // }
      />
  );
}

function StyledPaper() {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Card style={styles.card}>
        <CardContent>テストカード</CardContent>
        </Card>
      <Card style={styles.card}>
        <CardContent>テストカード</CardContent>
      </Card>
      <Card style={styles.card}>
        <CardContent>テストカード</CardContent>
      </Card>
      <Card style={styles.card}>
        <CardContent>テストカード</CardContent>
      </Card>
      <Card style={styles.card}>
        <CardContent>テストカード</CardContent>
      </Card>
      <Card style={styles.card}>
        <CardContent>テストカード</CardContent>
      </Card>
      <Card style={styles.card}>
        <CardContent>テストカード</CardContent>
      </Card>

    </Paper>
  );
}



export default function App() {
  const matches = useMediaQuery('(min-width:600px)');

  return (
    <>
    <div className="App">
          <SwipeableViews enableMouseEvents>
              <div style={Object.assign({}, styles.slide, styles.slide1)}>
                 <div style={{minHeight:'5vh',backgroundColor:'#2196f3'}}>レスポンシブ対応１</div>
                 <div style={{minHeight:'5vh'}}></div>
                  <Grid
                      container
                      direction="row"
                      justify="center"
                      alignItems="stretch"
                      >
                    <Grid item xs="8">
                         <StyledPaper/>
                    </Grid>
                  </Grid>
              </div>
              <div style={Object.assign({}, styles.slide, styles.slide1)}>
              <div style={{minHeight:'5vh',backgroundColor:'#2196f3'}}>レスポンシブ対応2</div>
              <div style={{minHeight:'5vh'}}></div>
                  <Grid
                      container
                      direction="row"
                      justify="center"
                      alignItems="stretch"
                      >
                    <Grid item xs="8">
                      <StyledPaper/>
                    </Grid>
                  </Grid>
              </div>
              <div style={Object.assign({}, styles.slide, styles.slide1)}>
              <div style={{minHeight:'5vh',backgroundColor:'#2196f3'}}>レスポンシブ対応3</div>
              <div style={{minHeight:'5vh'}}></div>
                  <Grid
                      container
                      direction="row"
                      justify="center"
                      alignItems="stretch"
                      >
                    <Grid item xs="8">
                      <StyledPaper/>
                    </Grid>
                  </Grid>
              </div>
           </SwipeableViews>
       <DotsMobileStepper/>
    </div>
    </>
  );
}
