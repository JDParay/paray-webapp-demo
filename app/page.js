import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#bf9e7e] font-['Inter'] dark:bg-[#a68b6a]">
      <main className="mx-auto max-w-4xl px-6 py-20 md:py-28 lg:py-36">
        {/* Header / Hero */}
        <div className="mb-20 text-center">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full bg-white/80 px-6 py-2.5 text-sm font-medium text-amber-800 backdrop-blur-sm dark:bg-black/30 dark:text-amber-200">
            <span className="relative flex h-3.5 w-3.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-amber-500"></span>
            </span>
            Tailwind CSS 2025 Guide
          </div>

          <h1 className="mb-8 bg-gradient-to-r from-amber-600 via-orange-500 to-yellow-500 bg-clip-text text-5xl font-semibold tracking-tight text-transparent dark:from-amber-400 dark:via-orange-400 dark:to-yellow-400 sm:text-6xl md:text-7xl">
            How to Use Tailwind CSS
          </h1>

          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-amber-900/90 dark:text-amber-100/90 md:text-2xl">
            The fastest way to build beautiful, modern interfaces — without ever leaving your HTML.
          </p>
        </div>

        {/* Quick Start Card – bigger */}
        <div className="mb-24 rounded-3xl border border-amber-200/60 bg-white/90 p-10 shadow-lg backdrop-blur-sm dark:border-amber-800/40 dark:bg-zinc-950/70">
          <h2 className="mb-8 text-3xl font-semibold text-amber-950 dark:text-amber-50">
            ① Quick Start in 60 Seconds
          </h2>

          <div className="space-y-6 font-mono text-base leading-relaxed">
            <div className="overflow-x-auto rounded-2xl bg-amber-50/70 p-6 dark:bg-amber-950/40">
              <pre className="text-amber-900 dark:text-amber-200">
                <code>npx create-next-app@latest my-app --tailwind --eslint</code>
              </pre>
            </div>
            <p className="text-amber-800 dark:text-amber-300">
              or if you already have a Next.js project:
            </p>
            <div className="overflow-x-auto rounded-2xl bg-amber-50/70 p-6 dark:bg-amber-950/40">
              <pre className="text-amber-900 dark:text-amber-200">
                <code>npm install -D tailwindcss postcss autoprefixer</code>
                <br />
                <code>npx tailwindcss init -p</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Core Concept Section – wider cards */}
        <section className="mb-24">
          <h2 className="mb-10 text-4xl font-semibold text-amber-950 dark:text-amber-50">
            What Makes Tailwind Different?
          </h2>

          <div className="grid gap-8 sm:grid-cols-2">
            <div className="rounded-2xl border border-amber-200/50 bg-white/80 p-8 shadow-md dark:border-amber-800/30 dark:bg-zinc-900/60">
              <h3 className="mb-4 text-2xl font-semibold">Utility-First</h3>
              <p className="text-lg text-amber-900/90 dark:text-amber-200/90">
                Instead of writing custom CSS, you build designs directly in your markup using small, single-purpose classes.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-200/50 bg-white/80 p-8 shadow-md dark:border-amber-800/30 dark:bg-zinc-900/60">
              <h3 className="mb-4 text-2xl font-semibold">No Context Switching</h3>
              <p className="text-lg text-amber-900/90 dark:text-amber-200/90">
                No more jumping between HTML and huge CSS files — everything lives together.
              </p>
            </div>
          </div>
        </section>

        {/* Examples Grid – expanded + 2 more examples */}
        <section className="mb-24">
          <h2 className="mb-10 text-4xl font-semibold text-amber-950 dark:text-amber-50">
            Real-World Examples
          </h2>

          <div className="grid gap-10 md:grid-cols-2">
            {/* Card 1 – Modern Card */}
            <div className="group overflow-hidden rounded-3xl border border-amber-200/40 bg-white/85 shadow-lg transition-all hover:shadow-2xl dark:border-amber-800/30 dark:bg-zinc-900/65">
              <div className="bg-gradient-to-br from-amber-100/50 to-yellow-100/50 p-10 dark:from-amber-900/20 dark:to-yellow-900/20">
                <div className="flex flex-col gap-4">
                  <div className="h-4 w-32 rounded-full bg-amber-500/30"></div>
                  <div className="h-4 w-24 rounded-full bg-yellow-500/30"></div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="mb-4 font-mono text-base font-medium uppercase tracking-wide text-amber-700 dark:text-amber-300">
                  Modern Card
                </h3>
                <pre className="overflow-x-auto rounded-2xl bg-amber-50/60 p-6 text-sm dark:bg-amber-950/40">
                  <code className="text-amber-900 dark:text-amber-200">
                    {`<div className="rounded-3xl border bg-white/90 p-8 shadow-lg hover:shadow-2xl transition-all"> ... `}
                  </code>
                </pre>
              </div>
            </div>

            {/* Card 2 – Gradient Button */}
            <div className="group overflow-hidden rounded-3xl border border-amber-200/40 bg-white/85 shadow-lg transition-all hover:shadow-2xl dark:border-amber-800/30 dark:bg-zinc-900/65">
              <div className="flex items-center justify-center bg-gradient-to-br from-amber-100/50 to-yellow-100/50 p-12 dark:from-amber-900/20 dark:to-yellow-900/20">
                <button className="rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 px-10 py-5 font-medium text-white shadow-lg transition hover:scale-105 hover:from-amber-600 hover:to-yellow-600">
                  Fancy Button
                </button>
              </div>
              <div className="p-8">
                <h3 className="mb-4 font-mono text-base font-medium uppercase tracking-wide text-amber-700 dark:text-amber-300">
                  Gradient Button
                </h3>
                <pre className="overflow-x-auto rounded-2xl bg-amber-50/60 p-6 text-sm dark:bg-amber-950/40">
                  <code className="text-amber-900 dark:text-amber-200">
                    {`bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600`}
                  </code>
                </pre>
              </div>
            </div>

            {/* New Card 3 – Badge / Pill with shimmer */}
            <div className="group overflow-hidden rounded-3xl border border-amber-200/40 bg-white/85 shadow-lg transition-all hover:shadow-2xl dark:border-amber-800/30 dark:bg-zinc-900/65">
              <div className="flex items-center justify-center bg-gradient-to-br from-amber-50/70 to-yellow-50/70 p-12 dark:from-amber-950/30 dark:to-yellow-950/30">
                <span 
                  className="
                    relative inline-block rounded-full 
                    bg-gradient-to-r from-amber-500 via-yellow-300 to-amber-500 
                    bg-[length:200%_auto] px-6 py-2.5 font-medium text-white shadow
                    animate-[shine_2.5s_linear_infinite]
                  "
                >
                  New Feature
                  {/* Optional subtle sparkle dots */}
                  <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-white/60 animate-ping"></span>
                </span>
              </div>
              <div className="p-8">
                <h3 className="mb-4 font-mono text-base font-medium uppercase tracking-wide text-amber-700 dark:text-amber-300">
                  Shimmer Status Badge
                </h3>
                <pre className="overflow-x-auto rounded-2xl bg-amber-50/60 p-6 text-sm dark:bg-amber-950/40">
                  <code className="text-amber-900 dark:text-amber-200">
            {`<span className="rounded-full bg-gradient-to-r from-amber-500 via-yellow-300 to-amber-500 bg-[length:200%_auto] px-6 py-2.5 text-white shadow animate-[shine_2.5s_linear_infinite]">
              New Feature
            </span>`}
                  </code>
                </pre>
              </div>
            </div>
            
            {/* New Card 4 – Responsive Navbar Snippet */}
            <div className="group overflow-hidden rounded-3xl border border-amber-200/40 bg-white/85 shadow-lg transition-all hover:shadow-2xl dark:border-amber-800/30 dark:bg-zinc-900/65">
              <div className="bg-gradient-to-br from-amber-50/70 to-yellow-50/70 p-10 dark:from-amber-950/30 dark:to-yellow-950/30">
                <div className="flex items-center justify-between rounded-xl bg-white/80 px-6 py-4 shadow-sm dark:bg-zinc-900/80">
                  <div className="text-lg font-semibold text-amber-800 dark:text-amber-200">Logo</div>
                  <div className="flex gap-6 text-amber-700 dark:text-amber-300">
                    <span>Home</span>
                    <span>Features</span>
                    <span>Pricing</span>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="mb-4 font-mono text-base font-medium uppercase tracking-wide text-amber-700 dark:text-amber-300">
                  Simple Navbar
                </h3>
                <pre className="overflow-x-auto rounded-2xl bg-amber-50/60 p-6 text-sm dark:bg-amber-950/40">
                  <code className="text-amber-900 dark:text-amber-200">
                    {`<nav className="flex items-center justify-between rounded-xl bg-white/80 px-6 py-4 shadow-sm dark:bg-zinc-900/80"> ... `}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA – matching new gradient */}
        <div className="rounded-3xl bg-gradient-to-r from-amber-600 to-yellow-500 p-12 text-center text-white shadow-2xl">
          <h2 className="mb-6 text-4xl font-semibold">Ready to Start?</h2>
          <p className="mb-10 text-xl opacity-95">
            The best way to learn Tailwind is to build something real — right now.
          </p>
          <div className="flex flex-col justify-center gap-6 sm:flex-row">
            <a
              href="https://tailwindcss.com/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-10 py-5 font-semibold text-amber-800 transition hover:bg-amber-50"
            >
              Official Docs →
            </a>
            <a
              href="https://ui.shadcn.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-white/40 px-10 py-5 font-semibold transition hover:bg-white/10"
            >
              Try shadcn/ui components
            </a>
          </div>
        </div>

        <footer className="mt-28 text-center text-base text-amber-900/70 dark:text-amber-200/60">
          <p>Tailwind CSS • Next.js • Made by JD • 2026</p>
        </footer>
      </main>
    </div>
  );
}