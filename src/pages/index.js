import React, { useState, useEffect } from 'react';

const Home = () => {
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [index, setIndex] = useState(0); // Add state for index

  useEffect(() => {
    const sentence = 'A software developer and AI enthusiast'; // Ensure proper sentence format with single spaces

    // Function to type the sentence
    const typeSentence = () => {
      if (index < sentence.length) {
        setText((prevText) => prevText + sentence[index]);
        setIndex((prevIndex) => prevIndex + 1); // Update index using functional update
      } else {
        setIsTyping(false); // Stop typing after finishing the sentence
        clearInterval(interval); // Stop the interval once done typing
      }
    };

    const interval = setInterval(typeSentence, 100); // Type every 100ms

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [index]); // Add index as a dependency

  return (
    <div className="flex items-center justify-between pl-4 w-full"> {/* Flex layout to align both sections */}
      {/* Text Section */}
      <div className="flex flex-col">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-teal-400 via-blue-500 to-blue-900 text-transparent bg-clip-text shine-effect">
          Hi, I'm Sohan!
        </h1>
        <div className="flex items-center mt-4">
          <p className="text-2xl italic">{text}</p> {/* Display typed text */}
          {isTyping && <span className="animate-blink text-2xl">|</span>} {/* Typing cursor */}
        </div>
      </div>

      {/* Image Section */}
      <div className="relative">
        <img
          src="/images/personal.jpeg" // Replace with the path to your image
          alt="Sohan"
          className="w-56 h-56 rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default Home;
