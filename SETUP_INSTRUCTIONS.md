# Spanish Learn - Quick Setup & Deployment

## 📋 What's Included

A complete Duolingo-like Spanish learning web app with:
- ✅ 4 lessons spanning Beginner → Advanced levels
- ✅ 40+ interactive exercises (vocab, matching, translation, listening)
- ✅ Web Speech API for native pronunciation
- ✅ LocalStorage-based progress tracking
- ✅ Responsive Tailwind CSS UI
- ✅ Zero external dependencies (backend-free MVP)

---

## 🚀 Quick Deploy to Vercel (2 minutes)

### Step 1: Push to GitHub

```bash
# Navigate to the project
cd /home/jp21/.openclaw/workspace/spanish-learn

# Create a new GitHub repo at https://github.com/new

# Add your GitHub remote
git remote add origin https://github.com/YOUR_USERNAME/spanish-learn.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### Step 2: Deploy on Vercel

1. Go to **https://vercel.com**
2. Sign in or create a free account
3. Click **"New Project"**
4. Click **"Import Git Repository"**
5. Paste your repo URL: `https://github.com/YOUR_USERNAME/spanish-learn`
6. Click **"Import"**
7. Vercel auto-configures Next.js → Click **"Deploy"**

**✨ Done!** Your app is live at:
```
https://spanish-learn.vercel.app
```

(or a custom URL you choose during setup)

---

## 🎮 Features & MVP Scope

### Lessons (4 total)
- **Beginner 1**: Greetings & Introductions (Hola, Buenos días, Adiós)
- **Beginner 2**: Numbers 1-10 (Uno, Dos, Tres...)
- **Intermediate 1**: Common Verbs (Hablar, Comer, Vivir)
- **Advanced 1**: Past Tense Basics (Preterite)

### Exercise Types
1. **Vocabulary** – Multiple choice translations
2. **Matching** – Spanish ↔ English word pairs
3. **Translation** – Free-text Spanish/English input
4. **Listening** – Identify spoken words (Web Speech API)

### Progress Tracking
- 🔥 **Streak Counter** – Track consecutive learning days
- 🎯 **Accuracy %** – Per-lesson and per-exercise stats
- 📊 **Lessons Completed** – Track progress through curriculum
- 💾 **LocalStorage** – All data saved client-side

---

## 💻 Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open **http://localhost:3000** in your browser.

---

## 📁 Project Structure

```
spanish-learn/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── ExerciseCard.tsx      (exercise interaction)
│   │   ├── VocabularyCard.tsx    (vocab with audio)
│   │   ├── LessonCard.tsx        (lesson preview)
│   │   ├── ProgressDashboard.tsx (stats display)
│   │   └── Navigation.tsx        (top nav)
│   ├── data/
│   │   └── lessons.ts           (lesson content & exercises)
│   ├── types/
│   │   └── index.ts             (TypeScript interfaces)
│   ├── utils/
│   │   ├── audio.ts             (Web Speech API)
│   │   └── storage.ts           (localStorage helpers)
│   ├── lessons/
│   │   ├── page.tsx             (lessons index)
│   │   └── [id]/page.tsx        (lesson detail)
│   ├── progress/
│   │   └── page.tsx             (progress dashboard)
│   ├── page.tsx                 (home)
│   └── layout.tsx               (root layout)
├── public/                  # Static assets
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts
└── README.md
```

---

## 🔊 Audio Implementation

Uses **Web Speech API** (built into all modern browsers):
- No API keys or external services needed
- Speaks Spanish at 0.8x speed (learner-friendly)
- Works offline

Supported browsers:
- ✅ Chrome, Edge, Opera
- ✅ Safari 14.1+
- ✅ Android Chrome
- ❓ Firefox (limited support)

---

## 🛠 Tech Stack

- **Next.js 16** – React framework
- **TypeScript** – Type safety
- **Tailwind CSS** – Styling
- **lucide-react** – Icons
- **Web Speech API** – Pronunciation
- **LocalStorage** – Client-side persistence

**Zero backend needed!** All data is stored locally in the browser.

---

## 📱 Responsive Design

- ✅ Mobile (iPhone, Android)
- ✅ Tablet (iPad, etc.)
- ✅ Desktop (full-width optimized)

---

## 🎯 Future Enhancements (Beyond MVP)

- [ ] Backend API for cloud sync
- [ ] User authentication
- [ ] More lessons (50+ vocabulary units)
- [ ] Spaced repetition algorithm
- [ ] Leaderboards
- [ ] Mobile app (React Native)
- [ ] Offline PWA support
- [ ] Custom TTS voice selection
- [ ] Badges & achievements

---

## 🤝 Contributing

Want to improve the app?

1. Fork the repo
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit: `git commit -m "Add new feature"`
4. Push: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📝 Notes

- **Progress is local** – Data stored in browser, not cloud
- **No sign-up required** – Completely anonymous
- **Open source** – MIT licensed, free to use/modify
- **No analytics** – No tracking, fully private

---

## 🆘 Troubleshooting

### Build fails locally?
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Audio not working?
- Check browser compatibility (not all browsers support Web Speech API)
- Try a different browser (Chrome/Safari recommended)
- Check browser audio permissions

### Progress not saving?
- Check browser LocalStorage is enabled
- Try incognito/private mode
- Clear site data and refresh

---

## 📞 Questions?

Check the [README.md](README.md) or [DEPLOYMENT.md](DEPLOYMENT.md) for more details.

---

**Happy learning! 🇪🇸**
