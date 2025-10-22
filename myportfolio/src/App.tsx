import { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, Mail, ExternalLink, Code, Database, Wrench, ChevronDown, Star } from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = {
    languages: [
      { name: 'Python', proficiency: 90 },
      { name: 'JavaScript', proficiency: 50 },
      { name: 'React', proficiency: 60 },
      { name: 'Java', proficiency: 60 },
      { name: 'C++', proficiency: 50 },
      { name: 'Go', proficiency: 50 },
      { name: 'SQL', proficiency: 80 },
      { name: 'HTML/CSS', proficiency: 80 },
      { name: 'C', proficiency: 70 },
      { name: 'R', proficiency: 70 },
    ],
    frameworks: [
      { name: 'Pandas', proficiency: 90 },
      { name: 'NumPy', proficiency: 88 },
      { name: 'TensorFlow', proficiency: 75 },
      { name: 'Flask', proficiency: 82 },
      { name: 'OpenCV', proficiency: 70 },
      { name: 'Scikit-learn', proficiency: 85 },
      { name: 'Matplotlib', proficiency: 87 },
      { name: 'NLTK', proficiency: 80 },
      { name: 'Langchain', proficiency: 75 },
      { name: 'Streamlit', proficiency: 80 },
    ],
    tools: [
      { name: 'MS Excel', proficiency: 90 },
      { name: 'MS Word', proficiency: 95 },
      { name: 'MS PowerPoint', proficiency: 88 },
      { name: 'Oracle SQL', proficiency: 82 },
    ]
  };

  const projects = [
    {
      title: 'Insight2Script',
      description: 'Converts Web Research into Formatted Documentary Scripts using a multi-agent architecture',
      technologies: ['Python', 'Google-GenerativeAI', 'Langchain', 'Langraph', 'React', 'Flask'],
      githubUrl: 'https://github.com/Niall1985/Insight2Script'
    },
    {
      title: 'SENTITOOLKIT',
      description: 'A sentiment analysis package with LSTM-based prediction and easy text processing (AVAILABLE ON PYPI).',
      technologies: ['Python', 'TensorFlow'],
      githubUrl: 'https://github.com/Niall1985/SentiToolKit'
    },
    {
      title: 'SECURESFTP',
      description: 'A secure file transfer system built with Python and Go. The system ensures encrypted file storage and secure retrieval.',
      technologies: ['Python', 'Go', 'Flask'],
      githubUrl: 'https://github.com/Niall1985/SecureSFTP'
    },
    {
      title: 'BlogStop',
      description: ' BlogStop is a minimal and user-friendly blogging platform built with Streamlit and Google Gemini AI.',
      technologies: ['Python', 'Streamlit', 'Google-GenerativeAI'],
      githubUrl: 'https://github.com/Niall1985/BlogStop'
    },
    {
      title: 'LUCY',
      description: 'A CLI virtual assistant built using python.',
      technologies: ['Python', 'Google-GenerativeAI'],
      githubUrl: 'https://github.com/Niall1985/CLI_virtual_assistant'
    },
    {
      title: 'RagDocx',
      description: 'This project implements a Retrieval-Augmented Generation (RAG) pipeline using PDF ingestion, Pinecone vector database, and Google Gemini LLM.',
      technologies: ['Python', 'Google-GenerativeAI', 'Flask', 'Langchain'],
      githubUrl: 'https://github.com/Niall1985/ragdocx'
    },
    {
      title: 'FileServerGolang',
      description: 'This project is a simple file server implemented in Go that allows users to upload, download, list, and delete files.',
      technologies: ['Go'],
      githubUrl: 'https://github.com/Niall1985/FileServerGolang'
    },
    {
      title: 'DocuMentor',
      description: 'DocuMentor is a tool designed to handle document analysis and retrieval with both multi-threaded and sequential processing.',
      technologies: ['Python', 'Go', 'React'],
      githubUrl: 'https://github.com/Niall1985/DocuMentor'
    },
    {
      title: 'NanoLinls',
      description: 'A url shortener built using python.',
      technologies: ['Python'],
      githubUrl: 'https://github.com/Niall1985/nanolinks'
    },
    {
      title: 'Thermodynamic_calculator',
      description: 'A simple thermodynamic problem evaluator built using python.',
      technologies: ['Python'],
      githubUrl: 'https://github.com/Niall1985/Thermodynamic_calculator'
    },
    {
      title: 'PasswordDecryptor',
      description: 'A PDF File password decryptor written in Python using the pyPDF2 library and the itertools library.',
      technologies: ['Python'],
      githubUrl: 'https://github.com/Niall1985/PasswordDecrypter'
    },
    {
      title: 'MTRagEval',
      description: 'This project implements a multi-turn RAG evaluation workflow, combining retrieval and generation modules to assess how effectively a language model can generate factual, context-grounded answers.',
      technologies: ['Python'],
      githubUrl: 'https://github.com/Niall1985/MTRagEval'
    }
    
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-white">Portfolio</div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase() === 'home' ? 'hero' : item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                    activeSection === (item.toLowerCase() === 'home' ? 'hero' : item.toLowerCase())
                      ? 'text-blue-400'
                      : 'text-gray-400'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Niall <span className="text-blue-400">Dcunha</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 mb-8 leading-relaxed">
              AI Agent Developer
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
              Pursuing B.Tech in Computer Science and Engineering at Vellore Institute of Technology, Chennai.
              AI, ML, and Data Science Enthusiast. Actively exploring the integration of AI Agents in Maritime 
              Logistics with growing familiarity in this domain.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/Niall1985"
              className="p-4 bg-gray-900 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 border border-gray-700"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6 text-gray-400" />
            </a>
            <a
              href="https://linkedin.com/in/niall-dcunha"
              className="p-4 bg-gray-900 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 border border-gray-700"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6 text-blue-400" />
            </a>
            <a
              href="https://x.com/MlArchitec51910"
              className="p-4 bg-gray-900 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 border border-gray-700"
              aria-label="Twitter"
            >
              <Twitter className="h-6 w-6 text-sky-400" />
            </a>
            <a
              href="mailto:mlarchitect@gmail.com"
              className="p-4 bg-gray-900 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 border border-gray-700"
              aria-label="Email"
            >
              <Mail className="h-6 w-6 text-red-400" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce p-2 rounded-full bg-gray-900 shadow-lg hover:shadow-xl transition-all border border-gray-700"
          >
            <ChevronDown className="h-6 w-6 text-gray-400" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-400 leading-relaxed">
                As a Pre-final year B.Tech student specializing in Computer Science and Engineering, 
                I have developed a reasonably strong foundation in key programming languages such as Python, C, Golang, HTML, CSS and Java. 
                My academic journey has sparked a keen interest in artificial intelligence, machine learning, data science, data analysis, 
                and software development, and I am eager to contribute significantly to these fields.I have gained reasonable exposure to 
                maritime logistics, where I have explored how technology can support operations such as vessel voyage planning, fuel optimization, 
                fuel price forecasting, vessel performance enhancement and supply chain planning. 
                This experience has enhanced my ability to connect core technical knowledge with real-world industry challenges.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Outside of academics, I am passionate about sports, including cricket, chess, and badminton.
                In addition to my technical and athletic pursuits, I am a dedicated musician. I compose my own songs and 
                am proficient with a wide range of musical instruments. This creative outlet complements my technical skills 
                and enriches my overall perspective. I am committed to leveraging technology to address real-world problems and 
                am always seeking opportunities to apply my knowledge in practical settings. Whether through collaborative projects, 
                internships, or research, I am focused on expanding my expertise and making a meaningful impact in the tech industry.
              </p>
            </div>
            <div className="bg-black/80 rounded-lg shadow-lg p-8 border border-gray-800">
              <h3 className="text-2xl font-semibold text-white mb-6">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-medium text-white">Bachelors of Technology in Computer Science and Engineering</h4>
                  <p className="text-blue-400">Vellore Institute of Technology </p>
                  <p className="text-gray-400">2023 - 2027</p>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">Higher Secondary Certification</h4>
                  <p className="text-blue-400">St. Xavier's College </p>
                  <p className="text-gray-500">2021 - 2023</p>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">Secondary School Certificate,</h4>
                  <p className="text-blue-400">Our Lady of Perpetual Succour High School</p>
                  <p className="text-gray-500">2020 - 2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Skills & Expertise</h2>
          
          <div className="space-y-16">
            {/* Languages */}
            <div>
              <div className="flex items-center mb-8">
                <Code className="h-8 w-8 text-blue-400 mr-3" />
                <h3 className="text-2xl font-semibold text-white">Programming Languages</h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.languages.map((skill) => (
                  <div key={skill.name} className="bg-gray-900/80 rounded-lg p-6 hover:shadow-md transition-shadow border border-gray-800">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-medium text-white">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.proficiency}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div
                        className="bg-blue-400 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Frameworks */}
            <div>
              <div className="flex items-center mb-8">
                <Database className="h-8 w-8 text-green-400 mr-3" />
                <h3 className="text-2xl font-semibold text-white">Frameworks & Libraries</h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.frameworks.map((skill) => (
                  <div key={skill.name} className="bg-gray-900/80 rounded-lg p-6 hover:shadow-md transition-shadow border border-gray-800">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-medium text-white">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.proficiency}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div
                        className="bg-green-400 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <div className="flex items-center mb-8">
                <Wrench className="h-8 w-8 text-orange-400 mr-3" />
                <h3 className="text-2xl font-semibold text-white">Tools & Technologies</h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.tools.map((skill) => (
                  <div key={skill.name} className="bg-gray-900/80 rounded-lg p-6 hover:shadow-md transition-shadow border border-gray-800">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-medium text-white">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.proficiency}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div
                        className="bg-orange-400 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-black/80 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-800">
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white leading-tight">{project.title}</h3>
                    <Star className="h-5 w-5 text-yellow-400 mt-1" />
                  </div>
                  <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-gray-800/50 text-blue-300 text-sm rounded-full border border-gray-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.githubUrl}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors"
                  >
                    View on GitHub
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500 mb-4">
            © 2025 Niall Dcunha. All rights reserved.
          </p>
          {/* <p className="text-gray-600 text-sm">
            Built with React, TypeScript, and Tailwind CSS
          </p> */}
        </div>
      </footer>
    </div>
  );
};

export default App;