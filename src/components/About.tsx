import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaDownload } from 'react-icons/fa';
import { SiTypescript, SiReact, SiNodedotjs, SiMongodb, SiTailwindcss } from 'react-icons/si';
import profileImage from '../img/akash.jpg';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function About() {
  // Add this function for CV download
  const handleDownloadCV = () => {
    // Replace with your actual CV file path in the public folder
    const cvUrl = '/cv.pdf'; // Make sure to place your CV in the public folder
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Akash_Vishwakarma_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const skills = [
    { name: 'TypeScript', icon: <SiTypescript className="w-6 h-6" />, level: '90%' },
    { name: 'React', icon: <SiReact className="w-6 h-6" />, level: '95%' },
    { name: 'Node.js', icon: <SiNodedotjs className="w-6 h-6" />, level: '85%' },
    { name: 'MongoDB', icon: <SiMongodb className="w-6 h-6" />, level: '80%' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-6 h-6" />, level: '90%' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 to-slate-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={{
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { 
                staggerChildren: 0.2,
                delayChildren: 0.2
              } 
            },
            hidden: { opacity: 0, y: 20 }
          }}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center gap-8">
            <motion.div 
              variants={fadeInUp}
              className="lg:w-1/4 relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-75 blur group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-slate-800 p-1 rounded-2xl">
                <img 
                  src={profileImage} 
                  alt="Akash" 
                  className="w-full max-w-xs h-auto rounded-xl object-cover mx-auto"
                />
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
                  <a href="https://github.com/akash679" target="_blank" rel="noopener noreferrer" 
                    className="bg-slate-800 p-2 rounded-full hover:bg-blue-600 transition-colors duration-300">
                    <FaGithub className="w-5 h-5" />
                  </a>
                  <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-blue-600 transition-colors duration-300">
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-blue-600 transition-colors duration-300">
                    <FaTwitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="lg:w-2/3">
              <h3 className="text-2xl font-bold mb-4">Full Stack Developer</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm a passionate Full Stack Developer with expertise in building modern web applications. 
                With a strong foundation in both frontend and backend technologies, I create seamless 
                digital experiences that solve real-world problems.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                My journey in web development started several years ago, and since then, I've had the 
                opportunity to work with various technologies and frameworks, always staying up-to-date 
                with the latest industry trends.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {skills.map((skill, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-lg border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        {skill.icon}
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-blue-400">{skill.level}</span>
                    </div>
                    <div className="w-full bg-slate-700/50 rounded-full h-2">
                      <div 
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"
                        style={{ width: skill.level }}
                      ></div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.a
                onClick={handleDownloadCV}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium rounded-full hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer"
              >
                <FaDownload className="mr-2" />
                Download CV
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
