import { FaTools, FaRobot, FaMobile } from 'react-icons/fa'
import htmlIcon from '../assets/html.png'
import javascriptIcon from '../assets/javascript.png'
import reactIcon from '../assets/react.png'
import nextjsIcon from '../assets/nextjs.png'
import csharpIcon from '../assets/c-sharp.png'
import dotnetIcon from '../assets/dot-net.png'
import sqlIcon from '../assets/sql.png'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: reactIcon,
      skills: ['React 19', 'Redux Toolkit', 'PrimeReact', 'Next.js', 'HTML5', 'CSS'],
      iconType: 'image'
    },
    {
      title: 'Backend',
      icon: dotnetIcon,
      skills: ['ASP.NET Core', '.NET Core Web API', 'C#', 'Entity Framework'],
      iconType: 'image'
    },
    {
      title: 'Database',
      icon: sqlIcon,
      skills: ['SQL Server', 'PostgreSQL', 'MySQL', 'SQLite', 'T-SQL', 'Stored Procedures'],
      iconType: 'image'
    },
    {
      title: 'Mobile',
      icon: <FaMobile className="text-3xl text-orange-600" />,
      skills: ['.NET MAUI', 'Cross-platform Development'],
      iconType: 'component'
    },
    {
      title: 'Tools',
      icon: <FaTools className="text-3xl text-red-600" />,
      skills: ['Git', 'Azure DevOps', 'Postman', 'Swagger', 'Visual Studio', 'SonarQube', 'Jira', 'Docker'],
      iconType: 'component'
    },
    {
      title: 'AI Tools',
      icon: <FaRobot className="text-3xl text-indigo-600" />,
      skills: ['n8n', 'Cursor', 'Local LLMs'],
      iconType: 'component'
    }
  ]

  return (
    <section id="skills" className="py-8 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-12 text-center">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-4 flex items-center justify-center h-16">
                {category.iconType === 'image' ? (
                  <img 
                    src={category.icon} 
                    alt={category.title} 
                    className="max-w-[64px] max-h-[64px] w-auto h-auto object-contain"
                    style={{ display: 'block' }}
                    loading="lazy"
                  />
                ) : (
                  <div className="flex items-center justify-center">
                    {category.icon}
                  </div>
                )}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-gray-700 flex items-center">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
