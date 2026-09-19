# Spanish Learn - Interactive Spanish Learning Platform

A Duolingo-inspired web application for learning Spanish with interactive lessons, vocabulary drills, and progress tracking.

## 🎯 Features

### MVP Scope
- **Beginner to Advanced Lessons** – Organized into 3 difficulty levels with structured progression
- **Interactive Exercises** – 4 exercise types:
  - Vocabulary matching
  - Multiple choice
  - Translation (Spanish ↔ English)
  - Listening comprehension
- **Audio Playback** – Web Speech API for native pronunciation of Spanish words
- **Progress Tracking** – Track lessons completed, accuracy per exercise, streak counter
- **Responsive UI** – Mobile-first design with Tailwind CSS
- **Real-time Feedback** – Immediate correction and guidance on answers

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm

### Installation
```bash
git clone https://github.com/yourusername/spanish-learn.git
cd spanish-learn
npm install
```

### Development
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build & Deploy
```bash
npm run build
npm start
```

## 📁 Project Structure

```
app/
├── components/          # Reusable React components
│   ├── ExerciseCard.tsx    # Exercise interaction logic
│   ├── VocabularyCard.tsx  # Vocabulary display with audio
│   ├── LessonCard.tsx      # Lesson preview card
│   ├── ProgressDashboard.tsx  # Stats and metrics
│   └── Navigation.tsx      # Top nav bar
├── data/
│   └── lessons.ts       # Lesson and exercise content
├── types/
│   └── index.ts         # TypeScript interfaces
├── utils/
│   ├── audio.ts         # Web Speech API integration
│   └── storage.ts       # localStorage progress tracking
├── lessons/
│   ├── page.tsx         # Lessons directory page
│   └── [id]/            # Individual lesson detail page
├── progress/
│   └── page.tsx         # Progress dashboard page
├── page.tsx             # Home page
└── layout.tsx           # Root layout
```

## 📚 Lesson Content

### Beginner
1. **Greetings & Introductions** – Hola, Buenos días, Adiós, etc.
2. **Numbers 1-10** – Counting fundamentals

### Intermediate
3. **Common Verbs** – Ser, Estar, Hablar, Comer, Vivir

### Advanced
4. **Past Tense Basics** – Preterite conjugations

## 💾 Data Persistence

- **LocalStorage** – Progress, completion status, and exercise results stored locally
- **No Backend Required** – Client-side state management only (MVP)

## 🎤 Audio Features

- **Web Speech API** – Native browser TTS for pronunciation
- **Adjustable Speed** – Slower speech rate (0.8x) for learners
- **Fallback Support** – Graceful degradation in unsupported browsers

## 🎨 Design & UX

- **Tailwind CSS** – Utility-first styling
- **Mobile Responsive** – Works on all screen sizes
- **Color-coded Difficulty** – Visual indicators for lesson levels
- **Progress Bars** – Real-time accuracy visualization
- **Icon Library** – lucide-react for consistent iconography

## 🔄 Exercise Types

1. **Vocabulary** – Select the correct English translation
2. **Matching** – Match Spanish word to English meaning
3. **Translation** – Type Spanish/English translation
4. **Listening** – Identify spoken Spanish word from options

## 📊 Progress Tracking

Track the following metrics:
- ✅ Lessons completed
- 🎯 Overall accuracy percentage
- 🔥 Learning streak
- 📈 Per-exercise success rate

## 🚀 Deployment

Deployed on **Vercel** for free hosting and automatic deployments on git push.

### Deploy Your Own
1. Fork this repository
2. Sign up at [vercel.com](https://vercel.com)
3. Connect your GitHub repo
4. Click "Deploy"

Environment: Next.js with automatic optimization and Edge Functions support.

## 🛠 Tech Stack

- **Frontend Framework** – Next.js 14+ (App Router)
- **Language** – TypeScript
- **Styling** – Tailwind CSS + PostCSS
- **State Management** – React Hooks + Context
- **Storage** – Browser LocalStorage
- **Audio** – Web Speech API
- **Deployment** – Vercel

## 📋 Future Enhancements (Post-MVP)

- [ ] Backend API for cloud sync
- [ ] User authentication
- [ ] More lessons and vocabulary
- [ ] Spaced repetition algorithm
- [ ] Leaderboards
- [ ] Mobile app (React Native)
- [ ] Offline support
- [ ] Custom voice selection
- [ ] Gamification (badges, levels)

## 📝 License

MIT License – feel free to use this project for learning.

## 💡 Contributing

Suggestions and improvements welcome! Open an issue or PR.

---

**Happy Learning! 🇪🇸**
