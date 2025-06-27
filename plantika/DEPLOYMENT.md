# Plantika Website Deployment Guide

## 🌱 About This Project

Plantika is a beautiful, responsive website for a plant nursery built with Next.js, TypeScript, and Tailwind CSS. It features:

- **Modern Design**: Clean, matte theme with light/dark mode support
- **Monsoon Plant Collection**: Beautiful collage showcasing 15 plants perfect for Pune's monsoon season
- **Detailed Plant Care**: Individual sections with care instructions, benefits, and growing conditions optimized for monsoon climate
- **Contact Information**: Complete contact section with Google Business listing, social media links, and contact form
- **Local Focus**: Specifically designed for Pune-based plant nursery with monsoon-appropriate plants
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Performance Optimized**: Built with Next.js for optimal loading speeds

## 🚀 Deployment Options

### Option 1: Deploy to Vercel (Recommended - Free)

Vercel is the company behind Next.js and offers the best integration:

#### Step 1: Prepare Your Repository
1. **Initialize Git** (if not already done):
   ```powershell
   git init
   git add .
   git commit -m "Initial commit: Complete Plantika website"
   ```

2. **Push to GitHub**:
   - Create a new repository on [GitHub](https://github.com/new)
   - Name it `plantika-website`
   - Copy the commands provided by GitHub:
   ```powershell
   git remote add origin https://github.com/yourusername/plantika-website.git
   git branch -M main
   git push -u origin main
   ```

#### Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up/login with your GitHub account
3. Click "New Project"
4. Import your `plantika-website` repository
5. Configure project:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (leave default)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)
6. Click "Deploy"

**Your site will be live at**: `https://plantika-website-yourusername.vercel.app`

#### Step 3: Custom Domain (Optional)
1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain (e.g., `plantika.com`)
4. Follow DNS configuration instructions

---

### Option 2: Deploy to Netlify (Alternative - Free)

#### Step 1: Build the Project
```powershell
npm run build
npm run export  # If you want static export
```

#### Step 2: Deploy on Netlify
1. Go to [netlify.com](https://netlify.com)
2. Sign up/login
3. Click "New site from Git"
4. Connect your GitHub repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
6. Click "Deploy site"

---

### Option 3: Deploy to GitHub Pages (Free Static Hosting)

#### Step 1: Configure for Static Export
1. Update `next.config.ts`:
   ```typescript
   import type { NextConfig } from "next";

   const nextConfig: NextConfig = {
     output: 'export',
     trailingSlash: true,
     images: {
       unoptimized: true
     }
   };

   export default nextConfig;
   ```

2. Update `package.json` scripts:
   ```json
   {
     "scripts": {
       "dev": "next dev --turbopack",
       "build": "next build",
       "export": "next build && next export",
       "start": "next start",
       "lint": "next lint"
     }
   }
   ```

#### Step 2: Deploy
1. Run: `npm run export`
2. Push the `out` folder to your repository's `gh-pages` branch
3. Enable GitHub Pages in repository settings

---

## 🔧 Environment Setup

### Local Development
```powershell
# Clone the repository
git clone https://github.com/yourusername/plantika-website.git
cd plantika-website

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

### Production Build
```powershell
# Build for production
npm run build

# Start production server
npm start

# Test the build locally
# Open http://localhost:3000
```

## 📁 Project Structure

```
plantika/
├── public/
│   ├── plants/          # Plant images (pune1.png - pune15.png for monsoon plants)
│   └── ...
├── src/
│   ├── app/
│   │   ├── layout.tsx   # Root layout with theme provider
│   │   ├── page.tsx     # Main homepage with Pune monsoon plants
│   │   └── globals.css  # Global styles and theme
│   └── components/
│       └── theme-toggle.tsx  # Dark/light mode toggle
├── next.config.ts       # Next.js configuration
├── tailwind.config.ts   # Tailwind CSS configuration
├── package.json         # Dependencies and scripts
└── DEPLOYMENT.md        # This file
```

## 🎨 Customization

### Adding New Plants
1. Add plant images to `public/plants/`
2. Update the `plants` array in `src/app/page.tsx`
3. Follow the existing data structure

### Changing Colors/Theme
- Edit `src/app/globals.css` for color schemes
- Modify Tailwind classes in components
- Update the theme toggle component if needed

### Contact Information
Update the contact section in `src/app/page.tsx`:
- Address (currently placeholder - update with real Pune address)
- Phone numbers (update with real contact numbers)
- Email addresses (update with real business email)
- Google Business listing (currently set to: https://g.co/kgs/dKsPWKL)
- Social media links (update with real social media accounts)

## 🔍 SEO & Performance

The site is optimized for:
- **SEO**: Meta tags, semantic HTML, proper heading hierarchy
- **Performance**: Next.js Image optimization, code splitting
- **Accessibility**: Proper ARIA labels, keyboard navigation
- **Mobile**: Responsive design, touch-friendly interfaces
- **Local SEO**: Google Business listing integration for local discovery

## 📍 Google Business Integration

The website includes direct integration with Google Business listing:
- **Current Link**: https://g.co/kgs/dKsPWKL
- **Location**: Contact section → "Google Business" link
- **Purpose**: Allows customers to find directions, view reviews, and see business hours
- **Benefits**: Improves local SEO and customer trust

To update the Google Business link:
1. Open `src/app/page.tsx`
2. Find the contact section
3. Update the `href` attribute in the Google Business link
4. Ensure the link opens in a new tab for better user experience

## 🐛 Troubleshooting

### Build Issues
- Ensure all dependencies are installed: `npm install`
- Clear Next.js cache: `rm -rf .next`
- Check for TypeScript errors: `npm run lint`

### Image Issues
- Verify images are in `public/plants/` directory
- Check image file names match the code (pune1.png, pune2.png, etc.)
- Ensure images are optimized for web (< 1MB each)
- For new plants, follow the naming convention: pune[number].png

### Deploy Issues
- Check build logs for errors
- Verify environment variables (if any)
- Ensure all files are committed to git

## 📞 Support

For questions or issues:
1. Check this deployment guide
2. Review Next.js documentation
3. Check the hosting platform's documentation
4. Create an issue in the GitHub repository

---

**🎉 Congratulations! Your Plantika website is now live and ready to showcase beautiful plants to the world!**
