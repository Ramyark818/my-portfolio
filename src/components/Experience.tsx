import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Web Developer Intern",
      company: "Aurelia Technologies Pvt Ltd",
      location: "Davanagere, Karnataka, India",
      period: "Feb 2025 – May 2025",
      description: [
        "Contributed to real-time web development projects utilizing HTML, CSS (SASS), JavaScript, and React.js.",
        "Acquired hands-on experience with version control (GitHub), debugging, software development life cycle (SDLC) methodologies, and Agile team collaboration."
      ],
      technologies: ["SDLC", "MERN", "Git"]
    },
  ];

  const education = [
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "University BDT College of Engineering",
      location: "Davanagere, Karnataka, India",
      period: "December 2022 - Present",
      description: "Pursuing a degree in Computer Science Engineering with a focus on software development, data structures, and algorithms. Actively involved in coding competitions and hackathons to enhance problem-solving skills.",
      score: "9.42",
    },
    {
      degree: "PUC",
      institution: "Siddaganga PU Science College",
      location: "Davanagere, Karnataka, India",
      period: "August 2020 - May 2022",
      description: "Completed Pre-University education with a focus on Science and Mathematics. Developed a strong foundation in analytical thinking and problem-solving skills.",
      score: "95.33%",
    },
    {
      degree: "SSLC",
      institution: "Siddaganga Composite High School",
      location: "Davanagere, Karnataka, India",
      period: "May 2017 - April 2020",
      description: "Completed secondary education with a focus on Science and Mathematics. Developed a keen interest in computer science and programming.",
      score: "95.36%",
    }
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-neutral-50 dark:bg-gray-900 text-gray-900 dark:text-white"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16" data-aos="zoom-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey and educational background
          </p>
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3" data-aos="fade-right">
            <Briefcase className="w-6 h-6 text-blue-600" />
            Professional Experience
          </h3>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-shadow duration-300 hover:shadow-lg"
                data-aos="fade-up"
                data-aos-delay={`${index * 150}`}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold mb-1">{exp.title}</h4>
                    <p className="text-lg text-blue-600 font-semibold mb-2">{exp.company}</p>
                  </div>
                  <div className="flex flex-col md:items-end text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full font-medium dark:bg-blue-900 dark:text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3" data-aos="fade-right">
            🎓 Education
          </h3>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-shadow duration-300 hover:shadow-lg"
                data-aos="fade-up"
                data-aos-delay={`${index * 150}`}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold mb-1">{edu.degree}</h4>
                    <p className="text-lg text-blue-600 font-semibold mb-2">{edu.institution}</p>
                  </div>
                  <div className="flex flex-col md:items-end text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar size={16} />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-2">{edu.description}</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Score: <span className="font-semibold">{edu.score}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
