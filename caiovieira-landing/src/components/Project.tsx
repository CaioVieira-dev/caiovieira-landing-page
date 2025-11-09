import type { IProject } from "../utils/types";
import { Icon } from "./ui/Icons";

export function Project({ project }: { project: IProject }) {
  return (
    <div className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 text-center">
      <div className="absolute inset-0 bg-linear-to-br from-blue-600/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative">
        <h3 className="text-2xl font-bold mb-3 transition-colors text-text-primary">
          {project.title}
        </h3>

        <p className="text-slate-400 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6 justify-center">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-3 py-1 text-sm bg-slate-800 rounded-full text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4 justify-center">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-text-link hover:text-hover-text-link transition-colors"
          >
            <Icon icon="externalLink" className="w-4 h-4" />
            <span>Ver Projeto</span>
          </a>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-text-link hover:text-hover-text-link transition-colors"
            >
              <Icon icon="github" className="w-4 h-4" />
              <span>Código</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
