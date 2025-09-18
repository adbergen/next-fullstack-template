# Next.js Template with tRPC, Drizzle, and Better Auth

A modern, production-ready Next.js template featuring type-safe APIs, secure authentication, and a robust database layer.

## 🚀 Features

- **Next.js 15** with App Router and Turbopack
- **tRPC** for end-to-end type-safe APIs
- **Drizzle ORM** with PostgreSQL (Neon)
- **Better Auth** for secure authentication
- **Tailwind CSS v4** for styling
- **TypeScript** with strict mode
- **React Hook Form** with Zod validation
- **TanStack Query** for data fetching

## 📋 Prerequisites

- Node.js 18+
- PostgreSQL database (we recommend [Neon](https://neon.tech))
- pnpm, npm, or yarn

## 🛠️ Installation

1. Clone this repository:
```bash
git clone <your-repo-url>
cd <your-project-name>
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Update `.env.local` with your values:
```env
DATABASE_URL=your_postgres_connection_string
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

5. Push database schema:
```bash
npm run db:push
```

6. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app.

## 📚 Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── (auth)/         # Authentication pages
│   └── api/            # API routes
├── components/         # React components
│   └── ui/            # UI components (buttons, forms, etc.)
├── db/                # Database configuration
│   └── schema.ts      # Drizzle schema definitions
├── lib/               # Utility functions and configs
├── server/            # Server-side code
│   └── api/          # tRPC API implementation
└── trpc/             # tRPC client setup
```

## 🔧 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run type-check` - Run TypeScript type checking
- `npm run db:generate` - Generate database migrations
- `npm run db:migrate` - Run database migrations
- `npm run db:push` - Push schema to database

## 🔐 Authentication

This template uses Better Auth for authentication with the following features:

- Email/password authentication
- Session management
- Protected API routes
- Client-side session hooks

## 💾 Database

The template uses Drizzle ORM with PostgreSQL. The schema includes:

- User management tables
- Session storage
- Account linking
- Email verification

To modify the schema, edit `src/db/schema.ts` and run:

```bash
npm run db:generate
npm run db:push
```

## 🎨 Styling

Tailwind CSS v4 is pre-configured with:

- Custom color scheme
- Responsive design utilities
- Component classes
- Dark mode support (ready to implement)

## 📝 Adding Features

### Create a new tRPC router

1. Create a new file in `src/server/api/routers/`
2. Define your router procedures
3. Add the router to `src/server/api/root.ts`

### Add a new page

1. Create a new directory in `src/app/`
2. Add a `page.tsx` file
3. The route will be automatically available

### Extend the database schema

1. Update `src/db/schema.ts`
2. Generate migrations: `npm run db:generate`
3. Apply changes: `npm run db:push`

## 🚢 Deployment

This template is ready for deployment to:

- Vercel (recommended)
- Netlify
- Railway
- Any Node.js hosting platform

Remember to:
1. Set production environment variables
2. Run database migrations
3. Build the application

## 📄 License

MIT

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.