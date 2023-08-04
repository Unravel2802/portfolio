import React, { useState } from 'react';
import './cursor.css'; // Create this CSS file to style the component

const CursorEffect = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Function to update the cursor position
  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.pageX, y: e.pageY });
  };

  // Attach the event listener when the component mounts
  React.useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
    
  return (
    <div className="cursor-effect-container">
      {/* Render your content here */}
      {/* e.g., <div className="your-content">Your Content</div> */}
    </div>
  );
};

export default CursorEffect;
