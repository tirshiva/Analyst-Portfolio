import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDownload, FaChartLine, FaTruck, FaBoxes, FaWarehouse, FaShippingFast, FaNetworkWired, FaDatabase } from 'react-icons/fa';

const Hero = () => {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/Shivanshu_Tiwari_CV.pdf';
    link.download = 'Shivanshu_Tiwari_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-supply-light to-white py-20">
      {/* Static background with decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Background circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-supply-primary/5 rounded-full -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-supply-secondary/5 rounded-full -ml-48 -mb-48"></div>
        
        {/* Decorative grid pattern */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]"></div>
        
        {/* Supply chain themed decorative elements */}
        <div className="absolute top-1/4 left-10 opacity-10">
          <FaTruck className="w-24 h-24 text-supply-primary" />
        </div>
        <div className="absolute bottom-1/4 right-10 opacity-10">
          <FaBoxes className="w-20 h-20 text-supply-secondary" />
        </div>
        <div className="absolute top-3/4 left-1/3 opacity-5">
          <FaWarehouse className="w-32 h-32 text-supply-accent" />
        </div>
        <div className="absolute top-1/3 right-1/4 opacity-5">
          <FaChartLine className="w-16 h-16 text-supply-success" />
        </div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Left side - Text content */}
          <div className="w-full md:w-1/2 text-left">
            <div className="mb-4">
              <span className="px-4 py-1 bg-supply-primary/10 text-supply-primary rounded-full text-sm font-medium inline-block">
                Supply Chain Data Analytics
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-supply-dark mb-4">
              Hi, I'm <span className="text-supply-primary">Shivanshu Tiwari</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-supply-gray mb-6">
              Supply Chain Data Analyst
            </p>
            
            <p className="text-supply-gray mb-8 text-lg">
              Transforming complex supply chain data into actionable insights and optimizing logistics operations through advanced analytics and machine learning solutions.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="#projects"
                className="px-6 py-3 bg-supply-primary text-white rounded-lg text-base font-medium shadow-md hover:bg-supply-highlight transition-all duration-300 flex items-center justify-center"
              >
                <FaChartLine className="mr-2" /> View My Work
              </a>
              
              <button
                onClick={handleResumeDownload}
                className="px-6 py-3 bg-white text-supply-primary border border-supply-primary rounded-lg text-base font-medium shadow-md hover:bg-supply-light transition-all duration-300 flex items-center justify-center"
              >
                <FaDownload className="mr-2" /> Download CV
              </button>
              
              <a
                href="#contact"
                className="px-6 py-3 bg-supply-light text-supply-dark rounded-lg text-base font-medium shadow-md hover:bg-supply-lightgray transition-all duration-300 flex items-center justify-center"
              >
                Get in Touch
              </a>
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="https://github.com/Shivanshu2407" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-supply-gray hover:text-supply-primary transition-colors"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/shivanshu2407/" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-supply-gray hover:text-supply-primary transition-colors"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* Right side - Visual element */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              {/* Main visual element */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
                {/* Background glow */}
                <div className="absolute inset-0 bg-supply-primary/20 rounded-full blur-3xl transform scale-75"></div>
                
                {/* Main circle */}
                <div className="absolute inset-0 bg-gradient-to-br from-supply-light to-white rounded-full border-4 border-supply-primary/20 shadow-xl flex items-center justify-center">
                  {/* Center icon */}
                  <FaNetworkWired className="w-24 h-24 text-supply-primary/80" />
                </div>
                
                {/* Orbiting elements */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 bg-white p-4 rounded-full shadow-lg border border-supply-lightgray">
                  <FaChartLine className="w-8 h-8 text-supply-primary" />
                </div>
                
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-8 bg-white p-4 rounded-full shadow-lg border border-supply-lightgray">
                  <FaDatabase className="w-8 h-8 text-supply-secondary" />
                </div>
                
                <div className="absolute left-0 top-1/2 -translate-x-8 -translate-y-1/2 bg-white p-4 rounded-full shadow-lg border border-supply-lightgray">
                  <FaTruck className="w-8 h-8 text-supply-accent" />
                </div>
                
                <div className="absolute right-0 top-1/2 translate-x-8 -translate-y-1/2 bg-white p-4 rounded-full shadow-lg border border-supply-lightgray">
                  <FaBoxes className="w-8 h-8 text-supply-success" />
                </div>
                
                {/* Connecting lines */}
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <line x1="50%" y1="50%" x2="50%" y2="0" stroke="#1A5276" strokeWidth="2" strokeDasharray="5,5" strokeOpacity="0.3" />
                  <line x1="50%" y1="50%" x2="50%" y2="100%" stroke="#1A5276" strokeWidth="2" strokeDasharray="5,5" strokeOpacity="0.3" />
                  <line x1="50%" y1="50%" x2="0" y2="50%" stroke="#1A5276" strokeWidth="2" strokeDasharray="5,5" strokeOpacity="0.3" />
                  <line x1="50%" y1="50%" x2="100%" y2="50%" stroke="#1A5276" strokeWidth="2" strokeDasharray="5,5" strokeOpacity="0.3" />
                </svg>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 px-3 py-1 bg-supply-primary text-white text-sm font-medium rounded-lg shadow-md">
                Data Analysis
              </div>
              
              <div className="absolute -bottom-4 -left-4 px-3 py-1 bg-supply-secondary text-white text-sm font-medium rounded-lg shadow-md">
                Supply Chain
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 