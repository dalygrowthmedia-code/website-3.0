"use client";

import { useSearchParams } from "next/navigation";

export function ContactThanks() {
  const searchParams = useSearchParams();

  if (searchParams.get("thank-you") !== "1") {
    return null;
  }

  return (
    <p className="rounded-md border border-brand-line bg-brand-mist px-4 py-3 text-sm font-semibold text-brand-ink">
      Thanks — I&apos;ll be in touch within 24 hours.
    </p>
  );
}
