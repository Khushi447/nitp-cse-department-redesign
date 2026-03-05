import React from "react";

const Announcements = () => {
  const announcements = [
    { id: 1, text: "Mid Semester Examination schedule released." },
    { id: 2, text: "Ph.D. admission interview dates announced." },
    { id: 3, text: "Workshop on Artificial Intelligence next week." },
    { id: 4, text: "B.Tech project review meeting on Friday." },
  ];

  return (
    <section >
      
      {/* Center Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6">
            Announcements
          </h2>

          {/* List */}
          <ul className="space-y-4">
            {announcements.map((item) => (
              <li key={item.id}>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 hover:underline transition"
                >
                  • {item.text}
                </a>
              </li>
            ))}
          </ul>

          {/* View All */}
          <div className="mt-6">
            <a
              href="#"
              className="text-sm font-medium text-blue-700 hover:underline"
            >
              View All Announcements →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Announcements;