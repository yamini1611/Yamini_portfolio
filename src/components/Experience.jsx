import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa'

const Experience = () => {
  const experiences = [
    {
      company: 'CG-VAK Software & Exports',
      position: 'Software Engineer',
      period: '2023-Present',
      location: 'Coimbatore, India',
      description: `As a Software Engineer at CG-VAK Software & Exports, I specialize in building scalable, high-performance web applications using .NET Core (Web API & MVC), Entity Framework, ReactJS, and SQL Server. I have strong expertise in creating authentication workflows, work-order modules, lookup APIs, and integrating complex services.

I work confidently with GitHub, Azure DevOps, and modern CI/CD practices. On the front end, I build clean and intuitive interfaces using MUI and styled-components and maintaning coding standards with SonarQube. I focus on writing maintainable code, delivering clearly documented APIs, and collaborating effectively in service-driven teams.`
    }
  ]

  return (
    <section id="experience" className="py-8 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-12 text-center">Professional Experience</h2>
        
        <div className="space-y-6 md:space-y-8">
          {experiences.map((exp) => (
            <div key={exp.company} className="bg-gray-50 rounded-lg p-4 md:p-8 shadow-md">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 md:mb-6">
                <div className="mb-4 md:mb-0">
                  <div className="flex items-center gap-3 mb-2">
                    <FaBriefcase className="text-purple-600 text-lg md:text-xl" />
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">{exp.position}</h3>
                  </div>
                  <p className="text-lg md:text-xl text-purple-600 font-semibold ml-0 md:ml-8 mt-2">{exp.company}</p>
                  <p className="text-gray-600 ml-0 md:ml-8">{exp.location}</p>
                </div>
                <div className="flex items-center gap-2 text-gray-600 ml-0 md:ml-0 mt-2 md:mt-0">
                  <FaCalendarAlt />
                  <span className="font-medium">{exp.period}</span>
                </div>
              </div>
              
              <div className="ml-0 md:ml-8">
                <div className="border-l-4 border-purple-600 pl-4 md:pl-6">
                  <div className="space-y-3">
                    <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                      As a Software Engineer at CG-VAK Software & Exports, I specialize in building scalable, high-performance web applications using .NET Core (Web API & MVC), Entity Framework, ReactJS, and SQL Server. I have strong expertise in creating authentication workflows, work-order modules, lookup APIs, and integrating complex services.
                    </p>
                    <ul className="space-y-2">
                      <li className="text-gray-700 flex items-start text-sm md:text-base">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Work confidently with GitHub, Azure DevOps, and modern CI/CD practices</span>
                      </li>
                      <li className="text-gray-700 flex items-start text-sm md:text-base">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Build clean and intuitive interfaces using MUI and styled-components and maintaining coding standards with SonarQube</span>
                      </li>
                      <li className="text-gray-700 flex items-start text-sm md:text-base">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Focus on writing maintainable code, delivering clearly documented APIs, and collaborating effectively in service-driven teams</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
