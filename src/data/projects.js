export const projects = [
  {
    id: 6,
    title: 'JD Customized Resume',
    description:
      'Modular ATS and resume analysis service built with FastAPI, LangGraph, and pluggable LLM providers for JD analysis, RAG retrieval, gap analysis, ATS scoring, and approval-gated MCP workflows.',
    category: 'AI / Backend Engineering',
    techStack: ['FastAPI', 'LangGraph', 'pgvector', 'Ollama', 'OpenAI', 'Azure OpenAI'],
    githubLink: 'https://github.com/tirshiva/jd-customized-resume',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 5,
    title: 'YouTube Analytics Data Pipeline',
    description:
      'End-to-end ETL pipeline extracting YouTube API data into staging, transforming via dbt-style logic, and loading into core schemas — orchestrated with Apache Airflow and containerized with Docker.',
    category: 'Data Engineering',
    techStack: ['Python', 'Apache Airflow', 'Docker', 'CI/CD', 'ETL/ELT'],
    githubLink: 'https://github.com/tirshiva/youtube-etl',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 1,
    title: 'Insurance Purchase Prediction',
    description:
      'Production MLOps pipeline for vehicle insurance purchase prediction — automated data processing, model training, Docker containerization, CI/CD, and cloud deployment on AWS EC2.',
    category: 'Machine Learning',
    techStack: ['AWS EC2', 'Docker', 'CI/CD', 'MLOps', 'Python'],
    githubLink: 'https://github.com/tirshiva/MLOps-Proj1',
    image:
      'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    title: 'Real Estate Price Predictor',
    description:
      'ML regression system predicting house prices from location, size, and amenities — built with Scikit-learn, hyperparameter tuning via Grid Search, and deployed via Flask for real-time inference.',
    category: 'Machine Learning',
    techStack: ['Python', 'Scikit-learn', 'Grid Search', 'Flask', 'Regression'],
    githubLink: 'https://github.com/tirshiva/House-Prediction-Regression-Model',
    demoLink: 'https://house-prediction-regression-model.onrender.com/',
    image:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    title: 'Customer Churn Analysis',
    description:
      'Predictive analytics pipeline using Random Forest with PCA-based feature selection, hyperparameter tuning, and cross-validation on telecom customer data.',
    category: 'Machine Learning',
    techStack: ['Random Forest', 'PCA', 'Feature Selection', 'Python', 'Cross-Validation'],
    githubLink: 'https://github.com/tirshiva/Customer-Churn-Analysis/tree/main',
    image:
      'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 4,
    title: 'Fruit Store Backend API',
    description:
      'Production-ready RESTful API for e-commerce — product catalog, order processing, and inventory management built with FastAPI and PostgreSQL.',
    category: 'Backend Engineering',
    techStack: ['FastAPI', 'PostgreSQL', 'RESTful API', 'Python'],
    githubLink: 'https://github.com/tirshiva/fruit-store-Backend',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800'
  }
];
