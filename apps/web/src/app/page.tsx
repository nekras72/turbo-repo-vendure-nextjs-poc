import Image from "next/image";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-col items-center gap-8 px-6 py-16">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <h1 className="text-2xl font-semibold text-black dark:text-zinc-50">
          Turbo + Vercel POC
        </h1>
        <p className="text-center text-zinc-600 dark:text-zinc-400">
          Next.js frontend (apps/web) — deploy with Root: <code className="rounded bg-zinc-200 px-1 dark:bg-zinc-700">apps/web</code>, Build: <code className="rounded bg-zinc-200 px-1 dark:bg-zinc-700">turbo run build --filter=web</code>.
        </p>
        <p className="text-center text-sm text-zinc-500">
          Set <code className="rounded bg-zinc-200 px-1 dark:bg-zinc-700">NEXT_PUBLIC_API_URL</code> to your API project URL (e.g. https://your-api.vercel.app).
        </p>
        <div className="flex gap-4">
          <a
            className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
            href={`${API_URL}/health`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ping API
          </a>
          <a
            className="rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium hover:bg-zinc-100 dark:border-zinc-600 dark:hover:bg-zinc-800"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Docs
          </a>
        </div>
      </main>
    </div>
  );
}
