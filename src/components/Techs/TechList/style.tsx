import { styled } from "../../../styles/stitches.config";

export const TechSectionStyle = styled("section", {
  backgroundColor: "$grey4",
  padding: "4rem 0 2rem 0",
});

export const TechListStyle = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
  padding: "3rem 0",
  gap: "2rem",

  "@mobile": {
    display: "flex",
    marginInline: "-1rem",
    paddingInline: "1rem",
    overflow: "auto",
  },
});