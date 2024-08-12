import React from 'react';

const Resume = () => {
  
  const pdfUrl = `${process.env.PUBLIC_URL}/resume.pdf`;

  return (
    <div>
      <h1>Resume</h1>
      <iframe 
        src={pdfUrl} 
        width="100%" 
        height="600px"
        title="Resume PDF"
        style={{ border: 'none' }}
      />
    </div>
  );
};

export default Resume;
