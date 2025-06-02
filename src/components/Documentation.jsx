import React from 'react';
import { motion } from 'framer-motion';
import { FaBookOpen, FaTag } from 'react-icons/fa';
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
            <div className="inline-block mb-3">
              <span className="px-4 py-1.5 bg-supply-primary/10 text-supply-primary rounded-full text-sm font-medium">
                Knowledge Base
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="text-supply-dark">Technical </span>
              <span className="bg-gradient-to-r from-supply-primary to-supply-secondary bg-clip-text text-transparent">Documentation</span>
            </h1>
            <p className="text-supply-gray text-base sm:text-lg max-w-2xl mx-auto">
              Explore our comprehensive guides and tutorials on machine learning, data science, and ML Ops
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {articles.map((article) => (
              <motion.div
                key={article.id}
                id={`article-${article.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: article.id * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <Link to={`/articles/${article.id}`} className="block p-6">
                  <div className="flex items-center mb-4">
                    <FaBookOpen className="text-supply-primary mr-2 w-4 h-4" />
                    <span className="text-sm font-medium text-supply-primary">
                      {article.category}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-supply-dark mb-3">
                    {article.title}
                  </h2>
                  <p className="text-supply-gray mb-4 line-clamp-3">
                    {article.description}
                  </p>
                  <div className="flex items-center text-sm text-supply-gray">
                    <FaTag className="mr-1.5 w-4 h-4" />
                    <span className="font-medium">{article.category}</span>
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