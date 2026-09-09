import { getCarouselPhotos } from "@/lib/photos";
import { PlayCarousel } from "./PlayCarousel";
import { PlayMoment } from "./PlayMoment";
import { Sparkle } from "./Sparkle";

export function Play() {
  const photos = getCarouselPhotos();

  return (
    <section
      id="play"
      className="relative -mt-10 rounded-t-[40px] bg-cream px-6 pb-28 pt-20 text-midnight sm:-mt-14 sm:rounded-t-[56px] sm:px-10 sm:pb-36 sm:pt-28 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-2xl font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
          outside the terminal <span className="text-electric">✦</span>
        </h2>

        <div className="mt-16 sm:mt-20 lg:mt-24">
          <PlayCarousel photos={photos} />

          <p className="mt-4 font-sans text-sm text-midnight/50 sm:mt-5">
            chasing sunsets &amp; the right composition.
          </p>
        </div>

        <div className="mt-10 mx-auto max-w-5xl sm:mt-12 lg:mt-14">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-0">
            <PlayMoment className="sm:border-b sm:border-r sm:border-midnight/10 sm:p-6 lg:p-10">
              <p className="text-xs uppercase tracking-wider text-midnight/50">
                usually reading
              </p>
              <p className="mt-1 font-serif text-xl sm:text-2xl">
                rom-coms or fantasy
              </p>
              <p className="mt-2 text-sm leading-relaxed text-midnight/60">
                <em>Book Lovers</em> · <em>Beach Read</em> ·{" "}
                <em>This Woven Kingdom</em> · <em>Six of Crows</em> ·{" "}
                <em>The Folk of the Air</em>
              </p>
            </PlayMoment>

            <PlayMoment className="sm:border-b sm:border-midnight/10 sm:p-6 lg:p-10">
              <p className="text-xs uppercase tracking-wider text-midnight/50">
                on repeat lately
              </p>
              <p className="mt-1 font-serif text-xl sm:text-2xl">
                Tame Impala · Olivia Rodrigo · Noah Kahan
              </p>
              <p className="mt-1 text-sm text-midnight/60">
                + forever: Ariana · Arijit · Lana
                <Sparkle className="ml-1 inline-block h-3 w-3 text-electric" />
              </p>
            </PlayMoment>

            <PlayMoment className="sm:border-r sm:border-midnight/10 sm:p-6 lg:p-10">
              <p className="font-serif text-xl sm:text-2xl">
                happiest somewhere outside.
              </p>
              <p className="mt-2 text-sm text-midnight/60">
                skiing · SUP · running · swimming in swiss lakes
                <Sparkle className="ml-1 inline-block h-3 w-3 text-electric" />
              </p>
            </PlayMoment>

            <PlayMoment className="sm:p-6 lg:p-10">
              <p className="text-xs uppercase tracking-wider text-midnight/50">
                food
              </p>
              <p className="mt-1 font-serif text-xl sm:text-2xl">
                always on Beli
              </p>
              <p className="mt-1 text-sm text-midnight/40">@preitysingh</p>
            </PlayMoment>
          </div>
        </div>
      </div>
    </section>
  );
}
