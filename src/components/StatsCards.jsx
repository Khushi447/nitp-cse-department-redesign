import React from "react";

const stats = [
  { id: 1, title: "Faculty Members", value: "28+" },
  { id: 2, title: "Research Scholars", value: "264+" },
  { id: 3, title: "Projects", value: "23+" },
  { id: 4, title: "Patents", value: "80+" },
  { id: 5, title: "Journal Papers", value: "875+" },
  { id: 6, title: "Conference Papers", value: "524+" },
];

const StatsCards = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
        Department Highlights
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {stats.map((item) => (
          <div
            key={item.id}
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
            "
          >
            <p className="text-4xl font-bold text-blue-700">
              {item.value}
            </p>
            <p className="text-lg text-gray-700 mt-3">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsCards;