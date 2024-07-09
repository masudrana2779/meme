const phases = [
  {
    title: "Phase 1",
    tasks: [
      "Creation & Planning",
      "Website & Strategy",
      "Marketing Campaign",
      "Release of Collection",
    ],
  },
  {
    title: "Phase 2",
    tasks: [
      "Development & Launch",
      "Listing on Exchanges",
      "Marketing Campaign",
      "Project Collaboration",
    ],
  },
  {
    title: "Phase 3",
    tasks: [
      "Growth & Expansion",
      "Partnerships",
      "New Exchange Listings",
      "Marketing Campaign",
    ],
  },
  {
    title: "Phase 4",
    tasks: [
      "Development & Launch",
      "New Exchange Listings",
      "Marketing Campaign",
      "Project Collaboration",
    ],
  },
];

const RoadMap = () => {
  return (
    <div className=" bgColor text-white pt-10 md:pt-[100px]">
      <div className="">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-6xl font-bold mb-8 text-center">
            ROAD MAP
          </h2>
          <div className="relative">
            <div className="bg-[url('/img/rbg.png')] bg-no-repeat bg-contain bg-center absolute top-0 left-0 w-full h-full opacity-20"></div>
            <div className="">
              {phases.map((phase, index) => (
                <div
                  key={index}
                  className={`flex flex-col relative md:flex-row items-center mb-[85px] ${
                    index % 2 === 0 ? "" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`flex-shrink-0 ${
                      index % 2 === 0 ? "mr-28" : "ml-28"
                    }`}
                  >
                    <img
                      src={"/img/rpic.png"}
                      alt={`Phase ${index + 1}`}
                      className=""
                    />
                  </div>
                  <div className="bgd p-[1px] rounded-lg shadow-lg w-full md:w-1/2 relative">
                    {phases.length - 1 > index && (
                      <div
                        className={`absolute -bottom-[170px] ${
                          index % 2 === 0 ? "left-[158px]" : "right-[158px]"
                        } w-[1px] h-[170px] bg-white`}
                      ></div>
                    )}
                    <div className="bgdi p-[70px] pb-16 rounded-lg">
                      <h3 className="text-xl md:text-[30px] font-semibold mb-8">
                        {phase.title}
                      </h3>
                      <ul className="list-none">
                        {phase.tasks.map((task, taskIndex) => (
                          <li
                            key={taskIndex}
                            className="mb-2 flex items-center space-x-4"
                          >
                            <img src="/img/dot.svg" alt="" />
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
