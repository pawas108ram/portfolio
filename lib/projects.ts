import { Project } from "@/app/components/ProjectCard";

export const projects:Project[] = [
    {
        name: 'ZoroChat',
        techStack: ['Next JS', 'Prisma', 'MongoDB', 'Pusher', 'Tailwind CSS', 'Framer Motion'],
        description: " Zoro Chat, built on Next.js, Prisma, and MongoDB, revolutionizes communication with real-time one-to-one and group chats. Ensuring a seamless and secure experience, it leverages Next.js for dynamic UI, Prisma for efficient data modeling, and MongoDB for scalable real-time storage, making it a modern solution for intuitive and responsive digital conversations.",
        deployedLink: 'https://zoro-chat.vercel.app/',
        githubLink: "https://github.com/pawas108ram/ZoroChat",
        image:'/images/zorochat.jpeg'

    },
    {
        name: 'Basic Social Media App',
        techStack: ['React', 'Firebase', 'TypeScript', 'Tailwind CSS'],
        description: "A basic social media app built using React, Firebase, and Tailwind CSS. It allows users to create posts, like posts, and comment on posts. It also has a login and signup page.",
        deployedLink: 'https://social-media-app-9b37c.web.app/',
        githubLink: "https://github.com/pawas108ram/social-media-app",
        image:'/images/socialmedia.jpeg'
        
    },
    {
        name: "Sound Maker App",
        techStack: ["HTML", "CSS", "JavaScript"],
        description: "A sound maker app built using HTML, CSS, and JavaScript. It allows users to play different sounds by clicking on the buttons.",
        deployedLink: "https://pawas108ram.github.io/Sound-Maker/",
        githubLink: "https://github.com/pawas108ram/Sound-Maker",
        image:'/images/music.jpeg'

    },
    {
        name: "Todo List App",
        techStack: ["HTML", "CSS", "JavaScript"],
        description: "A todo list app built using HTML, CSS, and JavaScript. It allows users to add and delete todos.",
        deployedLink: "https://pawas108ram.github.io/Todo-List-App-/",
        githubLink: "https://github.com/pawas108ram/Todo-List-App-",
        image:'/images/todo.jpeg'
    },
    {
        name: "Resource Hub",
        techStack: ["Next JS", "Tailwind CSS", "Framer Motion", "TypeScript", "Prisma", "PostgreSQL", "Next Auth"],
        description: "ResourceHub is a dynamic platform empowering tech enthusiasts to share DSA sheets and tech guidance. Users enhance learning with categorized solutions and engage in discussions. Task-centric resources guide sequential learning, supplemented with rich media. A virtual leaderboard adds competition using ResourceHub's currency. Continuous improvement is prioritized, welcoming valuable user suggestions. 🌐💻",
        deployedLink: "https://resource-hub-ten.vercel.app/dashboard",
        githubLink: "https://github.com/pawas108ram/resource-hub",
        image:'/images/resourcehub.jpeg'
    },
    {
        name: "LegalEase",
        techStack: ["Next JS", "Tailwind CSS", "Clerk Authentication", "MongoDB", "Socket.IO"],
        description: "LegalEase is a platform that connects lawyers and clients. It allows lawyers to create and manage their profiles. It also allows clients to create and manage their cases. It also has a chat feature that allows lawyers and clients to chat with each other.",
        deployedLink: "https://frontend-beta-bice.vercel.app/",
        githubLink: "https://github.com/Bhool-Bhulaiyaa/frontend",
        image:'/images/legalease.jpeg'

    }
]