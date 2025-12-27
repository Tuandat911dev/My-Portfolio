import { SKILLS_DATA } from "helpers/data";
import { skillsImage } from "helpers/skill.image";
import "./skill.scss";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";

const Skill = () => {
  const { t } = useTranslation();
  return (
    <Row className="skills-container">
      <Col xs={12} className="my-3 my-md-5">
        <div className="text-center">
          <h3>{t("skill.title")}</h3>
        </div>
      </Col>
      <Col xs={12} className="skills-marquee">
        <Swiper
          slidesPerView={7}
          spaceBetween={5}
          loop={true}
          freeMode={true}
          speed={2000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            300: {
              slidesPerView: 2,
            },
            400: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 4,
            },
            800: {
              slidesPerView: 5,
            },
            1100: {
              slidesPerView: 6,
            },
            1170: {
              slidesPerView: 7,
            },
          }}
          modules={[FreeMode, Autoplay]}
        >
          {SKILLS_DATA.map((skill, id) => (
            <SwiperSlide>
              <div className="skill-item" key={id}>
                <div className="skill-card">
                  <img src={skillsImage(skill)} alt={skill} width={40} height={40} />
                  <p className="skill-name">{skill}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Col>
    </Row>
  );
};

export default Skill;
