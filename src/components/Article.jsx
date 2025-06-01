import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaBookOpen, FaCode, FaLightbulb, FaExclamationTriangle } from 'react-icons/fa';
import { articles } from '../data/articles';
import { articleContent } from '../data/articles/index';
import { useParams, useNavigate } from 'react-router-dom';

const Article = () => {
  const { articleId } = useParams();
  const navigate = useNavigate();
  const id = parseInt(articleId);
  const article = articles.find(a => a.id === id);
  const content = articleContent[id];

  console.log('Article ID:', id);
  console.log('Article:', article);
  console.log('Content:', content);

  if (!article || !content) {
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
              onClick={() => navigate('/documentation')}
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              <FaArrowLeft className="mr-2" />
              Back to Documentation
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
        >
          <button
            onClick={() => navigate('/documentation')}
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 mb-8"
          >
            <FaArrowLeft className="mr-2" />
            Back to Documentation
          </button>

          <div className="bg-white shadow rounded-lg p-6 mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{content.title}</h1>
            <p className="text-lg text-gray-600 mb-6">{content.description}</p>
            <div className="flex items-center text-sm text-gray-500">
              <span className="mr-4">{article.category}</span>
              <span>{article.readTime}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <FaBookOpen className="mr-2 text-indigo-600" />
                Key Concepts
              </h2>
              <ul className="space-y-4">
                {content.content.keyConcepts.map((concept, index) => (
                  <li key={index} className="border-l-4 border-indigo-600 pl-4">
                    <h3 className="font-semibold text-gray-900">{concept.title}</h3>
                    <p className="text-gray-600">{concept.description}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <FaCode className="mr-2 text-indigo-600" />
                Implementation
              </h2>
              <ul className="space-y-4">
                {content.content.implementation.map((impl, index) => (
                  <li key={index} className="border-l-4 border-indigo-600 pl-4">
                    <h3 className="font-semibold text-gray-900">{impl.title}</h3>
                    <p className="text-gray-600">{impl.description}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <FaLightbulb className="mr-2 text-indigo-600" />
                Best Practices
              </h2>
              <ul className="space-y-4">
                {content.content.bestPractices.map((practice, index) => (
                  <li key={index} className="border-l-4 border-indigo-600 pl-4">
                    <h3 className="font-semibold text-gray-900">{practice.title}</h3>
                    <p className="text-gray-600">{practice.description}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <FaExclamationTriangle className="mr-2 text-indigo-600" />
                Common Pitfalls
              </h2>
              <ul className="space-y-4">
                {content.content.commonPitfalls.map((pitfall, index) => (
                  <li key={index} className="border-l-4 border-indigo-600 pl-4">
                    <h3 className="font-semibold text-gray-900">{pitfall.title}</h3>
                    <p className="text-gray-600">{pitfall.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional Explanation</h2>
            <p className="text-gray-600">{content.content.professionalExplanation}</p>
          </div>

          {article.resources && article.resources.length > 0 && (
            <div className="mt-8 bg-white shadow rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Additional Resources</h2>
              <ul className="space-y-4">
                {article.resources.map((resource, index) => (
                  <li key={index}>
                    <a
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-800 flex items-center"
                    >
                      <FaBookOpen className="mr-2" />
                      {resource.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Article; 