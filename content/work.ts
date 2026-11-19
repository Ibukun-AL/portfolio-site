import type { Work } from "./types";

// demoUrl and codeUrl are filled in once each project is deployed and pushed.
export const work: Work[] = [
  {
    slug: "document-qa",
    title: "Document Q&A assistant",
    pitch: "Ask a question about a PDF and get an answer that cites the page it came from.",
    stack: ["Next.js", "TypeScript", "Anthropic API", "Vitest"],
    demoUrl: "",
    codeUrl: "",
    note: "Personal project",
    points: [
      "Extracts text per page, splits it into chunks, and ranks chunks with BM25-style keyword scoring. No vector database, by design.",
      "The model may answer only from the retrieved excerpts, and replies \"The document doesn't say.\" when the answer isn't there.",
      "Scanned PDFs, oversized files and rate limits each return a clear message instead of a blank or broken answer.",
    ],
  },
  {
    slug: "receipt-tracker",
    title: "Receipt scanner and expense tracker",
    pitch: "Photograph a receipt, check the extracted merchant, date and total, and see monthly spending by category.",
    stack: ["React Native", "Expo", "TypeScript", "Vision model API"],
    demoUrl: "",
    codeUrl: "",
    note: "Personal project",
    points: [
      "A serverless endpoint reads the receipt with a vision model. Reading happens on the server, not on the device.",
      "You review and edit the extracted fields before anything is saved, and a photo that isn't a receipt is rejected.",
      "Totals are summed in cents to avoid floating-point drift.",
    ],
  },
  {
    slug: "risk-service",
    title: "Disease risk prediction service",
    pitch: "A Spring Boot API in front of a Python model, containerised and tested in CI.",
    stack: ["Java 21", "Spring Boot", "Python", "FastAPI", "scikit-learn", "Docker", "GitHub Actions"],
    demoUrl: "",
    codeUrl: "",
    note: "Personal project. Public dataset, not medical advice.",
    points: [
      "The gateway validates input, calls the model service with timeouts, and returns 503 with a clean message when the model is down.",
      "The model is a logistic regression on a public dataset bundled with scikit-learn. It is inspired by my MSc and IEEE research and does not use that research data.",
      "Runs with one command through Docker Compose.",
    ],
  },
];
