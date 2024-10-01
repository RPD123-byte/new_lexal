// src/components/ActiveInference.js
import React from 'react';
const ActiveInference = () => {
  const pdfPath = '/activeinferencepaper.pdf'; // Path relative to the public folder

  return (
    <div className="active-inference-container">
      <iframe
        src={pdfPath}
        width="100%"
        height="800px"
        style={{ border: 'none' }}
        title="Active Inference PDF"
      >
        This browser does not support PDFs. Please download the PDF to view it:{" "}
        <a href={pdfPath}>Download PDF</a>
      </iframe>
    </div>
  );
};

export default ActiveInference;
