import React from 'react';
import { Code, Brain, Smartphone, Globe, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';


const LandingPage = () => {
  const featuredProjects = [
    {
      title: "Marketing Strategy Generator",
      image: "marketing_agent.png",
      description: "AI-powered tool that generates ranked, tailored marketing strategies for businesses using advanced AI reflection and industry research.",
      link: "https://github.com/RPD123-byte/marketing_agent"
    },
    {
      title: "Neural Stochastic Differential Equation Portfolio Optimizer",
      image: "sde.png",
      description: "Innovative stock portfolio optimization strategy using Neural Stochastic Differential Equations and fine-tuned sentiment analysis.",
      link: "https://github.com/RPD123-byte/Sentiment-Driven-Portfolio-Optimization-Using-Neural-Stochastic-Differential-Equations-A-Case-Study"
    },
    {
      title: "Full Stack Website",
      image: "lexal.jpg",
      description: "Comprehensive website for a company with full frontend and backend architecture, secure authentication, and integrated payment system.",
      link: "/projects/lexal-ai" 
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800 font-sans">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-6xl font-bold mb-6 leading-tight">
            Innovative Tech Solutions.<br />
            Tailored for Your Success.
          </h1>
          <p className="text-xl mb-12 text-gray-600 max-w-2xl mx-auto">
            Transforming ideas into powerful, scalable technology. From AI to web development, we bring your vision to life.
          </p>
          <a href="#contact" className="px-8 py-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300 inline-flex items-center">
            Start Your Project <ArrowRight className="ml-2" />
          </a>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ServiceCard icon={<Brain />} title="AI & Machine Learning" description="Cutting-edge AI solutions to automate and optimize your business processes." />
              <ServiceCard icon={<Globe />} title="Web Development" description="Responsive, dynamic web applications built with the latest technologies." />
              <ServiceCard icon={<Smartphone />} title="Mobile App Development" description="Native and cross-platform mobile apps for iOS and Android." />
              <ServiceCard icon={<Code />} title="Custom Software" description="Bespoke software solutions tailored to your unique business needs." />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link to="/projects" className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300">
                View All Projects <ArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-indigo-600 text-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard title="Cutting-edge Technology" description="We stay ahead of the curve, utilizing the latest tech innovations." />
              <FeatureCard title="Tailored Solutions" description="Custom-built solutions designed to address your specific challenges." />
              <FeatureCard title="Agile Development" description="Flexible, iterative approach ensuring rapid delivery and adaptation." />
              <FeatureCard title="Scalable Architecture" description="Future-proof systems that grow with your business needs." />
              <FeatureCard title="Clear Line of Communication" description="Carefully understand your needs and how to build them before starting development." />
              <FeatureCard title="Industry Expertise" description="Deep understanding across various sectors for informed solutions." />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-8">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto">Let's discuss how our tech solutions can drive your success. Reach out to us for a free consultation.</p>
            <a 
              href="mailto:Business@lexalai.com" 
              className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300"
            >
              Contact Us <ArrowRight className="ml-2" />
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 Lexal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const ServiceCard = ({ icon, title, description }) => (
  <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition duration-300">
    <div className="text-indigo-600 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ProjectCard = ({ title, image, description, link }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:-translate-y-2">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="font-bold text-xl mb-2 text-indigo-600">{title}</h3>
      <p className="text-gray-700 text-sm mb-4">{description}</p>
      <a href={link} className="text-indigo-600 hover:text-indigo-800 font-semibold transition duration-300">
        View Project
      </a>
    </div>
  </div>
);

const FeatureCard = ({ title, description }) => (
  <div className="flex items-start">
    <CheckCircle className="flex-shrink-0 mr-4 mt-1" />
    <div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

export default LandingPage;