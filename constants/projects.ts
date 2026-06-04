export const projects = [
  {
    title: 'PRISM | Multi-Agent AI Debate Platform',
    slug: 'prism',
    tagline:
      'An AI debate platform where multiple LLM agents research, deliberate, challenge each other, and produce a final synthesized answer.',
    overview:
      'PRISM is a sophisticated multi-agent AI platform that orchestrates six AI agents through multiple rounds of debate and deliberation. The system combines web research, semantic memory, real-time communication, and AI synthesis to generate higher-quality answers than a single model. Built as a full-stack application with authentication, persistent conversations, and live streaming responses.',
    features: [
      '6-agent AI debate orchestration system',
      '2-round deliberation and challenge mechanics',
      'Real-time streaming responses with Socket.IO',
      'Semantic memory using Gemini embeddings',
      'Web research integration with Tavily',
      'Google OAuth 2.0 authentication',
      'JWT authentication with HttpOnly cookies',
      'Persistent conversation history',
    ],
    techStack: [
      'Next.js',
      'React 19',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'Socket.IO',
      'Gemini',
      'Google OAuth',
      'JWT',
      'Tavily',
    ],
    challenges: [
      'Coordinating multiple AI agents in a structured debate workflow.',
      'Managing real-time communication between agents and users.',
      'Implementing semantic memory and contextual retrieval.',
      'Ensuring efficient orchestration while maintaining response quality.',
    ],
    learnings: [
      'Advanced AI agent architecture design.',
      'Semantic search and embeddings implementation.',
      'Real-time event-driven systems with Socket.IO.',
      'Building production-ready authentication systems.',
    ],
    feedback: true,
    links: {
      live: 'https://prism-web-v1.vercel.app',
      github: 'https://github.com/shahzaibalijamro/prism',
    },
  },

  {
    title: 'Pulse | Privacy-Focused Analytics SaaS',
    slug: 'pulse',
    tagline:
      'A lightweight analytics platform providing real-time website insights without compromising user privacy.',
    overview:
      'Pulse is a privacy-first analytics SaaS that allows businesses to track pageviews, visitors, devices, referrers, countries, and live events through a lightweight tracker script. The platform uses Redis buffering, MongoDB aggregation pipelines, and Socket.IO to provide real-time analytics while avoiding long-term personal data collection.',
    features: [
      'Real-time analytics dashboard',
      'Custom website tracker script',
      'Live visitor monitoring',
      'Device, country and referrer analytics',
      'Multi-tenant workspace architecture',
      'Redis-powered event buffering',
      'MongoDB aggregation pipelines',
      'Real-time dashboard updates with Socket.IO',
      'API key-based tracking system',
    ],
    techStack: [
      'Next.js',
      'TypeScript',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Redis',
      'Socket.IO',
      'Tailwind CSS',
      'Recharts',
      'JWT',
    ],
    challenges: [
      'Designing a scalable analytics ingestion pipeline.',
      'Reducing database writes using Redis buffering.',
      'Building secure multi-tenant data isolation.',
      'Implementing real-time analytics updates efficiently.',
    ],
    learnings: [
      'Event-driven architecture design.',
      'Analytics aggregation strategies.',
      'Redis caching and buffering patterns.',
      'Multi-tenant SaaS application development.',
    ],
    feedback: true,
    links: {
      live: 'https://pulse-steel-two.vercel.app',
      github: 'https://github.com/shahzaibalijamro/pulse',
    },
  },

  {
    title: 'Jamro Tools | All-in-One Utility Platform',
    slug: 'jamro-tools',
    tagline:
      'A growing collection of hundreds of online utilities built for speed, privacy, and accessibility.',
    overview:
      'Jamro Tools is a large-scale utility platform that aims to provide calculators, converters, developer tools, generators, PDF utilities, image tools, and more in a single place. The platform is built with a focus on performance, responsive design, and privacy-first processing.',
    features: [
      'Hundreds of planned utility tools',
      'Calculator and converter ecosystem',
      'Developer-focused tools',
      'SEO and content utilities',
      'Image and PDF processing tools',
      'Fast and responsive interface',
      'SEO optimized architecture',
      'Privacy-first approach',
    ],
    techStack: [
      'Next.js 16',
      'React 19',
      'TypeScript',
      'Tailwind CSS',
      'Google Tag Manager',
    ],
    challenges: [
      'Designing an architecture that can support hundreds of tools.',
      'Maintaining performance as the platform scales.',
      'Building reusable tool-generation patterns.',
      'Optimizing SEO across large numbers of pages.',
    ],
    learnings: [
      'Large-scale Next.js application architecture.',
      'Programmatic SEO strategies.',
      'Reusable component system design.',
      'Performance optimization techniques.',
    ],
    feedback: false,
    links: {
      live: 'https://jamro-tools.vercel.app',
      github: 'https://github.com/shahzaibalijamro/jamro-tools',
    },
  },
];
