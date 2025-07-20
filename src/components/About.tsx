import { Code, Database, Globe, CoffeeIcon } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full Stack Development",
      description: "Expertise in both frontend and backend technologies"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Database Design",
      description: "Proficient in SQL and MongoDB database management"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Web Technologies",
      description: "Modern web development with React, Node.js, and more"
    },
    {
      icon: <CoffeeIcon className="w-6 h-6" />,
      title: "Java Development",
      description: "Building robust applications with Java and Spring Boot"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Passionate Software Developer
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I'm a dedicated software engineer with a strong foundation in full-stack development and Java development. 
              My journey in technology has been driven by curiosity and a passion for solving 
              complex problems through elegant code solutions.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With experience in modern web technologies, database management, and software 
              architecture, I enjoy building applications that make a real difference in 
              people's lives. I'm always eager to learn new technologies and take on 
              challenging projects.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-blue-600 mb-4">
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;