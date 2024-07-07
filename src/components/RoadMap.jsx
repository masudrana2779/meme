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
    <div className=" bgColor text-white py-12">
      <div className="">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">ROAD MAP</h2>
          <div className="relative">
            <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-gray-700 transform -translate-x-1/2"></div>
            <div className="bg-[url('/img/rbg.png')] bg-no-repeat bg-contain bg-center">
              {phases.map((phase, index) => (
                <div
                  key={index}
                  className={`flex flex-col relative md:flex-row items-center mb-12 ${
                    index % 2 === 0 ? "" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="flex-shrink-0">
                    <img
                      src={"/img/BlndrPic.png"}
                      alt={`Phase ${index + 1}`}
                      className="w-32 h-32 mx-auto mb-4 md:mb-0"
                    />
                  </div>
                  <div className="bgd p-[1px] rounded-lg shadow-lg w-full md:w-1/2">
                    <div className="bgdi p-6 rounded-lg">
                      <h3 className="text-2xl font-semibold mb-4">
                        {phase.title}
                      </h3>
                      <ul className="list-disc pl-5">
                        {phase.tasks.map((task, taskIndex) => (
                          <li key={taskIndex} className="mb-2">
                            {task}
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
