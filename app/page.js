import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-black">
      <main className="mx-auto max-w-3xl px-6 py-16 md:py-24 lg:py-32">
        {/* Header / Hero */}
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-zinc-100 px-5 py-2 text-sm font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-teal-500"></span>
            </span>
            Tailwind CSS 2025 Guide
          </div>

          <h1 className="mb-6 bg-gradient-to-r from-teal-600 via-cyan-500 to-blue-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent dark:from-teal-400 dark:via-cyan-400 dark:to-blue-400 sm:text-5xl md:text-6xl">
            How to Use Tailwind CSS
          </h1>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-xl">
            The fastest way to build beautiful, modern interfaces — without ever leaving your HTML.
          </p>
        </div>

        {/* Quick Start Card */}
        <div className="mb-20 rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50">
          <h2 className="mb-6 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
            ① Quick Start in 60 Seconds
          </h2>

          <div className="space-y-4 font-mono text-sm">
            <div className="overflow-x-auto rounded-lg bg-zinc-50 p-4 dark:bg-zinc-950/70">
              <pre className="text-zinc-800 dark:text-zinc-300">
                <code>npx create-next-app@latest my-app --tailwind --eslint</code>
              </pre>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400">
              or if you already have a Next.js project:
            </p>
            <div className="overflow-x-auto rounded-lg bg-zinc-50 p-4 dark:bg-zinc-950/70">
              <pre className="text-zinc-800 dark:text-zinc-300">
                <code>npm install -D tailwindcss postcss autoprefixer</code>
                <br />
                <code>npx tailwindcss init -p</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Core Concept Section */}
        <section className="mb-20">
          <h2 className="mb-8 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
            What Makes Tailwind Different?
          </h2>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/40">
              <h3 className="mb-3 text-xl font-semibold">Utility-First</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Instead of writing custom CSS, you build designs directly in your markup using small, single-purpose classes.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/40">
              <h3 className="mb-3 text-xl font-semibold">No Context Switching</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                No more jumping between HTML and huge CSS files — everything lives together.
              </p>
            </div>
          </div>
        </section>

        {/* Examples Grid */}
        <section className="mb-20">
          <h2 className="mb-8 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
            Real-World Examples
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Card 1 */}
            <div className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900/50">
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-8 dark:from-purple-900/20 dark:to-pink-900/20">
                <div className="flex flex-col gap-3">
                  <div className="h-3 w-24 rounded-full bg-purple-500/30"></div>
                  <div className="h-3 w-16 rounded-full bg-pink-500/30"></div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 font-mono text-sm font-semibold uppercase tracking-wide text-purple-600 dark:text-purple-400">
                  Modern Card
                </h3>
                <pre className="overflow-x-auto rounded bg-zinc-50 p-4 text-xs dark:bg-zinc-950">
                  <code className="text-zinc-800 dark:text-zinc-300">
                    {`<div className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition-shadow"> ... `}
                  </code>
                </pre>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900/50">
              <div className="flex items-center justify-center bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-10 dark:from-cyan-900/20 dark:to-blue-900/20">
                <button className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-medium text-white shadow-lg transition hover:scale-105 hover:from-cyan-600 hover:to-blue-700">
                  Fancy Button
                </button>
              </div>
              <div className="p-6">
                <h3 className="mb-2 font-mono text-sm font-semibold uppercase tracking-wide text-cyan-600 dark:text-cyan-400">
                  Gradient Button
                </h3>
                <pre className="overflow-x-auto rounded bg-zinc-50 p-4 text-xs dark:bg-zinc-950">
                  <code className="text-zinc-800 dark:text-zinc-300">
                    {`bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <div className="rounded-2xl bg-gradient-to-r from-teal-600 to-cyan-600 p-10 text-center text-white">
          <h2 className="mb-4 text-3xl font-bold">Ready to Start?</h2>
          <p className="mb-8 text-lg opacity-90">
            The best way to learn Tailwind is to build something real — right now.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="https://tailwindcss.com/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-8 py-4 font-semibold text-teal-700 transition hover:bg-zinc-100"
            >
              Official Docs →
            </a>
            <a
              href="https://ui.shadcn.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/30 px-8 py-4 font-semibold transition hover:bg-white/10"
            >
              Try shadcn/ui components
            </a>
          </div>
        </div>

        <footer className="mt-24 text-center text-sm text-zinc-500 dark:text-zinc-600">
          <p>Tailwind CSS • Next.js • Created with ❤️ in 2026</p>
        </footer>
      </main>
    </div>
  );
}