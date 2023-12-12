import { Button } from "../../styles/Buttons";
import { Container } from "../../styles/Global";
import { styled } from "../../styles/stitches.config";
import fundo3 from "../../utils/assets/fundo3.jpg"

export const FooterStyle = styled("footer", {
  backgroundColor: "$brand1",
  backgroundImage: `url(${fundo3})`,
  backgroundSize: "cover",
  padding: "2rem 0 3rem 0",
  [`& ${Container}`]:{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center"
  },
  [`& ${Button}`]:{
      transform: "translateY(-124%)"
  }
})