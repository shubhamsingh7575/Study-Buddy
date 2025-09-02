import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-10 rounded-2xl shadow-2xl text-white w-full max-w-md text-center">
        <h1 className="text-4xl font-extrabold mb-6">Contact Me</h1>
        <p className="mb-6 text-gray-300">
          Feel free to reach out via email or connect on LinkedIn and GitHub!
        </p>

        <div className="flex flex-col gap-4">
          {/* Email */}
          <a
            href="mailto:shubham1728pcm@gmail.com"
            className="flex items-center justify-center gap-3 px-6 py-3 bg-red-200 rounded-lg hover:bg-red-500 transition"
          >
            <Mail className="w-6 h-6" />
            <span>shubham1728pcm@gmail.com</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/shubham-singh-b2834a293"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-6 py-3 bg-blue-400 rounded-lg hover:bg-blue-500 transition"
          >
            <Linkedin className="w-6 h-6" />
            <span>LinkedIn</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/shubhamsingh7575"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-6 py-3 bg-gray-300 rounded-lg hover:bg-gray-600 transition"
          >
            <Github className="w-6 h-6" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
}
