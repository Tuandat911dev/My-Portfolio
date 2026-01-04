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

  return (
    <div className="hero-left">
      <h3 data-aos="fade-right">
        {t("heroSection.greeting")}{" "}
        <span className="wave" role="img" aria-labelledby="wave">
          👋🏻
        </span>
      </h3>
      <h3 style={{ paddingTop: 10, paddingBottom: 5 }} data-aos="fade-right">
        {t("heroSection.my")}&nbsp;
        <strong className="brand-red">{t("appHeader.brand")}</strong>
      </h3>
      <div data-aos="fade-right">
        <Typewriter
          options={{
            strings: t("heroSection.work", { returnObjects: true }) as string[],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
            wrapperClassName: "brand-green",
          }}
        />
      </div>

      <div className="mt-md-6 mt-3 mb-md-5 mb-2" data-aos="fade-left">
        <SocialMedia
          gmail={APP_DATA.GMAIL_URL}
          github={APP_DATA.GITHUB_URL}
          linkedin={APP_DATA.LINKED_URL}
          facebook={APP_DATA.FACEBOOK_URL}
        />
      </div>
      <div className="d-md-flex d-none gap-4" data-aos="fade-up">
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

        <ResizeButton>
          <a
            href="/assets/document/demo_cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit", textDecoration: "none", textTransform: "uppercase" }}
          >
            {t("heroSection.cv")}
          </a>
          <>
            <MdFileDownload />
          </>
        </ResizeButton>
      </div>
    </div>
  );
};

export default HeroLeft;
