// Centralized, concise profile context used by the chatbot

import { projects, socialLinks } from './projects';

export const profileContext = {
  name: 'Shivanshu Tiwari',
  title: 'Data Scientist / AI Engineer',
  location: 'Gurgaon, India',
  summary:
    'Data Scientist specializing in e-commerce analytics, inventory forecasting, NLP-based support systems, and AWS-based ML solutions.',
  experience: [
    {
      company: 'Amazon',
      role: 'Data Scientist',
      period: 'March 2024 - Present',
      focus:
        'Seller Support Analytics, inventory forecasting, NLP ticket classification, FBA insights. ~15% client satisfaction improvement via automation.',
      skills: ['Python', 'Machine Learning', 'NLP', 'Time Series', 'AWS', 'SQL']
    },
  ],
  skills: [
    'Statistical Analysis',
    'Data Visualization',
    'EDA',
    'A/B Testing',
    'Supervised/Unsupervised Learning',
    'Deep Learning',
    'NLP',
    'Python',
    'R',
    'SQL/NoSQL',
    'TensorFlow',
    'PyTorch',
    'scikit-learn',
    'Pandas',
    'NumPy',
    'Tableau',
    'Power BI',
    'SQL Server',
    'MySQL',
    'PostgreSQL',
    'MongoDB'
  ],
  projects: projects.map(({ id, title, description, techStack, githubLink, demoLink }) => ({
    id,
    title,
    description,
    techStack,
    githubLink,
    demoLink
  })),
  certification: 'Executive Post Graduate Certification in Data Science & AI – IIT Roorkee',
  education: 'Bachelor of Science in Mathematics and Computing',
  social: socialLinks,
  contactEmail: 'st955218@gmail.com',
  websiteSections: ['Home', 'Projects', 'About', 'Experience', 'Certification', 'Contact']
};

export default profileContext;

