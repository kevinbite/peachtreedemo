# Peachtree Construction Website

A professional, high-performance website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript (Strict Mode)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Linting:** ESLint + Prettier

## 📁 Project Structure

```
src/
├── app/                    # Next.js 14 App Router pages
│   ├── (marketing)/       # Marketing pages group
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── ui/                # Base UI components (buttons, cards, etc.)
│   ├── layout/            # Layout components (header, footer, etc.)
│   ├── sections/          # Page sections (hero, services, etc.)
│   └── loading/           # Loading screens and skeletons
├── lib/                   # Core utilities and helpers
├── hooks/                 # Custom React hooks
├── types/                 # TypeScript type definitions
├── utils/                 # Utility functions
├── config/                # Configuration files
├── styles/                # Global styles
└── public/
    ├── videos/            # Video assets
    ├── images/            # Image assets
    └── fonts/             # Custom fonts (if needed)
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Copy environment variables:
   ```bash
   cp .env.example .env.local
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## 🎨 Design System

- **Typography:** Inter (body), Montserrat (headings)
- **Spacing:** 8-point grid system
- **Colors:** Primary and secondary color scales
- **Breakpoints:** Mobile-first responsive design

## 🚦 Performance Targets

- Lighthouse Performance: 95+
- Lighthouse Best Practices: 95+
- Lighthouse SEO: 95+
- Initial JS Bundle: <180KB
- Image Optimization: AVIF/WebP formats

## 📱 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## 🔒 Accessibility

- WCAG 2.2 AA compliant
- Keyboard navigable
- Screen reader friendly
- Proper color contrast ratios

## 📄 License

Private and Confidential

