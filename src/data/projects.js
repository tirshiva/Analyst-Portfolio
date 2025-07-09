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
      "MongoDB",
      "Docker",
      "Kubernetes",
      "Python",
      "FastAPI",
      "GitHub Actions",
      "MLflow"
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
      "Linear Regression",
      "Feature Engineering",
      "Pandas",
      "NumPy",
      "HTML/CSS",
      "REST API",
      "Heroku"
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
      "Cross Validation",
      "Streamlit",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "AWS S3"
    ],
    githubLink: "https://github.com/tirshiva/Customer-Churn-Analysis/tree/main",
    demoLink: "https://shivanshu2407-customer-churn-analysis-srcapp-b4z2jc.streamlit.app/",
    image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    title: "Employee Attrition Predictor",
    description: "Developed a deep learning model to predict employee attrition using neural networks and advanced analytics. Provided HR teams with actionable insights to improve retention and workforce planning.",
    techStack: [
      "Deep Learning",
      "Neural Networks",
      "TensorFlow",
      "Data Analysis",
      "HR Analytics",
      "Keras",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Jupyter Notebooks"
    ],
    githubLink: "https://github.com/tirshiva/Employe-Attrition-Project/tree/main",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    title: "Business Intelligence Dashboard",
    description: "Designed an interactive Power BI dashboard for business analytics, featuring advanced DAX calculations and data modeling. Empowered stakeholders to make data-driven decisions with real-time insights.",
    techStack: [
      "Power BI",
      "DAX",
      "Power Query",
      "Data Modeling",
      "Business Intelligence",
      "SQL",
      "Data Visualization",
      "ETL",
      "Data Warehousing",
      "Excel"
    ],
    githubLink: "https://github.com/tirshiva/Business_Insight_360",
    demoLink: "https://app.powerbi.com/view?r=eyJrIjoiM2I4YTM3NDMtMGEzZi00NjQ4LTliOGEtM2JjZWMzNmQ0N2FjIiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 6,
    title: "AI-Powered Supply Chain Optimization System",
    description: "Engineered an ML system for supply chain optimization, including demand forecasting, inventory management, and route planning. Improved operational efficiency and reduced costs for logistics teams using real-time data and advanced algorithms.",
    techStack: [
      "Python",
      "TensorFlow",
      "Apache Airflow",
      "AWS S3",
      "AWS Lambda",
      "Docker",
      "Kubernetes",
      "FastAPI",
      "React",
      "MongoDB",
      "Time Series Analysis",
      "Reinforcement Learning"
    ],
    githubLink: "https://github.com/tirshiva/Supply-Chain-Inventory-Solution",
    // demoLink: "https://supply-chain-optimization-demo.com",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 7,
    title: "Expense Manager",
    description: "Developed a full-stack expense management system with analytics, tracking, and categorization features. Enabled users to monitor spending patterns and make informed financial decisions.",
    techStack: [
      "Python",
      "Streamlit",
      "FastAPI",
      "MongoDB",
      "Data Visualization",
      "REST API",
      "Docker",
      "GitHub Actions",
      "CI/CD"
    ],
    githubLink: "https://github.com/tirshiva/Expense-Tracker-App",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800"
  }
];

// Social media and contact links
export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/shivanshu2407/",
  github: "https://github.com/tirshiva",
  email: "st955218@gmail.com"
}; 