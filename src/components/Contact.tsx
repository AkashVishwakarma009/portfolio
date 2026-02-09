import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaTwitter, FaPaperPlane, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      // Replace with actual form submission logic
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitStatus({
        success: true,
        message: 'Your message has been sent successfully! I\'ll get back to you soon.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus({ success: false, message: '' });
      }, 5000);
      
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'Something went wrong. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      label: 'Email',
      value: 'akashvish205@zohomail.com',
      href: 'mailto:akashvish205@zohomail.com',
      color: 'bg-blue-500/10 text-blue-400',
    },
    {
      icon: <FaPhone className="w-5 h-5" />,
      label: 'Phone',
      value: '+91 9511081008',
      href: 'tel:+919511081008',
      color: 'bg-green-500/10 text-green-400',
    },
    {
      icon: <FaMapMarkerAlt className="w-5 h-5" />,
      label: 'Location',
      value: 'Mumbai, India',
      href: 'https://maps.google.com/?q=Mumbai',
      color: 'bg-purple-500/10 text-purple-400',
    },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub className="w-5 h-5" />,
      href: 'https://github.com/Akas679',
      color: 'hover:bg-gray-800/50 text-gray-400 hover:text-white',
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="w-5 h-5" />,
      href: 'https://linkedin.com',
      color: 'hover:bg-blue-600/50 text-blue-400 hover:text-white',
    },
    {
      name: 'Twitter',
      icon: <FaTwitter className="w-5 h-5" />,
      href: 'https://twitter.com',
      color: 'hover:bg-blue-400/50 text-blue-400 hover:text-white',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
            Get In Touch
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Have a project in mind or want to chat? Feel free to reach out! I'm always open to discussing new opportunities and collaborations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-white mb-6">Send Me a Message</h3>
            
            {submitStatus.message && (
              <div className={`p-4 mb-6 rounded-lg ${submitStatus.success ? 'bg-green-500/10 border border-green-500/30 text-green-400' : 'bg-red-500/10 border border-red-500/30 text-red-400'}`}>
                {submitStatus.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1.5">
                  Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white placeholder-slate-400 transition-all duration-300"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1.5">
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white placeholder-slate-400 transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white placeholder-slate-400 transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1.5">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white placeholder-slate-400 transition-all duration-300"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center px-6 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium rounded-full hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start space-x-4 group"
                  >
                    <div className={`p-3 rounded-xl ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-slate-300 text-sm font-medium">{item.label}</h4>
                      <p className="text-white font-medium">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
              
              <div className="mt-10">
                <h4 className="text-slate-300 text-sm font-medium mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full border border-slate-700/50 ${social.color} transition-colors duration-300`}
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600/10 to-cyan-500/10 rounded-2xl p-8 border border-blue-500/20">
              <h3 className="text-xl font-semibold text-white mb-4">Let's Work Together</h3>
              <p className="text-slate-300 mb-6">
                I'm currently available for freelance work. If you have a project that you want to get started or think you need my help with something, then get in touch.
              </p>
              <a
                href="mailto:akashvish205@zohomail.com"
                className="inline-flex items-center text-blue-400 hover:text-white group transition-colors duration-300"
              >
                Let's talk about your project
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
