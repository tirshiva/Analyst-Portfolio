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
    title: "Premier League Prediction",
    description: "machine Learning tool predicting match results of the premier league",
    techStack: ["Python", "MLOps", "Docker", "Ensemble"],
    githubLink: "https://github.com/tirshiva/Premier-League-Prediction-/tree/master",
    // demoLink: "https://house-prediction-regression-model.onrender.com/",
    // image: "/images/01.png" // Fixed path
  },
  {
    id: 2,
    title: "ML-Powered Property Price Predictor",
    description: "Machine Learning real estate tool predicting prices using Python, Scikit-learn.",
    techStack: ["Python", "Scikit-learn", "Flask", "Linear Regression"],
    githubLink: "https://github.com/tirshiva/House-Prediction-Regression-Model",
    demoLink: "https://house-prediction-regression-model.onrender.com/",
    image: "/images/01.png" // Fixed path
  },
  {
    id: 3,
    title: "Business Insights 360",
    description: "Power BI dashboard providing actionable insights across Finance, Sales, Marketing, and Supply Chain departments.",
    techStack: ["Power BI", "DAX", "Power Query", "Business Intelligence"],
    githubLink: "https://github.com/tirshiva/Business_Insight_360",
    demoLink: "https://app.powerbi.com/view?r=eyJrIjoiM2I4YTM3NDMtMGEzZi00NjQ4LTliOGEtM2JjZWMzNmQ0N2FjIiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9",
    image: "/images/02.png" // Fixed path
  },
  {
    id: 4,
    title: "Customer Churn Prediction",
    description: "Machine learning model for churn prediction in the telecommunications industry.",
    techStack: ["Python","Random Forest Classifier","Hyperparameter tuning","Cross Validation"],
    githubLink: "https://github.com/tirshiva/Customer-Churn-Analysis/tree/main",
    demoLink: "https://shivanshu2407-customer-churn-analysis-srcapp-b4z2jc.streamlit.app/",
    image: "/images/Churn.png" // Fixed path
  },
  {
    id: 5,
    title: "Employee Retention Analytics",
    description: "Predicting employee attrition using machine learning to improve workforce retention.",
    techStack: ["Human Resource Analytics","Classification","Neural Network","Deep Learning"],
    githubLink: "https://github.com/tirshiva/Employe-Attrition-Project/tree/main",
    // demoLink: "https://shivanshu2407-customer-churn-analysis-srcapp-b4z2jc.streamlit.app/",
    image: "/images/Emp Attr.png" // Fixed path
  }
];

// Social media and contact links
export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/shivanshu2407/",
  github: "https://github.com/tirshiva",
  email: "st955218@gmail.com"
}; 