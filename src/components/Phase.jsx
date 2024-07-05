import React from 'react';

const Phase = ({ phase, index, imgSrc }) => {
  return (
    <div
      key={index}
      className={`flex flex-col md:flex-row items-center mb-12 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
    >
      <div className="flex-shrink-0">
        <img
          src={imgSrc}
          alt={`Phase ${index + 1}`}
          className="w-32 h-32 mx-auto mb-4 md:mb-0"
        />
      </div>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full md:w-1/2">
        <h3 className="text-2xl font-semibold mb-4">{phase.title}</h3>
        <ul className="list-disc pl-5">
          {phase.tasks.map((task, taskIndex) => (
            <li key={taskIndex} className="mb-2">
              {task}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Phase;
