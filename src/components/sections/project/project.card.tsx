import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { useTranslation } from "react-i18next";

interface IProps {
  imgPath: string;
  title: string;
  description: string;
  githubLink: string;
  demoLink: string;
  status?: "Developing" | "Active" | "Maintenance";
}

function ProjectCard(props: IProps) {
  const { t } = useTranslation();

  const getStatusColor = (status?: string) => {
    switch (status) {
      case "Active":
        return "success";
      case "Developing":
        return "warning";
      case "Maintenance":
        return "secondary";
      default:
        return "info";
    }
  };

  return (
    <Card className="project-card-view">
      <div className="card-img-wrapper" style={{ position: "relative" }}>
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />

        {props.status && (
          <Badge
            pill
            bg={getStatusColor(props.status)}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              fontSize: "0.75rem",
              padding: "5px 10px",
            }}
          >
            {{
              Active: t("projects.activeStatus"),
              Developing: t("projects.developingStatus"),
              Maintenance: t("projects.maintainStatus"),
            }[props.status] || t("projects.activeStatus")}
          </Badge>
        )}
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
