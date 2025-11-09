import { Icon } from "./ui/Icons";

export function Hero() {
  {
    /* Hero Section */
  }

  return (
    <header className="container mx-auto pt-32 pb-24">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block mb-6 animate-float">
          <div className="w-24 h-24 rounded-full bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <Icon icon="code" className="w-12 h-12" />
          </div>
        </div>

        <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
          Caio Vieira
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 mb-8">
          Software Developer
        </p>

        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12">
          Desenvolvedor full-stack especializado em React, TypeScript e Node.js.
          Apaixonado por criar experiências digitais modernas e soluções
          inovadoras.
        </p>

        {/* Social Links */}
        <div className="flex gap-4 justify-center">
          <a
            href="https://github.com/caiovieira-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-text-link hover:text-hover-text-link rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors duration-300 hover:scale-110 transform"
          >
            <Icon icon="github" className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/caio-vieira-b1aab9201"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-text-link hover:text-hover-text-link transition-colors duration-300 hover:scale-110 transform"
          >
            <Icon icon="linkedin" className="w-6 h-6" />
          </a>
          <a
            href="mailto:caiocesarav0208@gmail.com"
            className="p-3 rounded-lg bg-slate-800 text-text-link hover:text-hover-text-link hover:bg-slate-700 transition-colors duration-300 hover:scale-110 transform"
          >
            <Icon icon="mail" className="w-6 h-6" />
          </a>
        </div>
      </div>
    </header>
  );
}
