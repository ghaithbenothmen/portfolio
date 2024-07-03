import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  github,
  unity,
  docker,
  MSKTechnologies,
  esprit,
  springboot,
  sofa,
  esprit_reclamation,
  sallah,
  ftc,
  roam,
  angular,
  laravel,
  symfony,
  loginapp,
  powerevent,tunart,android
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "Mobile Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Spring Boot",
    icon: springboot,
  },
  {
    name: "Android Studio",
    icon: android,
  },
  {
    name: "github",
    icon: github,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Symfony",
    icon: symfony,
  }
];

const experiences = [
  {
    title: "Android Developer",
    company_name: "Freelance Project",
    icon: ftc,
    iconBg: "#FFF",
    date: "January 2024 - May 2024",
    points: [
      "Modernize the judgment of powerlifting competitions by replacing flags with a digital voting system. ",
      "Development of an Android application to allow referees to vote 'lift' or 'no lift' ",
      "Implementation of the MQTT protocol for real-time communication between the referees' application and a TV application. ",
      "Development of the TV application to display the voting results.","Creation of an intuitive user interface for the referees' and TV applications."
    ],
  },
  {
    title: "Multiplatform Developer",
    company_name: "Esprit",
    icon: esprit,
    iconBg: "#FFF",
    date: "February 2024 - May 2024",
    points: [
      "Use of JavaFX to develop the user interface for the desktop version of the application.",
      "Integration of Symfony for data management and communication with the database.",
      "Use of Flutter Flow to design and develop the user interface for the mobile version of the application.",
      "Collaboration with a multidisciplinary team to ensure the smooth running of the project and meet deadlines.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "ROAM MAZE",
    icon: roam,
    iconBg: "#FFF",
    date: "February 2023 - May 2023",
    points: [
      "Development of a Web and Mobile application for managing a training institution.",
      "Development environment: Springboot, Angular. • Implementation of Spring Security JWT Authentication.",
      "Development of the mobile application from the Angular project with Capacitor Angular.",
      ],
  },
];


const projects = [
  {
    name: "Academy Navigator",
    description:
      "Simplifies school administration and enhances collaboration between educators and students to enhance efficiency and transparency in educational institutions.",
    tags: [
      {
        name: "mySql",
        color: "blue-text-gradient",
      },
      {
        name: "springBoot",
        color: "green-text-gradient",
      },
      {
        name: "angular",
        color: "pink-text-gradient",
      },
    ],
    image: loginapp,
    source_code_link: "https://github.com/ghaithbenothmen/ScolariteProject-master",
  },
  {
    name: "Power Event",
    description:
      "Modernize powerlifting competitions with an Android app for referee voting and a TV app to display results, using MQTT for real-time communication.",
    tags: [
      {
        name: "androidStudio",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "MQTT",
        color: "pink-text-gradient",
      },
    ],
    image: powerevent,
    source_code_link: "https://github.com/wael852/VoteSuite",
  },
  {
    name: "TunArt",
    description:
      "A comprehensive artistic platform , enabling artists to showcase their work, engage in collaborative projects, and participate in online events.",
    tags: [
      {
        name: "symfony",
        color: "blue-text-gradient",
      },
      {
        name: "javaFx",
        color: "green-text-gradient",
      },
      {
        name: "flutterFlow",
        color: "pink-text-gradient",
      },
      {
        name: "mysql",
        color: "red-text-gradient",
      }
    ],
    image: tunart,
    source_code_link: "https://github.com/ghaithbenothmen/TunArt-WebProject",
  },
];

export { services, technologies, experiences, projects };
