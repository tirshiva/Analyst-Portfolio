import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const About = () => (
  <section className="text-supply-dark py-16 sm:py-24 relative">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          About <span className="text-supply-primary">Me</span>
        </h2>
        <p className="text-supply-gray text-base sm:text-lg max-w-2xl mx-auto">
          Data Scientist specializing in analytics, machine learning, and data-driven solutions.
        </p>
      </motion.div>
      
      {/* Brief Experience and Education */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div className="bg-white rounded-xl shadow-lg border border-supply-lightgray p-6">
          <div className="flex items-center gap-3 mb-3">
            <FaBriefcase className="w-5 h-5 text-supply-primary" />
            <h3 className="text-lg font-bold text-supply-dark">Experience</h3>
          </div>
          <ul className="space-y-2 text-sm text-supply-gray">
            <li><span className="font-semibold text-supply-dark">Amazon</span> — Seller Support Associate (2024–Present)</li>
            <li><span className="font-semibold text-supply-dark">Concentrix</span> — Sales Advisor (2022–2024)</li>
            <li><span className="font-semibold text-supply-dark">Lenskart</span> — Consultant, Home Try-On (2022)</li>
          </ul>
        </div>
        <div className="bg-white rounded-xl shadow-lg border border-supply-lightgray p-6">
          <div className="flex items-center gap-3 mb-3">
            <FaGraduationCap className="w-5 h-5 text-supply-secondary" />
            <h3 className="text-lg font-bold text-supply-dark">Education</h3>
          </div>
          <ul className="space-y-2 text-sm text-supply-gray">
            <li>MCA, IGNOU — 2025–2027 (Pursuing)</li>
            <li>Diploma in DS & AI, iHub IIT Roorkee — 2024–2025</li>
            <li>B.Sc. Mathematics, CSJM University — 2019–2022</li>
          </ul>
        </div>
      </motion.div>
      

    </div>
  </section>
);

export default About; 