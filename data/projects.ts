export type Project = {
  slug: string;
  name: string;
  role?: string;
  period?: string;
  description: string;
  tech?: string[];
  github?: string;
  liveUrl?: string;
  demoUrl?: string;
};

export const pitcrewlabs: Project = {
  slug: "pitcrewlabs",
  name: "PitCrewLabs",
  role: "founding ai engineer",
  period: "2025 → now",
  description:
    "An AI platform helping cosmetic medical clinics improve lead conversion across their sales funnel. I built the pipeline that turns real call and consult transcripts into feedback for sales reps, with scripted quotes, along with the metrics tracking behind it. I've also worked on transcription benchmarking and an LLM eval framework for our SMS messaging.",
};

export const strava: Project = {
  slug: "running-load-insights",
  name: "Running Load Insights",
  description:
    "A tool that turns a runner's Strava history into a week-by-week injury risk chart. It plots Acute:Chronic Workload Ratio against labeled risk zones, and an LLM turns the pre-computed numbers into a coaching note with specific, forward-looking guidance.",
  tech: ["Python", "FastAPI", "React", "Recharts", "Groq", "Vercel"],
  liveUrl: "https://running-load-insights.vercel.app",
  github: "https://github.com/preity-singh/running-load-insights",
};

export const stripe: Project = {
  slug: "stripe-rag-support-agent",
  name: "Stripe RAG Support Agent",
  description:
    "A support agent grounded in Stripe's own documentation. Every answer comes with a citation, the conversation is tracked across turns, and questions outside its scope get escalated through Notion instead of getting a made-up answer.",
  tech: [
    "Python",
    "Claude Haiku 4.5",
    "Pinecone",
    "sentence-transformers",
    "Streamlit",
    "Notion API",
  ],
  demoUrl: "https://stripe-customer-support-agent.streamlit.app/",
  github: "https://github.com/preity-singh/stripe-rag-agent/tree/deploy",
};

export const previousRoles = [
  {
    name: "RIA Advisory",
    detail: "financial services technology consulting · 2025",
  },
  {
    name: "Level Nine Group",
    detail: "healthcare cybersecurity · 2024",
  },
];
