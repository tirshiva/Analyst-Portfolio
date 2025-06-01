import { motion } from 'framer-motion';
import { FaBrain, FaChartLine, FaBook, FaRobot, FaTools } from 'react-icons/fa';
import { SiTensorflow, SiPytorch, SiScikitlearn } from 'react-icons/si';

const Documentation = () => {
  const sections = [
    {
      id: "what-is-ml",
      title: "What is Machine Learning?",
      icon: <FaBrain className="w-6 h-6 text-supply-primary" />,
      content: `
        Machine Learning is a fascinating field where computers learn from data to make predictions or decisions without being explicitly programmed. Think of it as teaching computers to recognize patterns and learn from experience, much like how humans learn.

        At its core, Machine Learning is about:
        • Finding patterns in data
        • Making predictions based on those patterns
        • Improving accuracy over time through experience
        • Automating decision-making processes
      `
    },
    {
      id: "ml-impact",
      title: "The Impact of Machine Learning",
      icon: <FaChartLine className="w-6 h-6 text-supply-primary" />,
      content: `
        Machine Learning is revolutionizing industries across the globe. From healthcare to finance, transportation to entertainment, ML is transforming how we live and work.

        Key impacts include:
        • Personalized recommendations in e-commerce
        • Early disease detection in healthcare
        • Fraud detection in banking
        • Autonomous vehicles in transportation
        • Smart assistants in our daily lives
      `
    },
    {
      id: "ml-technologies",
      title: "Technologies Built with Machine Learning",
      icon: <FaRobot className="w-6 h-6 text-supply-primary" />,
      content: `
        Modern ML technologies are reshaping our world. Here are some groundbreaking applications:

        • Natural Language Processing (NLP)
          - Chatbots and virtual assistants
          - Language translation services
          - Sentiment analysis tools

        • Computer Vision
          - Facial recognition systems
          - Medical image analysis
          - Autonomous vehicle perception

        • Recommendation Systems
          - E-commerce product recommendations
          - Content streaming suggestions
          - Social media feeds

        • Predictive Analytics
          - Weather forecasting
          - Stock market predictions
          - Customer behavior analysis
      `
    },
    {
      id: "my-journey",
      title: "My Journey into Machine Learning",
      icon: <FaBook className="w-6 h-6 text-supply-primary" />,
      content: `
        My journey into Machine Learning began unexpectedly while working as a Seller Support Associate at Amazon. It was during my daily interactions with sellers and analyzing their concerns that I first noticed the potential of data-driven solutions.

        The turning point came when I started noticing patterns in seller issues and realized that many of these could be predicted and prevented. This curiosity led me to explore data analysis and eventually, Machine Learning.

        My learning path unfolded in several stages:

        1. The Beginning (Data Analysis)
          • Started with Excel and SQL to analyze seller data
          • Learned to identify patterns in customer behavior
          • Developed basic statistical analysis skills

        2. The Discovery (Machine Learning)
          • Took online courses in Python and ML fundamentals
          • Built my first predictive model for seller performance
          • Learned about different ML algorithms and their applications

        3. The Evolution (MLOps)
          • Discovered the importance of model deployment and monitoring
          • Learned about containerization and cloud platforms
          • Understood the significance of model versioning and tracking

        4. The Realization (End-to-End ML)
          • Gained experience in the complete ML lifecycle
          • Learned to handle data ingestion and preprocessing
          • Mastered model training, evaluation, and deployment
          • Understood the importance of monitoring and maintenance

        This journey taught me that Machine Learning is not just about building models; it's about solving real-world problems and creating value through data-driven insights.
      `
    },
    {
      id: "mlops-insights",
      title: "Understanding MLOps",
      icon: <FaTools className="w-6 h-6 text-supply-primary" />,
      content: `
        MLOps, or Machine Learning Operations, is the practice of applying DevOps principles to Machine Learning systems. It's about making ML models production-ready and maintainable.

        Key aspects of MLOps include:
        • Version control for models and data
        • Automated testing and validation
        • Continuous integration and deployment
        • Model monitoring and performance tracking
        • Infrastructure management and scaling

        My experience with MLOps has taught me that successful ML projects require not just good models, but robust infrastructure and processes to support them.
      `
    }
  ];

  return (
    <section id="documentation" className="text-supply-dark py-16 sm:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-20"
        >
          <div className="inline-block mb-3">
            <span className="px-4 py-1 bg-supply-primary/10 text-supply-primary rounded-full text-sm font-medium">
              Machine Learning Guide
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Machine Learning <span className="text-supply-primary">in a Nutshell</span>
          </h2>
          <p className="text-supply-gray text-base sm:text-xl max-w-3xl mx-auto px-4">
            A comprehensive overview of Machine Learning, its applications, and my personal journey.
          </p>
        </motion.div>

        {/* Table of Contents */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-md p-6 mb-12"
        >
          <h3 className="text-xl font-semibold mb-4 text-supply-dark">Table of Contents</h3>
          <ul className="space-y-2">
            {sections.map((section, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-supply-primary"></span>
                <a 
                  href={`#${section.id}`}
                  className="text-supply-gray hover:text-supply-primary transition-colors"
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Main Content */}
        <div className="space-y-12">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              id={section.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-xl shadow-md p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-supply-light rounded-full">
                  {section.icon}
                </div>
                <h3 className="text-2xl font-bold text-supply-dark">{section.title}</h3>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-supply-gray leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Framework Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 flex justify-center gap-8"
        >
          <div className="flex flex-col items-center">
            <SiTensorflow className="w-12 h-12 text-supply-primary" />
            <span className="mt-2 text-sm text-supply-gray">TensorFlow</span>
          </div>
          <div className="flex flex-col items-center">
            <SiPytorch className="w-12 h-12 text-supply-secondary" />
            <span className="mt-2 text-sm text-supply-gray">PyTorch</span>
          </div>
          <div className="flex flex-col items-center">
            <SiScikitlearn className="w-12 h-12 text-supply-accent" />
            <span className="mt-2 text-sm text-supply-gray">scikit-learn</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Documentation; 