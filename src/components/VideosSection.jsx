import React from 'react';

const videos = [
  { title: 'Video 1', thumbnail: 'path-to-thumbnail-1' },
  { title: 'Video 2', thumbnail: 'path-to-thumbnail-2' },
  { title: 'Video 3', thumbnail: 'path-to-thumbnail-3' },
  { title: 'Video 4', thumbnail: 'path-to-thumbnail-4' },
];

const VideosSection = () => {
  return (
    <div className="py-12">
      <div className="flex flex-wrap justify-center gap-4">
        {videos.map((video, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-md">
            <img src={video.thumbnail} alt={video.title} className="w-full h-auto mb-4" />
            <p>{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideosSection;
