import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

const PalmBerries = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navigation />
      <header className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-2">Palm Berries Auto-Purchasing Bot</h1>
          <p className="text-xl">Advanced Automation for Inventory Management</p>
        </div>
      </header>
      
      <div className="container mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-indigo-600 mb-4">Overview</h2>
          <p className="mb-6">Palm Berries' Auto-Purchasing Bot is an advanced automation tool designed to streamline the inventory purchasing process for the company. By integrating with Google Sheets, the bot can automatically retrieve item links, names, and quantities, and then use that information to scrape relevant websites and purchase inventory. The project showcases a robust implementation of Selenium for web scraping and automation, combined with Django for authentication, ensuring a seamless and secure purchasing experience.</p>

          <h2 className="text-2xl font-bold text-indigo-600 mb-4">Key Features</h2>
          <ol className="list-decimal list-inside mb-6 space-y-2">
            <li><strong>Google Sheets Integration:</strong> The bot directly pulls data from a Google Sheet, where the user can input item names, links, and required quantities. This allows for a flexible and user-friendly way to manage purchasing requirements without needing direct interaction with the bot's backend.</li>
            <li><strong>Automated Web Scraping and Purchasing:</strong> Leveraging the power of Selenium, the bot navigates through websites, adds items to the cart, and completes purchases autonomously. The use of headless browsers allows these tasks to be performed efficiently in the background, without requiring a visible browser window.</li>
            <li><strong>Handling Fractional Quantities:</strong> If the Google Sheet includes fractional quantities, the bot intelligently rounds these to the nearest whole number before making a purchase. This ensures that all orders are placed in practical, manageable quantities.</li>
            <li><strong>Error Handling for Out-of-Stock Items:</strong> The bot includes comprehensive error handling for situations where items are out of stock. When the bot encounters an unavailable item, it logs the issue and immediately notifies the user, preventing unnecessary delays in the purchasing process.</li>
            <li><strong>Secure Authentication with Django:</strong> User authentication is managed through Django, providing a secure and scalable way to handle credentials and ensure that only authorized users can initiate purchasing operations. The integration with Django also allows for easy expansion of user management features in the future.</li>
            <li><strong>Notifications and Alerts:</strong> If the bot encounters an issue, such as an out-of-stock item or an error during the purchase process, it sends a notification to the user. This ensures that the purchasing team is always aware of the bot's actions and can intervene if necessary.</li>
          </ol>

          <h2 className="text-2xl font-bold text-indigo-600 mb-4">Technology Stack</h2>
          <ol className="list-decimal list-inside mb-6 space-y-2">
            <li><strong>Selenium and Headless Browsers:</strong> For web automation and scraping.</li>
            <li><strong>Beautiful Soup:</strong> For parsing HTML content when needed.</li>
            <li><strong>Django:</strong> For secure user authentication.</li>
            <li><strong>Google Sheets API:</strong> For retrieving and updating purchasing data.</li>
          </ol>

          <h2 className="text-2xl font-bold text-indigo-600 mb-4">System Workflow</h2>
          <ol className="list-decimal list-inside mb-6 space-y-2">
            <li>Data Retrieval: The bot reads item names, links, and quantities from a Google Sheet using the Google Sheets API.</li>
            <li>Web Scraping: Using Selenium, the bot navigates to the provided links, adds the specified quantities to the cart, and proceeds to checkout.</li>
            <li>Error Handling: If an item is out of stock or any other issue arises, the bot logs the error, rounds quantities as necessary, and sends a notification to the user.</li>
            <li>Authentication: Secure login and authentication are handled through Django, ensuring that only authorized personnel can operate the bot.</li>
            <li>Purchase Completion: Once the items are added to the cart and all checks are passed, the bot completes the purchase and updates the Google Sheet with the order status.</li>
          </ol>

          <h2 className="text-2xl font-bold text-indigo-600 mb-4">Conclusion</h2>
          <p className="mb-6">The Palm Berries Auto-Purchasing Bot demonstrates a sophisticated understanding of web automation, data integration, and user authentication. By combining Selenium's powerful automation capabilities with Django's secure authentication and Beautiful Soup's parsing precision, this project offers a comprehensive solution for automating inventory purchases. This bot not only saves time and reduces manual effort but also enhances accuracy and responsiveness in the purchasing process, making it an invaluable tool for the Palm Berries team.</p>

          <Link to="/projects" className="inline-block mt-6 px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition duration-300">
            ← Back to Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PalmBerries;