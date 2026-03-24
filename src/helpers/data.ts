import leolaptop from "assets/project/leolaptop.png";
import trendora from "assets/project/trendora.png";
import portfolio from "assets/project/portfolio.png";
import pageturner from "assets/project/pageturner.png";
import linkjob from "assets/project/linkjob.png";

export const APP_DATA = {
  GMAIL_URL: "mailto:pdat100111@gmail.com",
  GITHUB_URL: "https://github.com/Tuandat911dev",
  LINKED_URL: "https://www.linkedin.com/in/tuan-dat-pham-90b837366",
  FACEBOOK_URL: "https://www.facebook.com/tuan.at.464773",
};

export const EXPERIENCES = [
  {
    id: 1,
    title: {
      vi: "Phát triển dự án cá nhân",
      en: "Personal Project Development",
      jp: "個人プロジェクト開発",
    },
    company: {
      vi: "Tự học và xây dựng sản phẩm",
      en: "Self-study and Building Products",
      jp: "独学・サービス開発",
    },
    duration: {
      vi: "Tháng 06/2025 - Hiện tại",
      en: "Jun 2025 - Present",
      jp: "2025年6月 - 現在",
    },
  },
  {
    id: 2,
    title: {
      vi: "Thực tập sinh Fullstack",
      en: "Fullstack Developer Intern",
      jp: "フルスタックエンジニア インターン",
    },
    company: {
      vi: "Công ty Kiai Soft",
      en: "Kiai Soft",
      jp: "株式会社Kiai Soft",
    },
    duration: {
      vi: "Tháng 02/2025 - Tháng 06/2025",
      en: "Feb 2025 - Jun 2025",
      jp: "2025年2月 - 2025年6月",
    },
  },
  {
    id: 3,
    title: {
      vi: "Thực tập sinh Backend",
      en: "Backend Developer Intern",
      jp: "バックエンドエンジニア インターン",
    },
    company: {
      vi: "Trung tâm phần mềm BKS - BKACAD",
      en: "BKS Software Center - BKACAD",
      jp: "BKSソフトウェアセンター - BKACAD",
    },
    duration: {
      vi: "Tháng 07/2024 - Tháng 01/2025",
      en: "Jul 2024 - Jpn 2025",
      jp: "2024年7月 - 2025年1月",
    },
  },
];

export const PROJECTS = [
  {
    id: 1,
    imgPath: trendora,
    title: "Trendora",
    description:
      "A full-featured e-commerce platform for fashion retail with integrated VNPAY payment, OAuth2 (Google Login), and Role-based Access Control (RBAC). Optimized with Caffeine Cache and real-time notifications via WebSocket.",
    githubLink: "https://gitlab.com/PhamTuanDat/back-end-trendora",
    demoLink: "https://trendora-fashion.netlify.app/",
    status: "Active",
  },
  {
    id: 2,
    imgPath: linkjob,
    title: "LinkJob",
    description:
      "An IT recruitment platform similar to ITViec, enabling employers to post jobs and manage CVs, while helping candidates search for opportunities. Built with a Java Spring Boot RESTful API and a dynamic ReactJS frontend.",
    githubLink: "https://github.com/Tuandat911dev/LinkJob",
    demoLink: "#!",
    status: "Developing",
  },
  {
    id: 3,
    imgPath: pageturner,
    title: "PageTurner",
    description:
      "A modern online bookstore featuring a high-quality UI and smooth API integration. Developed with ReactJS (TypeScript) and Ant Design for a professional look, integrated with a NestJS backend.",
    githubLink: "https://github.com/Tuandat911dev/pageturner-ecommerce-web",
    demoLink: "#!",
    status: "Active",
  },
  {
    id: 4,
    imgPath: portfolio,
    title: "Personal Portfolio",
    description:
      "My professional portfolio built with ReactJS and TypeScript to showcase my technical skills, work experience, and projects. Optimized for performance and features multi-language support (EN, VI, JP).",
    githubLink: "https://github.com/Tuandat911dev/My-Portfolio",
    demoLink: "https://tuandatdev.netlify.app",
    status: "Active",
  },
  {
    id: 5,
    imgPath: leolaptop,
    title: "LeoLaptop",
    description:
      "A specialized laptop retail system focusing on catalog management and complex product specifications. Developed using Java Spring Boot (Spring MVC) to ensure a stable and responsive user experience.",
    githubLink: "https://github.com/Tuandat911dev/Leo-Laptop",
    demoLink: "#!",
    status: "Active",
  },
] as const;

export const SKILLS_DATA = [
  "HTML",
  "CSS",
  "Javascript",
  "Typescript",
  "React",
  "Vue",
  "MySQL",
  "PostgreSQL",
  "Git",
  "Bootstrap",
  "Docker",
  "Java",
  "Spring",
  "PHP",
  "Laravel",
];

// Choose your skills from below. Make sure it's in the same format and spelled correctly.
// Couldn't find the required skills? Raise an issue on github at https://github.com/hhhrrrttt222111/developer-portfolio/issues/new

// AVAILABLE SKILLS

/* 
    HTML
    CSS
    JS 
    React
    Next JS
    Nuxt JS
    Node JS
    Vue
    Angular
    Docker
    Photoshop
    Illustrator
    Svelte
    GCP
    Azure
    Fastify
    Haxe
    Ionic
    Markdown
    Microsoft Office
    Picsart
    Sketch
    Unity
    WolframAlpha
    Adobe XD
    After Effects
    Bootstrap
    Bulma
    CapacitorJs
    Coffeescript
    MemSQL
    C
    C++
    C#
    Python
    Jpva
    Julia
    Matlab
    Swift
    Ruby
    Kotlin
    Go
    PHP
    Flutter
    Dart
    Typescript
    Swift
    Git
    Figma
    Canva
    Ubuntu
    Bootstrap
    MongoDB
    Tailwind
    ViteJS
    VuetifyJS
    MySQL
    PostgreSQL
    AWS
    Firebase
    Blender
    Premiere Pro
    Adobe Audition
    Deno
    Djpngo
    Gimp
    Graphql
    Lightroom
    MaterialUI
    Nginx
    Numpy
    OpenCV
    Pytorch
    Selenium
    Strapi
    Tensorflow
    Webex
    Wordpress
  */
