import type { Metadata } from "next";
import { ExternalFormPanel } from "@/components/ExternalFormPanel";
import { getEnv } from "@/lib/env";

const preparationItems = [
  "Your child's age and current learning level.",
  "Preferred lesson times and family availability.",
  "Any notes that help the teacher support your child well.",
];

export const metadata: Metadata = {
  title: "Register",
  description: "Register interest in nubuaed Islamic learning for children.",
};

export default function RegisterPage() {
  const { NEXT_PUBLIC_REGISTER_FORM_URL } = getEnv();

  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:px-8 md:grid-cols-[0.75fr_1.25fr] md:py-24">
      <div>
        <p className="text-sm font-bold uppercase text-black">Register</p>
        <h1 className="mt-4 text-4xl font-extrabold leading-tight text-black text-balance">
          Register for nubuaed
        </h1>
        <p className="mt-6 leading-8 text-zinc-700">
          Share your interest and the team will confirm availability, age fit, and the next steps
          for your child.
        </p>
        <div className="mt-10 border-t border-black pt-6">
          <h2 className="text-2xl font-extrabold text-black">Before you start</h2>
          <ul className="mt-5 grid gap-3 text-zinc-700">
            {preparationItems.map((item) => (
              <li className="border-l border-zinc-300 pl-4 leading-7" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ExternalFormPanel
        description="Use the registration form to share your child's details and learning needs. It opens in a new tab for the most reliable mobile experience, with an embedded version below when supported by the form provider."
        emptyMessage="The registration form link is coming soon. Please check back once the client has connected the external form."
        formTitle="nubuaed registration form"
        formUrl={NEXT_PUBLIC_REGISTER_FORM_URL}
        linkLabel="Open Registration Form"
      />
    </section>
  );
}
