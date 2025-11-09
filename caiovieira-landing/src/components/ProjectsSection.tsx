import type { IProject } from "../utils/types";
import { Project } from "./Project";

export function ProjectsSection() {
  const projects: IProject[] = [
    {
      title: "Poker Planning",
      description: "Sistema de poker planning em tempo real com WebSockets",
      tags: ["React", "TypeScript", "Socket.io"],
      link: "https://poker.caiovieira.dev",
      github: "https://github.com/CaioVieira-dev/poker-planning",
    },
  ];
  return (
    <section className="container mx-auto py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-text-primary">
          Projetos em Destaque
        </h2>

        <div
          className="grid gap-8"
          style={{
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(320px, 100%), 1fr))",
          }}
        >
          {projects.map((project, index) => (
            <Project key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
