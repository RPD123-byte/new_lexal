import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

const LexalAI = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navigation />
      <header className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-2">Full Stack Website</h1>
          <p className="text-xl">Comprehensive Full-Stack Web Application</p>
        </div>
      </header>
      
      <div className="container mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-indigo-600 mb-4">Overview</h2>
          <p className="mb-6">
            The Full Stack website is a sophisticated full-stack web application designed to showcase services and provide a robust platform for user interaction. This project demonstrates a comprehensive implementation of modern web technologies, secure authentication methods, and efficient database management, all supported by a streamlined deployment process.
          </p>

          <h2 className="text-2xl font-bold text-indigo-600 mb-4">Key Features</h2>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li><strong>Full-Stack Architecture:</strong> Developed using React for the frontend and Node.js with Express for the backend, ensuring a seamless and responsive user experience.</li>
            <li><strong>Secure Authentication:</strong> Implemented a dual authentication system using JWT (JSON Web Tokens) for session management and Google Auth for social login, providing users with flexible and secure access options.</li>
            <li><strong>Database Integration:</strong> Utilized PostgreSQL, a powerful relational database, to efficiently store and manage user data, product information, and transaction records.</li>
            <li><strong>Payment Processing:</strong> Integrated Stripe payment gateway to handle secure and efficient financial transactions, supporting various payment methods and currencies.</li>
            <li><strong>Multifunctional Dashboard:</strong> Created an intuitive and feature-rich dashboard for users to manage their accounts, view analytics, and interact with a company's services.</li>
            <li><strong>Responsive Design:</strong> Employed Tailwind CSS to ensure a fully responsive design, providing an optimal viewing experience across a wide range of devices.</li>
          </ul>

          <h2 className="text-2xl font-bold text-indigo-600 mb-4">Technology Stack</h2>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li><strong>Frontend:</strong> React, Redux for state management, Tailwind CSS for styling</li>
            <li><strong>Backend:</strong> Node.js, Express.js</li>
            <li><strong>Database:</strong> PostgreSQL with Sequelize ORM</li>
            <li><strong>Authentication:</strong> JWT, Google Auth API</li>
            <li><strong>Payment Processing:</strong> Stripe API</li>
            <li><strong>Deployment:</strong> Fly.io for both frontend and backend hosting</li>
            <li><strong>CI/CD:</strong> GitHub Actions for automated testing and deployment</li>
            <li><strong>Version Control:</strong> Git and GitHub</li>
          </ul>

          <h2 className="text-2xl font-bold text-indigo-600 mb-4">Development and Deployment Process</h2>
          <ol className="list-decimal list-inside mb-6 space-y-2">
            <li><strong>Version Control:</strong> Utilized Git for version control, with GitHub as the remote repository host. Implemented a branching strategy to manage features, bugfixes, and releases effectively.</li>
            <li><strong>Local Development:</strong> Used Docker to create a consistent development environment across the team, ensuring that all developers had the same setup for the database, backend, and frontend services.</li>
            <li><strong>Testing:</strong> Implemented comprehensive unit and integration tests using Jest for both frontend and backend. Utilized React Testing Library for component testing.</li>
            <li><strong>CI/CD Pipeline:</strong> Set up GitHub Actions to automate the testing and deployment process:
              <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                <li>On every pull request, automated tests are run to ensure code quality.</li>
                <li>Upon merging to the main branch, the application is automatically built and deployed to a staging environment.</li>
                <li>Production deployments are triggered manually after approval in the staging environment.</li>
              </ul>
            </li>
            <li><strong>Deployment:</strong> Utilized Fly.io for deployment, leveraging its ability to host both the frontend and backend:
              <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                <li>Frontend is served as a static site, benefiting from Fly.io's global CDN for fast content delivery.</li>
                <li>Backend is deployed as a Docker container, ensuring consistency between development and production environments.</li>
                <li>Database is hosted on a managed PostgreSQL instance provided by Fly.io, simplifying database management and scaling.</li>
              </ul>
            </li>
            <li><strong>Monitoring and Logging:</strong> Implemented Sentry for error tracking and logging, and set up Datadog for performance monitoring and alerting.</li>
          </ol>

          <h2 className="text-2xl font-bold text-indigo-600 mb-4">Challenges and Solutions</h2>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li><strong>Scalability:</strong> Designed the backend with scalability in mind, using microservices architecture to allow independent scaling of different components.</li>
            <li><strong>Security:</strong> Implemented rate limiting, CORS policies, and regular security audits to ensure the application's security. Used environment variables and secret management tools to handle sensitive information securely.</li>
            <li><strong>Performance:</strong> Optimized database queries, implemented caching strategies, and used lazy loading for frontend components to ensure fast load times and a smooth user experience.</li>
          </ul>

          <h2 className="text-2xl font-bold text-indigo-600 mb-4">Conclusion</h2>
          <p className="mb-6">
            The Full Stack website project showcases a comprehensive implementation of modern web development practices, from robust frontend and backend architectures to secure authentication and efficient deployment processes. By leveraging cutting-edge technologies and implementing a streamlined CI/CD pipeline, we've created a scalable, secure, and user-friendly platform that effectively represents a company's brand and services online.
          </p>

          <Link to="/projects" className="inline-block mt-6 px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition duration-300">
            ← Back to Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LexalAI;