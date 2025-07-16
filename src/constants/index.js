import {
  mobile,
  backend,
  creator,
  web,
  html,
  css,
  javascript,
  typescript,
  reactjs,
  nodejs,
  nextjs,
  innovovision,
  paypines,
  self,
  threads,
  healthcare,
  portfolio,
  aditya,
  santosh,
  school,
  RajFashion,
  chess,
  Evolution,
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
    id: "technology",
    title: "Technology",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Full-Stack Developer",
    icon: backend,
  },
  {
    title: "Fronted Developer",
    icon: creator,
  },
];

const technologies = [
   {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "nextjs",
    icon: nextjs,
  },
];

const experiences = [
  {
    title: "Campus Mantri",
    company_name: "Geeks for Geeks",
    icon: self,
    iconBg: "#E6DEDD",
    date: "May 2025 - Present",
    points: [
      "Acted as the official campus representative of GeeksforGeeks, bridging the gap between students and the tech community.",
      "Promoted competitive programming, DSA, and development culture among peers through workshops, coding contests, and knowledge-sharing sessions.",
      "Collaborated with GFG core team to organize campus-wide events, boosting student participation in coding challenges and learning drives.",
      "Guided juniors and peers on navigating the GeeksforGeeks platform, including structured learning paths, practice sets, and interview prep resources.",
      "Encouraged students to upskill in problem-solving and development by sharing daily challenges and relevant tech opportunities.",
      "Built a tech-driven community within the university to foster consistent learning, collaboration, and peer mentorship.",
    ],
  },
  {
    title: "Summer Trainee",
    company_name: "CipherSchools",
    icon: paypines,
    iconBg: "#E6DEDD",
    date: "June 2025 - August 2025",
    points: [
      "Completed an intensive summer training program focused on full-stack web development using technologies like React.js, Node.js, Express, and MongoDB.",
      "Built scalable, responsive web applications by applying real-world use cases and following industry-standard development practices.",
      "Worked on individual and team-based projects to strengthen understanding of REST APIs, state management in React, and backend data handling.",
      "Participated in weekly code reviews, tech discussions, and mentorship sessions to improve problem-solving and debugging skills.",
      "Explored modern development tools and libraries, including Tailwind CSS, Git, Postman, and JWT-based authentication.",
      "Gained hands-on experience in Agile development workflows, including sprint planning, task breakdown, and deployment practices.",
    ],
  },
  {
    title: "Kshitij Maths Olympiad",
    company_name: "IIT Kharagpur",
    icon: innovovision,
    iconBg: "#E6DEDD",
    date: "January 2025",
    points: [
      "Secured a position among the Top 25 in the prestigious Kshitij Mathematics Olympiad conducted by IIT Kharagpur.",
      "Applied concepts from number theory, algebra, combinatorics, and geometry to solve olympiad-level questions.",
      "Gained exposure to competitive mathematical thinking and interacted with top talent from institutions across the country.",
      "Enhanced logical reasoning and speed through rigorous practice and self-study prior to the competition.",
    ],    
  },

];

const projects = [
  {
    name: "Raj Fashion",
    description:
      "Raj Fashion is a modern full-stack e-commerce platform built with Next.js 14+, Tailwind CSS, and MongoDB. It includes features like user authentication, product browsing, category filtering, cart and order management, Stripe-powered checkout, and an admin dashboard for inventory and orders, delivering a seamless online shopping experience.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: RajFashion,
    source_code_link: "https://github.com/manishkumar8312/Raj-Fashion",
  },
  {
    name: "Chess",
    description:
      "Chess is a two-player browser-based game built using HTML, CSS, and JavaScript. It features a clean and responsive user interface, turn-based logic, and standard chess rules including piece movement and check conditions. The game provides an interactive and engaging experience for users to play classic chess in the browser.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: chess,
    source_code_link: "https://github.com/manishkumar8312/Chess-now",
  },
  {
    name: "Ev-olution",
    description:
      "Ev-olution is a sleek, modern web app built to showcase electric vehicles with stunning visuals and responsive UI. Developed using React.js, Tailwind CSS, and Framer Motion, it features smooth animations, intuitive navigation, and an engaging user experience that highlights the beauty and innovation of electric vehicle technology.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "framer-motion",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Evolution,
    source_code_link: "https://github.com/manishkumar8312/EV-olution",
  },
];

export { services, technologies, experiences, projects };
