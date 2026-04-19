import type { Metadata } from "next";
import { ExternalFormPanel } from "@/components/ExternalFormPanel";
import { getEnv } from "@/lib/env";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact nubuaed about Islamic learning for children.",
};

export default function ContactPage() {
  const { NEXT_PUBLIC_CONTACT_FORM_URL } = getEnv();

  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:px-8 md:grid-cols-[0.75fr_1.25fr] md:py-24">
      <div>
        <p className="text-sm font-bold uppercase text-black">Contact</p>
        <h1 className="mt-4 text-4xl font-extrabold leading-tight text-black text-balance">
          Contact nubuaed
        </h1>
        <p className="mt-6 leading-8 text-zinc-700">
          Ask about lesson availability, age groups, parent expectations, or the next registration
          window.
        </p>
      </div>
      <ExternalFormPanel
        description="Use the contact form to share your question. It opens in a new tab for the most reliable mobile experience, with an embedded version below when supported by the form provider."
        emptyMessage="The contact form link is coming soon. Please check back once the client has connected the external form."
        formTitle="nubuaed contact form"
        formUrl={NEXT_PUBLIC_CONTACT_FORM_URL}
        linkLabel="Open Contact Form"
      />
    </section>
  );
}
