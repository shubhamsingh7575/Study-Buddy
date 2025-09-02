import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900/80 backdrop-blur-md shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4 text-white">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            className="w-10 h-10 object-contain rounded-lg shadow-md"
            src="src/assets/image.png"
            alt="logo"
          />
          <h1 className="text-2xl font-extrabold tracking-wide">
            Study<span className="text-blue-400">Buddy</span>
          </h1>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-8 text-lg font-medium">
          <Link
            to="/"
            className="hover:text-blue-400 transition duration-300 relative group"
          >
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
          </Link>
          <Link
            to="/about"
            className="hover:text-blue-400 transition duration-300 relative group"
          >
            About
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
          </Link>
          <Link
            to="/contact"
            className="hover:text-blue-400 transition duration-300 relative group"
          >
            Contact
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
          </Link>
        </nav>

        {/* Login Button */}
        <div>
          <Link
            to="/login"
            className="px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 
              hover:from-purple-500 hover:to-blue-500 transition duration-300 font-semibold shadow-lg"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}
