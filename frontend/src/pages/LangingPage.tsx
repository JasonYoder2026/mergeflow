
export default function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-neutral-50 text-neutral-900">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <CubeBackground />
      </div>

      {/* Header */}
      <header className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
        <div className="font-mono text-lg font-semibold">MergeFlow</div>
        <nav className="hidden md:flex gap-6 text-sm text-neutral-600">
          <a href="#features" className="hover:text-black">Features</a>
          <a href="#why" className="hover:text-black">Why</a>
          <a href="#pricing" className="hover:text-black">Pricing</a>
        </nav>
      </header>

      {/* Hero */}
      <main className="mx-auto max-w-6xl px-6 pt-24 pb-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Project management for people who actually ship.
          </h1>
          <p className="mt-6 text-lg text-neutral-600">
            A lightweight, developer-first alternative to Jira. No ceremonies. No bloat.
          </p>

          <div className="mt-10 flex gap-4">
            <button className="rounded-xl bg-black px-6 py-3 text-white text-sm font-medium hover:bg-neutral-800">
              Start free
            </button>
            <button className="rounded-xl border border-neutral-300 px-6 py-3 text-sm font-medium hover:border-black">
              View demo
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mx-auto max-w-6xl px-6 py-10 text-sm text-neutral-500">
        Built by developers. © {new Date().getFullYear()}
      </footer>
    </div>
  );
}

function CubeBackground() {
  return (
    <svg
      className="w-full h-full"
      viewBox="0 0 1200 800"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(600 400) rotate(-35)">
        {Array.from({ length: 20 }).map((_, i) => {
          const x = (i % 5) * 140 - 280;
          const y = Math.floor(i / 5) * 140 - 280;
          const z = i % 3 === 0 ? -20 : 0;

          return (
            <rect
              key={i}
              x={x}
              y={y + z}
              width="100"
              height="100"
              fill="white"
              stroke="black"
              strokeWidth="2"
              opacity="0.9"
            />
          );
        })}
      </g>
    </svg>
  );
}
