import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text3D, OrbitControls, Float } from '@react-three/drei';
import * as THREE from 'three';

function FloatingIcons() {
  const group = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y += 0.002;
      group.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2;
    }
  });

  const icons = [
    { position: [2, 0, 0], color: '#60A5FA', size: 1.5 },
    { position: [-2, 1, 0], color: '#8B5CF6', size: 1.2 },
    { position: [0, -1.5, 1], color: '#EC4899', size: 1 },
    { position: [1.5, 1.5, -1], color: '#10B981', size: 0.8 },
  ];

  return (
    <group ref={group}>
      {icons.map((icon, index) => (
        <Float key={index} speed={2} rotationIntensity={2} floatIntensity={2}>
          <mesh position={icon.position as [number, number, number]}>
            <boxGeometry args={[icon.size, icon.size, icon.size]} />
            <meshStandardMaterial 
              color={icon.color} 
              metalness={0.8} 
              roughness={0.2} 
              emissive={icon.color}
              emissiveIntensity={0.5}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

function NameText() {
  return (
    <Text3D
      font="https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/fonts/helvetiker_regular.typeface.json"
      size={0.5}
      height={0.2}
      curveSegments={12}
      bevelEnabled
      bevelThickness={0.02}
      bevelSize={0.02}
      bevelOffset={0}
      bevelSegments={5}
    >
      Akash Vishwakarma
      <meshStandardMaterial 
        color="#3b82f6"
        metalness={0.8}
        roughness={0.2}
        emissive="#3b82f6"
        emissiveIntensity={0.5}
      />
    </Text3D>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900 to-slate-900 animate-gradient"></div>
      
      {/* Floating 3D background elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Canvas>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={0.8} />
          <FloatingIcons />
        </Canvas>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto transform transition-all duration-500 hover:scale-[1.01]">
          {/* Animated greeting */}
          <div className="mb-4 inline-block px-4 py-2 bg-blue-500/10 backdrop-blur-sm rounded-full border border-blue-500/30">
            <p className="text-blue-400 font-mono text-sm tracking-wider">Hello, I'm</p>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-6 leading-tight">
            Akash Vishwakarma
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-medium text-slate-300 mb-8">
            Full Stack Developer
          </h2>
          
          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            I craft exceptional digital experiences with modern web technologies. 
            <span className="block mt-2 text-blue-300">Let's build something amazing together.</span>
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mt-16">
            <a 
              href="#work" 
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium rounded-full text-lg transition-all duration-300 overflow-hidden hover:shadow-lg hover:shadow-blue-500/30"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>View My Work</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </a>
            
            <a 
              href="#contact" 
              className="group relative px-8 py-4 bg-transparent border-2 border-blue-500/30 text-blue-400 hover:text-white font-medium rounded-full text-lg transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-500/10"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>Contact Me</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </span>
            </a>
          </div>
          
          {/* Social links */}
          <div className="mt-16 flex justify-center space-x-6">
            {/* GitHub */}
            <a 
              href="https://github.com/akas679"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
              aria-label="GitHub"
            >
              <span className="sr-only">GitHub</span>
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800/50 hover:bg-slate-700/50 backdrop-blur-sm border border-slate-700/50">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.027 2.747-1.027.546 1.377.202 2.398.1 2.651.64.699 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.115 22 16.379 22 11.984 22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </div>
            </a>

            {/* LinkedIn */}
            <a 
              href="https://linkedin.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <span className="sr-only">LinkedIn</span>
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800/50 hover:bg-slate-700/50 backdrop-blur-sm border border-slate-700/50">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
            </a>

            {/* Twitter */}
            <a 
              href="https://twitter.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
              aria-label="Twitter"
            >
              <span className="sr-only">Twitter</span>
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800/50 hover:bg-slate-700/50 backdrop-blur-sm border border-slate-700/50">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                </svg>
              </div>
            </a>

            {/* Instagram */}
            <a 
              href="https://instagram.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-pink-500 transition-colors duration-300"
              aria-label="Instagram"
            >
              <span className="sr-only">Instagram</span>
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800/50 hover:bg-slate-700/50 backdrop-blur-sm border border-slate-700/50">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center">
          <span className="text-sm text-slate-400 mb-2">Scroll down</span>
          <div className="w-8 h-12 border-2 border-blue-400/50 rounded-full flex justify-center p-1">
            <div className="w-1 h-3 bg-blue-400 rounded-full animate-scroll"></div>
          </div>
        </div>
      </div>
      
      {/* Animated grid overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(#ffffff10_1px,transparent_1px),linear-gradient(90deg,#ffffff10_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>
    </section>
  );
}
