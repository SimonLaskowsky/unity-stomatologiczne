# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 dental services website (unity-stomatologiczne) built with React 19, TypeScript, and Tailwind CSS 4. The project uses the App Router architecture and features a dark-themed UI with custom gradients and animations.

## Development Commands

```bash
# Development server (runs on http://localhost:3000)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Architecture

### File Structure

- **`/app`** - Next.js App Router directory
  - `layout.tsx` - Root layout with Geist fonts and global styles
  - `page.tsx` - Homepage composed of section components

- **`/components`** - React components
  - Section components (Header, Hero, Features, Services, CTA, Footer)
  - `/ui` - Reusable UI primitives (currently Button)
  - `NavLink.tsx` - React Router DOM wrapper for navigation links

- **`/lib`** - Utility functions
  - `utils.ts` - Contains `cn()` helper for merging Tailwind classes

- **`/globals.css`** - Global styles with design system tokens

### Styling System

The project uses a comprehensive design system with CSS custom properties:

- **Color tokens**: Primary (teal/cyan: `174 62% 47%`), dark backgrounds (`222 47% 6-10%`)
- **Gradients**: `--gradient-hero`, `--gradient-card`, `--gradient-accent`, `--gradient-text`
- **Shadows**: `--shadow-glow`, `--shadow-card`, `--shadow-elevated`
- **Fonts**: Outfit for headings, Inter for body text (loaded from Google Fonts)
- **Custom animations**: `float`, `fadeUp`, `fadeIn`, `scaleIn`
- **Utility classes**: `.text-gradient`, `.bg-hero-gradient`, `.shadow-glow`, etc.

All colors use HSL format for consistency. Dark mode is configured but currently uses identical values to light mode.

### Component Patterns

- **UI Components**: Built with Radix UI primitives (@radix-ui/react-slot)
- **Styling**: Uses `class-variance-authority` for variant-based styling (see Button component)
- **Icons**: Lucide React for iconography
- **Client Components**: Interactive components marked with `"use client"` directive (e.g., Header)

### Import Aliases

TypeScript is configured with `@/*` path alias that maps to the project root:

```typescript
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
```

Note: There's a TypeScript error suppression in `app/layout.tsx:3-5` for importing `globals.css` - this is intentional.

## Key Implementation Details

### Header Component

- Sticky header with scroll-based backdrop blur and border
- Mobile menu with slide-down animation
- Uses Next.js `Link` for logo, standard anchors for hash navigation to sections

### Button Component

Custom button variants include:
- `hero` - Gradient background with glow effect and scale hover
- `heroOutline` - Bordered variant for secondary CTAs

### Routing

The project has both Next.js routing (App Router) and React Router DOM installed, though currently only hash navigation is used for single-page sections. The NavLink component wraps React Router's NavLink.

## TypeScript Configuration

- Target: ES2017
- Strict mode enabled
- JSX mode: `react-jsx` (uses React 19's automatic JSX transform)
- Module resolution: `bundler`
- Path alias: `@/*` maps to root

## Notes for AI Assistants

- When adding new UI components, follow the shadcn/ui pattern established in `/components/ui`
- Maintain the dark theme aesthetic with teal/cyan accents
- Use the `cn()` utility for conditional className merging
- Prefer `"use client"` only when necessary (interactivity, hooks, browser APIs)
- Section-based navigation uses hash links (`#services`, `#about`, etc.)
