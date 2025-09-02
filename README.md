
# 📚 StudyBuddy - AI-Powered Learning Roadmap Generator

**StudyBuddy** is an **AI-powered web app** that generates **personalized, step-by-step learning roadmaps** for any topic you provide.  
Using the **Google Gemini API**, it creates structured guides and presents them in a clean, easy-to-follow layout and making learning more efficient and organized.

---

## ✨ Features
- 🔹 Input any topic (e.g., "Web Development", "Machine Learning", "Data Structures")  
- 🔹 AI-powered roadmap generation with **level-wise progression**  
- 🔹 Roadmaps are **structured, readable, and easy to follow**  
- 🔹 Fully **responsive UI** for desktop and mobile devices  
- 🔹 Built with **Vite + React + TypeScript** for speed and performance  

---

## 🛠️ Tech Stack
- **Frontend:** React, TypeScript, Vite  
- **Styling:** TailwindCSS (or your chosen CSS framework)  
- **AI Integration:** Google Gemini API  
- **Package Manager:** npm  

---

## 🚀 Getting Started (Run Locally)

Follow these steps to set up **StudyBuddy** on your local machine:

### 1️⃣ Clone the Repository
```bash
git clone https:https://github.com/shubhamsingh7575/Study-Buddy.git
cd StudyBuddy
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Add Gemini API Key
Create a `.env` file in the root directory and add your Google Gemini API Key:

```env
VITE_GEMINI_API_KEY=your_api_key_here
```

### 4️⃣ Run the Development Server
```bash
npm run dev
```

Open your browser and navigate to:

```
http://localhost:5173
```

### 5️⃣ Build for Production
```bash
npm run build
```

This generates a production-ready build in the `dist/` folder.

### 6️⃣ Preview Production Build (Optional)
```bash
npm run preview
```

---

## 🌐 Deployment

This app is ready to be deployed on platforms like **Render**, **Vercel**, or **Netlify**.

**Render Deployment Settings**:
- **Build Command:**  
```bash
npm install && npm run build
```
- **Publish Directory:**  
```
dist
```

---

## 💡 Contributing
Contributions, issues, and feature requests are welcome!  
Feel free to **fork the repository** and submit a pull request.

---

## 📄 License
[MIT](LICENSE)  

---

## 🤝 Acknowledgements
- Google Gemini API for AI roadmap generation  
- Vite, React, and TailwindCSS for frontend development
