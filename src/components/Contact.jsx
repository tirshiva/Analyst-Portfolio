import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import { socialLinks } from '../data/projects';
import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  // Initialize EmailJS and check variables
  useEffect(() => {
    console.log('Checking EmailJS Configuration:', {
      serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
      templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    });
    
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    const form = formRef.current;
    const templateParams = {
      from_name: form.user_name.value,
      to_name: "Sivanshu",
      from_email: form.user_email.value,
      reply_to: form.user_email.value,
      user_name: form.user_name.value,
      user_email: form.user_email.value,
      message: form.message.value
    };

    // Log detailed form data and configuration
    console.log('------- Form Submission Details -------');
    console.log('1. Template Params:', templateParams);
    
    console.log('2. EmailJS Config:', {
      serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
      templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    });

    try {
      console.log('3. Attempting to send email...');
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log('4. EmailJS Response:', result);

      if (result.text === 'OK') {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent. I will get back to you soon.'
        });
        formRef.current.reset();
      }
    } catch (error) {
      console.error('5. EmailJS Error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Sorry, there was a problem sending your message. Please try again or contact me directly via email.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just a friendly hello!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  required
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="user_email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  required
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors"
                  placeholder="Your message..."
                />
              </div>

              {/* Status Message */}
              {submitStatus.message && (
                <div
                  className={`p-4 rounded-lg ${
                    submitStatus.type === 'success'
                      ? 'bg-green-50 text-green-800'
                      : 'bg-red-50 text-red-800'
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 gap-6">
              <a
                href={`tel:+917052327079`}
                className="group flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
              >
                <div className="p-3 bg-green-50 rounded-lg group-hover:bg-green-100 transition-colors">
                  <FaPhone className="w-6 h-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                  <p className="text-gray-500">+91 7052327079</p>
                </div>
              </a>

              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
              >
                <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                  <FaLinkedin className="w-6 h-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">LinkedIn</h3>
                  <p className="text-gray-500">Connect with me professionally</p>
                </div>
              </a>

              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
              >
                <div className="p-3 bg-gray-50 rounded-lg group-hover:bg-gray-100 transition-colors">
                  <FaGithub className="w-6 h-6 text-gray-900" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">GitHub</h3>
                  <p className="text-gray-500">Check out my projects</p>
                </div>
              </a>

              <a
                href={`mailto:${socialLinks.email}`}
                className="group flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
              >
                <div className="p-3 bg-red-50 rounded-lg group-hover:bg-red-100 transition-colors">
                  <FaEnvelope className="w-6 h-6 text-red-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Email</h3>
                  <p className="text-gray-500">Send me an email directly</p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 