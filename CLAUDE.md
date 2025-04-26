# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands
- Build: `npm run build` (TypeScript compilation + Vite build)
- Development: `npm run dev` (Vite dev server)
- Lint: `npm run lint` (ESLint)
- Test: `npm run test` (Vitest)
- Test single file: `npm run test -- path/to/Component.test.tsx`
- Test with pattern: `npm run test -- -t "test description"`

## Code Style
- TypeScript with strict type checking
- React functional components with hooks
- Tailwind CSS for styling
- Import statements: group React, then components, then assets
- Component organization: props interface -> component function -> exports
- Testing: React Testing Library with data-testid attributes
- Error handling: prefer early returns and explicit null checks
- File naming: PascalCase for components, camelCase for utilities
- Component props should have explicit interfaces
- Prefer explicit return types on functions