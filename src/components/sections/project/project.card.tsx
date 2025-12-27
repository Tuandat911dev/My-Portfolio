import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

interface IProps {
  imgPath: string;
  title: string;
  description: string;
  githubLink: string;
  demoLink: string;
}

function ProjectCard(props: IProps) {
  return (
    <Card className="project-card-view">
      <div className="card-img-wrapper">
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      </div>

      <Card.Body className="d-flex flex-column">
        <Card.Title className="project-title">{props.title}</Card.Title>

        <div className="d-flex flex-column justify-content-between h-100">
          <Card.Text className="project-description">{props.description}</Card.Text>

          <div className="project-btn-group">
            <Button href={props.githubLink} target="_blank" className="btn-primary-custom">
              <BsGithub /> <span>Github</span>
            </Button>

            {props.demoLink && (
              <Button href={props.demoLink} target="_blank" className="btn-primary-custom">
                <CgWebsite /> <span>Demo</span>
              </Button>
            )}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCard;
