export default function About() {
  return (
    <div className="px-6 md:px-20 lg:px-40 py-10 text-white">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-yellow-400 text-center">
        StudyBuddy
      </h1>

      <p className="text-lg md:text-xl leading-relaxed mb-4">
        StudyBuddy is an <span className="font-semibold text-yellow-400">AI-powered learning companion</span> 
        designed to make studying smarter and more effective. 📚✨
      </p>

      <p className="text-lg md:text-xl leading-relaxed mb-4">
        Simply provide a topic, and our platform generates a 
        <span className="font-semibold text-yellow-400"> step-by-step learning roadmap </span> 
        tailored to your needs. Powered by the advanced 
        <span className="font-semibold text-yellow-400"> Google Gemini API</span>, 
        StudyBuddy transforms complex subjects into clear, structured, and easy-to-follow paths. 🚀
      </p>

      <p className="text-lg md:text-xl leading-relaxed mb-6">
        Whether you’re exploring a new field, preparing for exams, or building new skills, 
        StudyBuddy helps you <span className="font-semibold text-yellow-400">stay focused, organized, 
        and motivated</span> throughout your learning journey. 
      </p>

      <p className="text-xl md:text-2xl font-bold text-center text-blue-400">
        Learn smarter. Stay consistent. Achieve more. 💡
      </p>
    </div>
  );
}
