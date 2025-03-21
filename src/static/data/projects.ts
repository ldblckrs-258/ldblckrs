import { Project } from "@/types/projects";

const PROJECTS : Project[] = [
  {
    id: "personal-portfolio",
    logo: "/circle.svg",
    title: "Personal Portfolio",
    time: "03.2025 - Present",
    link: "https://ldblckrs.id.vn/",
    tags: [
      "Personal Project",
      "Portfolio",
      "Next.js",
      "TailwindCSS",
      "ShadCN UI"
    ],
    description: "My personal portfolio showcasing my experience as a Software Engineer and Web Developer. Includes sections for personal information, contact details, and projects.\n- Features:\n\t- Showcases personal projects, skills, and work experience\n\t- Interactive and minimalistic UI\n\t- Responsive design for all screen sizes\n\t- Contact form for inquiries\n- Technologies:\n\t- Built with Next.js for performance and SEO\n\t- Styled using TailwindCSS for modern UI\n\t- Components powered by ShadCN UI for a consistent look and feel",
  },
  {
    id: "whisperhythm",
    logo: "/projects/whisperhythm.png",
    title: "WhispeRhythm",
    time: "02.2025 - 03.2025",
    link: "https://whisperhythm.vercel.app/",
    tags: [
      "Personal Project",
      "Next.js",
      "Firebase Authentication",
      "MongoDB",
      "Spotify Web API",
      "Google AI Studio API",
      "TailwindCSS",
      "Cursor AI"
    ],
    description: "A personalized card-sharing platform that allows users to attach YouTube videos or Spotify tracks, add custom messages, and personalize styles. Features AI-generated messages and password protection.\n- Features:\n\t- Create digital cards with embedded YouTube videos or Spotify songs\n\t- Add custom messages or generate AI-powered text via Google AI Studio API\n\t- Customize card appearance (colors, fonts)\n\t- Set password protection for private cards\n\t- Share generated cards via unique links\n- Technologies:\n\t- Next.js for server-side rendering and optimized performance\n\t- Firebase Authentication for user login and security\n\t- MongoDB for storing user-generated cards\n\t- Spotify Web API for searching songs\n\t- Google AI Studio API for AI-generated messages\n\t- TailwindCSS for styling and UI customization"
  },
  {
    id: "pigeon-chat",
    logo: "/projects/pigeon-chat.svg",
    title: "Pigeon Chat",
    time: "06.2024 - 12.2024",
    link: "https://pigeon-chat.vercel.app/",
    tags: [
      "University Project",
      "Full-stack Development",
      "Node.js",
      "ExpressJS",
      "React",
      "MongoDB",
      "Vite",
      "TailwindCSS",
      "Socket.IO",
      "WebRTC",
      "framer-motion",
      "react-oauth",
      "Cloudinary",
      "NodeMailer"
    ],
    description: "A real-time messaging web application supporting individual and group chats, file transfers via WebRTC, and voice calls. I developed both frontend and backend.\n- Features:\n\t- Real-time messaging using WebSocket (Socket.IO)\n\t- Supports one-on-one and group chats\n\t- File and image sharing via Cloudinary\n\t- Direct file transfer between devices via WebRTC\n\t- Secure user authentication using OAuth (react-oauth)\n\t- Email verification via NodeMailer\n\t- Interactive UI with Framer Motion\n- Technologies:\n\t- Backend: Node.js, Express.js, MongoDB for data storage\n\t- Frontend: React with Vite for performance optimization\n\t- Styling: TailwindCSS for responsiveness and aesthetics\n\t- Real-time communication: WebRTC and Socket.IO"
  },
  {
    id: "da-nang-explore",
    title: "Da Nang Explore (Frontend Demo)",
    time: "01.2024 - 05.2024",
    link: "https://pbl-3-fe.vercel.app/",
    tags: [
      "University Project",
      "Team Project",
      "Frontend Development",
      "React",
      "TypeScript",
      "Vite",
      "TailwindCSS",
      "react-router-dom",
      "framer-motion"
    ],
    description: "A tourism promotion website for Da Nang, featuring location exploration, reviews, blog posting, and itinerary planning. I was responsible for designing and developing the frontend.\n- Features:\n\t- Explore and review tourist attractions in Da Nang\n\t- Users can read and post travel blogs\n\t- Create and share personalized travel itineraries\n\t- Website content and user management page for administrators\n- Technologies:\n\t- Built with React and TypeScript for a modern and scalable frontend\n\t- Vite for fast development and optimized builds\n\t- Styled using TailwindCSS for a clean UI\n\t- Animated interactions using Framer Motion\n\t- Routing handled by React Router DOM\n\t- Responsive design for mobile and desktop users\n- The backend of website was developed by my other teammates using .NET"
  },
];


export default PROJECTS;