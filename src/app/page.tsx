import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-16 sm:px-8 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-24">
        <div className="flex max-w-3xl flex-col items-start gap-8">
          <p className="text-sm font-bold uppercase text-black">est 2025</p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.05] text-black text-balance sm:text-5xl md:text-6xl">
            Islamic Learning for Children
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-zinc-700">
            Nubuaed supports children with steady Islamic foundations, careful teaching, and a
            parent-friendly path through Quran basics, adab, and meaningful stories.
          </p>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link className="inline-flex min-h-12 items-center justify-center rounded-md bg-black px-6 text-sm font-bold text-white transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black active:translate-y-0" href="/register">
              Register Your Child
            </Link>
            <Link className="inline-flex min-h-12 items-center justify-center rounded-md border border-black bg-white px-6 text-sm font-bold text-black transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black active:translate-y-0" href="/contact">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="flex justify-start md:justify-end">
          <div className="flex aspect-square w-full max-w-[360px] items-center justify-center rounded-md border border-zinc-200 bg-white p-10">
            <Image
              src="/logo.png"
              alt="nubuaed logo"
              width={260}
              height={260}
              priority
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:px-8 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase text-black">What we teach</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-black text-balance">
              A calm foundation for faith and character.
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              ["Quran basics", "Short, consistent practice with careful attention to confidence."],
              ["Adab", "Manners, respect, and daily habits children can understand and repeat."],
              ["Stories", "Age-aware lessons from Islamic history and prophetic character."],
              ["Parent rhythm", "Clear next steps so families know what to prepare each week."],
            ].map(([title, description]) => (
              <article className="border-t border-zinc-200 pt-5" key={title}>
                <h3 className="text-xl font-bold text-black">{title}</h3>
                <p className="mt-3 leading-7 text-zinc-700">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-16 sm:px-8 md:grid-cols-2 md:py-20">
        <div className="border-t border-black pt-6">
          <h2 className="text-3xl font-extrabold leading-tight text-black text-balance">For growing children</h2>
          <p className="mt-4 leading-8 text-zinc-700">
            Lessons are written for families who want Islamic learning to feel steady, warm, and
            practical. Parents can confirm age groups and availability through registration.
          </p>
        </div>
        <div className="border-t border-black pt-6">
          <h2 className="text-3xl font-extrabold leading-tight text-black text-balance">Grounded and careful</h2>
          <p className="mt-4 leading-8 text-zinc-700">
            The programme keeps the experience simple: clear expectations, child-aware pacing, and
            teaching shaped around respect for the deen and the family home.
          </p>
        </div>
      </section>
    </>
  );
}
