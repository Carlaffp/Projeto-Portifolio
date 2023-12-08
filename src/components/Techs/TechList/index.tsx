import { Container } from "../../../styles/Global";
import { Typography } from "../../../styles/typography";
import techListData from "../../../utils/techListData";
import TechCard from "../TechCard";
import { TechListStyle, TechSectionStyle } from "./style";


const TechList = () => {
  return (
    <TechSectionStyle id="tecnologias">
      <Container>
      <Typography  as="h4" type="heading3" color="grey1">Ferramentas que domino</Typography>
      <TechListStyle>
        {techListData.map((tech, index) => {
          return <TechCard key={index} title={tech.title} img={tech.img} />;
        })}
      </TechListStyle>
      </Container>
    </TechSectionStyle>
  );
};

export default TechList;