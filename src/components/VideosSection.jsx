const videos = [
  { title: "Video 1", thumbnail: "/img/v.png" },
  { title: "Video 2", thumbnail: "/img/v.png" },
  { title: "Video 3", thumbnail: "/img/v.png" },
  { title: "Video 4", thumbnail: "/img/v.png" },
];

const VideosSection = () => {
  return (
    <div className=" md:mb-40 mb-10">
      <div className="container">
        <img src="/img/vd.png" alt="" />
      </div>
      <div className="container">
        <div className="px-[180px] bg-center py-10 bg-[url('/img/fram.png')] bg-contain bg-no-repeat">
          <div className="grid grid-cols-2 md:grid-cols-2 gap-12">
            {videos.map((video, index) => (
              <div key={index} className="cursor-pointer w-full">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="object-fill w-full "
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideosSection;
