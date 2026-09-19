# JP Global - Unified Platform

A Next.js application combining **JP 3D Printing Services** and **Spanish Learn** into a single, cohesive platform.

## Overview

This project merges two distinct applications:

- **JP 3D Printing** (`/`) - Professional 3D printing services with pricing, portfolio, and contact capabilities
- **Spanish Learn** (`/learn`) - Interactive Spanish language lessons with vocabulary, exercises, and progress tracking

Both functionalities are fully operational within a unified Next.js framework with shared navigation and branding.

## Project Structure

```
app/
├── page.tsx                    # JP 3D Printing homepage
├── pricing/page.tsx            # Pricing page
├── about/page.tsx              # About page
├── contact/page.tsx            # Contact form page
├── learn/
│   ├── page.tsx                # Spanish Learn homepage
│   ├── lessons/page.tsx         # Lessons directory
│   ├── lessons/[id]/page.tsx    # Individual lesson detail
│   └── progress/page.tsx        # Learning progress dashboard
├── components/
│   ├── SharedNav.tsx            # Unified navigation (updated)
│   ├── SharedFooter.tsx         # Unified footer
│   ├── Navigation.tsx           # Spanish learn nav
│   ├── LessonCard.tsx           # Lesson preview card
│   ├── ExerciseCard.tsx         # Interactive exercise
│   ├── VocabularyCard.tsx       # Vocabulary display
│   ├── ProgressDashboard.tsx    # Learning progress
│   └── ...
├── data/
│   └── lessons.ts              # Spanish lesson content
├── types/
│   └── index.ts                # TypeScript types
├── utils/
│   └── storage.ts              # Local storage utilities
├── layout.tsx                  # Root layout with unified nav/footer
├── globals.css                 # Global styles
└── ...
```

## Features

### JP 3D Printing
- **Homepage** - Hero section showcasing capabilities
- **Services** - Rapid prototyping, custom parts, small-batch runs
- **Process** - Step-by-step workflow explanation
- **Materials** - PLA, PETG, TPU, ASA specifications
- **Gallery** - Sample project showcases
- **Pricing** - Transparent tiered pricing structure
- **About** - Company background and mission
- **Contact** - Inquiry form and email contact

### Spanish Learn
- **Lessons** - Beginner, intermediate, advanced levels
- **Vocabulary** - Words with pronunciation guidance
- **Interactive Exercises** - Matching, translation, pronunciation
- **Progress Tracking** - Completion status and accuracy metrics
- **Dashboard** - Learning statistics and streak tracking
- **Responsive Design** - Mobile-optimized interface

### Unified Features
- **Shared Navigation** - Single header with links to both sections
- **Unified Footer** - Site-wide footer with cross-links
- **Consistent Styling** - Tailwind CSS throughout
- **Responsive Design** - Mobile, tablet, and desktop support
- **Fast Performance** - Next.js optimization and static generation

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

- **JP 3D Printing**: `http://localhost:3000/`
- **Spanish Learn**: `http://localhost:3000/learn`

### Production Build

```bash
npm run build
npm start
```

## Technology Stack

- **Framework**: Next.js 16.3.5
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **State Management**: React hooks + localStorage
- **Deployment**: Vercel

## Deployment to Vercel

### Option 1: Connect GitHub Repository

1. Push the unified project to GitHub:
   ```bash
   git remote set-url origin https://github.com/pauljon212/jp-spanish.git
   git push -u origin main
   ```

2. Visit [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "Add New" → "Project"
4. Import from Git repository
5. Select the `jp-spanish` repository
6. Click "Deploy"

### Option 2: Direct CLI Deployment

```bash
npm install -g vercel
vercel
```

### Environment Variables

No environment variables required for basic functionality. Optional for advanced features:

- `NEXT_PUBLIC_API_URL` - Backend API endpoint (if needed)

## Routing Map

### JP 3D Printing Routes
- `/` - Homepage
- `/pricing` - Pricing page
- `/about` - About page
- `/contact` - Contact page

### Spanish Learn Routes
- `/learn` - Learn homepage
- `/learn/lessons` - All lessons by level
- `/learn/lessons/[id]` - Individual lesson with vocabulary and exercises
- `/learn/progress` - Progress dashboard

## Data Management

### Local Storage
Learning progress, exercise results, and user streaks are stored in browser's localStorage for persistence across sessions.

### Lesson Data
Lessons are defined in `app/data/lessons.ts` with:
- Vocabulary lists with translations and pronunciation
- Exercises with multiple question types
- Grammar explanations
- Difficulty levels

## Performance Optimizations

- **Static Generation**: Pre-rendered pages at build time
- **Image Optimization**: Next.js Image component
- **CSS-in-JS**: Tailwind CSS with minimal bundle size
- **Code Splitting**: Route-based chunks loaded on demand
- **Caching**: Vercel's edge caching for fast global delivery

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

To add new lessons, update `app/data/lessons.ts`:

```typescript
{
  id: 'lesson-slug',
  title: 'Lesson Title',
  description: 'Description',
  level: 'beginner',
  vocabulary: [...],
  exercises: [...],
  grammar: 'Optional grammar note'
}
```

## License

Sample/demo project. Customization and deployment guidelines available upon request.

## Support

For deployment assistance or custom configurations, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Deployment Guide](https://vercel.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

**Unified Project**: Combining professional services with interactive learning. Built with Next.js, deployed globally on Vercel.
