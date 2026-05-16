import { motion } from "framer-motion";
import { Code, ExternalLink } from "lucide-react";

function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-6">
      
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-bold mb-6"
      >
        Desenvolvedor Back-End
      </motion.h1>

      <p className="max-w-2xl text-slate-300 text-lg">
        Estudante de Bacharelado em Tecnologia da Informação pela UNIVESP,
        focado em desenvolvimento web com Java, Spring Boot, React e MySQL.
      </p>

      <div className="flex gap-4 mt-8">
        
        <a
          href="https://github.com/th-root"
          target="_blank"
          className="bg-white text-black px-6 py-3 rounded-xl flex gap-2 hover:scale-105 transition"
        >
          <Code />
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/thiago-silva-de-oliveira-18240b128/"
          target="_blank"
          className="border border-white px-6 py-3 rounded-xl flex gap-2 hover:bg-white hover:text-black transition"
        >
          <ExternalLink />
          LinkedIn
        </a>

      </div>
    </section>
  );
}

export default Hero;
