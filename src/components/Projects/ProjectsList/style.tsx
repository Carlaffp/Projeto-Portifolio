import { Div } from "../../../styles/Global";
import { styled } from "../../../styles/stitches.config";

export const ProjectsSection = styled("section", {
  padding: "4rem 0 8rem 0",
});

export const ProjectMessage = styled("aside", {
  width: "32%",
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  position: "sticky",
  top: "10rem",

  "@mobile": {
    width: "100%",
    position: "static",
    order: "2",
    marginTop: "5rem",
  },
});

export const ProjectsArea = styled("div", {
  width: "60%",
  paddingLeft: "4rem",
  "@mobile": {
    width: "100%",
    paddingLeft: "0",
  },
});

export const ProjectsContent = styled(Div, {
  position: "relative",
  alignItems: "flex-start",
  "@mobile": {
    flexDirection: "column",
  },
});