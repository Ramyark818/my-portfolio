const Experience = () => {
  const experiences = [
    {
      title: 'Web Development Intern',
      company: 'InternPE',
      date: 'Oct 2024 - Nov 2024',
      description:
        'Contributed to UI/UX design tasks, implemented responsive web interfaces using modern CSS frameworks, and collaborated on real-world frontend projects.',
    },
    {
      title: 'Frontend Intern',
      company: 'CodSoft',
      date: 'Aug 2024 - Sep 2024',
      description:
        'Worked on several frontend components using React and Tailwind CSS. Focused on reusable design systems and cross-browser compatibility.',
    },
    {
      title: 'Technical Coordinator',
      company: 'University BDT College of Engineering',
      date: '2023 - 2024',
      description:
        'Managed coding events and technical fests. Coordinated with faculty and sponsors. Contributed to club web presence and design.',
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-neutral-50 dark:bg-gray-900 text-gray-900 dark:text-white"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="zoom-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A glimpse into my professional and technical journey
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-shadow duration-300 hover:shadow-lg"
              data-aos="fade-up"
              data-aos-delay={`${index * 150}`}
            >
              <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                {exp.company} — {exp.date}
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
