import { FaFacebook } from "react-icons/fa6";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";

interface IProps {
  gmail: string;
  github: string;
  linkedin: string;
  facebook: string;
}
const SocialMedia = (props: IProps) => {
  const { gmail, github, linkedin, facebook } = props;

  return (
    <div className="my-4 d-flex items-center gap-3">
      <a href={gmail} target="_blank" className="highlight">
        <SiGmail size={30} />
      </a>
      <a href={github} target="_blank" className="highlight">
        <SiGithub size={30} />
      </a>
      <a href={linkedin} target="_blank" className="highlight">
        <SiLinkedin size={30} />
      </a>
      <a href={facebook} target="_blank" className="highlight">
        <FaFacebook size={30} />
      </a>
    </div>
  );
};

export default SocialMedia;
