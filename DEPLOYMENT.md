# Deployment Guide - Spanish Learn

## Option 1: Deploy to Vercel (Recommended)

Vercel is the official Next.js hosting platform and provides free tier hosting.

### Step 1: Create GitHub Repository

```bash
# If you haven't already pushed to GitHub:
git remote add origin https://github.com/YOUR_USERNAME/spanish-learn.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"New Project"**
3. Click **"Import Git Repository"**
4. Paste: `https://github.com/YOUR_USERNAME/spanish-learn`
5. Click **"Import"**
6. Vercel will auto-detect Next.js settings
7. Click **"Deploy"**

Your app will be live at: `https://spanish-learn.vercel.app`

**That's it!** Vercel automatically deploys on every push to main.

---

## Option 2: Deploy to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Click **"Add new site"** → **"Import an existing project"**
3. Connect your GitHub account
4. Select the `spanish-learn` repository
5. Build command: `npm run build`
6. Publish directory: `.next`
7. Click **"Deploy"**

---

## Option 3: Self-Host (VPS/Local Server)

```bash
# Build the app
npm run build

# Start the production server
npm start
```

Server runs on `http://localhost:3000`

For production with a domain, use a reverse proxy like Nginx pointing to the Node.js server on port 3000.

---

## Local Development

```bash
npm install
npm run dev
```

Opens at `http://localhost:3000`

---

## Environment Variables

Currently, the app uses no environment variables (all data is client-side + localStorage).

Future versions might add:
- `NEXT_PUBLIC_API_URL` – Backend API
- `DATABASE_URL` – Cloud database

---

## Performance Notes

- **Static Generation**: Home, Lessons, and Progress pages are pre-rendered
- **Dynamic Pages**: Lesson detail pages render on-demand
- **Caching**: Browser caches CSS, JS, and images automatically
- **Build Size**: ~50-60KB gzip (very lightweight)

---

## Troubleshooting

### Port 3000 already in use
```bash
npm start -- --port 3001
```

### Tailwind CSS not applying
```bash
npm run build -- --no-cache
```

### Clear cache and rebuild
```bash
rm -rf .next node_modules
npm install
npm run build
```

---

## Next Steps (Post-Deployment)

1. **Add custom domain** on Vercel/Netlify
2. **Enable analytics** to track user engagement
3. **Connect database** for cloud sync (future feature)
4. **Set up CI/CD** for automated testing
5. **Add more lessons** and vocabulary

---

**Questions?** Check [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
