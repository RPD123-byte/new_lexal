import Navigation from './Navigation';
import { Link } from 'react-router-dom';


const Projects = () => {

  const projects = [
    {
      title: "Ramvisor",
      image: "ramvisor.png",
      description: "AI-powered assistant for UNC course registration, integrating full-stack technologies to provide comprehensive answers about course catalogs and registration processes.",
      link: "https://github.com/RPD123-byte/Ramvisor_Code"
    },
    {
      title: "Research with Human-Level Intelligence",
      image: "aif.png",
      description: "Implements an active inference framework for optimizing research processes across industries, demonstrating continuous learning and adaptation in complex environments.",
      link: "https://github.com/RPD123-byte/Research_with_Human_Level_Intelligence"
    },
    {
      title: "Lexal AI Website",
      image: "lexal.jpg",
      description: "Developed a comprehensive website for Lexal AI, featuring a full frontend and backend architecture. Implemented secure authentication using JWT and Google Auth, integrated a PostgreSQL database, and Stripe for payments. The site includes a multifunctional dashboard and is supported by a robust CI/CD pipeline.",
      link: "/projects/lexal-ai"
    },
    {
      title: "Neural SDE Portfolio Optimizer",
      image: "sde.png",
      description: "Innovative stock portfolio optimization strategy using Neural Stochastic Differential Equations and fine-tuned sentiment analysis, demonstrated during the 2008 financial crisis.",
      link: "https://github.com/RPD123-byte/Sentiment-Driven-Portfolio-Optimization-Using-Neural-Stochastic-Differential-Equations-A-Case-Study"
    },
    {
      title: "Tool Generator Agent",
      image: "tool_generator.png",
      description: "An AI system that automates the creation, testing, and deployment of function-calling tools for Large Language Models, featuring real-time error correction and a knowledge base with similarity search.",
      link: "https://github.com/RPD123-byte/Agent_Agent"
    },
    {
      title: "Marketing Strategy Generator",
      image: "marketing_agent.png",
      description: "AI-powered tool that generates ranked, tailored marketing strategies for businesses, utilizing advanced AI reflection and industry research to provide specific, actionable suggestions.",
      link: "https://github.com/RPD123-byte/marketing_agent"
    },
    {
      title: "Intelligent Query Processor",
      image: "iqp.png",
      description: "Cutting-edge solution leveraging an agentic framework to convert natural language requests into highly accurate database queries, achieving a 99% success rate with complex, multi-hop queries.",
      link: "https://github.com/RPD123-byte/intelligent_query_processor"
    },
    {
      title: "PersonaForge",
      image: "persona.png",
      description: "Comprehensive pipeline for creating fine-tuned AI models mimicking online personalities, combining embeddings and fine-tuning for accurate voice replication and knowledge base extraction.",
      link: "https://github.com/RPD123-byte/PersonaForge-AI-Driven-Public-Figure-Voice-Emulation"
    },
    {
      title: "RegimeX",
      image: "clustering.png",
      description: "Novel approach to algorithmic trading using semi-supervised learning, combining clustering techniques to identify market regimes with XGBoost Regressors for adaptive trading strategies.",
      link: "https://github.com/RPD123-byte/RegimeX-Adaptive-Financial-Forecasting-through-Clustered-Regime-Modeling"
    },
    {
      title: "Palm Berries Auto-Purchasing Bot",
      image: "palm_berry.png",
      description: "Advanced automation tool for inventory purchasing, integrating with Google Sheets and using Selenium for web scraping and autonomous purchasing, featuring comprehensive error handling and secure authentication.",
      link: "/projects/palm-berries"

    },
    {
      title: "Soccer Bot",
      image: "soccer_bot.png",
      description: "An automated bot for soccer-related tasks and analysis, enhancing data processing and insights in the world of soccer.",
      link: "https://github.com/RPD123-byte/Soccer_Bot"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:-translate-y-2">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="font-bold text-xl mb-2 text-indigo-600">{project.title}</h2>
                <p className="text-gray-700 text-sm mb-4">{project.description}</p>
                {project.title === "Palm Berries Auto-Purchasing Bot" | "Lexal AI Website" ? (
                  <Link to={project.link} className="text-indigo-600 hover:text-indigo-800 font-semibold transition duration-300">
                    View Details
                  </Link>
                ) : (
                  <a href={project.link} className="text-indigo-600 hover:text-indigo-800 font-semibold transition duration-300">
                    View Project
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Projects;