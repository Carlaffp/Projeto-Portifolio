import { Div } from "../../../styles/Global";
import { styled } from "../../../styles/stitches.config";
import { Typography } from "../../../styles/typography";

export const ProjectCardStyle = styled("article", {
  marginTop: "4rem",
});

export const ProjectCardInfo = styled(Div, {
  margin: "1.25rem 0 1.25rem 0",
});

export const ProjectCardLanguage = styled("span", {
  color: "$brand2",
  padding: "0  0.5rem",
  borderRadius: "$2",
  display: "flex",
  justifyContent:"flex-start",
  gap: "0.9rem",
  width: "32rem",
  height: "1.5rem"
});

export const Language = styled(Typography, {
  backgroundColor: "$brand4",
  width:"140px",
  display: "flex",
  justifyContent: "center",
  borderRadius: "$2",
})

export const ProjectCardLinks = styled(Div, {
  marginTop: "2.25rem",
});

export const ProjectLink = styled("a", {
  fontSize: "1rem",
  color: "$grey2",
  fontWeight: "500",
  marginRight: "$2",
  display: "flex",
  alignItems: "center",
  lineHeight: "0",

  "&:hover":{
    color: "$grey1"
  },

  [`& svg`]: {
    marginRight: "$1"
  }
});