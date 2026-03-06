import React from "react";

const stats = [
  { id: 1, title: "Faculty Members", value: "28+", link: "https://www.nitp.ac.in/Department/CSE/faculty" },
  { id: 2, title: "Research Scholars", value: "264+", link: "https://www.nitp.ac.in/Department/CSE/researchStudents" },
  { id: 3, title: "Projects", value: "23+", link: "https://www.nitp.ac.in/Department/CSE/projects" },
  { id: 4, title: "Patents", value: "80+", link: "https://www.nitp.ac.in/Department/CSE/patents" },
  { id: 5, title: "Journal Papers", value: "875+", link: "https://www.nitp.ac.in/Department/CSE/journal" },
  { id: 6, title: "Conference Papers", value: "524+", link: "https://www.nitp.ac.in/Department/CSE/conference" },
];

const StatsCards = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
        Department Highlights
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {stats.map((item) => (
          <a key={item.id} href={item.link} className="block h-full">
            <div
              className="
                bg-white
                rounded-xl
                shadow-md
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-300
                p-6
                text-center
                border border-gray-100
                cursor-pointer
                h-full
                flex
                flex-col
                justify-center
              "
            >
              <p className="text-4xl font-bold text-blue-700">
                {item.value}
              </p>
              <p className="text-lg text-gray-700 mt-3">
                {item.title}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default StatsCards;