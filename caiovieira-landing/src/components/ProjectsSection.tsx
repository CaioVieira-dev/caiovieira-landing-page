import type { IProject } from "../utils/types";
import { Project } from "./Project";

export function ProjectsSection() {
  const projects: IProject[] = [
    {
      title: "Poker Planning",
      description: "Sistema de planning poker em tempo real com WebSockets",
      tags: ["React", "TypeScript", "Socket.io"],
      link: "https://poker.caiovieira.dev",
      github: "https://github.com/CaioVieira-dev/poker-planning",
    },
    {
      title: "Discord Bot",
      description:
        "Bot customizado para servidores Discord com múltiplas funcionalidades",
      tags: ["Node.js", "Discord.js", "TypeScript"],
      link: "#",
      github: "#",
    },
    {
      title: "ESP32 Heart Monitor",
      description: "Sistema de monitoramento cardíaco com ESP32 e sensores",
      tags: ["C++", "ESP32", "IoT"],
      link: "#",
      github: "#",
    },
  ];
  return (
    <section className="container mx-auto py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Projetos em Destaque
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Project key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
