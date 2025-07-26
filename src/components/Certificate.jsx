import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaCalendarAlt, FaExternalLinkAlt, FaEye } from 'react-icons/fa';
import { useState } from 'react';

const Certificate = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const certificateData = {
    title: "Executive Post Graduate Certification in Data Science & Artificial Intelligence",
    institution: "iHUB DivyaSampark, IIT Roorkee",
    organization: "Department of Science & Technology (Govt. of India)",
    date: "July 2025",
    certificateId: "IPTIH25070635",
    verificationUrl: "tih.iitr.ac.in",
    description: "Comprehensive program covering advanced concepts in machine learning, deep learning, data analysis, and AI implementation strategies.",
    skills: [
      "Machine Learning Algorithms",
      "Deep Learning & Neural Networks", 
      "Data Analysis & Visualization",
      "AI Implementation",
      "Statistical Modeling",
      "ML Ops & Deployment"
    ]
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="bg-white rounded-xl shadow-lg border border-supply-lightgray overflow-hidden hover:shadow-xl transition-shadow duration-300"
      >
        <div className="p-6 sm:p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-supply-primary to-supply-secondary rounded-full">
                <FaGraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-supply-dark">
                  Executive PG Diploma
                </h3>
                <p className="text-supply-primary font-medium">Data Science & AI</p>
              </div>
            </div>

          </div>

          {/* Institution */}
          <div className="flex items-center gap-2 mb-4">
            <FaUniversity className="w-4 h-4 text-supply-secondary" />
            <span className="text-supply-dark font-medium">{certificateData.institution}</span>
          </div>

          {/* Organization */}
                        <p className="text-supply-gray text-base mb-4">
                A joint initiative - {certificateData.organization}
              </p>

          {/* Date and Certificate ID */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="w-4 h-4 text-supply-accent" />
              <span className="text-supply-dark text-base font-medium">{certificateData.date}</span>
            </div>
                          <div className="text-supply-gray text-base">
                ID: {certificateData.certificateId}
              </div>
          </div>

          {/* Description */}
          <p className="text-supply-gray text-base mb-6 leading-relaxed">
            {certificateData.description}
          </p>

          {/* Skills */}
          <div className="mb-6">
            <h4 className="text-supply-dark font-semibold mb-3">Key Skills Acquired:</h4>
            <div className="flex flex-wrap gap-2">
              {certificateData.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-supply-light text-supply-dark text-xs rounded-full font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Certificate Preview */}
          <div className="mt-4 pt-4 border-t border-supply-lightgray">
            <div className="flex items-center justify-between mb-3">
              <span className="text-supply-success text-sm font-medium flex items-center gap-2">
                <FaExternalLinkAlt className="w-4 h-4" />
                Verified Certificate
              </span>
              <span className="text-supply-gray text-base">ID: {certificateData.certificateId}</span>
            </div>
            <div className="relative overflow-hidden rounded-lg border border-supply-lightgray bg-gray-50">
              <div className="w-full h-40 bg-gradient-to-br from-amber-50 to-yellow-50 flex items-center justify-center">
                <div className="text-center">
                  <FaGraduationCap className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                  <p className="text-amber-700 text-sm font-medium">Certificate Preview</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                <motion.button
                  onClick={openModal}
                  className="bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="View full certificate"
                >
                  <FaEye className="w-5 h-5 text-supply-primary" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Modal for Certificate Image */}
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-5xl w-full max-h-[90vh] overflow-auto bg-white rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white p-4 border-b border-supply-lightgray flex items-center justify-between">
              <h3 className="text-lg font-semibold text-supply-dark">Certificate of Completion</h3>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-supply-light rounded-full transition-colors duration-200"
                aria-label="Close modal"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <div className="flex justify-center">
                <img 
                  src="/images/IPTIH25070635.png" 
                  alt="Executive Post Graduate Certification in Data Science & Artificial Intelligence from IIT Roorkee"
                  className="max-w-full h-auto rounded-lg shadow-lg border border-gray-200"
                  style={{ maxHeight: '75vh', maxWidth: '100%' }}
                  onError={(e) => {
                    console.error('Certificate image failed to load');
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Certificate; 