import { FaGraduationCap, FaAward, FaCalendarAlt } from 'react-icons/fa'

const Education = () => {
  return (
    <section id="education" className="py-8 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-12">Education</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-4 md:p-8 shadow-md">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              {/* University Logo Placeholder */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center flex-shrink-0">
                <FaGraduationCap className="text-white text-2xl sm:text-3xl" />
              </div>
              
              <div className="flex-1 w-full">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  Sri Krishna Adithya College of Arts and Science
                </h3>
                <p className="text-lg sm:text-xl text-gray-700 mb-3">Bachelor of Computer Application</p>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                  <div className="flex items-center gap-2 text-gray-600 text-sm sm:text-base">
                    <FaCalendarAlt />
                    <span>June 2020 - June 2023</span>
                  </div>
                  <div className="flex items-center gap-2 text-yellow-600 text-sm sm:text-base">
                    <FaAward />
                    <span className="font-semibold">GPA: 8.2/10.0</span>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-3 text-sm sm:text-base">
                  Completed comprehensive coursework in computer science fundamentals, software engineering, 
                  and modern development practices.
                </p>
                
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                    <span>Focused on full-stack development and software engineering principles</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                    <span>Participated in various programming projects and assignments</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
