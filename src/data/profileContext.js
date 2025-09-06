// Centralized, concise profile context used by the chatbot

import { projects, socialLinks } from './projects';

export const profileContext = {
  name: 'Shivanshu Tiwari',
  title: 'Data Scientist / AI Engineer',
  location: 'Gurgaon, India',
  summary:
    'Data Scientist specializing in machine learning, analytics, NLP, and AI-powered solutions for various industries.',
  experience: [],
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
  education: [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Indira Gandhi National Open University',
      period: '2025 - 2027',
      status: 'Pursuing'
    },
    {
      degree: 'Executive Diploma in Data Science and Artificial Intelligence',
      institution: 'iHub, IIT Roorkee',
      period: '2024 - 2025',
      status: 'Completed'
    },
    {
      degree: 'Bachelor of Science in Mathematics and Computing',
      institution: 'Chhatrapati Shahuji Maharaj University',
      location: 'Kanpur',
      period: '2019 - 2022',
      status: 'Completed'
    }
  ],
  social: socialLinks,
  contactEmail: 'st955218@gmail.com',
  websiteSections: ['Home', 'Projects', 'About', 'Experience', 'Education', 'Contact']
};

export default profileContext;

