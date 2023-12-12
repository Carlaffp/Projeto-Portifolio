import { Button } from "../../styles/Buttons";
import { Div } from "../../styles/Global";
import { styled } from "../../styles/stitches.config";
import fundo3 from "../../utils/assets/fundo3.jpg"


export const AboutMeStyle = styled("section", {
  backgroundColor: "$brand1",
  backgroundImage: `url(${fundo3})`,
  backgroundSize: "cover",
  padding: "12rem 0 8rem 0",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  "@mobile": {
    padding: "9rem 0 6rem 0",
  },
});

export const AboutMeContent = styled("div", {
  maxWidth: "100%",
  width: "36rem",
  display: "flex",
  flexDirection: "column",
  gap: "$2",
});

export const AboutMeButtons = styled(Div, {
  marginTop: "$2",
  "@mobile": {
    flexDirection: "column",
    [`& ${Button}`]: {
      width: "100%",
    },
  },
});
