import {IconType} from "react-icons/lib"
import {useState} from "react"
import { TechCardStyle } from "./style"

interface ITechCards {
  title: string,
  img: string | IconType
  key: number
}

const TechCard = ({title, img:Icon}:ITechCards): JSX.Element =>{

  const isString = typeof Icon === "string"

  const [isHovered, setIsHovered] = useState(false)
  return(
    <TechCardStyle onMouseEnter={()=> setIsHovered(true)}
     onMouseLeave={() => setIsHovered(false)}>
      {isString ?(
         <img src={Icon} alt={title} title={title} height="84px" width="84px" />
      ) : (<Icon size={84} />)}
      
      {isHovered && <p>{title}</p>}
    </TechCardStyle>
  )
}

export default TechCard