import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const About = () => (
  <section className="text-supply-dark py-12 sm:py-16 relative">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-6"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">
          About <span className="text-supply-primary">Me</span>
        </h2>
        <p className="text-supply-gray text-sm sm:text-base max-w-3xl mx-auto">
          AI Engineer, working on projects to develop and deliver agentic AI solutions in process optimization and better customer experience.
        </p>
      </motion.div>

      {/* Compact Summary */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="bg-white rounded-lg shadow-md border border-supply-lightgray p-4 sm:p-5"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <div>
            <h3 className="text-sm sm:text-base font-semibold text-supply-dark mb-2">
              Career Focus
            </h3>
            <ul className="space-y-1.5 text-xs sm:text-sm text-supply-gray">
              <li>Designing backend systems capable to power LLMs to perform actions using tools</li>
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <FaBriefcase className="w-4 h-4 text-supply-primary" />
              <h3 className="text-sm sm:text-base font-semibold text-supply-dark">Experience</h3>
            </div>
            <ul className="space-y-1.5 text-xs sm:text-sm text-supply-gray">
              <li><span className="font-semibold text-supply-dark">Amazon</span> — AI Engineer (Mar 2026 – Present)</li>
              <li><span className="font-semibold text-supply-dark">Amazon</span> — Business Analyst (Mar 2024 – Jan 2026)</li>
              <li><span className="font-semibold text-supply-dark">Concentrix</span> — Customer Service Representative (Sept 2022 – Feb 2024)</li>
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <FaGraduationCap className="w-4 h-4 text-supply-secondary" />
              <h3 className="text-sm sm:text-base font-semibold text-supply-dark">Education</h3>
            </div>
            <ul className="space-y-1.5 text-xs sm:text-sm text-supply-gray">
              {/* <li>MCA, IGNOU — 2025–2027 (Pursuing)</li> */}
              <li>Diploma in DS & AI, iHub IIT Roorkee — 2024–2025</li>
              <li>B.Sc. Mathematics, CSJM University — 2019–2022</li>
            </ul>
          </div>
        </div>
      </motion.div>


    </div>
  </section>
);

export default About;