# PopX App

A React JS implementation of the PopX mobile app design — a 4-screen app with Landing, Login, Signup, and Profile pages, centered as a mobile interface on the webpage.

## Tech Stack
- React 18
- React Router DOM v6
- CSS Modules (plain CSS per component)
- Google Fonts (DM Sans)

## Screens
1. **Landing** — Welcome screen with animated floating bubbles, Create Account & Login buttons
2. **Login** — Sign in with email & password
3. **Signup** — Create account with full form + agency radio buttons
4. **Profile** — Account Settings with avatar, name, email, and bio

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Build for Production

```bash
npm run build
```

## Deploying to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Framework: **Create React App** (auto-detected)
5. Click **Deploy**

## Deploying to Netlify

1. Push this repo to GitHub
2. Go to [netlify.com](https://netlify.com) → Add new site → Import from Git
3. Build command: `npm run build`
4. Publish directory: `build`
5. Click **Deploy site**

## Design
Faithfully implements the Adobe XD design with:
- Mobile app frame (390×844px) centered on desktop
- Purple (`#6C25FF`) as the primary brand color
- DM Sans typeface throughout
- Pixel-accurate layouts and spacing
- Fully responsive (full-screen on mobile devices)
