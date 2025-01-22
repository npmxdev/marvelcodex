import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footers = () => {
  return (
    <section className="flex w-full bg-red-800 text-gray-200 py-4">
      <div className="container mx-auto px-6 text-center">
        <p className="mb-2">
          Powered by the{' '}
          <a
            href="https://developer.marvel.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-300 hover:underline"
          >
            Marvel API
          </a>{' '}
          | Developed by{' '}
          <span className="font-semibold">npmdev</span>
        </p>
        <div className="flex justify-center mb-2">
          <a
            href="https://github.com/npmxdev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 mx-2 hover:text-yellow-500"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/yourlinkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 mx-2 hover:text-yellow-500"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://twitter.com/yourtwitter"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 mx-2 hover:text-yellow-500"
          >
            <FaTwitter size={20} />
          </a>
        </div>
        <p className="text-sm">
          For more projects, visit: 
          <a
            href="https://npmdevx.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-300 hover:underline ml-2"
          >
             npmdevx
          </a>
        </p>
      </div>
    </section>
  );
};

export default Footers;
