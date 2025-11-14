import { FaCodeBranch } from 'react-icons/fa'

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Integra Asset Management System',
      description: '🚀 Enterprise-grade scalable asset management platform built with React.js and ASP.NET Core',
      language: 'TypeScript',
    },
    {
      id: 2,
      title: 'Facility Management Transformation Platform',
      description: 'Enterprise facility management solution with responsive React frontend and .NET Core Web APIs',
      language: 'TypeScript',
    },
    {
      id: 3,
      title: 'FieldLink Enterprise Mobile Solution',
      description: '📱 Cross-platform .NET MAUI mobile application for enterprise field data collection and management',
      language: 'C#',
    },
    {
      id: 4,
      title: 'Enterprise E-Commerce Solution',
      description: '🛒 Full-stack digital commerce platform with React frontend and ASP.NET Core backend',
      language: 'TypeScript',
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
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
