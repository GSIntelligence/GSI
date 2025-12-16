# GSI Software Website

A modern, responsive React website for a software development company offering custom-built software solutions and ongoing maintenance for small businesses.

## Features

- **Modern React** with functional components
- **Tailwind CSS** for styling
- **Responsive design** optimized for mobile and desktop
- **Smooth scrolling navigation**
- **Contact form** with validation
- **Accessible** and SEO-friendly

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

## Deployment to GitHub Pages

1. Build the project:
   ```bash
   npm run build
   ```

2. The build output will be in the `dist` folder.

3. Configure GitHub Pages to serve from the `dist` folder or use a GitHub Actions workflow.

## Project Structure

```
src/
  components/
    Navigation.jsx    # Navigation bar component
    Hero.jsx          # Hero section with CTA
    About.jsx         # About section
    Services.jsx      # Services section
    Testimonials.jsx  # Testimonials section
    Contact.jsx       # Contact form section
  App.jsx             # Main app component
  main.jsx            # Entry point
  index.css           # Global styles and Tailwind imports
```

## Customization

- Update contact information in `Contact.jsx`
- Modify testimonials in `Testimonials.jsx`
- Adjust colors in `tailwind.config.js`
- Update company name in `Navigation.jsx`

