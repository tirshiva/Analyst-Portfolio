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
    title: "MLOps Insurance Pipeline",
    description: "Developed an end-to-end MLOps pipeline for vehicle insurance prediction, automating data processing, model training, and deployment with CI/CD. Enabled rapid, reliable model updates and reduced manual intervention, improving operational efficiency for insurers.",
    techStack: [
      "MLOps",
      "CI/CD",
      "AWS EC2",
      "MongoDB"
    ],
    githubLink: "https://github.com/tirshiva/MLOps-Proj1",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Real Estate Price Predictor",
    description: "Built an advanced ML model to predict property prices using feature engineering and regression. Helped users and realtors make informed decisions by providing accurate, data-driven price estimates.",
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
    description: "Created a machine learning solution to predict customer churn, leveraging advanced feature engineering and model optimization. Enabled businesses to proactively retain customers and reduce churn rates.",
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