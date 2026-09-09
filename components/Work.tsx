import { CursorGlowCard } from "./CursorGlowCard";
import { StravaChart } from "./StravaChart";
import { StripeFlow } from "./StripeFlow";
import { pitcrewlabs, previousRoles, strava, stripe } from "@/data/projects";

export function Work() {
  return (
    <section
      id="work"
      className="relative -mt-10 rounded-t-[40px] bg-midnight px-6 pb-24 pt-20 text-cream sm:-mt-14 sm:rounded-t-[56px] sm:px-10 sm:pb-32 sm:pt-28 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-2xl font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
          things i&rsquo;ve worked on
        </h2>

        <div className="mt-16 sm:mt-20">
          <CursorGlowCard>
            <p className="font-sans text-xs uppercase tracking-wider text-cream/60">
              {pitcrewlabs.role} · {pitcrewlabs.period}
            </p>
            <h3 className="mt-2 font-serif text-3xl sm:text-4xl">
              {pitcrewlabs.name}
            </h3>
            <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-cream/80 sm:text-lg">
              {pitcrewlabs.description}
            </p>
          </CursorGlowCard>
        </div>

        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          <CursorGlowCard>
            <h3 className="font-serif text-2xl sm:text-3xl">{strava.name}</h3>
            <p className="mt-4 max-w-md font-sans text-sm leading-relaxed text-cream/80 sm:text-base">
              {strava.description}
            </p>
            <p className="mt-4 font-sans text-xs text-cream/40">
              {strava.tech?.join(" · ")}
            </p>

            <StravaChart />

            <div className="mt-4 flex items-center gap-4 font-sans text-sm">
              <span className="text-cream/40">watch demo ↗</span>
              {strava.github && (
                <a
                  href={strava.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-cream/70 transition-colors hover:text-cream"
                >
                  github ↗
                </a>
              )}
            </div>
            <p className="mt-1 font-sans text-xs text-cream/30">
              demo video coming soon
            </p>
          </CursorGlowCard>

          <CursorGlowCard>
            <h3 className="font-serif text-2xl sm:text-3xl">{stripe.name}</h3>
            <p className="mt-4 max-w-md font-sans text-sm leading-relaxed text-cream/80 sm:text-base">
              {stripe.description}
            </p>
            <p className="mt-4 font-sans text-xs text-cream/40">
              {stripe.tech?.join(" · ")}
            </p>

            <StripeFlow />

            {stripe.demoUrl && (
              <div className="mt-4 flex items-center gap-4 font-sans text-sm">
                <a
                  href={stripe.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-cream/70 transition-colors hover:text-cream"
                >
                  try it ↗
                </a>
              </div>
            )}
          </CursorGlowCard>
        </div>

        <div className="mt-20 border-t border-cream/10 pt-10 sm:mt-24">
          <p className="font-sans text-xs uppercase tracking-wider text-cream/50">
            previously
          </p>
          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:gap-12">
            {previousRoles.map((role) => (
              <div key={role.name}>
                <p className="font-sans text-sm text-cream/80">{role.name}</p>
                <p className="font-sans text-xs text-cream/50">
                  {role.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
