export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">
          Welcome to Your Next.js App
        </h1>
        <p className="mb-8 text-lg text-gray-600">
          A modern web application built with Next.js 15, tRPC, Drizzle ORM, and Better Auth.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-gray-200 p-6">
            <h2 className="mb-2 text-xl font-semibold">🚀 Fast & Modern</h2>
            <p className="text-gray-600">
              Built with Next.js 15 using the App Router and Turbopack for lightning-fast development.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 p-6">
            <h2 className="mb-2 text-xl font-semibold">🔒 Secure Authentication</h2>
            <p className="text-gray-600">
              Better Auth provides secure, flexible authentication with email/password support.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 p-6">
            <h2 className="mb-2 text-xl font-semibold">📊 Type-Safe APIs</h2>
            <p className="text-gray-600">
              tRPC ensures end-to-end type safety between your client and server code.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 p-6">
            <h2 className="mb-2 text-xl font-semibold">🗄️ Robust Database</h2>
            <p className="text-gray-600">
              Drizzle ORM with PostgreSQL provides type-safe database access and migrations.
            </p>
          </div>
        </div>

        <div className="mt-12 rounded-lg bg-gray-50 p-6">
          <h2 className="mb-4 text-2xl font-semibold">Get Started</h2>
          <p className="mb-4 text-gray-600">
            Start building your application by editing <code className="rounded bg-gray-200 px-2 py-1 text-sm">src/app/page.tsx</code>
          </p>
          <div className="space-y-2 text-sm">
            <p className="text-gray-600">
              • Add new tRPC routers in <code className="rounded bg-gray-200 px-1">src/server/api/routers/</code>
            </p>
            <p className="text-gray-600">
              • Update database schema in <code className="rounded bg-gray-200 px-1">src/db/schema.ts</code>
            </p>
            <p className="text-gray-600">
              • Create new pages in <code className="rounded bg-gray-200 px-1">src/app/</code>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}