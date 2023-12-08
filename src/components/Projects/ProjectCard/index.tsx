
import { FaGithub } from "react-icons/fa";
import { IoArrowRedoSharp } from "react-icons/io5";
import { RepoData } from "../../../schemas";
import { Typography } from "../../../styles/typography";
import { Language, ProjectCardInfo, ProjectCardLanguage, ProjectCardLinks, ProjectCardStyle, ProjectLink } from "./style";


interface RepoProps{ repo:RepoData}

const ProjectCard = ({repo}:RepoProps) =>{
  return(
    <ProjectCardStyle>
      <Typography 
        as="h2"
        type="heading3"
        css={{ marginBottom: "$3" }}
        color="grey1">
          {repo.name}
      </Typography>
      <ProjectCardInfo>
        <Typography type="body2">Linguagens:</Typography>
        <ProjectCardLanguage>
          {repo.language.map((language, index) =>{
        return(
          <Language color="brand1" type="body2" key={index}>{language}</Language>
          )
        })}
        </ProjectCardLanguage>
      </ProjectCardInfo>
      <Typography type="body1" color="grey2">{repo.description}</Typography>
      <ProjectCardLinks>
      
      <ProjectLink href={repo.html_url} target="blank"> <FaGithub /> Github Code</ProjectLink>
      
      <ProjectLink href={repo.link} target="blank"> <IoArrowRedoSharp /> Aplicação</ProjectLink>
      </ProjectCardLinks>

    </ProjectCardStyle>
  )
}

export default ProjectCard