import React from 'react';
import { FaDownload } from 'react-icons/fa';

const CVDownload = () => {
  return (
    <div className="text-center my-6">
      <a
        href="/Khushvant_Jadhao_CV.pdf"
        download
        className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300"
      >
        <FaDownload className="mr-2" /> Download CV
      </a>
    </div>
  );
};

export default CVDownload;
