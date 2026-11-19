import type { Role } from "./types";

// Figures are copied from the owner's previous portfolio. The owner must confirm them before launch.
export const experience: Role[] = [
  {
    role: "Full-Stack Developer",
    company: "Paymish",
    dates: "Jan 2024 – Jun 2024",
    location: "Abuja, Nigeria",
    summary: "Payment processing applications.",
    outcomes: [
      "Integrated third-party payment gateways through RESTful APIs, reducing payment processing time by 30%.",
      "Built microservices with Spring Boot and Node.js, and tuned the database with caching and indexing to cut query response time.",
      "Worked with designers to ship responsive interfaces in React and Tailwind CSS.",
    ],
  },
  {
    role: "Software Developer",
    company: "Federal Polytechnic Ilaro",
    dates: "Mar 2023 – Aug 2023",
    location: "Nigeria",
    summary: "A voting management system and an admin tracking system.",
    outcomes: [
      "Designed the REST APIs and secured them with JWT, OAuth 2.0 and data encryption.",
      "Deployed on AWS and Google Cloud, and led CI/CD integration that reduced deployment failures by 40%.",
      "Mentored interns in clean architecture and agile practice.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Nigeria Deposit Insurance Corporation (NDIC)",
    dates: "Mar 2022 – Feb 2023",
    location: "Abuja, Nigeria",
    summary: "Spring Boot microservices for a national financial institution.",
    outcomes: [
      "Built Spring Boot microservices that improved system scalability by 30%.",
      "Optimised queries across MySQL, PostgreSQL and MongoDB, reducing response time by 20%.",
      "Containerised services with Docker and Kubernetes for a 50% improvement in deployment efficiency, and cut deployment time by 40% with CI/CD.",
      "Hardened APIs with OAuth, JWT and role-based access control.",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "HIIT PLC",
    dates: "Apr 2020 – Jan 2021",
    location: "Abuja, Nigeria",
    summary: "Legacy code refactoring and API testing.",
    outcomes: [
      "Refactored legacy code to reduce application response time by 30%.",
      "Raised test coverage by 25% with JUnit, Jest and Cypress.",
    ],
  },
];
