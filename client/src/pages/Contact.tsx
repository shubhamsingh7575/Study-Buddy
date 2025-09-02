import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <div className="p-10 text-white">
      <h1 className="text-4xl font-extrabold mb-6">Contact Us</h1>
      
      <div className="space-y-4 text-lg">
        {/* Email */}
        <a 
          href="mailto:shubham1728pcm@gmail.com" 
          className="flex items-center gap-3 hover:text-blue-400 transition"
        >
          <Mail className="w-6 h-6 text-red-400" />
          <span>Email: shubham1728pcm@gmail.com</span>
        </a>

        {/* LinkedIn */}
        <a 
          href="www.linkedin.com/in/shubham-singh-b2834a293" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-3 hover:text-blue-500 transition"
        >
          <Linkedin className="w-6 h-6 text-blue-500" />
          <span>LinkedIn: /in/yourprofile</span>
        </a>

        {/* GitHub */}
        <a 
          href="https://github.com/shubhamsingh7575" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-3 hover:text-gray-400 transition"
        >
          <Github className="w-6 h-6 text-gray-300" />
          <span>GitHub: shubhamsingh7575</span>
        </a>
      </div>
    </div>
  );
}
