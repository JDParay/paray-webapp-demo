import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#d6b6a5] font-['Inter'] dark:bg-[#c4a38f]">
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

          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-amber-950/90 dark:text-amber-50/90 md:text-2xl">
            The fastest way to build beautiful, modern interfaces — without ever leaving your HTML.
          </p>
        </div>

        {/* Quick Start Card */}
        <div className="mb-24 rounded-3xl border border-amber-200/60 bg-white/90 p-10 shadow-lg backdrop-blur-sm dark:border-amber-800/40 dark:bg-zinc-950/70">
          <h2 className="mb-8 text-3xl font-semibold text-amber-950 dark:text-amber-50">
            ① Quick Start in 60 Seconds
          </h2>
          {/* ... same as before ... */}
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

        {/* Core Concepts – unchanged for brevity */}

        {/* Examples Grid – only showing the updated badge card */}
        <section className="mb-24">
          <h2 className="mb-10 text-4xl font-semibold text-amber-950 dark:text-amber-50">
            Real-World Examples
          </h2>

          <div className="grid gap-10 md:grid-cols-2">
            {/* ... other cards remain the same ... */}

            {/* Updated Shimmer Badge Card */}
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
                  <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-white/60 animate-ping"></span>
                </span>
              </div>
              <div className="p-8">
                <h3 className="mb-4 font-mono text-base font-medium uppercase tracking-wide text-amber-700 dark:text-amber-300">
                  Shimmer Status Badge
                </h3>
                <pre className="overflow-x-auto rounded-2xl bg-amber-50/60 p-6 text-sm dark:bg-amber-950/40">
                  <code className="text-amber-900 dark:text-amber-200 block whitespace-pre-wrap">
{`// Add this @keyframes once in globals.css or layout
@keyframes shine {
  to { background-position: 200% center; }
}

// Then use:
<span className="
  rounded-full 
  bg-gradient-to-r from-amber-500 via-yellow-300 to-amber-500 
  bg-[length:200%_auto] 
  px-6 py-2.5 text-white shadow 
  animate-[shine_2.5s_linear_infinite]
">
  New Feature
</span>`}
                  </code>
                </pre>
              </div>
            </div>

            {/* ... other cards ... */}
          </div>
        </section>

        {/* CTA & footer – unchanged */}
        {/* ... */}
      </main>
    </div>
  );
}