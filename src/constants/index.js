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
  powerevent,tunart,android,
  harron,
  harron1,
  harron2,
  parkit,
  printea,
  parkitapp,
  depanneurs,
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
    title: "Web Developer",
    company_name: "Freelance Projects",
    icon: printea,
    iconBg: "#FFF",
    date: "January 2025 - June 2025",
    points: [
      "Designed and developed responsive showcase websites tailored to client needs, ensuring modern UI/UX and optimal performance.",
      "Built front-end interfaces using HTML, CSS, JavaScript, and modern frameworks for a smooth user experience.",
      "Deployed and maintained websites on various hosting platforms (IONOS, OVH)."
    ],
  },
  {
    title: "Software Architect",
    company_name: "Bal Project",
    icon: parkit,
    iconBg: "#FFF",
    date: "January 2025 - June 2025",
    points: [
      "Developed a fully functional intelligent parking solution integrating IoT, AI, and web technologies.",
      "Hardware Integration: Connected ESP32-CAM with a Python/Flask backend for real-time license plate recognition (LPR) and parking space detection.",
      "Web App (MERN Stack): Real-time map of available spots, Flouci-based payment system, and admin dashboard with analytics.",
      "DevOps & Monitoring: Automated CI/CD with Jenkins & Docker, code quality via SonarQube, and performance monitoring using Prometheus, Grafana, and cAdvisor."
    ],
  },
   {
    title: "Flutter Developer",
    company_name: "Freelance Project",
    icon: harron,
    iconBg: "#FFF",
    date: "July 2024 - September 2024",
    points: [
      "Designed all application interfaces using Figma, ensuring a premium user experience tailored to Islamic content. ",
      "Developed a full Flutter application published on both the App Store and Google Play, featuring smooth animations and intuitive navigation.",
      "Optimized performance (loading time and memory usage) to deliver an optimal user experience.",
    ],
  },
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
    date: "January 2024 - June 2024",
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
  
  {
    name: "ParkIt",
    description:
      "An intelligent parking management system integrating IoT, AI, and web technologies. Features include real-time license plate recognition, parking space detection using YOLOv6, and a MERN web app with payment via Flouci. CI/CD automated with Jenkins and Docker.",
    tags: [
      { name: "Flask", color: "blue-text-gradient" },
      { name: "MERN", color: "green-text-gradient" },
      { name: "YOLOv6", color: "pink-text-gradient" },
      { name: "Docker", color: "orange-text-gradient" },
    ],
    image: parkitapp,
    source_code_link: "https://park-it-seven.vercel.app/home",
  },
  {
    name: "Harron",
    description:
      "A Flutter mobile app providing Islamic educational content with a premium user experience. Designed with Figma, featuring smooth animations, optimized performance, and publication on App Store and Google Play.",
    tags: [
      { name: "Flutter", color: "blue-text-gradient" },
      { name: "Figma", color: "green-text-gradient" },
      { name: "RESTAPI", color: "pink-text-gradient" },
    ],
    image: harron1,
    source_code_link: "https://play.google.com/store/apps/details?id=com.haroon.app&hl=fr",
  },
  {
    name: "Vitrine",
    description:
      "Developed multiple responsive showcase websites for clients using modern web technologies. Focused on performance, design, SEO optimization, and deployment across platforms like IONOS and OVH.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
      { name: "Laravel", color: "orange-text-gradient" },
    ],
    image: depanneurs,
    source_code_link: "https://depanneursprives.fr/",
  },
];

export { services, technologies, experiences, projects };
