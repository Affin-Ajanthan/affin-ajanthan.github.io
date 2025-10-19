import React from "react";
import { Briefcase } from "lucide-react";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 flex items-center gap-3">
          <Briefcase className="text-blue-400" />
          Experience
        </h2>

        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-600/30 rounded-xl p-8">
          <div className="flex flex-col sm:flex-row justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl font-bold text-white">
                Software Engineer
              </h3>
              <p className="text-blue-300 text-lg">Enactor Limited</p>
            </div>
            <span className="text-gray-400 mt-2 sm:mt-0">2023 – 2025</span>
          </div>

          <ul className="space-y-4 text-gray-300 text-justify">
            <li className="flex gap-3">
              <span className="text-teal-400 mt-1">•</span>
              <span>
                Implemented an enhancement in the Schema Manager to offload
                index creation from the main thread. Developed a mechanism where
                entities are first created in the database, followed by
                scheduled index creation jobs, providing flexibility for
                synchronous and asynchronous indexing modes.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-teal-400 mt-1">•</span>
              <span>
                Contributed to the development of a dynamic XML-to-React layout
                mapping system. Played a key role in the UI Processor layer,
                enabling seamless event handling and selection logic as
                middleware between frontend and backend services using Java.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-teal-400 mt-1">•</span>
              <span>
                Enhanced the in-house automation testing framework to support
                both React POS and Swing POS applications, increasing automation
                coverage and efficiency.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
