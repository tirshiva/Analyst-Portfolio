// Single source of truth for personal branding, SEO, skills, and portfolio copy.

const SITE_URL = 'https://analyst-portfolio-beta.vercel.app';

const profile = {
  name: 'Shivanshu Tiwari',
  title: 'AI Engineer | Data Engineering',
  shortTitle: 'AI & Data Engineer',
  heroDescription:
    'Building production AI systems, scalable data pipelines, and cloud-native platforms that turn complex data into intelligent business outcomes.',
  ctaText: 'Explore My Work',

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
      'I design and ship end-to-end AI and data systems — from orchestrated pipelines and feature stores to model deployment and intelligent automation — with a focus on reliability, scalability, and measurable impact.',
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
        duration: 'Jun 2026 – Present',
        description:
          'Building enterprise AI applications, data orchestration pipelines, and model-driven automation for strategic business outcomes.'
      },
      {
        company: 'Amazon',
        role: 'Business Analyst',
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
      'Model Serving',
      'Feature Engineering',
      'MLOps'
    ],
    dataEngineering: [
      'PySpark',
      'Pandas',
      'Data Modeling',
      'Pipeline Orchestration'
    ],
    cloud: ['AWS', 'Docker', 'CI/CD', 'Git', 'REST APIs'],
    languages: ['Python', 'SQL']
  },

  techStack: [
    { label: 'Python', color: 'bg-yellow-400' },
    { label: 'AWS', color: 'bg-amber-500' },
    { label: 'Docker', color: 'bg-indigo-500' },
    { label: 'Git', color: 'bg-gray-500' },
    { label: 'FastAPI', color: 'bg-emerald-500' }
  ],

  expertise: [
    'AI Systems & LLM Applications',
    'Data Pipelines & ETL/ELT',
    'Workflow Orchestration',
    'Cloud Data Platforms',
    'MLOps & Model Deployment'
  ],

  projectCategories: [
    { label: 'AI Engineering', icon: 'brain' },
    { label: 'Data Engineering', icon: 'cogs' },
    { label: 'MLOps & Cloud', icon: 'cloud' }
  ],

  sections: {
    projects: {
      badge: 'Portfolio',
      title: 'Featured Projects',
      subtitle:
        'Production AI systems, data pipelines, and cloud-native engineering work'
    },
    contact: {
      badge: 'Get In Touch',
      title: "Let's Connect",
      formHeading: "Let's Build Something Intelligent"
    }
  },

  contact: {
    location: 'Gurgaon, India',
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
