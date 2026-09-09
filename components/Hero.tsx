import { Sparkle } from "./Sparkle";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-midnight px-6 pb-12 text-cream sm:px-10 lg:px-16">
      <Sparkle className="absolute right-[32%] top-[28%] h-8 w-8 text-electric sm:h-10 sm:w-10" />
      <Sparkle
        className="absolute left-[38%] top-[7%] h-3.5 w-3.5 text-electric/45"
        initialRotate={280}
      />
      <Sparkle
        className="absolute left-[62%] top-[11%] h-3.5 w-3.5 text-electric/60"
        initialRotate={75}
      />
      <Sparkle
        className="absolute right-[9%] top-[17%] h-5 w-5 text-electric/70"
        initialRotate={160}
      />
      <Sparkle
        className="absolute left-[79%] top-[39%] h-6 w-6 text-electric/80"
        initialRotate={230}
      />
      <Sparkle
        className="absolute right-[5%] top-[53%] h-4.5 w-4.5 text-electric/50"
        initialRotate={310}
      />
      <Sparkle
        className="absolute right-[23%] top-[63%] h-3.5 w-3.5 text-electric/40"
        initialRotate={20}
      />
      <Sparkle
        className="absolute bottom-[19%] right-[14%] h-4.5 w-4.5 text-electric/55"
        initialRotate={95}
      />
      <Sparkle
        className="absolute left-[10%] top-[10%] h-3.5 w-3.5 text-electric/50"
        initialRotate={120}
      />
      <Sparkle
        className="absolute left-[26%] top-[20%] h-5 w-5 text-electric/65"
        initialRotate={15}
      />
      <Sparkle
        className="absolute left-[14%] top-[68%] h-3.5 w-3.5 text-electric/45"
        initialRotate={250}
      />
      <Sparkle
        className="absolute left-[30%] top-[80%] h-4.5 w-4.5 text-electric/55"
        initialRotate={170}
      />
      <Sparkle
        className="absolute left-[6%] top-[63%] h-8 w-8 text-electric sm:h-10 sm:w-10"
        initialRotate={200}
      />
      <Sparkle
        className="absolute right-[42%] top-[6%] h-8 w-8 text-electric sm:h-10 sm:w-10"
        initialRotate={330}
      />
      <Sparkle
        className="absolute bottom-[10%] right-[35%] h-8 w-8 text-electric sm:h-10 sm:w-10"
        initialRotate={80}
      />
      <Sparkle
        className="absolute right-[3%] top-[30%] h-3.5 w-3.5 text-electric/40"
        initialRotate={45}
      />
      <Sparkle
        className="absolute left-[48%] top-[47%] h-3.5 w-3.5 text-electric/45"
        initialRotate={55}
      />
      <Sparkle
        className="absolute left-[54%] top-[58%] h-4.5 w-4.5 text-electric/55"
        initialRotate={190}
      />
      <Sparkle
        className="absolute left-[58%] top-[42%] h-3.5 w-3.5 text-electric/35"
        initialRotate={300}
      />
      <Sparkle
        className="absolute left-[72%] top-[50%] h-4.5 w-4.5 text-electric/60"
        initialRotate={110}
      />
      <Sparkle
        className="absolute left-[80%] top-[63%] h-3.5 w-3.5 text-electric/40"
        initialRotate={270}
      />
      <Sparkle
        className="absolute left-[68%] top-[35%] h-3.5 w-3.5 text-electric/50"
        initialRotate={15}
      />
      <Sparkle
        className="absolute left-[34%] top-[14%] h-4.5 w-4.5 text-electric/50"
        initialRotate={200}
      />
      <Sparkle
        className="absolute left-[22%] top-[73%] h-3.5 w-3.5 text-electric/45"
        initialRotate={80}
      />

      <div className="flex flex-1 flex-col justify-center gap-6">
        <h1 className="max-w-3xl font-serif text-[3.45rem] leading-[1.05] sm:text-[4.31rem] lg:text-[5.18rem]">
          hi, i&rsquo;m preity.
        </h1>
        <p className="max-w-2xl font-sans text-lg leading-relaxed text-cream/80 sm:text-xl">
          endlessly curious about what we can build when technology makes
          previously impossible ideas possible.
        </p>
      </div>

      <div className="flex justify-center pb-2 sm:justify-start sm:pb-0">
        <span className="font-sans text-xs tracking-wide text-cream/50">
          ↓ scroll to explore
        </span>
      </div>
    </section>
  );
}
