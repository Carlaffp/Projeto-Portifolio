import { useState } from "react";
import userData from "../../utils/userData";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn, FaBars } from "react-icons/fa";
import { useMedia } from "use-media";
import { Container } from "../../styles/Global";
import { Button } from "../../styles/Buttons";
import { IoClose } from "react-icons/io5";
import { DivLogo, LogoImage, LogoText, MenuLinksStyle, NavbarMobile, NavbarStyle } from "./style";


export interface MenuButtonOpen {
  open: Boolean;
  setOpen: (value: Boolean) => void;
}


export const Header = (): JSX.Element => {
  const isWide = useMedia({ maxWidth: "991px" });

  document.title = userData.userName;

  const [open, setOpen] = useState(false);

  const OpenMenu = () => {
    setOpen(!open);
  };

  return (
    <NavbarStyle>
      <Container>
        <NavbarMobile>
          <DivLogo>
        <LogoImage
          src={`https://github.com/${userData.githubUser}.png`}
          alt={userData.userName}
          width={"48px"}
          height={"48px"}
        />
        <LogoText>{userData.userName}</LogoText>
          </DivLogo>
          {isWide && (
             <Button
             type="icon"
             onClick={OpenMenu}
             aria-label={!open ? "Abrir Menu" : "Fechar Menu"}
           >
             {!open ? <FaBars /> : <IoClose />}
           </Button>
         )}
      
        </NavbarMobile>
        {isWide ? open && <MenuLinks /> : <MenuLinks />} 
      </Container>
    </NavbarStyle>
  );
};

export const MenuLinks = (): JSX.Element => {
  return (
    <MenuLinksStyle>
      {userData.githubUser && (
        <Button
          type="icon"
          target="_blank"
          as="a"
          aria-label="Github"
          href={`https://github.com/${userData.githubUser}`}
        >
          <FaGithub />
        </Button>
      )}

      {userData.linkedinLink && (
        <Button
          type="icon"
          target="_blank"
          as="a"
          aria-label="LinkedIn"
          href={userData.linkedinLink}
        >
          <FaLinkedinIn />
        </Button>
      )}
    </MenuLinksStyle>
  );
};
 export default Header
