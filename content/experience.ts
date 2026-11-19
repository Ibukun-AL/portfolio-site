import type { Role } from "./types";

// Source: the owner's CV (Ibukun_Aluko_Resume_.pdf). Percentages are the owner's own figures.
export const experience: Role[] = [
  {
    role: "Senior Full Stack Developer",
    company: "Blac Agency",
    dates: "Jul 2025 – Present",
    location: "Abuja, Nigeria",
    summary: "Design and development agency. Client-facing web applications.",
    outcomes: [
      "Built accessible interfaces with React, Next.js and Tailwind CSS, and deployed client-facing applications built for scale and responsiveness.",
      "Engineered backend services in Java and Spring Boot, reducing API response times by approximately 40%.",
      "Integrated AWS and Firebase for authentication, storage and hosting, and delivered custom CMS solutions with design and marketing teams.",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "IP Labs LLC",
    dates: "Jan 2024 – Jul 2025",
    location: "Lewes, Delaware, USA (remote)",
    summary: "Data collection and account automation.",
    outcomes: [
      "Built a modular YouTube scanner on the YouTube Data API that extracts URLs, titles, descriptions, publish dates, durations and metadata.",
      "Built Facebook authentication workflows with phone-number prioritisation, 2FA and security-challenge handling, with graceful fallback modes.",
      "Added duplicate detection, error handling for suspended and private accounts, and rate-limit protection, using Selenium automation where APIs ran out.",
      "Mentored junior engineers.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "The Ideas Impact Company",
    dates: "Jan 2023 – Jan 2024",
    location: "London, United Kingdom (remote)",
    summary: "Backend lead on production platforms including Dimme and Rugby Player.",
    outcomes: [
      "Designed REST APIs in Node.js and TypeScript covering authentication, role-based authorisation, payments, notifications and core business workflows.",
      "Modelled relational data in PostgreSQL with Prisma, with safe schema migrations.",
      "Supported production deployments: debugging live issues, improving performance and maintaining environments, and contributed to CI/CD and release workflows.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Paymish",
    dates: "Jan 2022 – Jan 2023",
    location: "Abuja, Nigeria",
    summary: "Fintech. Payment processing systems.",
    outcomes: [
      "Integrated RESTful APIs and third-party payment gateways, reducing transaction-processing time by approximately 30%.",
      "Built microservices with Spring Boot and Node.js, and tuned the database with indexing and caching.",
      "Shipped responsive interfaces in React and Tailwind CSS with UI/UX designers.",
    ],
  },
];
