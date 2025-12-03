# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

```bash
npm run dev      # Start development server on port 3000
npm run build    # Production build
npm run preview  # Preview production build
```

## Project Overview

DataCraft AI is a React landing page for an intelligent data management platform. The site showcases a web builder product that helps enterprises consolidate scattered data sources (ERP, MES, Excel, etc.) into a unified system with AI-powered automation.

## Architecture

- **Single-page React app** using Vite as the build tool
- **Tailwind CSS** loaded via CDN in `index.html` with custom theme configuration (brand colors, animations, keyframes)
- **Internationalization**: Supports English and Korean via `translations.ts` with a `Language` type (`'en' | 'ko'`)
- **No routing library**: All content is rendered in sections within `App.tsx`

## Key Files

- `App.tsx` - Main component containing all landing page sections (8 sections: problems, data silos visualization, workflow, builders, contact form, testimonials)
- `translations.ts` - All UI text in both English and Korean
- `types.ts` - TypeScript types including `Language`, `AspectRatio`, image generation types
- `index.html` - Contains Tailwind config with custom animations and color palette
- `vite.config.ts` - Vite configuration with `@/` path alias pointing to project root

## Environment Variables

The project expects `GEMINI_API_KEY` for AI features (exposed as `process.env.API_KEY` and `process.env.GEMINI_API_KEY`).

## Styling Conventions

- Uses Tailwind utility classes exclusively
- Custom brand color palette: `brand-50` through `brand-950` (purple tones)
- Complex animations defined in `index.html` tailwind config (e.g., `animate-scan`, `animate-float`, `animate-view-cycle-*`)
- Glass morphism effects via `.glass-panel` class
- Grid background pattern via `.grid-bg` class
