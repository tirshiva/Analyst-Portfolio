import React from 'react';
import { motion } from 'framer-motion';
import { FaBookOpen, FaClock, FaTag } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { articles } from '../data/articles';

const Documentation = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Documentation
            </h1>
            <p className="text-lg text-gray-600">
              Explore our comprehensive guides and tutorials
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: article.id * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <Link to={`/articles/${article.id}`} className="block p-6">
                  <div className="flex items-center mb-4">
                    <FaBookOpen className="text-indigo-600 mr-2" />
                    <span className="text-sm font-medium text-indigo-600">
                      {article.category}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <FaClock className="mr-1" />
                      <span>{article.readTime}</span>
                    </div>
                    <div className="flex items-center">
                      <FaTag className="mr-1" />
                      <span>{article.category}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Documentation; 