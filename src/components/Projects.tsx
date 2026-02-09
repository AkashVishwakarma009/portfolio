import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { FaReact, FaNodeJs, FaCode } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiPostgresql, SiExpress, SiSocketdotio, SiJsonwebtokens, SiTailwindcss, SiVite } from 'react-icons/si';

interface Technology {
  name: string;
  icon: React.ReactNode;
  color: string;
}

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: Technology[];
  github: string;
  demo: string;
  tags: string[];
}

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured online store with product catalog, shopping cart, and secure checkout system.',
    image: 'https://image2url.com/r2/default/images/1770470580650-54858ed2-e90c-4181-97bd-6f48838441fd.png',
    technologies: [
      { name: 'HTML5', icon: <FaCode className="w-5 h-5" />, color: 'from-orange-500 to-red-500' },
      { name: 'CSS3', icon: <FaCode className="w-5 h-5" />, color: 'from-blue-500 to-indigo-500' },
      { name: 'JavaScript', icon: <FaCode className="w-5 h-5" />, color: 'from-yellow-400 to-yellow-600' },
      { name: 'Firebase', icon: <FaCode className="w-5 h-5" />, color: 'from-yellow-500 to-orange-500' },
    ],
    github: 'https://github.com/AkashVishwakarma009/Mysudhamrit',
    demo: 'https://mysudhamrit.in/',
    tags: ['Frontend', 'E-commerce', 'Firebase']
  },
  {
    title: 'Todo List App',
    description: 'A responsive task management application with real-time updates and user authentication.',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=500&fit=crop',
    technologies: [
      { name: 'React', icon: <FaReact className="w-5 h-5" />, color: 'from-blue-500 to-cyan-400' },
      { name: 'TypeScript', icon: <SiTypescript className="w-5 h-5" />, color: 'from-blue-600 to-blue-400' },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-5 h-5" />, color: 'from-cyan-400 to-blue-500' },
      { name: 'Vite', icon: <SiVite className="w-5 h-5" />, color: 'from-purple-500 to-pink-500' },
    ],
    github: 'https://github.com/akas679/todo-list-app',
    demo: 'https://todo-4f99a.web.app/',
    tags: ['Frontend', 'Productivity', 'Responsive']
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio website showcasing my projects, skills, and professional experience.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop',
    technologies: [
      { name: 'React', icon: <FaReact className="w-5 h-5" />, color: 'from-blue-500 to-cyan-400' },
      { name: 'TypeScript', icon: <SiTypescript className="w-5 h-5" />, color: 'from-blue-600 to-blue-400' },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-5 h-5" />, color: 'from-cyan-400 to-blue-500' },
      { name: 'Framer Motion', icon: <FaCode className="w-5 h-5" />, color: 'from-purple-500 to-pink-500' },
    ],
    github: 'https://github.com/akas679/portfolio-website',
    demo: 'https://akas679.github.io',
    tags: ['Frontend', 'Portfolio', 'Responsive']
  },
  {
    title: 'Inventory Management System',
    description: 'A comprehensive system for tracking inventory, sales, and supplier information.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop',
    technologies: [
      { name: 'React', icon: <FaReact className="w-5 h-5" />, color: 'from-blue-500 to-cyan-400' },
      { name: 'Node.js', icon: <FaNodeJs className="w-5 h-5" />, color: 'from-green-500 to-emerald-400' },
      { name: 'PostgreSQL', icon: <SiPostgresql className="w-5 h-5" />, color: 'from-blue-700 to-blue-500' },
      { name: 'Express', icon: <SiExpress className="w-5 h-5" />, color: 'from-gray-600 to-gray-400' },
    ],
    github: 'https://github.com/akas679/inventory-system',
    demo: 'https://inventory.akas679.com',
    tags: ['Full Stack', 'Business', 'Database']
  },
];

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/30 transition-all duration-500"
    >
      <div className="relative h-60 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag: string, i: number) => (
                <span key={i} className="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/10 text-blue-400">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-slate-300 mb-6 line-clamp-2">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech: Technology, i: number) => (
            <div 
              key={i}
              className={`p-2 rounded-lg bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 group-hover:border-blue-500/30 transition-colors duration-300`}
            >
              <div className={`w-6 h-6 ${tech.color} bg-gradient-to-r rounded-full flex items-center justify-center`}>
                {tech.icon}
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-slate-300 hover:text-white transition-colors duration-300 group"
          >
            <FiGithub className="mr-2" />
            Code
            <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 group"
          >
            Live Demo
            <FiExternalLink className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 to-slate-900">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
            My Projects
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was built to solve a specific problem or explore new technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <a
            href="https://github.com/username"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-slate-700 hover:border-blue-500/30 rounded-full text-slate-300 hover:text-white transition-colors duration-300 group"
          >
            <span>View All Projects</span>
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
