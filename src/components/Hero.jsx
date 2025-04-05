import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1 
                className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Hi, I'm{' '}
                <span className="text-gradient dark:text-blue-400">Sivanshu Tiwari</span>
              </motion.h1>
              <motion.h2 
                className="text-2xl sm:text-3xl text-gray-600 dark:text-gray-300 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Data Analyst | Storyteller with Data
              </motion.h2>
            </div>
            
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              I transform complex data into clear, actionable insights that drive business decisions.
              With expertise in Python, SQL, and visualization tools, I help organizations unlock
              the power of their data.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="group inline-flex items-center gap-2 bg-blue-600 dark:bg-blue-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors cursor-pointer"
              >
                View My Work
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border-2 border-blue-600 dark:border-blue-400 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors cursor-pointer"
              >
                Contact Me
              </Link>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div>
              <div className="">
                <img src="https://s44885.pcdn.co/wp-content/uploads/2019/09/Fotolia_257957753_Subscription_Monthly_M.jpg" alt="Profile" className="w-full h-full object-cover rounded-2xl shadow-lg dark:shadow-blue-500/20" />
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -z-10 inset-0 bg-gradient-to-tr from-blue-200 to-cyan-200 dark:from-blue-900 dark:to-cyan-900 transform rotate-6 rounded-2xl transition-colors duration-300"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 