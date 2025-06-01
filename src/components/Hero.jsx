import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDownload, FaBrain, FaRobot, FaArrowRight, FaCode, FaAws } from 'react-icons/fa';
import { SiPython, SiTensorflow, SiPytorch } from 'react-icons/si';

const Hero = () => {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/Shivanshu_Tiwari_CV.pdf';
    link.download = 'Shivanshu_Tiwari_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="flex flex-col items-center justify-center text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Professional hero content */}
          <motion.div className="max-w-3xl mx-auto" variants={itemVariants}>
            <motion.div className="mb-6" variants={itemVariants}>
              <span className="px-4 py-1.5 bg-supply-primary/10 text-supply-primary rounded-md text-sm font-medium inline-block border border-supply-primary/20">
                Machine Learning & ML Ops Engineer
              </span>
            </motion.div>
            
            <motion.h1 
              className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight leading-tight px-4 sm:px-0"
              variants={itemVariants}
            >
              Hi, I'm <span className="bg-gradient-to-r from-supply-primary to-supply-secondary bg-clip-text text-transparent">Shivanshu Tiwari</span>
            </motion.h1>
            
            <motion.p 
              className="text-supply-gray mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed mx-auto px-4 sm:px-6 md:px-8 max-w-full sm:max-w-2xl"
              variants={itemVariants}
            >
              Building and deploying scalable machine learning solutions with a focus on MLOps and production-ready AI systems.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-10 justify-center px-4"
              variants={itemVariants}
            >
              <motion.a
                href="#projects"
                className="px-4 sm:px-6 py-2.5 sm:py-3 bg-supply-primary text-white rounded-md text-sm sm:text-base font-medium shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center"
              >
                <FaBrain className="mr-2" /> View My Work <FaArrowRight className="ml-2" />
              </motion.a>
              
              <motion.button
                onClick={handleResumeDownload}
                className="px-4 sm:px-6 py-2.5 sm:py-3 bg-white text-supply-primary border border-supply-primary/30 rounded-md text-sm sm:text-base font-medium shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center"
              >
                <FaDownload className="mr-2" /> Download CV
              </motion.button>
            </motion.div>
            
            {/* Horizontal line separator */}
            <motion.div 
              className="w-16 sm:w-24 h-0.5 sm:h-1 bg-supply-primary/30 mx-auto mb-8 sm:mb-10"
              variants={itemVariants}
            ></motion.div>
            
            {/* Tech stack icons */}
            <motion.div variants={itemVariants} className="mb-8 sm:mb-10 px-2 sm:px-0">
              <p className="text-xs sm:text-sm text-supply-gray mb-3 sm:mb-5 font-medium uppercase tracking-wider">Technical Expertise</p>
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                {[
                  { icon: <SiPython className="w-4 h-4 sm:w-5 sm:h-5" />, label: "Python", color: "bg-supply-primary" },
                  { icon: <SiTensorflow className="w-4 h-4 sm:w-5 sm:h-5" />, label: "TensorFlow", color: "bg-supply-secondary" },
                  { icon: <SiPytorch className="w-4 h-4 sm:w-5 sm:h-5" />, label: "PyTorch", color: "bg-supply-highlight" },
                  { icon: <FaRobot className="w-4 h-4 sm:w-5 sm:h-5" />, label: "MLOps", color: "bg-supply-accent" },
                  { icon: <FaAws className="w-4 h-4 sm:w-5 sm:h-5" />, label: "AWS", color: "bg-yellow-400" },
                ].map((tech, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center px-2 sm:px-3 py-1 sm:py-1.5 bg-white rounded-md shadow-sm border border-gray-100"
                  >
                    <span className={`${tech.color} text-white p-0.5 sm:p-1 rounded-md mr-1.5 sm:mr-2`}>
                      {tech.icon}
                    </span>
                    <span className="text-xs font-medium text-supply-dark">{tech.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="flex space-x-3 sm:space-x-4 justify-center"
              variants={itemVariants}
            >
              <motion.a 
                href="https://github.com/tirshiva" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 sm:p-2 text-supply-gray hover:text-supply-primary transition-colors bg-white rounded-md shadow-sm hover:shadow-md"
                aria-label="GitHub Profile"
              >
                <FaGithub className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/shivanshu2407/" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 sm:p-2 text-supply-gray hover:text-supply-primary transition-colors bg-white rounded-md shadow-sm hover:shadow-md"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 