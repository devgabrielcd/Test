import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import DialPadRtc from "../../components/dialer/DialPadRtc";
import { useSelector } from "react-redux";
import { useGetUserQuery } from "../../features/users/userApiSlice";
import { selectCurrentId } from "../../features/auth/authSlice";

const DialerPad = ({ colors }) => {
  // Check if is logged to hide Sidebar
  const user_id = useSelector(selectCurrentId);
  const { data: profile, isLoading, isSuccess } = useGetUserQuery(user_id);

  const offCanvasState = useSelector((state) => state.offCanvasDial["value"]);

  const useStyles = makeStyles({
    widgetContainer: {
      position: "absolute",
      backdropFilter: "blur(20px)",
      top: 200,
      bottom: 0,
      right: 260,
      width: "300px",
      height: "440px",
      backgroundColor: colors.primary[1100],
      // border: `3px solid ${colors.primary[450]}`,
      // overflow: "hidden",
      transition: "transform 0.5s ease-out",
      transform: "translateX(100%)",
      borderRadius: "10px",
			zIndex: '10',
      boxShadow: `0 1px 1px hsl(0deg 0% 0% / 0.075),
      0 2px 2px hsl(0deg 0% 0% / 0.075),
      0 4px 4px hsl(0deg 0% 0% / 0.075),
      0 8px 8px hsl(0deg 0% 0% / 0.075)`,
    },
    title: {
      display: "flex",
      justifyContent: "center",
      alignItems: "top",
      fontSize: "24px",
      color: colors.contentSideBar[100],
    },
    content: {
      paddingLeft: "30px",
      paddingRight: "30px",
      display: "flex",
      justifyContent: "center",
      alignItems: "top",
      fontSize: "24px",
      color: colors.contentSideBar[100],
    },
    button: {
      position: "fixed",
      bottom: "20px",
      right: "20px",
      padding: "10px",
      backgroundColor: "#ccc",
      borderRadius: "5px",
      cursor: "pointer",
    },
  });

  const classes = useStyles();
  const [showWidget, setShowWidget] = useState(false);

  useEffect(() => {
    if (offCanvasState) {
      setShowWidget(true);
    } else {
      setShowWidget(false);
    }
  }, [offCanvasState]);

	let content;

  if(isLoading){
		content = <h1>'Loading'</h1>
	} else if(isSuccess) {
		content = (
			<div>
      <div
        className={classes.widgetContainer}
        style={{
          transform: showWidget ? "translateX(0%)" : "translateX(94%)",
        }}
      >
        <div className={classes.content}>
          <DialPadRtc colors={colors} />
        </div>
      </div>
      {/* 
      <button className={classes.button} onClick={toggleWidget}>
        Toggle Widget
      </button>
      */}
    </div>

		)
	}
	return content;
};

export default DialerPad;
