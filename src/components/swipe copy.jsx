import React from "react";
// reduxのhookを使用（コード記述量削減のため）
import { useSelector, useDispatch } from "react-redux";
import SwipeableViews from "react-swipeable-views";
import { makeStyles } from "@material-ui/core/styles";
import RenderCard from "./card";

import { changeTab } from "../modules/";

const useStyles = makeStyles(() => {
  const baseStyle = {
    padding: "1em",
    color: "white",
    minHeight:"100%",
  };
  const activeBaseStyle = {
    color: "white",
    borderTopLeftRadius: "5px",
    borderTopRightRadius: "5px",
    minHeight:"100%",
  };

  return {
    slide0: {
      ...baseStyle,
      minHeight:"100%"
    },
    slide1: {
      ...baseStyle,
      minHeight:"100%"
    },
    slide2: {
      ...baseStyle,
      minHeight:"100%"
    },
    active0: {
      ...activeBaseStyle,
      minHeight:"100",
    },
    active1: {
      ...activeBaseStyle,
      minHeight:"100",
    },
    active2: {
      ...activeBaseStyle,
      minHeight:"100",
    }
  };
});

const Swipe = () => {
  const swipeState = useSelector(state => state.swipe);
  const dispatch = useDispatch();
  const [swipeableActions, setSwipeableActions] = React.useState();
  const classes = useStyles();

  return (
    <>
    <SwipeableViews
        enableMouseEvents
        action={actions => setSwipeableActions(actions)}
        resistance
        index={swipeState.index}
        onChangeIndex={index => dispatch(changeTab(index))}
        containerStyle={{minheight:"100%"}}
        >
        {swipeState.names.map((name, index) => (
          <div key={index} className={classes[`slide${index}`]}>
            <RenderCard index={index} />
          </div>
        ))}
    </SwipeableViews>
    </>
  );
};
export default Swipe;
