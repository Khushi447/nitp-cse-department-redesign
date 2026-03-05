import {
  Brain,
  ShieldCheck,
  Database,
  Network,
  Code,
  Cpu,
  Eye,
  Server
} from "lucide-react";

function ResearchAreas() {

  const areas = [
    { icon: <Brain size={28} />, title: "Artificial Intelligence & Machine Learning" },
    { icon: <Database size={28} />, title: "Data Science & Big Data" },
    { icon: <ShieldCheck size={28} />, title: "Cybersecurity" },
    { icon: <Network size={28} />, title: "Computer Networks" },
    { icon: <Code size={28} />, title: "Software Engineering" },
    { icon: <Server size={28} />, title: "Distributed Systems" },
    { icon: <Cpu size={28} />, title: "IoT & Embedded Systems" },
    { icon: <Eye size={28} />, title: "Computer Vision" }
  ];

  return (
    <section className="max-w-[1200px] mx-auto px-6 py-16">

      {/* Title */}
      <h2 className="text-3xl font-semibold px-2 text-left mb-12">
        Research Areas
      </h2>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {areas.map((area, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-md
                       hover:shadow-xl hover:-translate-y-1
                       transition duration-300
                       flex flex-col items-center text-center"
          >
            <div className="text-blue-600 mb-4">
              {area.icon}
            </div>

            <h3 className="font-medium text-gray-800">
              {area.title}
            </h3>
          </div>
        ))}

      </div>
    </section>
  );
}

export default ResearchAreas;