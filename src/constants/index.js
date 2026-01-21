import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = "My mission is to automate the boring stuff and build more of the awesome stuff.";

export const ABOUT_TEXT = 'I am a motivated and adaptable software engineering undergraduate with a passion for developing intuitive and scalable web applications. Throughout my academic journey, I have gained hands-on experience with a range of technologies, including React, Next.js, Node.js, MySQL, and MongoDB. My interest in web development started with a fascination for building digital solutions, and it has grown into a commitment to mastering the craft. I enjoy working in team-oriented environments, where I can tackle complex challenges and contribute to innovative projects. Beyond my studies, I am eager to explore emerging technologies, collaborate on open-source initiatives, and continuously expand my skill set.';

export const EXPERIENCES = [
  //{description: "I am currently seeking internship opportunities to apply my skills in a real-world setting and gain valuable industry experience. I am eager to contribute to projects that challenge me and allow me to grow as a developer."},
  {
    year: "2025 July - 2026 January",
    role: "Software Engineer Intern",
    company: "Sri Lanka Telecom - Digital Platforms",
    description: `Contributed to the development of Backend APIs using Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Nodejs", "Reactjs", "mongoDB"],
  },
  {
    year: "2026 January - Present",
    role: "Frontend Developer",
    company: "Pentarix (PVT) Ltd",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Reactjs", "Nextjs"],
  },
  /*{
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
  },*/
];

export const PROJECTS = [
  {
    title: "Dambulla Dedicated Economic Center Smart System - Group project",
    image: project1,
    description:
      "This project is an integrated web application designed to streamline the operations of the Dambulla Dedicated Economic Center. The system manages rent collection, sanitation scheduling, and vehicle ticketing processes, while providing administrators with an easy interface to enter and update daily product price lists categorized by product type. The platform enhances operational efficiency, improves data accuracy, and supports transparent market management.",
    technologies: ["React", "NodeJS", "MySQL"],
  },
  {
    title: "WaveTalk | Community Network  - Group project",
    image: project4,
    description:
      "A fully functional Real-time chatting Appliction with features like chat with other users, send images, audio & video call, hand signal identifier and text scanner.",
    technologies: ["HTML", "CSS", "React", "NodeJS", "firebase"],
  },
  {
    title: "BaniWorks - Local Freelancing Platform for Graphic designers and Content writers - Group project",
    image: project2,
    description:
      "An application for local freelancers like graphic designers and content writers, with features such as signup, login, update profile, looking for a job, chat with clients, upload project proposal, send projct and payment.",
    technologies: ["HTML", "CSS", "Typescript","Prisma", "Supabase"],
  },
  {
    title: "Online Food Ordering System - Individual Project",
    image: project3,
    description:
      "A full-stack food ordering app built with the MERN stack. It features user authentication, a responsive React frontend styled with Tailwind CSS, Redux for state management, and a robust backend API. Users can browse menus, add items to a cart, and place orders securely. Optional payment gateway integration and admin management complete the system, providing a seamless ordering experience.",
    technologies: ["MERN", "Tailwind CSS", "Redux", "BCrypt"],
  },
  {
    title: "Blogging Platform - Individual Project",
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
