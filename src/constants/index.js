import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a dedicated undergraduate student pursuing a degree in software engineering, with a strong foundation in full-stack web development. Over the course of my academic journey, I have gained practical experience with front-end technologies like React and Next.js, as well as back-end technologies such as Node.js, MySQL, and MongoDB. I am passionate about using my growing expertise to develop scalable applications that provide seamless user experiences and contribute to meaningful solutions in the IT industry.`;

export const ABOUT_TEXT = 'I am a motivated and adaptable software engineering undergraduate with a passion for developing intuitive and scalable web applications. Throughout my academic journey, I have gained hands-on experience with a range of technologies, including React, Next.js, Node.js, MySQL, and MongoDB. My interest in web development started with a fascination for building digital solutions, and it has grown into a commitment to mastering the craft. I enjoy working in team-oriented environments, where I can tackle complex challenges and contribute to innovative projects. Beyond my studies, I am eager to explore emerging technologies, collaborate on open-source initiatives, and continuously expand my skill set.';

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Real-Time Chatting Website - Group project",
    image: project1,
    description:
      "A fully functional Real-time chatting website with features like chat with other users, send images, audio & video call, hand signal identifier and text scanner.",
    technologies: ["HTML", "CSS", "React", "Node.js", "firebase", "Django"],
  },
  {
    title: "BaniWorks - Local Freelancing Platform for Graphic designers and Content writers - Group project",
    image: project2,
    description:
      "An application for local freelancers like graphic designers and content writers, with features such as signup, login, update profile, looking for a job, chat with clients, upload project proposal, send projct and payment.",
    technologies: ["HTML", "CSS", "Typescript","Prisma", "Supabase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "44/31, Sri Sumangala Road(South), Kalutara North, Kalutara ",
  phoneNo: "+94 766169957 / +94 756169953 ",
  email: "pasinduimesh385@gmail.com",
};
