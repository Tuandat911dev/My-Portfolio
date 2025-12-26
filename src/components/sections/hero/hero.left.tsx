import Typewriter from "typewriter-effect";
import SocialMedia from "components/sections/social.media";
import { useTranslation } from "react-i18next";
import "./hero.scss";
import ResizeButton from "components/sections/resize.button";
import { APP_DATA } from "helpers/data";
import { MdFileDownload } from "react-icons/md";
import { AiFillFire } from "react-icons/ai";

interface IProps {
  scrollToExperienceSection: () => void;
}

const HeroLeft = (props: IProps) => {
  const { scrollToExperienceSection } = props;
  const { t } = useTranslation();

  const openInNewTab = (url: string): void => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const handleDownloadCV = () => {
    openInNewTab("https://drive.google.com/file/d/1u8TE8yoFy8oWMNox8EmPzF9UDDiyHWzj/view?usp=sharing");
  };

  return (
    <div className="hero-left">
      <h3>
        {t("heroSection.greeting")}{" "}
        <span className="wave" role="img" aria-labelledby="wave">
          👋🏻
        </span>
      </h3>
      <h3 style={{ paddingTop: 10, paddingBottom: 5 }}>
        {t("heroSection.my")}&nbsp;
        <strong className="brand-red">{t("appHeader.brand")}</strong>
      </h3>
      <Typewriter
        options={{
          strings: t("heroSection.work", { returnObjects: true }) as string[],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
          wrapperClassName: "brand-green",
        }}
      />
      <div className="mt-md-6 mt-3 mb-md-5 mb-2">
        <SocialMedia
          gmail={APP_DATA.GMAIL_URL}
          github={APP_DATA.GITHUB_URL}
          linkedin={APP_DATA.LINKED_URL}
          facebook={APP_DATA.FACEBOOK_URL}
        />
      </div>
      <div className="d-md-flex d-none gap-4">
        <ResizeButton
          onClick={() => scrollToExperienceSection()}
          btnText={t("heroSection.exp")}
          btnIcons={<AiFillFire style={{ color: "orange" }} />}
          btnStyle={{
            background: "unset",
            border: "1px solid var(--border-hero-right)",
            color: "var(--text-white-1)",
          }}
        />
        <ResizeButton onClick={handleDownloadCV} btnText={t("heroSection.cv")} btnIcons={<MdFileDownload />} />
      </div>
    </div>
  );
};

export default HeroLeft;
