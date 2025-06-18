# P3klgh Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15 with TypeScript and Tailwind CSS
- **Responsive Design**: Mobile-first approach with beautiful gradients and animations
- **Static Export**: Optimized for GitHub Pages deployment
- **Fast Performance**: Built with Next.js for optimal loading speeds
- **SEO Ready**: Meta tags and semantic HTML structure

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles with Tailwind
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Homepage portfolio content
├── public/                # Static assets
├── .github/workflows/     # GitHub Actions for deployment
└── next.config.ts         # Next.js configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/P3klgh/P3klgh.github.io.git
cd P3klgh.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
```

The static site will be generated in the `out/` directory.

## 🎨 Customization

### Updating Content

- **Hero Section**: Edit the title and description in `app/page.tsx`
- **About Section**: Modify the about text in the About section
- **Skills**: Update the skills array in the Skills section
- **Projects**: Replace the project cards with your own projects
- **Contact**: Update email and social links

### Styling

- **Colors**: Modify Tailwind classes or extend the theme in `tailwind.config.js`
- **Layout**: Adjust spacing and layout using Tailwind utility classes
- **Components**: Create new components in the `app/` directory

## 🌐 Deployment

This portfolio is automatically deployed to GitHub Pages via GitHub Actions. Every push to the `main` branch triggers a new deployment.

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. The static files will be in the `out/` directory, ready for deployment.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
 