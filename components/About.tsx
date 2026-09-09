import { AboutPhoto } from "./AboutPhoto";
import { Sparkle } from "./Sparkle";

const FRAGMENTS = [
  { label: "currently", value: "founding ai engineer @ pitcrewlabs" },
  { label: "studying", value: "computer science @ ucsd" },
  { label: "probably thinking about", value: "swimming in lakes in the swiss alps" },
];

// Explicit grid placement (sm+) so every dt lands in row 1 and every dd in
// row 2 — the row auto-sizes to the tallest label, keeping all three values
// aligned even when "probably thinking about" wraps and the others don't.
const COL_START = ["sm:col-start-1", "sm:col-start-2", "sm:col-start-3"];

export function About() {
  return (
    <section
      id="about"
      className="relative -mt-10 rounded-t-[40px] bg-cream px-6 pb-24 pt-20 text-midnight sm:-mt-14 sm:rounded-t-[56px] sm:px-10 sm:pb-32 sm:pt-28 lg:px-16"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
        <div className="flex flex-col gap-10 sm:gap-14">
          <h2 className="max-w-xl font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
            a little about me.
          </h2>

          <p className="max-w-xl font-sans text-base leading-relaxed text-midnight/80">
            I&rsquo;m drawn to building things that solve real problems, and
            to understanding everything around the code, from figuring out
            what&rsquo;s worth building to seeing how people actually use it.
            I&rsquo;m always looking for a better way to do things, usually
            learning something new in the process.
          </p>

          <dl className="grid gap-x-6 sm:grid-cols-3">
            {FRAGMENTS.map((fragment, index) => (
              <div key={fragment.label} className="contents">
                <dt
                  className={`font-sans text-xs uppercase tracking-wider text-midnight/50 sm:mt-0 sm:row-start-1 ${
                    index === 0 ? "" : "mt-6"
                  } ${COL_START[index]}`}
                >
                  {fragment.label}
                </dt>
                <dd
                  className={`mt-1 font-sans text-base leading-snug text-midnight sm:text-lg sm:row-start-2 ${COL_START[index]}`}
                >
                  {fragment.value}
                  {fragment.label === "probably thinking about" && (
                    <Sparkle className="ml-1 inline-block h-4 w-4 text-electric" />
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <AboutPhoto />
      </div>
    </section>
  );
}
