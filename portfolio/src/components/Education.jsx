import React from "react";
import { Award, GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <section
      id="education"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 flex items-center gap-3">
          <GraduationCap className="text-blue-400" />
          Education
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-600/30 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-2">
              MSc in Data Science and AI
            </h3>
            <p className="text-blue-300 mb-2">University of Moratuwa</p>
            <p className="text-gray-400 text-sm mb-2">Currently Reading</p>
            <div className="mt-4 pt-4 border-t border-slate-600/30">
              <span className="inline-block px-3 py-1 bg-blue-900/40 text-blue-300 rounded-full text-xs">
                In Progress
              </span>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-600/30 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-2">
              BEng in Software Engineering
            </h3>
            <p className="text-blue-300 mb-2">London Metropolitan University</p>
            <p className="text-gray-400 text-sm mb-2">2021 – 2022</p>
            <div className="mt-4 pt-4 border-t border-slate-600/30">
              <span className="inline-block px-3 py-1 bg-green-900/40 text-green-300 rounded-full text-xs">
                Second Class Upper
              </span>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-600/30 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-2">
              BSc in Electrical and Information Engineering
            </h3>
            <p className="text-blue-300 mb-2">University of Ruhuna</p>
            <p className="text-gray-400 text-sm mb-2">2017 – 2022</p>
            <div className="mt-4 pt-4 border-t border-slate-600/30">
              <span className="inline-block px-3 py-1 bg-blue-900/40 text-blue-300 rounded-full text-xs">
                Second Class Lower
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-slate-800/50 backdrop-blur-sm border border-slate-600/30 rounded-xl p-6">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Award className="text-yellow-400" size={24} />
            Certification
          </h3>
          <p className="text-gray-300">
            Fundamentals of Deep Learning, NVIDIA Deep Learning Institute
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
