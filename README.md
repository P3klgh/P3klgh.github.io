# P3klgh Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui sidebar navigation.

## Features

- **Modern Tech Stack**: Next.js 15 with TypeScript and Tailwind CSS
- **Professional Sidebar**: Powered by shadcn/ui, with grouped navigation and dark mode
- **Responsive Design**: Mobile-first approach with beautiful gradients and animations
- **Static Export**: Optimized for GitHub Pages deployment
- **Fast Performance**: Built with Next.js for optimal loading speeds
- **SEO Ready**: Meta tags and semantic HTML structure
- **Custom Images**: Portfolio images are stored in `public/images/`
- **Dark Mode**: Fully supported via Tailwind CSS

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── globals.css         # Global styles with Tailwind
│   ├── layout.tsx          # Root layout component
│   └── page.tsx            # Homepage portfolio content
├── components/             # Reusable UI and sidebar components
├── public/                 # Static assets (images, favicon, etc.)
│   └── images/             # Portfolio images (Picture1.png, Picture2.png, Picture3.png, etc.)
├── .github/workflows/      # GitHub Actions for deployment
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── next.config.ts          # Next.js configuration
└── .gitignore              # Git ignore rules
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn




## Deployment

This portfolio is automatically deployed to GitHub Pages via GitHub Actions. Every push to the `main` branch triggers a new deployment.

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. The static files will be in the `out/` directory, ready for deployment.

## License

This project is open source and available under the [MIT License](LICENSE).



Built with ❤️ using Next.js, TypeScript, Tailwind CSS, and shadcn/ui
 