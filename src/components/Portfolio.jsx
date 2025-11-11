import { FaGithub, FaCodeBranch, FaStar } from 'react-icons/fa'

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Integra Asset Hub',
      description: '🚀 Scalable asset management system built with React.js and ASP.NET Core',
      language: 'JavaScript',
      forks: 12,
      stars: 45,
      size: '15.2 MB',
      github: '#'
    },
    {
      id: 2,
      title: 'Facility Conversion',
      description: '🔥 Responsive React application with .NET APIs and modern UI',
      language: 'JavaScript',
      forks: 8,
      stars: 32,
      size: '12.5 MB',
      github: '#'
    },
    {
      id: 3,
      title: 'FieldLink Mobile',
      description: '📱 Cross-platform .NET MAUI mobile application for field data collection',
      language: 'C#',
      forks: 5,
      stars: 18,
      size: '28.3 MB',
      github: '#'
    },
    {
      id: 4,
      title: 'E-Commerce Platform',
      description: '🛒 Full-stack e-commerce solution with React and ASP.NET Core',
      language: 'JavaScript',
      forks: 15,
      stars: 67,
      size: '22.1 MB',
      github: '#'
    }
  ]

  return (
    <section id="projects" className="py-8 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-12">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <FaCodeBranch className="text-gray-500" />
                  <a 
                    href={project.github}
                    className="text-lg font-semibold text-purple-600 hover:underline"
                  >
                    {project.title}
                  </a>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4 text-sm">{project.description}</p>
              
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                  <span>{project.language}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaCodeBranch className="text-gray-500" />
                  <span>{project.forks}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-400" />
                  <span>{project.stars}</span>
                </div>
                <span className="text-gray-500">{project.size}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
