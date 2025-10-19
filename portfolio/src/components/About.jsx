import React from "react";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Code,
  Database,
  Brain,
} from "lucide-react";

const About = () => {
  return (
    <section id="about" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4">
            Amalathasan Affin Ajanthan
          </h1>
          <p className="text-2xl text-blue-300 mb-6">Software Engineer</p>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Passionate and adaptable Software Engineer seeking opportunities to
            build impactful software systems with modern technologies.
            Experienced in full-stack development and currently focusing on
            expanding into Machine Learning and AI-based systems.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a className="flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-800 text-white rounded-lg transition-colors">
            <Mail size={20} />
            <span>Email Me</span>
          </a>
          <a className="flex items-center gap-2 px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors">
            <Phone size={20} />
            <span>+94 71 152 74 72</span>
          </a>
          <a className="flex items-center gap-2 px-6 py-3 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-lg transition-colors">
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
          <a className="flex items-center gap-2 px-6 py-3 bg-slate-600 hover:bg-slate-700 text-white rounded-lg transition-colors">
            <Github size={20} />
            <span>GitHub</span>
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-600/30 rounded-xl p-6 text-center">
            <Code className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">
              Full-Stack Development
            </h3>
            <p className="text-gray-400 text-sm">
              Building robust and scalable web applications with modern
              technologies
            </p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-600/30 rounded-xl p-6 text-center">
            <Brain className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">
              Machine Learning & AI
            </h3>
            <p className="text-gray-400 text-sm">
              Leveraging AI to build intelligent systems and solve complex
              problems
            </p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-600/30 rounded-xl p-6 text-center">
            <Database className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">
              Data Science
            </h3>
            <p className="text-gray-400 text-sm">
              Predictive modeling, analysis, and data-driven decision making
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
