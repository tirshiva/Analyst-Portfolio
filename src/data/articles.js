import { article1 } from './articles/article1';
import { article2 } from './articles/article2';
import { article3 } from './articles/article3';
import { article4 } from './articles/article4';
import { article5 } from './articles/article5';
import { article6 } from './articles/article6';

export const articles = [
  {
    id: 1,
    title: "Introduction to Machine Learning",
    description: "A comprehensive guide to understanding the fundamentals of machine learning, its types, applications, and how to get started with ML projects.",
    category: "Machine Learning",
    readTime: "25 min read",
    link: "/articles/1",
    resources: [
      {
        title: "Scikit-learn Documentation",
        link: "https://scikit-learn.org/stable/",
        icon: "FaBookOpen"
      },
      {
        title: "TensorFlow Documentation",
        link: "https://www.tensorflow.org/learn",
        icon: "FaBookOpen"
      }
    ]
  },
  {
    id: 2,
    title: "Introduction to Deep Learning",
    description: "An accessible introduction to deep learning, its core concepts, architectures, and real-world applications.",
    category: "Deep Learning",
    readTime: "28 min read",
    link: "/articles/2",
    resources: [
      {
        title: "Deep Learning Specialization (Coursera)",
        link: "https://www.coursera.org/specializations/deep-learning",
        icon: "FaBookOpen"
      },
      {
        title: "PyTorch Documentation",
        link: "https://pytorch.org/docs/stable/",
        icon: "FaBookOpen"
      }
    ]
  },
  {
    id: 3,
    title: "Introduction to Natural Language Processing (NLP)",
    description: "A beginner-friendly guide to Natural Language Processing, its core concepts, techniques, and real-world applications.",
    category: "Natural Language Processing",
    readTime: "24 min read",
    link: "/articles/3",
    resources: [
      {
        title: "NLTK Documentation",
        link: "https://www.nltk.org/",
        icon: "FaBookOpen"
      },
      {
        title: "Hugging Face Transformers",
        link: "https://huggingface.co/docs/transformers/index",
        icon: "FaBookOpen"
      }
    ]
  },
  {
    id: 4,
    title: "Introduction to LangChain and Generative AI",
    description: "A beginner-friendly guide to LangChain, its core concepts, and how it integrates with generative AI models to build powerful applications.",
    category: "Generative AI",
    readTime: "30 min read",
    link: "/articles/4",
    resources: [
      {
        title: "LangChain Documentation",
        link: "https://langchain.readthedocs.io/",
        icon: "FaBookOpen"
      },
      {
        title: "OpenAI API Documentation",
        link: "https://beta.openai.com/docs/",
        icon: "FaBookOpen"
      }
    ]
  },
  {
    id: 5,
    title: "What is ML Ops?",
    description: "An introduction to ML Ops, its importance, and how it bridges the gap between machine learning model development and deployment.",
    category: "ML Ops",
    readTime: "22 min read",
    link: "/articles/5",
    resources: [
      {
        title: "MLflow Documentation",
        link: "https://mlflow.org/docs/latest/index.html",
        icon: "FaBookOpen"
      },
      {
        title: "Kubeflow Documentation",
        link: "https://www.kubeflow.org/docs/",
        icon: "FaBookOpen"
      }
    ]
  },
  {
    id: 6,
    title: "Standard Machine Learning Project Template",
    description: "A comprehensive guide to setting up a standard machine learning project using ML Ops, automated pipelines, exception handling, logging, Docker, and more.",
    category: "Machine Learning",
    readTime: "35 min read",
    link: "/articles/6",
    resources: [
      {
        title: "Apache Airflow Documentation",
        link: "https://airflow.apache.org/docs/",
        icon: "FaBookOpen"
      },
      {
        title: "Docker Documentation",
        link: "https://docs.docker.com/",
        icon: "FaBookOpen"
      }
    ]
  }
]; 