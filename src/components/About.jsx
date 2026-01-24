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
          Transitioning from client support to data engineering after contributing to a data engineering project at Amazon.
          That experience sparked my interest, and I trained on data pipelines, SQL, Python, and AWS to build reliable,
          ML-ready datasets.
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
              <li>Designing reliable data pipelines and ETL/ELT workflows</li>
              <li>Automating data quality checks for analytics readiness</li>
              <li>Enabling ML and Deep Learning with clean datasets</li>
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <FaBriefcase className="w-4 h-4 text-supply-primary" />
              <h3 className="text-sm sm:text-base font-semibold text-supply-dark">Experience</h3>
            </div>
            <ul className="space-y-1.5 text-xs sm:text-sm text-supply-gray">
              <li><span className="font-semibold text-supply-dark">Amazon</span> — Data Engineer (May 2025 – Present)</li>
              <li><span className="font-semibold text-supply-dark">Concentrix</span> — Technical Analyst (Sept 2022 – Feb 2024)</li>
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <FaGraduationCap className="w-4 h-4 text-supply-secondary" />
              <h3 className="text-sm sm:text-base font-semibold text-supply-dark">Education</h3>
            </div>
            <ul className="space-y-1.5 text-xs sm:text-sm text-supply-gray">
              <li>MCA, IGNOU — 2025–2027 (Pursuing)</li>
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