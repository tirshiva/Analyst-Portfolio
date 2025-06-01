import { motion } from 'framer-motion';
import { FaBrain, FaChartLine, FaBook, FaLightbulb, FaRobot, FaIndustry, FaChartBar, FaGlobe, FaGraduationCap } from 'react-icons/fa';
import { SiTensorflow, SiPytorch, SiScikitlearn } from 'react-icons/si';

const Documentation = () => {
  const sections = [
    {
      id: "what-is-ml",
      title: "What is Machine Learning?",
      icon: <FaBrain className="w-6 h-6 text-supply-primary" />,
      content: `
        Machine Learning is a branch of artificial intelligence that enables computers to learn from data and improve their performance without being explicitly programmed. Think of it as teaching computers to learn from examples, just like how humans learn from experience.

        Key Characteristics:
        - Learning from Data: ML systems learn patterns and relationships from historical data
        - Adaptability: Models can improve their performance over time with more data
        - Automation: Can automate complex decision-making processes
        - Pattern Recognition: Excels at identifying patterns in large datasets

        Real-World Analogy:
        Just as a child learns to recognize a cat by seeing many pictures of cats, ML algorithms learn to make predictions by analyzing numerous examples. The more quality data they process, the better they become at their tasks.
      `
    },
    {
      id: "scope-of-ml",
      title: "Scope of Machine Learning",
      icon: <FaGlobe className="w-6 h-6 text-supply-secondary" />,
      content: `
        Machine Learning has become a transformative force across industries, with applications growing exponentially:

        1. Industry Applications:
           - Healthcare: Disease prediction, drug discovery, medical imaging
           - Finance: Fraud detection, algorithmic trading, risk assessment
           - Retail: Customer segmentation, demand forecasting, recommendation systems
           - Manufacturing: Predictive maintenance, quality control, supply chain optimization
           - Transportation: Self-driving vehicles, route optimization, traffic prediction

        2. Emerging Trends:
           - Edge Computing: ML on mobile and IoT devices
           - AutoML: Automated machine learning model development
           - Federated Learning: Privacy-preserving distributed learning
           - Quantum Machine Learning: Integration with quantum computing
           - Explainable AI: Making ML decisions more transparent

        3. Career Opportunities:
           - Machine Learning Engineer
           - Data Scientist
           - AI Research Scientist
           - ML Ops Engineer
           - AI Product Manager
      `
    },
    {
      id: "real-facts",
      title: "Real Facts About Machine Learning",
      icon: <FaChartBar className="w-6 h-6 text-supply-accent" />,
      content: `
        Understanding the reality of Machine Learning is crucial for its effective application:

        1. Current State:
           - ML models are only as good as their training data
           - Most successful applications are narrow and specific
           - Human oversight remains essential
           - Implementation costs can be significant
           - Model maintenance is an ongoing process

        2. Common Misconceptions:
           - ML is not magic; it requires careful design and implementation
           - More data doesn't always mean better results
           - Complex models aren't always better than simple ones
           - ML can't solve every problem
           - AI won't replace human jobs entirely

        3. Success Factors:
           - Clear problem definition
           - Quality data availability
           - Domain expertise
           - Proper evaluation metrics
           - Continuous monitoring and improvement
      `
    },
    {
      id: "impact",
      title: "Impact and Future",
      icon: <FaLightbulb className="w-6 h-6 text-supply-highlight" />,
      content: `
        Machine Learning is reshaping our world and will continue to do so:

        1. Current Impact:
           - Improved decision-making across industries
           - Enhanced automation of routine tasks
           - Better personalization of services
           - More efficient resource utilization
           - New insights from data analysis

        2. Future Directions:
           - More accessible ML tools and platforms
           - Increased focus on ethical AI
           - Better integration with existing systems
           - More emphasis on model interpretability
           - Growth in specialized ML applications

        3. Challenges to Address:
           - Data privacy and security
           - Algorithmic bias and fairness
           - Model transparency
           - Resource requirements
           - Skill gap in the workforce
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
            A comprehensive overview of Machine Learning, its scope, and real-world impact.
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