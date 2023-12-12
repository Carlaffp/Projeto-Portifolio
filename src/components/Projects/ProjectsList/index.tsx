import { Button } from "../../../styles/Buttons";
import { Container } from "../../../styles/Global";
import { Typography } from "../../../styles/typography";
import projectsData from "../../../utils/projectsData";
import userData from "../../../utils/userData";
import ProjectCard from "../ProjectCard";
import { ProjectMessage, ProjectsArea, ProjectsContent, ProjectsSection } from "./style";

const ProjectsList = (): JSX.Element => {
  return (
    <ProjectsSection id="projetos">
      <Container>
        <ProjectsContent>
        <ProjectMessage>
          <Typography as="h2" type="heading4" color="grey1">Vamos trocar uma idéia?</Typography>
          <Typography as="p" type="body1" color="grey2">No linkedIn sempre estou compartilhando meus processos diários
                para desenvolver esses projetos e estou disposto a trocar
                algumas ideias por lá.
          </Typography>
          <Button
          type="primary"
          target="_blank"
          as="a"
          href={userData.linkedinLink}>Acessar perfil no LinkedIn
          </Button>
        </ProjectMessage>
        <ProjectsArea>
      <Typography type="body1" color="grey2" css={{ marginBottom: "$2" }}>Projetos</Typography>
      <Typography as="h3" type="heading2" color="grey1">
        Construindo o Futuro com Dedicação e Inovação, Buscando Soluções
        Tecnológicas Transformadoras."
      </Typography>

        {projectsData.map(repo => {
          return <ProjectCard key={repo.name} repo={repo} />;
        })}
        
      </ProjectsArea>
        </ProjectsContent>
      </Container>
    </ProjectsSection>
  );
};

export default ProjectsList;