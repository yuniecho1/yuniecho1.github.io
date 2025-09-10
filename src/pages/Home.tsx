import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-left bg-gray-200">
      <div className="max-w-7xl mx-left p-20 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between pl-30">
          {/* Left column - Text content */}
          <div className="md:w-3/4 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              Hello, I'm <span className="text-blue-600">Yunie Cho</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600">
              Software Engineer & Web Developer
            </p>
            <p className="text-gray-600 max-w-lg">
            Melbourne-based Software Engineering student with a passion for bringing your ideas to life. 
            </p>
            <div className="flex space-x-4">
              <Link
                to="/projects"
                className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                View Projects
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors"
              >
                Contact Me
              </Link>
            </div>
          </div>
          
          {/* Right column - Image/Illustration */}
          <div className="md:w-1/4 mt-8 md:mt-0">
            <img
              src="/hero-image.png" // Add your image path here
              alt="Hero illustration"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;