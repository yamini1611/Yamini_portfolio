import { FaLanguage } from 'react-icons/fa'

const Languages = () => {
  const languages = [
    { name: 'English', level: 'Fluent', proficiency: 100 },
    { name: 'Tamil', level: 'Fluent', proficiency: 100 },
    { name: 'Hindi', level: 'Intermediate', proficiency: 70 },
    { name: 'Malayalam', level: 'Intermediate', proficiency: 70 },
    { name: 'German', level: 'Basics', proficiency: 30 }
  ]

  const getLevelColor = (level) => {
    switch (level) {
      case 'Fluent':
        return 'bg-green-500'
      case 'Intermediate':
        return 'bg-blue-500'
      case 'Basics':
        return 'bg-yellow-500'
      default:
        return 'bg-gray-500'
    }
  }

  return (
    <section id="languages" className="py-20 bg-gradient-to-b from-white via-primary-50/30 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary-200 rounded-full filter blur-3xl opacity-20 -mr-48"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title inline-block text-center">
            <span className="gradient-text">LANGUAGES</span>
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            Multilingual communication skills for global collaboration
          </p>
        </div>
        
        <div className="card animate-slide-up group relative overflow-hidden max-w-4xl mx-auto">
          {/* Decorative gradient */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-primary-100 to-indigo-100 rounded-full filter blur-3xl opacity-50 -ml-32 -mt-32 group-hover:opacity-70 transition-opacity"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-10">
              <div className="p-4 bg-gradient-to-br from-primary-500 to-indigo-600 rounded-2xl shadow-lg">
                <FaLanguage className="text-white text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Language Proficiency</h3>
            </div>
            
            <div className="space-y-6">
              {languages.map((language, index) => (
                <div 
                  key={index} 
                  className="animate-slide-up group/item hover:bg-gray-50 p-4 rounded-xl transition-all"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xl font-bold text-gray-900 group-hover/item:text-primary-600 transition-colors">
                      {language.name}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      language.level === 'Fluent' ? 'bg-green-100 text-green-700' :
                      language.level === 'Intermediate' ? 'bg-blue-100 text-blue-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {language.level}
                    </span>
                  </div>
                  <div className="relative w-full bg-gray-200 rounded-full h-4 overflow-hidden shadow-inner">
                    <div
                      className={`h-full ${getLevelColor(language.level)} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                      style={{ width: `${language.proficiency}%` }}
                    >
                      {/* Shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                    </div>
                  </div>
                  <div className="text-right mt-1">
                    <span className="text-xs text-gray-500 font-medium">{language.proficiency}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Languages

