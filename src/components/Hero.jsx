import { motion } from "framer-motion";
import { Code, ExternalLink } from "lucide-react";
import profileImage from "../assets/perfil.jpeg";

function Hero() {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-6">
        
        <img
            src={profileImage}
            alt="Thiago Silva De Oliveira"
            className="w-100 h-120 object-cover mr-6 rounded-full border-4 border-white shadow-lg mb-6"
            />

        <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6"
        >
            Desenvolvedor Back-End
        </motion.h1>

        <p className="max-w-1xl mb-4">
            Profissional de TI com experiência em sistemas corporativos de RH na TIM Brasil, atuando com suporte a aplicações críticas, automação de processos e desenvolvimento de soluções internas.
        </p>
        <p className="max-w-1xl mb-4">
            Responsável pela implementação do portal corporativo de chamados da área, contribuindo para a otimização de fluxos operacionais, gestão de demandas e acompanhamento de indicadores.
        </p>
        <p className="max-w-1xl mb-4">
            Atualmente cursando Bacharelado em Tecnologia da Informação pela UNIVESP, com conclusão prevista para junho de 2026.
        </p>
        <br/>
        <p className="list-disc list-inside text-left">Experiência com:
            <ul className="list-disc list-inside text-left">
            <li>SAP HCM e SAP SuccessFactors</li>
            <li>Integração entre PD2 e Employee Central</li>
            <li>Power Platform (Power Apps, Power Automate e Power BI)</li>
            <li>Gestão de incidentes e demandas</li>
            <li>Suporte funcional a sistemas corporativos</li>
            <li>SharePoint, HTML e automação de processos</li>
            <li>Análise e melhoria contínua de processos</li>
            </ul>
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
