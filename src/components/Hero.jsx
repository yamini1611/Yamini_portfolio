import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa'
import profile from '../assets/dashboard.gif'
import resumePDF from '../data/Yamini_Resume.pdf'

const Hero = () => {
    const handleResumeDownload = () => {
        const link = document.createElement('a')
        link.href = resumePDF
        link.download = 'Yamini_Priya_J_Resume.pdf'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <section id="home" className="min-h-screen bg-white flex items-center pt-16 md:pt-20 md:pb-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-4 md:space-y-6">
                        <div className="space-y-3 md:space-y-4">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900">
                                Hi! I'm <span className="text-purple-600">Yamini</span>
                                <br></br>
                            </h1>
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">  
                            I build clean, scalable full-stack applications 
                            </h3>
                            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                                I build modern web and mobile applications using <span className="font-semibold">React.js, .NET Core, and SQL Server</span>. I love crafting efficient APIs, smooth user experiences, and scalable systems.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 mt-6 md:mt-8">
                            <a
                                href="#contact"
                                className="px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                            >
                                Contact Me
                            </a>
                            <button
                                onClick={handleResumeDownload}
                                className="px-6 py-3 bg-yellow-400 text-gray-900 rounded-lg font-semibold hover:bg-yellow-500 transition-colors flex items-center gap-2"
                            >
                                <FaDownload />
                                Download Resume
                            </button>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4 mt-4 md:mt-6">
                            <a
                                href="https://github.com/yamini1611"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center hover:bg-gray-800 transition-colors"
                            >
                                <FaGithub className="text-white text-xl" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/yaminipriy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors"
                            >
                                <FaLinkedin className="text-white text-xl" />
                            </a>
                            <a
                                href="mailto:yaminipriya1611@gmail.com"
                                className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center hover:bg-red-600 transition-colors"
                            >
                                <FaEnvelope className="text-white text-xl" />
                            </a>
                        </div>
                    </div>

                    {/* Right - Illustration Placeholder */}
                    <div className="hidden lg:block">
                        <div className="w-full h-[500px] bg-gradient-to-br from-purple-100 to-yellow-100 rounded-2xl flex items-center justify-center relative overflow-hidden">
                            {/* Simple illustration placeholder */}
                            <div className="text-center">
                                <div className="w-full h-full mx-auto mb-4 relative">
                                    <img src={profile} alt="Profile" className="w-full h-full object-cover rounded-2xl" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
