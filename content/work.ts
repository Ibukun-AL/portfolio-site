import type { Work } from "./types";

// demoUrl and codeUrl are filled in once each project is deployed and pushed.
export const work: Work[] = [
  {
    slug: "document-qa",
    title: "Document Q&A assistant",
    pitch: "Ask a question about a PDF and get an answer that cites the page it came from.",
    stack: ["Next.js", "TypeScript", "Gemini API", "Vitest"],
    demoUrl: "",
    codeUrl: "",
    note: "Personal project",
    stages: [
      ["Brief", "Answer questions about a PDF without making things up."],
      ["Build", "Per-page text, chunking, BM25-style retrieval, answers drawn only from the excerpts."],
      ["Test", "10 passing Vitest tests."],
      ["Ship", "Rate-limited and size-capped. Live demo deploying soon."],
    ],
    image: { src: "/work/document-qa-v2.png", alt: "Screenshot of the Document Q&A app showing the sample Northwind policy as four page cards, a question box and three example questions.", w: 880, h: 620 },
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
    stack: ["React Native", "Expo", "TypeScript", "Gemini vision API"],
    demoUrl: "",
    codeUrl: "",
    note: "Personal project",
    stages: [
      ["Brief", "Turn a receipt photo into a categorised expense."],
      ["Build", "Expo app, server-side vision reading, review and edit before saving."],
      ["Test", "12 passing Vitest tests on categorising and summing."],
      ["Ship", "Web preview builds. Device build to follow."],
    ],
    image: { src: "/work/receipt-tracker-v2.png", alt: "Screenshot of the Receipts app on a phone-width screen showing the monthly spending total, category colours and the Scan receipt and Choose photo buttons.", w: 390, h: 420 },
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
    stages: [
      ["Brief", "Put a Python model behind a Java service, the way a team would."],
      ["Build", "Spring Boot gateway validates input and calls a FastAPI model with timeouts."],
      ["Test", "3 pytest tests on the model, 96.5% held-out accuracy, plus JUnit tests on the gateway."],
      ["Ship", "Docker Compose file and CI workflow are in the repo."],
    ],
    image: { src: "/work/risk-service-v2.png", alt: "Screenshot of the risk model service status page showing its predict endpoint and example risk scores for two rows of the public dataset.", w: 880, h: 510 },
    points: [
      "The gateway validates input, calls the model service with timeouts, and returns 503 with a clean message when the model is down.",
      "The model is a logistic regression on a public dataset bundled with scikit-learn. It is inspired by my MSc and IEEE research and does not use that research data.",
      "Runs with one command through Docker Compose.",
    ],
  },
];
