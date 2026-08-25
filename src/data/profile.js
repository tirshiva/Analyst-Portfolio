// Single source of truth for personal branding, SEO, skills, and portfolio copy.

const SITE_URL = 'https://analyst-portfolio-beta.vercel.app';

const profile = {
  name: 'Shivanshu Tiwari',
  title: 'AI Engineer | Data Engineering',
  shortTitle: 'AI & Data Engineer',
  heroDescription:
    'I turn complex data into AI systems that actually ship.',
  ctaText: "Let's Connect",
  secondaryCtaText: 'Get In Touch',

  photo: {
    src: '/profile.jpeg',
    alt: 'Shivanshu Tiwari — AI Engineer'
  },

  seo: {
    siteUrl: SITE_URL,
    title: 'Shivanshu Tiwari — AI Engineer & Data Engineering Portfolio',
    description:
      'Portfolio of Shivanshu Tiwari, AI Engineer at EY. Explore projects in LLM applications, ETL/ELT pipelines, MLOps, Apache Airflow, and cloud data platforms.',
    keywords:
      'AI Engineer, Data Engineering, MLOps, ETL ELT, Python, AWS, LLM, RAG, Data Pipelines, Shivanshu Tiwari'
  },

  about: {
    summary:
      'I ship AI and data systems that are reliable, scalable, and built to show results.',
    careerFocus: [
      'LLM applications & AI agent workflows',
      'ETL/ELT pipelines & data orchestration',
      'MLOps & production model deployment',
      'Cloud-native data platform architecture'
    ],
    experiences: [
      {
        company: 'EY',
        role: 'AI Engineer',
        duration: 'Mar 2026 – Present',
        description:
          'Building enterprise AI applications, data orchestration pipelines, and model-driven automation for strategic business outcomes.'
      },
      {
        company: 'Amazon',
        role: 'Data Engineer',
        duration: 'Mar 2024 – Jan 2026',
        description:
          'Developed analytics pipelines, automation workflows, and reporting frameworks that improved operational decision-making.'
      }
    ],
    education: [
      {
        institution: 'iHub IIT Roorkee',
        degree: 'Diploma in DS & AI',
        duration: '2024–2025'
      },
      {
        institution: 'CSJM University',
        degree: 'B.Sc. Mathematics',
        duration: '2019–2022'
      }
    ]
  },

  skills: {
    ai: [
      'LLM Applications',
      'RAG Pipelines',
      'LangGraph',
      'Model Serving',
      'MLOps'
    ],
    dataEngineering: [
      'ETL/ELT',
      'PySpark',
      'Data Modeling',
      'PostgreSQL'
    ],
    cloud: ['AWS', 'Docker', 'FastAPI', 'REST APIs'],
    languages: ['Python', 'SQL']
  },

  techStack: [
    { label: 'Python' },
    { label: 'Agentic AI' },
    { label: 'FastAPI' },
    { label: 'AWS' }
  ],
  expertise: [
    'AI Systems & LLM Applications',
    'Data Pipelines & ETL/ELT',
    'Multi-Agent Workflows',
    'Cloud Data Platforms',
    'MLOps & Model Deployment'
  ],

  featuredProjectId: 7,

  searchSuggestions: ['MLOps', 'FastAPI', 'LangGraph', 'Python'],

  sections: {
    projects: {
      title: 'Featured Projects',
      subtitle:
        'Production AI systems, data pipelines, and cloud-native engineering work'
    },
    contact: {
      title: "Let's Connect"
    }
  },

  contact: {
    location: 'Noida, India',
    availability: 'Open to AI Engineering and Data Engineering roles',
    intro:
      'Interested in collaborating on AI systems, data pipelines, and cloud-native engineering projects.',
    vcfFile: '/contact.vcf',
    vcfDownloadName: 'Shivanshu_Tiwari.vcf'
  },

  socialLinks: {
    linkedin: 'https://www.linkedin.com/in/shivanshu2407/',
    github: 'https://github.com/tirshiva',
    email: 'shivanshutiwari.ml@gmail.com',
    twitter: 'https://x.com/shivanshut24'
  },

  projects: {
    githubText: 'View More on GitHub',
    callToAction:
      'Explore more AI engineering and data pipeline projects on GitHub.'
  }
};

export default profile;
