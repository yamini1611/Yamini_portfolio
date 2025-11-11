const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      date: 'JAN 15',
      title: 'Building Scalable React Applications',
      description: 'Learn how to build scalable and maintainable React applications using modern best practices and patterns.',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400'
    },
    {
      id: 2,
      title: 'ASP.NET Core API Development',
      description: 'Exploring RESTful API design patterns and best practices in ASP.NET Core for enterprise applications.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d15bab7c?w=400'
    },
    {
      id: 3,
      title: 'Database Optimization Techniques',
      description: 'SQL Server performance tuning and optimization strategies for high-traffic applications.',
      image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400'
    }
  ]

  const codePatternStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
  }

  return (
    <section id="blog" className="py-20 bg-dark-900 text-white relative overflow-hidden">
      {/* Code Pattern Background */}
      <div className="absolute inset-0 opacity-30" style={codePatternStyle}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-lightblue-400 mb-2">My Blog</h2>
          <div className="w-24 h-0.5 bg-white mx-auto"></div>
        </div>

        {/* Blog Description */}
        <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
          Sharing insights, tutorials, and experiences from my journey as a software engineer. 
          Explore articles on web development, best practices, and technology trends.
        </p>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Date Badge */}
              <div className="relative">
                <div className="absolute top-4 left-4 bg-primary-400 text-dark-900 px-3 py-1 rounded font-bold text-sm z-10">
                  {post.date || 'JAN 15'}
                </div>
                <div className="aspect-video bg-gradient-to-br from-dark-700 to-dark-800 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {post.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Read More Button */}
        <div className="text-center">
          <button className="bg-dark-800 text-white px-8 py-3 font-semibold hover:bg-dark-700 transition-colors border border-dark-700">
            Read More
          </button>
        </div>
      </div>
    </section>
  )
}

export default Blog

