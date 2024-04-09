import {
  ClevertechLogo,
  ConsultlyLogo,
  JojoMobileLogo,
  ParabolLogo,
  TastyCloudLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Sebastian Beleño",
  initials: "SB",
  location: "Medellín, Colombia",
  locationLink: "https://www.google.com/maps/place/Medell%C3%ADn,+Antioquia/",
  about:
    "React Native Engineer with a obsession for highly interactive and efficient mobile apps.",
  summary:
    "Passionate React Native Developer with over 4 years of experience in building and shipping mobile and web applications from 0 to 1. With a strong background in computer science and a focus on user experience. Led the development of several successful products and ensuring the delivery of high quality software, streamlined the developmment process and implemented efficient data solutions.",
  avatarUrl: "https://avatars.githubusercontent.com/u/39771116?v=4",
  personalWebsiteUrl: "https://sebasbeleno.vercel.app/",
  contact: {
    email: "sebasbeleno15@gmail.com",
    tel: "+573117585689",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/sebasbeleno/",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sebasbeleno/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "EAFIT University",
      degree: "Bachelor's degree in Computer Science",
      start: "2020",
      end: "Present",
    },
  ],
  work: [
    {
      company: "Perficient",
      link: "https://www.perficient.com/",
      badges: ["Remote"],
      title: "React Native Developer",
      logo: ParabolLogo,
      start: "July 2022",
      end: "April 2024",
      description: [
        {
          type: "paragraph",
          content:
            "Developed and shipped large scale mobile applications used by over 1 million users. Collaborated with cross fuctional teams and stakeholders to deliver high quality software. Led the design and implementation of scalable architecture of big features like Visual Search for the ACE Hardware App and the integration of new payments methods for the Namutek Ka$h App.",
        },
        {
          type: "paragraph",
          content: "Collaborated directly with clients on project progress, delivering clear and concise presentations. Successfully resolved critical client issues, ensuring project timelines were met.",
        },
        {
          type: "paragraph",
          content: "Co-created and designed the React Native learning path for new hires. Mentored junior developers on best practices and coding standards. Streamlined the technical test for applicants, reducing completion time by 20 minutes and increasing the effectiveness of the test for applicants, resulting in faster and more accurate evaluation.",
        },
        {
          type: "list",
          title: "Clients",
          customBullet: "•",
          content: [
            "Enterprise Mobility - Alamo Mobile App (Mobility)",
            "Namutek - Ka$h Mobile App (Fintech)",
            "ACE Hardware - ACE Customer Mobile App (Retail)",
          ],
        },
        {
          type: "paragraph",
          content:
            "Technologies used: React Native, TypeScript, Fastlane, Supabase, Firebase, Redux, Android, iOS, Kotlin, Swift, AppCenter, CodeMagic, Bitrise",
        },
      ],
    },
    {
      company: "Biva",
      link: "https://www.biva.co/",
      badges: ["Remote"],
      title: "React Native Developer",
      logo: ClevertechLogo,
      start: "2021",
      end: "2022",
      description: [
        {
          type: "paragraph",
          content:
            "Biva it's a mobile app that helps people to increase their aderence to their treatment. I was the lead React Native Developer and I was in charge of the development of the Android and iOS apps. Worked on new features like a custom CMS from scratch and a new UI for the app. Technologies used: React Native, TypeScript, Firebase",
        },
      ],
    },
    {
      company: "DatBig",
      badges: [],
      title: "Full Stack Developer",
      logo: JojoMobileLogo,
      start: "2020",
      end: "2021",
      description: [
        {
          type: "paragraph",
          content:
            "DatBig was a startup that I co-founded. We created custom software for companies and universities. We focused on big data and machine learning projects. I was in charge of the development of the web apps and the backend. Technologies used: React, Next.js, TypeScript, GraphQL, PostgreSQL, Firebase, Node.JS, Django, AWS",
        },
      ],
    },
  ],
  achievements: [
    {
      title:
        "Oracle RedBull Racing Racing To The Cloud Hackathon | Second Place.",
      logo: TastyCloudLogo,
      description:
        "I was part of a team that won the second place in the Racing To The Cloud Hackathon. We researched across multiple cloud databases from the Formula 1 and we created a dashboard that showed key metrics from the best and worst matches. Showing this data in a dashboard helped the oracle team to make better decisions on races. We used Oracle Cloud to host the dashboard and the database.",
      date: "2023",
    },
    {
      title: "Software Development Hackathon | First Place.",
      logo: TastyCloudLogo,
      description:
        "I was part of a team that won the first place in the Software Development Hackathon of the Technology and Innovation student club of the EAFIT University. We created a web app that helped students to track and book their supplementary exams in a more efficient way. Automating the process of booking exams saved the university a lot of money and time.",
      date: "2023",
    },
    {
      title:
        "Pedagogical Meeting of Education Technical High School in Computer Science | Second Place.",
      logo: TastyCloudLogo,
      description:
        "With my team, we won the second place in the Pedagogical Meeting of Education Technical High School in Computer Science. We created a web app that helped students from my high schol to make better decisions on their career path. We created a quiz that helped students to find their strengths and weaknesses. We used this data to recommend them a career path in base of the high school possibilities.",
      date: "2020",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React Native",
    "React/Next.js",
    "GraphQL",
    "Android",
    "Kotlin",
    "iOS",
    "Swift",
    "Supabase",
    "Firebase",
    "Redux",
    "Fastlane",
  ],
  projects: [
    {
      title: "Mony",
      techStack: [
        "Side Project",
        "TypeScript",
        "React Native",
        "OneSignal",
        "Supabase",
        "Fastlane",
      ],
      description:
        "Personal finance app for iOS and Android. Track your expenses, create budgets and more",
      logo: ConsultlyLogo,
      link: {
        label: "Mony App",
        href: "https://apps.apple.com/us/app/mony-finanzas-personales/id6448954678",
      },
    },
    {
      title: "Report.gg",
      techStack: [
        "Side Project",
        "TypeScript",
        "React/Next.js",
        "PostgreSQL",
        "Firebase",
      ],
      description:
        "League of Legends stats and analytics website. Track your progress, compare with friends and more",
      logo: ConsultlyLogo,
    },
    {
      title: "Auriga",
      techStack: [
        "Side Project",
        "TypeScript",
        "React/Next.js",
        "PostgreSQL",
        "Supabase",
        "Tailwind CSS",
      ],
      description:
        "Loan management system for a microfinance company. Manage clients, loans, payments and more",
      logo: ConsultlyLogo,
    },
  ],
} as const;
