
import { keyframes } from "@stitches/react";
import { styled } from "../../../styles/stitches.config";
import { Typography } from "../../../styles/typography";


const scaleUp = keyframes({
  "0%": { transform: "translateY(15%)" },
  "100%": { transform: "translateY(-140%)" },
});

export const TechCardStyle = styled("div", {
  minWidth: "10.25rem",
  maxWidth: "10.25rem",
  borderRadius: "$1",
  padding: "1rem",
  background: "$whiteFixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",

  [`& ${Typography}`]: {
    opacity: 0,
    position: "absolute",
    transform: "translateY(-15%)",
    background: "$whiteFixed",
    boxShadow: "drop-shadow(0px 4px 30px rgba(0, 0, 0, 0.12))",
    padding: "0.4rem 1rem",
    borderRadius: "$1",
    textAlign: "center",
    fontSize: "1rem",
    fontWeight: "500",
    whiteSpace: "nowrap",

    "&:before": {
      content: "",
      zIndex: "-1",
      bottom: "-5px",
      position: "absolute",
      width: 0,
      height: 0,
      borderLeft: "25px solid transparent",
      borderRight: "25px solid transparent",
      borderTop: "25px solid $whiteFixed",
      transform: "translateX(-50%)",
      left: "50%",
    },
  },

  "&:hover": {
    [`& ${Typography}`]: {
      opacity: 1,
      top: 0,
      transform: "translateY(-140%)",
      animation: `${scaleUp} 200ms`,
    },
  },
});