import { Col, Row } from "react-bootstrap";
import AnimationLottie from "@/components/share/animation-lottie";
import codingJSON from "assets/lottie/coding.json";
import { DEVELOPMENT_LOTTIE } from "assets/lottie/string/development";
import { CONTACT_LOTTIE } from "assets/lottie/string/contact";

import GlowCard from "@/components/share/glow-card";
import { FaGraduationCap } from "react-icons/fa6";
import Divider from "@/components/sections/divider";
import { APP_DATA } from "helpers/data";
import SocialMedia from "components/sections/social.media";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  const activities = t("aboutSection.activities", { returnObjects: true });
  return (
    <>
      <Row>
        <Col md={6} xs={12}>
          <h3 className="text-center mb-md-5 mb-2">
            {t("aboutSection.title")}
            <span className="brand-red">{t("aboutSection.subTitle")}</span>{" "}
          </h3>
          <div>
            <div>
              <p>
                {" "}
                {t("aboutSection.description.p1")}
                <span className="brand-red">{t("aboutSection.description.name")}</span>
                {t("aboutSection.description.p2")}
              </p>
              <p> {t("aboutSection.description.p3")}</p>
              <p> {t("aboutSection.description.p4")}</p>
            </div>
          </div>
          <div>
            <p>{t("aboutSection.description.p5")}</p>
            <ul>
              {Array.isArray(activities) &&
                activities.map((activity, index) => (
                  <li key={index} className="about-activity">
                    {activity}
                  </li>
                ))}
            </ul>
          </div>
          <div>
            <p className="text-center brand-red">{t("aboutSection.quote")}</p>
            <p className="text-center brand-red">{t("aboutSection.quoteAuthor")}</p>
          </div>
        </Col>
        <Col md={6} xs={12} className="d-flex align-items-center justify-content-center">
          <AnimationLottie width="80%" animationPath={codingJSON} />
        </Col>
      </Row>

      <Row>
        <Col md={6} xs={12} className="d-none d-md-flex align-items-center justify-content-center mt-md-5 mt-3">
          <AnimationLottie
            width="50%"
            //animation with rp => convert sang text
            // https://github.com/airbnb/lottie-web/issues/2070
            animationPath={JSON.parse(DEVELOPMENT_LOTTIE)}
          />
        </Col>
        <Col md={6} xs={12} className="mt-md-5 mt-3">
          <div className="d-flex flex-column align-items-center gap-3">
            <div>
              <h4 className="text-center brand-red">{t("aboutSection.education")}</h4>
            </div>
            <div>
              <GlowCard identifier={`experience-5`}>
                <div className="p-3 relative">
                  <div className="experience-container">
                    <div className="duration-text">
                      <p>2022 - 2027</p>
                    </div>
                    <div className="details">
                      <div className="icon">
                        <FaGraduationCap size={36} />
                      </div>
                      <div className="info">
                        <p className="title">{t("aboutSection.degree")}</p>
                        <p className="company">{t("aboutSection.university")}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </GlowCard>
            </div>
          </div>
        </Col>
      </Row>

      <Divider />
      <Row>
        <Col md={6} xs={12} className=" mt-md-5 mt-3">
          <h3 className="mb-md-5 mb-2">{t("aboutSection.find")}</h3>
          <SocialMedia
            gmail={APP_DATA.GMAIL_URL}
            github={APP_DATA.GITHUB_URL}
            linkedin={APP_DATA.LINKED_URL}
            facebook={APP_DATA.FACEBOOK_URL}
          />
        </Col>
        <Col md={6} xs={12} className="d-flex flex-column align-items-center justify-content-center">
          <AnimationLottie
            width="50%"
            //animation with rp => convert sang text
            // https://github.com/airbnb/lottie-web/issues/2070
            animationPath={JSON.parse(CONTACT_LOTTIE)}
          />
          <h4 className="text-center">{t("aboutSection.contact")}</h4>
        </Col>
      </Row>
      <div className="mb-5"></div>
    </>
  );
};

export default About;
