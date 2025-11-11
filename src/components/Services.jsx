import { FaCode, FaLaptop, FaFileCode, FaPaintBrush } from 'react-icons/fa'

const Services = () => {
  const services = [
    {
      icon: <FaCode className="text-4xl" />,
      title: 'App Design',
      description: 'Mobile application design and development'
    },
    {
      icon: <FaLaptop className="text-4xl" />,
      title: 'Website Design',
      description: 'Responsive and modern web solutions'
    },
    {
      icon: <FaFileCode className="text-4xl" />,
      title: 'Full-Stack Development',
      description: 'React.js, ASP.NET Core, SQL Server'
    },
    {
      icon: <FaPaintBrush className="text-4xl" />,
      title: 'UI/UX Design',
      description: 'User interface and experience design'
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-lightblue-400 mb-2">My Services</h2>
          <div className="w-24 h-0.5 bg-dark-900 mx-auto"></div>
        </div>

        {/* Service Cards - Circular */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div 
                className="w-32 h-32 rounded-full flex items-center justify-center mb-4 transition-all transform hover:scale-110 shadow-lg"
                style={{ backgroundColor: '#60a5fa' }} // light blue
              >
                <div className="text-white">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-dark-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Read More Button */}
        <div className="text-center">
          <button className="bg-dark-900 text-white px-8 py-3 font-semibold hover:bg-dark-800 transition-colors">
            Read More
          </button>
        </div>
      </div>
    </section>
  )
}

export default Services

