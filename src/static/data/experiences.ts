import { Experience } from "@/types/experiences";

const EXPERIENCES: Experience[] = [
  {
    company: "Freelance",
    positions: [
      {
        id: "ca1f8a37-29ff-47cd-a8ee-6a088b6aa27c",
        title: "Front-end Developer",
        year: "2024 - present",
        employmentType: "Part-time",
        description:
          "- Built a significant portion of the UI for an AI assistant travel website called [Tripeo](https://book-tripeo.com).\n- Designed and developed the front-end for a crypto blog website.",
        icon: "code",
        skills: [
          "React",
          "Next.js",
          "Tailwind CSS",
        ],
        expanded: true,
      },
    ],
  },
  {
    company: "Education",
    positions: [
      {
        id: "0f1c11a9-8e2d-4458-8874-cf7a1b2e0b71",
        title: "University of Danang - University of Science and Technology (DUT)",
        year: "08.2022 - present",
        icon: "education",
        description:
          "- Currently pursuing a Bachelor's degree in Information Technology.",
        skills: [
          "C++",
          "C#",
          "Java",
          "Python",
          "JavaScript",
          "PHP",
          "Data Structures",
          "Algorithms",
          "Databases",
          "AI",
          "Machine Learning",
          "Self-learning",
          "Teamwork",
          "Presentation",
          "Project Management",
          "..."
        ],
        expanded: true,
      },
      {
        id: "8c1b8722-f482-474e-9134-8872b37c1aab",
        title: "Nguyen Thi Minh Khai High School - Ha Tinh",
        year: "08.2019 - 06.2022",
        icon: "school",
        description:
          "- Won second prize in the Provincial Excellent Student Competition in Physics.\n- Gained direct admission to university thanks to competition awards and outstanding academic achievements.",
        skills: [
          "English",
          "Pascal",
          "HTML/CSS",
          "Self-learning",
        ],
      },
      {
        id: "d71859f7-f4e0-4949-a1e9-012192832a07",
        title: "Hoang Xuan Han Secondary School - Ha Tinh",
        year: "08.2015 - 06.2019",
        icon: "school",
        description:
          "- Achieved several awards in District- and Provincial-level Excellent Student Competitions in Physics, Mathematics, and English",
        skills: [
          "English",
          "Pascal",
          "Self-learning",
        ],
      },
    ],
  },
];

export default EXPERIENCES;