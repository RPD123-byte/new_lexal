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
      title: "Full Stack Website",
      image: "lexal.jpg",
      description: "Developed a comprehensive website for a company, featuring a full frontend and backend architecture. Implemented secure authentication using JWT and Google Auth, integrated a PostgreSQL database, and Stripe for payments. The site includes a multifunctional dashboard and is supported by a robust CI/CD pipeline.",
      link: "/projects/lexal-ai"
    },
    {
      title: "Neural Stochastic Differential Equation Portfolio Optimizer",
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
    },
    // New projects from the second document
    {
      title: "Delegant (Backend)",
      image: "delegantbackend.png",
      description: "An agentic framework (LangGraph) that helps small to medium sized businesses to manage their teams calendar with AI. Has the ability to add, delete, and edit events. Uses an NLP model (spacy) to choose the best team member to work on a given project. (Hosted in Django)",
      link: "https://github.com/Panchangam18/delegant_agentic_workflow"
    },
    {
      title: "Delegant (Frontend)",
      image: "delegantfrontend.png",
      description: "A robust React/Node.js website for Delegant. Once the admin user logs in, Delegant displays their team's full calendar so the user can add, edit, and delete events. The website includes an area for the user to send a natural language prompt to the Delegant agent for easy calendar management.",
      link: "https://github.com/Panchangam18/DelegantSite"
    }
    ,
    {
      title: "Project Trace Chrome Extension",
      image: "projecttrace.png",
      description: "An MVP Chrome extension for a local startup that allows you to track the sustainability of your purchases with 'Trace Points.' The Chrome extension was built to demo the project's vision and raise money.",
      link: "#"
    },
    {
      title: "Combative",
      image: "combative.png",
      description: "An OpenCV, MediaPipe and OpenAI API based boxing coach that gives you advice on what to do and how to improve technique. Trained a model with TensorFlow on orthodox vs. southpaw stance.",
      link: "https://github.com/Panchangam18/combative.ai.code"
    },
    {
      title: "Perry (Backend)",
      image: "perrybackend.png",
      description: "An agentic framework (LangGraph) built to aggregate open source data available on the internet given a person's name and a couple key words about them (OSINT people research). Working to expand this to be a full on AI detective, so in the process of developing a capable model. (Hosted in Django)",
      link: "https://github.com/Panchangam18/periscope_agent_graph"
    },
    {
      title: "Perry (Frontend)",
      image: "perryfrontend.png",
      description: "The front end for the Perry agentic framework. The Chrome extension sends a request to the backend hosting the LangGraph workflow and displays the results. This was built to demo the vision for Perry and show the depth of information it can provide even as an MVP.",
      link: "https://github.com/Panchangam18/periscope-chrome-extension"
    },
    {
      title: "Syntheo",
      image: "syntheologo.png",
      description: "An AI-powered platform for music video creation. Built using React, Hugging Face Spaces, Suno API, and a cascaded diffusion model (12VGen-XL), Syntheo turns a prompt into a unique music video.",
      link: "https://github.com/Panchangam18/syntheomain"
    },
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
                {project.link.startsWith('/') ? (
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