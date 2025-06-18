import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">P3klgh</h1>
          <p className="text-xl mb-8">Full Stack Developer & Creative Problem Solver</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            View My Work
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a passionate developer who loves creating beautiful, functional, and user-friendly applications. 
              With expertise in modern web technologies, I focus on building scalable solutions that make a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {['TypeScript', 'React', 'Next.js', 'Node.js', 'Tailwind CSS', 'Python', 'Git', 'Docker'].map((skill) => (
              <div key={skill} className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <span className="font-semibold text-gray-800">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Project Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Project One</h3>
                <p className="text-gray-600 mb-4">A modern web application built with React and TypeScript.</p>
                <div className="flex gap-2">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">React</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">TypeScript</span>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Project Two</h3>
                <p className="text-gray-600 mb-4">Full-stack application with Node.js and modern APIs.</p>
                <div className="flex gap-2">
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">Node.js</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">Express</span>
                </div>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Project Three</h3>
                <p className="text-gray-600 mb-4">Mobile-first responsive design with modern CSS.</p>
                <div className="flex gap-2">
                  <span className="bg-pink-100 text-pink-800 px-2 py-1 rounded text-sm">CSS3</span>
                  <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm">Tailwind</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <p className="text-lg text-gray-600 mb-8">
            I'm always interested in new opportunities and exciting projects.
          </p>
          <div className="flex justify-center gap-6">
            <a href="mailto:your.email@example.com" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Email Me
            </a>
            <a href="https://github.com/P3klgh" className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 P3klgh. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
