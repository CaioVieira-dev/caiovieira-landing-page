import { ExternalLink, Github } from "lucide-react";
import type { IProject } from "../utils/types";

export function Project({ project }: { project: IProject }) {
  return (
    <div className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
      <div className="absolute inset-0 bg-linear-to-br from-blue-600/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative">
        <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-slate-400 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-3 py-1 text-sm bg-slate-800 rounded-full text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Ver Projeto</span>
          </a>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-400 hover:text-slate-300 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Código</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
