import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaTools, FaMobile, FaDatabase, FaCloud } from 'react-icons/fa';
import { SiTypescript, SiReact, SiNodedotjs, SiMongodb, SiPostgresql, SiGraphql, SiDocker, SiGit, SiJest, SiCypress, SiRedux, SiNextdotjs, SiTailwindcss, SiSass } from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

type Skill = {
  name: string;
  icon: React.ReactNode;
  level: number;
  color: string;
};

type SkillCategory = 'frontend' | 'backend' | 'devops' | 'testing';

type SkillsData = {
  [key in SkillCategory]: Skill[];
};

const skillsData: SkillsData = {
  frontend: [
    { name: 'React', icon: <SiReact className="w-6 h-6" />, level: 95, color: 'from-blue-500 to-cyan-400' },
    { name: 'TypeScript', icon: <SiTypescript className="w-6 h-6" />, level: 90, color: 'from-blue-600 to-blue-400' },
    { name: 'Next.js', icon: <SiNextdotjs className="w-6 h-6" />, level: 85, color: 'from-gray-800 to-gray-600' },
    { name: 'Redux', icon: <SiRedux className="w-6 h-6" />, level: 85, color: 'from-purple-500 to-pink-500' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-6 h-6" />, level: 90, color: 'from-cyan-400 to-blue-500' },
    { name: 'Sass', icon: <SiSass className="w-6 h-6" />, level: 85, color: 'from-pink-500 to-purple-500' },
  ],
  backend: [
    { name: 'Node.js', icon: <SiNodedotjs className="w-6 h-6" />, level: 90, color: 'from-green-500 to-emerald-400' },
    { name: 'GraphQL', icon: <SiGraphql className="w-6 h-6" />, level: 80, color: 'from-pink-500 to-red-500' },
    { name: 'MongoDB', icon: <SiMongodb className="w-6 h-6" />, level: 85, color: 'from-green-600 to-emerald-500' },
    { name: 'PostgreSQL', icon: <SiPostgresql className="w-6 h-6" />, level: 80, color: 'from-blue-700 to-blue-500' },
    { name: 'RESTful APIs', icon: <FaServer className="w-5 h-5" />, level: 90, color: 'from-indigo-500 to-purple-500' },
    { name: 'Express', icon: <SiNodedotjs className="w-6 h-6" />, level: 85, color: 'from-gray-600 to-gray-400' },
  ],
  devops: [
    { name: 'Docker', icon: <SiDocker className="w-6 h-6" />, level: 85, color: 'from-blue-500 to-blue-700' },
    { name: 'AWS', icon: <FaAws className="w-6 h-6" />, level: 80, color: 'from-yellow-500 to-orange-500' },
    { name: 'CI/CD', icon: <FaTools className="w-5 h-5" />, level: 80, color: 'from-purple-500 to-pink-500' },
    { name: 'Git', icon: <SiGit className="w-6 h-6" />, level: 90, color: 'from-orange-500 to-red-500' },
  ],
  testing: [
    { name: 'Jest', icon: <SiJest className="w-6 h-6" />, level: 85, color: 'from-red-500 to-pink-500' },
    { name: 'Cypress', icon: <SiCypress className="w-6 h-6" />, level: 80, color: 'from-green-500 to-emerald-400' },
    { name: 'React Testing', icon: <FaCode className="w-5 h-5" />, level: 85, color: 'from-blue-500 to-cyan-400' },
  ]
};


interface SkillCardProps {
  skill: Skill;
  index: number;
}

const SkillCard = ({ skill, index }: SkillCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="bg-slate-800/50 backdrop-blur-sm p-5 rounded-xl border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 rounded-lg bg-slate-800/80">
            {skill.icon}
          </div>
          <h3 className="text-lg font-medium text-white">{skill.name}</h3>
        </div>
        <span className="text-sm font-medium text-blue-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-slate-700/50 rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
          className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
        />
      </div>
    </motion.div>
  );
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState<SkillCategory>('frontend');
  const [hoveredTab, setHoveredTab] = useState<SkillCategory | null>(null);

  const tabs: { id: SkillCategory; label: string; icon: React.ReactNode }[] = [
    { id: 'frontend', label: 'Frontend', icon: <FaCode className="w-4 h-4" /> },
    { id: 'backend', label: 'Backend', icon: <FaServer className="w-4 h-4" /> },
    { id: 'devops', label: 'DevOps', icon: <FaCloud className="w-4 h-4" /> },
    { id: 'testing', label: 'Testing', icon: <FaTools className="w-4 h-4" /> },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-900 to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
            My Skills
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Here are the technologies and tools I work with on a daily basis.
            I'm always eager to learn new things and expand my skill set.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                onMouseEnter={() => setHoveredTab(tab.id as SkillCategory)}
                onMouseLeave={() => setHoveredTab(null)}
                className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-colors duration-300 flex items-center space-x-2 ${
                  activeTab === tab.id 
                    ? 'text-white bg-blue-600/20 border border-blue-500/30' 
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
                {hoveredTab === tab.id && activeTab !== tab.id && (
                  <motion.span 
                    className="absolute inset-0 bg-blue-500/10 rounded-full"
                    layoutId="hoverBg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
            ))}
          </div>

          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {skillsData[activeTab].map((skill, index) => (
              <SkillCard key={index} skill={skill} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
