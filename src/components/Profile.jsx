import htmlIcon from '../assets/html.png'
import javascriptIcon from '../assets/javascript.png'
import reactIcon from '../assets/react.png'
import csharpIcon from '../assets/c-sharp.png'
import dotnetIcon from '../assets/dot-net.png'
import sqlIcon from '../assets/sql.png'
import css from '../assets/css.png'
import profile from '../assets/dashboard.gif'

const Profile = () => {
  const techIcons = [
    { name: 'HTML5', icon: htmlIcon },
    { name: 'CSS3', icon: css },
    { name: 'JavaScript', icon: javascriptIcon },
    { name: 'React', icon: reactIcon },
    { name: 'C#', icon: csharpIcon },
    { name: '.NET', icon: dotnetIcon },
    { name: 'SQL Server', icon: sqlIcon },
  ]

  return (
    <section id="about" className="py-8 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left - Profile Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-200 to-yellow-200 rounded-2xl transform rotate-3 opacity-20"></div>
              <div className="relative bg-white rounded-2xl p-4 shadow-xl">
                <img 
                  src={profile} 
                  alt="Profile" 
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">What I do</h2>
            
            <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
            I develop end-to-end web applications using .NET, React, and SQL.
            Focused on performance, scalability, and clean engineering.            </p>

            {/* Tech Icons Grid */}
            <div className="grid grid-cols-4 sm:grid-cols-7 gap-3 mb-6 md:mb-10">
              {techIcons.map((tech) => (
                <div
                  key={tech.name}
                  className="w-14 h-14 bg-white border-2 border-gray-200 rounded-lg flex items-center justify-center hover:border-purple-400 hover:shadow-md transition-all p-2 group"
                  title={tech.name}
                >
                  <img 
                    src={tech.icon} 
                    alt={tech.name} 
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform"
                    style={{ width: '40px', height: '40px', display: 'block' }}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {/* Key Points */}
            <div className="space-y-4 md:space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-gray-700 leading-relaxed font-medium mb-1">
                    Backend API Development & Authentication
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Building RESTful APIs using ASP.NET Core with JWT authentication and secure authorization mechanisms.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-gray-700 leading-relaxed font-medium mb-1">
                    Frontend & Mobile Development
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Creating interactive and responsive user interfaces for web and mobile applications using React and .NET MAUI.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-gray-700 leading-relaxed font-medium mb-1">
                    Progressive Web Applications & SPAs
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Developing PWAs and SPAs with optimized performance, offline capabilities, and seamless user interactions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile
