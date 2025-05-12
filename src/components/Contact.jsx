import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter, FaMapMarkerAlt, FaPhoneAlt, FaTruck, FaBoxes } from 'react-icons/fa';

const socialLinks = {
  email: "st955218@gmail.com",
  linkedin: "https://www.linkedin.com/in/shivanshu2407/",
  github: "https://github.com/Shivanshu2407",
  twitter: "https://x.com/shivanshut24"
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-supply-light relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-supply-primary/5 rounded-full -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-supply-secondary/5 rounded-full -ml-48 -mb-48"></div>
      
      <div className="absolute right-10 top-20 opacity-10">
        <FaTruck className="w-32 h-32 text-supply-primary" />
      </div>
      <div className="absolute left-10 bottom-20 opacity-10">
        <FaBoxes className="w-32 h-32 text-supply-secondary" />
      </div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-3">
            <span className="px-4 py-1 bg-supply-primary/10 text-supply-primary rounded-full text-sm font-medium">
              Get In Touch
            </span>
          </div>
          <h2 className="text-4xl font-bold text-supply-dark mb-4">Let's <span className="text-supply-primary">Connect</span></h2>
          <p className="text-supply-gray text-lg mb-8 max-w-2xl mx-auto">
            Interested in discussing supply chain analytics solutions or data-driven opportunities? 
            I'm always open to exploring new projects and collaborations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-8 rounded-xl shadow-md"
          >
            <h3 className="text-xl font-semibold text-supply-dark mb-6">Send Me a Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-supply-gray mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-supply-lightgray rounded-lg focus:ring-2 focus:ring-supply-primary focus:border-supply-primary transition-colors" 
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-supply-gray mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-supply-lightgray rounded-lg focus:ring-2 focus:ring-supply-primary focus:border-supply-primary transition-colors" 
                  placeholder="Your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-supply-gray mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className="w-full px-4 py-2 border border-supply-lightgray rounded-lg focus:ring-2 focus:ring-supply-primary focus:border-supply-primary transition-colors" 
                  placeholder="Your message"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 bg-supply-primary text-white rounded-lg shadow-md hover:bg-supply-highlight transition-all duration-300 font-medium"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col justify-between"
          >
            <div className="bg-white p-8 rounded-xl shadow-md mb-6">
              <h3 className="text-xl font-semibold text-supply-dark mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-supply-primary/10 rounded-full">
                    <FaEnvelope className="w-5 h-5 text-supply-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-supply-gray">Email</h4>
                    <a href={`mailto:${socialLinks.email}`} className="text-supply-dark hover:text-supply-primary transition-colors">
                      {socialLinks.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-supply-primary/10 rounded-full">
                    <FaMapMarkerAlt className="w-5 h-5 text-supply-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-supply-gray">Location</h4>
                    <p className="text-supply-dark">Gurgaon, India</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-supply-dark mb-6">Connect With Me</h3>
              <div className="flex gap-4">
                <motion.a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 rounded-full bg-supply-light text-supply-primary hover:bg-supply-primary hover:text-white transition-all duration-300 shadow-sm"
                  aria-label="LinkedIn profile"
                >
                  <FaLinkedin className="w-6 h-6" />
                </motion.a>

                <motion.a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 rounded-full bg-supply-light text-supply-primary hover:bg-supply-primary hover:text-white transition-all duration-300 shadow-sm"
                  aria-label="GitHub profile"
                >
                  <FaGithub className="w-6 h-6" />
                </motion.a>

                <motion.a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 rounded-full bg-supply-light text-supply-primary hover:bg-supply-primary hover:text-white transition-all duration-300 shadow-sm"
                  aria-label="Twitter profile"
                >
                  <FaTwitter className="w-6 h-6" />
                </motion.a>
                
                <motion.a
                  href={`mailto:${socialLinks.email}`}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 rounded-full bg-supply-light text-supply-primary hover:bg-supply-primary hover:text-white transition-all duration-300 shadow-sm"
                  aria-label="Send email"
                >
                  <FaEnvelope className="w-6 h-6" />
                </motion.a>
              </div>
              
              <div className="mt-8 p-4 bg-supply-primary/10 rounded-lg">
                <p className="text-supply-dark text-sm">
                  I typically respond within 24 hours. Looking forward to connecting with you!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 