export default function About() {
  return (
    <div className="p-10 text-white">
      <h1 className="text-4xl font-extrabold mb-4" style={{color:"green"}}>StudyBuddy</h1>
      <p className="text-lg leading-relaxed">
        StudyBuddy is an <span className="font-semibold text-blue-400">AI-powered learning companion</span> 
        designed to make studying smarter and more effective. 📚✨
      </p>

      <p className="mt-4 text-lg leading-relaxed">
        Simply provide a topic, and our platform generates a 
        <span className="font-semibold text-green-400"> step-by-step learning roadmap </span> 
        tailored to your needs. Powered by the advanced 
        <span className="font-semibold text-yellow-400"> Google Gemini API</span>, 
        StudyBuddy transforms complex subjects into clear, structured, and easy-to-follow paths. 🚀
      </p>

      <p className="mt-4 text-lg leading-relaxed">
        Whether you’re exploring a new field, preparing for exams, or building new skills, 
        StudyBuddy helps you <span className="font-semibold text-pink-400">stay focused, organized, 
        and motivated</span> throughout your learning journey. 
      </p>

      <p className="mt-6 text-xl font-bold text-center text-purple-400">
        Learn smarter. Stay consistent. Achieve more. 💡
      </p>
    </div>
  );
}
