# VETPAL - Veterans Empowered To Protect Aquatic Life

A multi-platform web and mobile application connecting veterans with aquatic conservation initiatives and environmental stewardship opportunities.

## About VETPAL

VETPAL is dedicated to empowering veterans to contribute their skills, leadership, and passion toward protecting and restoring aquatic ecosystems. The platform serves as a hub for veterans interested in conservation, environmental education, and sustainable aquatic management.

## Technology Stack

### Frontend
- **Web**: [Vite](https://vitejs.dev/) + [React 18](https://react.dev/) - Fast, modern web framework
- **Mobile**: [Expo](https://expo.dev/) + [React Native](https://reactnative.dev/) - Cross-platform iOS & Android
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) - Built on Radix UI
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Routing**: [React Router](https://reactrouter.com/) - Client-side routing
- **Icons**: [Lucide React](https://lucide.dev/) - Beautiful icons

### Backend
- **Backend Services**: [Lovable Cloud](https://lovable.app/) - Database, authentication, and storage
- **Data Fetching**: [@tanstack/react-query](https://tanstack.com/query/latest) - Powerful data synchronization
- **Forms**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) - Form handling and validation
- **Visualization**: [Recharts](https://recharts.org/) - Data visualization library

### Development & Build
- **Build Tool**: [Vite](https://vitejs.dev/) - Lightning-fast build tool
- **Monorepo**: [Turbo](https://turbo.build/) - Monorepo management
- **Linting**: [ESLint](https://eslint.org/) - Code quality and consistency
- **Package Manager**: npm
- **Node Version**: 18+ (recommended)

## Getting Started

### Prerequisites
- Node.js 18 or higher
- npm (comes with Node.js)
- For mobile development: Expo CLI (`npm install -g expo-cli`)

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run the development server** (web)
   ```bash
   npm run dev --filter=web
   ```

3. **Open in browser**
   Navigate to [http://localhost:5173](http://localhost:5173)

### Mobile Development

```bash
# Start Expo development server
npm run dev --filter=mobile

# Scan QR code with Expo Go app on your phone
```

## Available Scripts

### Workspace Commands
- `npm run dev` - Start dev server for all apps
- `npm run dev --filter=web` - Start web app only
- `npm run dev --filter=mobile` - Start mobile app only
- `npm run build` - Build all apps for production
- `npm run lint` - Run ESLint across workspace

### Web App (Vite)
- `npm run dev -w web` - Development server
- `npm run build -w web` - Production build
- `npm run preview -w web` - Preview production build

### Mobile App (Expo)
- `npm run dev -w mobile` - Start Expo server
- `npm run build -w mobile` - Build for iOS/Android

## Development

### Code Style
- **TypeScript**: Strict mode enabled for type safety
- **Components**: Use shadcn/ui components where possible
- **Styling**: Tailwind CSS utility classes (shadcn/ui handles styling)
- **Hooks**: Leverage custom hooks from `packages/shared/hooks`
- **Data Fetching**: Use `@tanstack/react-query` for server state
- **Forms**: Use `react-hook-form` + `zod` for validation

### Folder Organization
- **Components**: Reusable UI components (shadcn/ui based)
- **Pages**: Full-page components/screens
- **Hooks**: Custom React hooks (shared and app-specific)
- **Utils**: Helper functions and utilities
- **Types**: TypeScript type definitions

### Accessibility
- Follow WCAG 2.1 AA standards
- Use semantic HTML elements
- Ensure proper ARIA labels and roles
- shadcn/ui components are accessible by default
- Test with keyboard navigation

## Deployment

### Web App Deployment

**Option 1: Azure Static Web Apps (Recommended - FREE)**
```bash
npm run build -w web
npx swa deploy --env production
```
See [DEPLOYMENT_STRATEGY.md](./DEPLOYMENT_STRATEGY.md) for detailed Azure setup.

**Option 2: Siteground**
```bash
npm run build -w web
# Upload dist/ folder to Siteground server
```

### Mobile App Distribution

**iOS (App Store)**
```bash
npx eas build --platform ios
npx eas submit --platform ios
```

**Android (Google Play Store)**
```bash
npx eas build --platform android
npx eas submit --platform android
```

### Environment Variables

Create `.env.local` files in each app:

**apps/web/.env.local**
```env
VITE_LOVABLE_PROJECT_ID=your_project_id
VITE_LOVABLE_API_URL=https://api.lovable.cloud
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

**apps/mobile/.env.local**
```env
EXPO_PUBLIC_LOVABLE_PROJECT_ID=your_project_id
EXPO_PUBLIC_LOVABLE_API_URL=https://api.lovable.cloud
EXPO_PUBLIC_SUPABASE_URL=your_supabase_url
EXPO_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

## Lovable Cloud Integration

VETPAL uses Lovable Cloud for backend services:
- **Database**: PostgreSQL via Lovable Cloud
- **Authentication**: Built-in auth system
- **File Storage**: Cloud storage for media
- **Real-time APIs**: GraphQL subscriptions

See [DEPLOYMENT_STRATEGY.md](./DEPLOYMENT_STRATEGY.md) for setup instructions.

## Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make your changes
3. Run linting: `npm run lint`
4. Build to verify: `npm run build`
5. Commit changes: `git commit -m 'Add feature description'`
6. Push to branch: `git push origin feature/your-feature`
7. Open a Pull Request

## Project Documentation

- **[DEPLOYMENT_STRATEGY.md](./DEPLOYMENT_STRATEGY.md)** - Complete hosting and deployment guide
- **[.github/copilot-instructions.md](./.github/copilot-instructions.md)** - Development guidelines

## Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [Expo Documentation](https://docs.expo.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [ESLint Documentation](https://eslint.org/docs/)
- [Lovable Cloud Docs](https://docs.lovable.app/)

## Support

For questions or issues related to VETPAL development:
- Check the [DEPLOYMENT_STRATEGY.md](./DEPLOYMENT_STRATEGY.md)
- Review the [.github/copilot-instructions.md](./.github/copilot-instructions.md)
- Contact the development team

## License

This project is proprietary and confidential for VETPAL (Veterans Empowered To Protect Aquatic Life) nonprofit organization.

This project is proprietary and confidential.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
