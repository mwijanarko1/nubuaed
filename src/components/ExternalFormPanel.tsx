type ExternalFormPanelProps = {
  description: string;
  emptyMessage: string;
  formTitle: string;
  formUrl?: string;
  linkLabel: string;
};

export function ExternalFormPanel({
  description,
  emptyMessage,
  formTitle,
  formUrl,
  linkLabel,
}: ExternalFormPanelProps) {
  if (!formUrl) {
    return (
      <div className="rounded-md border border-zinc-200 bg-white p-6">
        <p className="leading-8 text-zinc-700">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6">
      <div className="flex flex-col gap-4 rounded-md border border-zinc-200 bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-2xl leading-8 text-zinc-700">{description}</p>
        <a
          className="inline-flex min-h-12 items-center justify-center rounded-md bg-black px-6 text-sm font-bold text-white transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black active:translate-y-0"
          href={formUrl}
          rel="noreferrer"
          target="_blank"
        >
          {linkLabel}
        </a>
      </div>
      <iframe
        className="min-h-[620px] w-full rounded-md border border-zinc-200 bg-white"
        src={formUrl}
        title={formTitle}
      />
    </div>
  );
}
