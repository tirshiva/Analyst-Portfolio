import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaBookOpen, FaCode, FaLightbulb, FaExclamationTriangle, FaArrowUp } from 'react-icons/fa';
import { articles } from '../data/articles';
import { articleContent } from '../data/articles/index';
import { useParams, useNavigate } from 'react-router-dom';

const Article = () => {
  const { articleId } = useParams();
  const navigate = useNavigate();
  const id = parseInt(articleId);
  
  console.log('Article ID from params:', articleId);
  console.log('Parsed ID:', id);
  console.log('Available articles:', articles);
  console.log('Article content object:', articleContent);
  
  const article = articles.find(a => a.id === id);
  const content = articleContent[id];

  console.log('Found article:', article);
  console.log('Found content:', content);

  // Scroll to top when article loads
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [articleId]);

  // Remove handleBackToDocumentation, all navigation to /documentation, and all 'Back to Documentation' buttons.

  if (!article || !content) {
    console.log('Article or content not found. Article:', article, 'Content:', content);
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Article Not Found
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              The article you're looking for doesn't exist.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-supply-primary hover:bg-supply-highlight transition-all duration-300"
            >
              <FaArrowLeft className="mr-2" />
              Back to Top
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {/* Article Header */}
          <div className="bg-white shadow rounded-lg p-6 sm:p-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{content.title}</h1>
            <p className="text-base sm:text-lg text-gray-600 mb-6">{content.description}</p>
            <div className="flex items-center text-sm text-gray-500">
              <span className="mr-4">{article.category}</span>
              <span>{article.readTime}</span>
            </div>
          </div>

          {/* Article Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white shadow rounded-lg p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <FaBookOpen className="mr-2 text-supply-primary" />
                Key Concepts
              </h2>
              <ul className="space-y-4">
                {content.content.keyConcepts.map((concept, index) => (
                  <li key={index} className="border-l-4 border-supply-primary pl-4">
                    <h3 className="font-semibold text-gray-900">{concept.title}</h3>
                    <p className="text-gray-600">{concept.description}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white shadow rounded-lg p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <FaCode className="mr-2 text-supply-primary" />
                Implementation
              </h2>
              <ul className="space-y-4">
                {content.content.implementation.map((impl, index) => (
                  <li key={index} className="border-l-4 border-supply-primary pl-4">
                    <h3 className="font-semibold text-gray-900">{impl.title}</h3>
                    <p className="text-gray-600">{impl.description}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white shadow rounded-lg p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <FaLightbulb className="mr-2 text-supply-primary" />
                Best Practices
              </h2>
              <ul className="space-y-4">
                {content.content.bestPractices.map((practice, index) => (
                  <li key={index} className="border-l-4 border-supply-primary pl-4">
                    <h3 className="font-semibold text-gray-900">{practice.title}</h3>
                    <p className="text-gray-600">{practice.description}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white shadow rounded-lg p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <FaExclamationTriangle className="mr-2 text-supply-primary" />
                Common Pitfalls
              </h2>
              <ul className="space-y-4">
                {content.content.commonPitfalls.map((pitfall, index) => (
                  <li key={index} className="border-l-4 border-supply-primary pl-4">
                    <h3 className="font-semibold text-gray-900">{pitfall.title}</h3>
                    <p className="text-gray-600">{pitfall.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white shadow rounded-lg p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Professional Explanation</h2>
            <p className="text-gray-600 leading-relaxed">{content.content.professionalExplanation}</p>
          </div>

          {article.resources && article.resources.length > 0 && (
            <div className="bg-white shadow rounded-lg p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Additional Resources</h2>
              <ul className="space-y-4">
                {article.resources.map((resource, index) => (
                  <li key={index}>
                    <a
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-supply-primary hover:text-supply-highlight flex items-center transition-colors duration-300"
                    >
                      <FaBookOpen className="mr-2" />
                      {resource.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Back to Documentation Button */}
          <div className="flex justify-center pt-8">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-supply-primary hover:bg-supply-highlight transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <FaArrowLeft className="mr-2" />
              Back to Top
            </button>
          </div>

          {/* Scroll to Top Button removed to avoid overlap with chatbot */}
        </motion.div>
      </div>
    </div>
  );
};

export default Article; 