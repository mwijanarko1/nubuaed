import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-zinc-700 sm:px-8 md:flex-row md:items-center md:justify-between">
        <p>
          <span className="font-bold text-black">nubuaed</span> gives children a steady path into
          Islamic learning.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link className="font-bold text-black underline-offset-4 hover:underline" href="/contact">
            Contact
          </Link>
          <Link className="font-bold text-black underline-offset-4 hover:underline" href="/register">
            Register
          </Link>
          <span>est 2025</span>
        </div>
      </div>
    </footer>
  );
}
