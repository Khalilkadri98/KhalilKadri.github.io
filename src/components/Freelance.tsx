import { Star, Quote, ExternalLink } from "lucide-react";

const reviews = [
  {
    title: "New Landing Page / Social Media Posts",
    period: "21. Juni – 25. Juli 2026",
    rating: "5.0",
    quote:
      "I recommend Khalil - he's fast, reliable, accountable and committed to quality. He is very professional and efficient and completed the project faster than the set time limits.",
    services: ["Landing Page", "Landing Page Design", "WordPress", "Zuverlässigkeit"],
    skills: ["German", "Landing Page Optimization"],
  },
];

export function Freelance() {
  return (
    <section id="freelance" className="py-24 sm:py-28 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary mb-4">
            Freelance · Kundenstimmen
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Zusammenarbeit, die Vertrauen schafft.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Neben meiner Arbeit in der Softwareentwicklung unterstütze ich Kunden bei
            Landingpages, WordPress-Projekten und digitalen Lösungen – mit klarem
            Austausch, zuverlässiger Umsetzung und Blick auf das Ergebnis.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {reviews.map((review) => (
            <article
              key={review.title}
              className="relative rounded-2xl border border-border bg-card p-7 sm:p-9 shadow-sm transition-shadow hover:shadow-md"
            >
              <Quote aria-hidden="true" className="absolute right-7 top-7 h-8 w-8 text-primary/15" />
              <div className="flex items-center gap-1 text-amber-500 mb-5" aria-label={`${review.rating} von 5 Sternen`}>
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
                <span className="ml-2 text-sm font-semibold text-foreground">{review.rating}/5</span>
              </div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">{review.period}</p>
              <h3 className="text-xl font-semibold tracking-tight text-foreground mb-4">{review.title}</h3>
              <blockquote className="text-base leading-relaxed text-foreground/85">
                “{review.quote}”
              </blockquote>
              <div className="mt-6 flex flex-wrap gap-2">
                {review.services.map((service) => (
                  <span key={service} className="rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground">
                    {service}
                  </span>
                ))}
              </div>
              <div className="mt-6 border-t border-border pt-4 flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs text-muted-foreground">Verifizierte Kundenbewertung</span>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary">
                  Freelance-Projekt <ExternalLink className="h-3.5 w-3.5" />
                </span>
              </div>
            </article>
          ))}
          <div className="flex min-h-64 flex-col justify-center rounded-2xl border border-dashed border-border p-7 sm:p-9">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-3">
              Ihr Projekt als Nächstes?
            </p>
            <h3 className="text-2xl font-semibold tracking-tight text-foreground">
              Gute Zusammenarbeit beginnt mit einem Gespräch.
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Sie benötigen Unterstützung für eine Website, Webanwendung oder technische
              Optimierung? Ich freue mich darauf, mehr über Ihre Anforderungen zu erfahren.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex w-fit items-center rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Projekt besprechen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
