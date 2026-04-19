import Link from "next/link";

const navigationItems = [
  { href: "/", label: "Home" },
  { href: "/contact", label: "Contact" },
  { href: "/register", label: "Register" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 sm:px-8 md:flex-row md:items-center md:justify-between">
        <Link
          className="inline-flex min-h-12 items-center rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
          href="/"
        >
          <span className="text-lg font-extrabold text-black">nubuaed</span>
        </Link>
        <nav aria-label="Primary navigation">
          <ul className="flex flex-wrap gap-2">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link
                  className="inline-flex min-h-11 items-center rounded-md px-3 text-sm font-bold text-black transition-colors duration-200 hover:bg-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
