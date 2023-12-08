import { Button } from "../../styles/Buttons"
import { Container } from "../../styles/Global"
import { Typography } from "../../styles/typography"
import { AboutMeButtons, AboutMeContent, AboutMeStyle } from "./style"

const AboutMe = ()=>{
  return(
   <AboutMeStyle>
    <Container>
      <AboutMeContent>
     <Typography as="h1" type="heading1" color="grey5">Criando experiências por meio da tecnologia</Typography>
     <Typography type="body1" color="grey6"> Sou estudante de programação na Kenzie Academy Brasil, participei
              de diversos projetos resolvendo problemas de alto nível e
              desenvolvendo habilidades</Typography>
     <AboutMeButtons>
       <Button  as="a" href="#projetos">Projetos</Button>
       <Button  as="a" type="btLink" color="grey5" href="#tecnologias">Tecnologias</Button>
     </AboutMeButtons>
      </AboutMeContent>
    </Container>
   </AboutMeStyle>
  )
}

export default AboutMe