# 🌱 Plantika - Premium Plant Nursery Website

A beautiful, modern website for Plantika plant nursery built with Next.js, TypeScript, and Tailwind CSS.

![Plantika Website](https://img.shields.io/badge/Plant%20Nursery-Website-green)
![Next.js](https://img.shields.io/badge/Next.js-15.3.4-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-cyan)

## ✨ Features

- **🎨 Modern Design**: Clean, matte aesthetic with professional styling
- **🌙 Dark/Light Mode**: Toggle between themes for optimal viewing
- **📱 Fully Responsive**: Perfect on desktop, tablet, and mobile devices
- **🖼️ Plant Gallery**: Beautiful showcase of 15+ plant varieties
- **📋 Detailed Care Guides**: Comprehensive information for each plant
- **📞 Contact Section**: Easy ways to get in touch
- **⚡ Performance Optimized**: Fast loading with Next.js optimization
- **♿ Accessible**: Built with accessibility best practices

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/plantika-website.git
   cd plantika-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
plantika/
├── 📁 public/
│   ├── 📁 plants/           # Plant images (P1-P16)
│   └── 📄 ...
├── 📁 src/
│   ├── 📁 app/
│   │   ├── 📄 layout.tsx    # Root layout
│   │   ├── 📄 page.tsx      # Homepage
│   │   └── 📄 globals.css   # Global styles
│   └── 📁 components/
│       └── 📄 theme-toggle.tsx
├── 📄 next.config.ts
├── 📄 tailwind.config.ts
└── 📄 package.json
```

## 🎯 Website Sections

### 🏠 Hero Section
- Welcome message with call-to-action buttons
- Beautiful gradient background
- Navigation with theme toggle

### ℹ️ About Section
- Company story and mission
- Core values (Quality, Expert Care, Sustainable)
- Services overview (Cultivation, Consultation, Sustainable Practices)

### 🖼️ Plant Gallery
- Grid layout showcasing all plants
- High-quality images with hover effects
- Plant names and descriptions

### 🌿 Plant Care Guide
- Detailed information for each plant
- Care requirements (light, water, soil, temperature, humidity)
- Benefits and characteristics
- Alternating layout for visual interest

### 📞 Contact Section
- Business address and hours
- Phone, email, and WhatsApp links
- Social media connections
- Contact form for inquiries

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Adding New Plants
1. Add plant image to `public/plants/`
2. Update the `plants` array in `src/app/page.tsx`
3. Include care information and benefits

### Styling Changes
- **Colors**: Edit CSS variables in `src/app/globals.css`
- **Components**: Modify Tailwind classes in component files
- **Typography**: Update font settings in `src/app/layout.tsx`

### Contact Information
Update contact details in the contact section of `src/app/page.tsx`

## 🚀 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions for:
- ✅ Vercel (Recommended)
- ✅ Netlify
- ✅ GitHub Pages
- ✅ Custom hosting

## 🔧 Technology Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)

## 📊 Performance

- ⚡ Lighthouse Score: 95+
- 🖼️ Image Optimization: Next.js Image component
- 📱 Mobile First: Responsive design
- 🎯 SEO Optimized: Meta tags and semantic HTML

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

If you have any questions or need help:

- 📧 Email: support@plantika.com
- 💬 Create an issue in this repository
- 📖 Check the [deployment guide](./DEPLOYMENT.md)

---

<div align="center">
  <strong>🌱 Built with love for plant enthusiasts 🌱</strong>
  <br>
  <sub>Made with Next.js, TypeScript, and Tailwind CSS</sub>
</div>
