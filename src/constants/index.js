import project1 from "../assets/projects/project1.jpg";
import project2 from "../assets/projects/project2.jpg";
import project3 from "../assets/projects/project3.jpg";
import project4 from "../assets/projects/project4.jpg";
import project5 from "../assets/projects/project5.jpg";
import project6 from "../assets/projects/project6.jpg";
import project7 from "../assets/projects/project7.jpg";

export const HERO_CONTENT = `Experienced MERN Stack Developer with a strong passion for building dynamic and visually appealing web applications. Highly skilled in MongoDB, Express.js, React, and Node.js, delivering seamless full-stack solutions.Actively seeking impactful opportunities with innovative companies that value staying at the forefront of technology and making significant contributions to their success.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Node.js, Express, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCE = [
    {
        year: "2023 - 2024",
        role: "Full Stack Developer",
        company: "Entri Elevate",
        description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
        technologies: ["Javascript", "React.js", "Node.js", "mongoDB, Express.js"],
    },
];

export const PROJECTS = [
    {
        title: "Doctor Appointment",
        image: project1,
        description:
            "Developed a multi-level authentication system for a doctor or hospital, featuring three user roles: Patients can Register, log in, book and manage appointments. Doctors can View appointments, track earnings, and update profiles via a dedicated dashboard. Admin can Manage doctor profiles and oversee appointments through an admin dashboard",
        technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    },
    {
        title: "Car Rental Website",
        image: project2,
        description:
            "Developed a full-stack car rental website with a user-friendly frontend for customers and a feature-rich admin dashboard. Integrated real-time email notifications using nodemailer for booking confirmations.",
        technologies: ["HTML", "CSS", "TailwindCSS", "Framer-Motion", "React", "Node.js", "MongoDB"],
    },
    {
        title: "Ecommerce Application",
        image: project3,
        description:
            "A e-commerce application designing scalable back-end solutions, implementing responsive front-end interfaces, and leveraging modern development practices to deliver exceptional solutions .Developed a robust e-commerce platform with Node.js, Express, MongoDB, JWT-based authentication, and Material UI, featuring comprehensive cart management and seamless data flow via REST API.",
        technologies: ["React", "Node", "MongoDB", "Express"],
    },
    {
        title: "Coffee Shop Website",
        image: project4,
        description:
            "Developed a fully responsive coffee shop website using HTML, CSS, and JavaScript. Focused on user-friendly navigation to enhance accessibility. Integrated modern design elements to create an appealing and visually engaging user experience.",
        technologies: ["HTML", "CSS", "Bootstrap","JavaScript"],
    },
    {
        title: "To-Do Web App",
        image: project5,
        description:
            "A task management application built with Provider for state management, featuring an intuitive user interface that allows users to add, edit, and delete tasks efficiently, ensuring a smooth and effective user experience.",
        technologies: ["HTML", "CSS", "Bootstrap","JavaScript"],
    },
    {
        title: "Digital Clock",
        image: project6,
        description:
            "Digital clock that displays the current time, updating every second for accuracy, alongside a toggle switch to switch between light mode and dark mode. This feature will enhance user experience by providing a comfortable viewing option in various lighting conditions.",
        technologies: ["HTML", "CSS", "Bootstrap","JavaScript"],
    },
    {
        title: "Netflix Clone",
        image: project7,
        description:
            "Created a Netflix clone application using RESTful web services and the TMDb API, delivering a comprehensive media streaming experience.",
        technologies: ["React", "TMDB", "Node"],
    },
];

export const CONTACT = {
    address: "Puthukkudi Medakkunnu malayil moottoli kakkodi, 673611",
    phoneNo: "9400749917",
    email: "meghasaju45@gmail.com",
};