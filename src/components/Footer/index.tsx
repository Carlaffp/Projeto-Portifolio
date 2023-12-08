import { FaAngleUp } from 'react-icons/fa'
import { FooterStyle } from './style'
import { Container } from '../../styles/Global'
import { Button } from '../../styles/Buttons'
import { Typography } from '../../styles/typography'


export const Footer = (): JSX.Element =>{
  return(
    <FooterStyle>
      <Container>
      <Button onClick={() => {window.scrollTo(0,0)}} type="circle" >
        <FaAngleUp/>
      </Button>
        <Typography type="body1" color="grey5">Obrigada por acessar!</Typography>
      </Container>
    </FooterStyle>
  )
}