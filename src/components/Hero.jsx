import { motion } from 'framer-motion';
import { FaArrowRight, FaBrain, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiAmazonaws, SiApacheairflow, SiApachespark, SiPostgresql, SiPython } from 'react-icons/si';

const Hero = () => {
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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 sm:py-20">
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
            <motion.div className="mb-4 sm:mb-6 flex flex-col sm:flex-row gap-2 justify-center items-center" variants={itemVariants}>
              <span className="px-3 sm:px-4 py-1.5 bg-supply-primary/10 text-supply-primary rounded-md text-xs sm:text-sm font-medium inline-block border border-supply-primary/20">
                AI Engineer
              </span>
              {/* <span className="px-3 sm:px-4 py-1.5 bg-supply-secondary/10 text-supply-secondary rounded-md text-xs sm:text-sm font-medium inline-block border border-supply-secondary/20 flex items-center gap-1">
                <FaBrain className="w-3 h-3" />
                AI & ML Certified
              </span> */}
            </motion.div>

            <motion.h1
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 tracking-tight leading-tight px-4 sm:px-0"
              variants={itemVariants}
            >
              Hi, I'm <span className="bg-gradient-to-r from-supply-primary to-supply-secondary bg-clip-text text-transparent">Shivanshu Tiwari</span>
            </motion.h1>

            <motion.p
              className="text-supply-gray mb-6 sm:mb-8 text-base sm:text-lg md:text-xl leading-relaxed mx-auto px-4 sm:px-6 md:px-8 max-w-full sm:max-w-2xl"
              variants={itemVariants}
            >
              AI Engineer, working with AI models to make solutions for business.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10 justify-center px-4"
              variants={itemVariants}
            >
              <motion.a
                href="#projects"
                className="w-full sm:w-auto px-7 py-3 sm:py-3.5 bg-supply-primary text-white rounded-md text-base sm:text-lg font-medium shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center"
              >
                <FaBrain className="mr-2 w-5 h-5" /> View My Work <FaArrowRight className="ml-2 w-5 h-5" />
              </motion.a>
            </motion.div>

            {/* Horizontal line separator */}
            <motion.div
              className="w-16 sm:w-24 h-0.5 sm:h-1 bg-supply-primary/30 mx-auto mb-8 sm:mb-10"
              variants={itemVariants}
            ></motion.div>

            {/* Tech stack icons */}
            {/* <motion.div variants={itemVariants} className="mb-8 sm:mb-10 px-2 sm:px-0">
              <p className="text-xs sm:text-sm text-supply-gray mb-4 sm:mb-5 font-medium uppercase tracking-wider">Data Engineering Stack</p>
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                {[
                  { icon: <SiPython className="w-5 h-5 sm:w-6 sm:h-6" />, label: "Python", color: "bg-yellow-400" },
                  { icon: <SiPostgresql className="w-5 h-5 sm:w-6 sm:h-6" />, label: "SQL (Postgres)", color: "bg-blue-600" },
                  { icon: <SiApacheairflow className="w-5 h-5 sm:w-6 sm:h-6" />, label: "Airflow", color: "bg-sky-500" },
                  { icon: <SiApachespark className="w-5 h-5 sm:w-6 sm:h-6" />, label: "Spark", color: "bg-orange-600" },
                  { icon: <SiAmazonaws className="w-5 h-5 sm:w-6 sm:h-6" />, label: "AWS", color: "bg-yellow-600" },
                ].map((tech, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center px-3 sm:px-4 py-2 sm:py-2.5 bg-white rounded-md shadow-sm border border-gray-100"
                  >
                    <span className={`${tech.color} text-white p-1 sm:p-1.5 rounded-md mr-2 sm:mr-3`}>
                      {tech.icon}
                    </span>
                    <span className="text-sm sm:text-base font-medium text-supply-dark">{tech.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div> */}

            <motion.div
              className="flex space-x-4 sm:space-x-5 justify-center"
              variants={itemVariants}
            >
              <motion.a
                href="https://github.com/tirshiva"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-2.5 text-supply-gray hover:text-supply-primary transition-colors bg-white rounded-md shadow-sm hover:shadow-md"
                aria-label="GitHub Profile"
              >
                <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/shivanshu2407/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-2.5 text-supply-gray hover:text-supply-primary transition-colors bg-white rounded-md shadow-sm hover:shadow-md"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;