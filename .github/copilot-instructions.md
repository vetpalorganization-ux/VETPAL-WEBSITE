# VETPAL Website Development Instructions

## Project Overview
VETPAL (Veterans Empowered To Protect Aquatic Life) is a website dedicated to connecting veterans with aquatic conservation initiatives. This is a modern full-stack web application built with Next.js 16, TypeScript, Tailwind CSS, and ESLint.

## Setup Checklist

- [x] Create copilot-instructions.md in .github directory
- [x] Scaffold Next.js project with TypeScript, Tailwind, App Router, and ESLint
- [x] Install recommended VS Code extensions
- [x] Verify project compiles without errors
- [x] Set up development tasks
- [x] Update README.md with complete project documentation

## Project Structure
- `src/` - TypeScript source code
  - `src/app/` - Next.js App Router pages and layouts
  - `src/components/` - Reusable React components
- `public/` - Static assets
- `.vscode/` - VS Code configuration
  - `tasks.json` - Development tasks
- `.github/` - GitHub and development configuration
- `package.json` - Dependencies and scripts
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `.eslintrc.json` - ESLint configuration
- `next.config.ts` - Next.js configuration

## Development Guidelines
- **TypeScript**: Use strict mode for type safety
- **ESLint**: Follow ESLint rules and run `npm run lint` before committing
- **Tailwind CSS**: Use utility-first approach for styling
- **Components**: Implement component-based architecture with modular design
- **Accessibility**: Maintain WCAG 2.1 AA standards

## Getting Started

### Start Development Server
Run the "VETPAL: Start Dev Server" task (Cmd+Shift+B) or run:
```bash
npm run dev
```

### Available Commands
- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Key Technologies
- Next.js 16 with App Router
- React 19
- TypeScript with strict mode
- Tailwind CSS
- ESLint with Next.js config
- Prettier for code formatting
- Tailwind CSS IntelliSense
