// This file contains all your project information
// To add a new project, copy an existing project object and modify its details
// Each project should have the following properties:
// - id: A unique number for the project
// - title: The name of your project
// - description: A brief description of what the project does
// - techStack: An array of technologies used
// - githubLink: Link to the GitHub repository
// - demoLink: Link to live demo (if available)
// - image: Path to project image (optional)

export const projects = [
  {
    id: 1,
    title: "Vehicle Insurance Purchase Prediction MLOps Pipeline",
    description: "Developed a pipeline for vehicle insurance prediction, automating data processing, model training, and deployment with CI/CD, dockerization, and cloud hosting on AWS EC2.",
    techStack: [
      "AWS EC2",
      "MongoDB",
      "Docker",
      "CI/CD",
      "MLOps"
    ],
    githubLink: "https://github.com/tirshiva/MLOps-Proj1",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Real Estate Price Predictor",
    description: "A Linear Regression model that predicts house prices based on various features such as location, size, and amenities. Built using Python and Scikit-learn, and deployed with Flask for real-time predictions.",
    techStack: [
      "Python",
      "Scikit-learn",
      "Flask",
      "Linear Regression"
    ],
    githubLink: "https://github.com/tirshiva/House-Prediction-Regression-Model",
    demoLink: "https://house-prediction-regression-model.onrender.com/",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Customer Churn Analysis",
    description: "A Machine learning project based on Random Forest Classifier to predict customer churn. The model is trained on a telecom dataset and includes hyperparameter tuning and cross-validation to enhance accuracy.",
    techStack: [
      "Python",
      "Random Forest",
      "Hyperparameter Tuning",
      "Cross Validation"
    ],
    githubLink: "https://github.com/tirshiva/Customer-Churn-Analysis/tree/main",
    demoLink: "https://shivanshu2407-customer-churn-analysis-srcapp-b4z2jc.streamlit.app/",
    image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&q=80&w=800"
  }
];

// Social media and contact links
export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/shivanshu2407/",
  github: "https://github.com/tirshiva",
  email: "st955218@gmail.com"
};
