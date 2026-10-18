export function Contact() {
  return (
    <section
      id="contact"
      className="relative -mt-10 rounded-t-[40px] bg-midnight px-6 pb-20 pt-16 text-cream sm:-mt-14 sm:rounded-t-[56px] sm:px-10 sm:pb-24 sm:pt-24 lg:px-16"
    >
      <div className="max-w-6xl">
        <h2 className="font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
          say hi.
        </h2>

        <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4 sm:mt-12">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="font-sans text-base text-cream/70 transition-colors hover:text-cream sm:text-lg"
          >
            resume ↗
          </a>
          <a
            href="mailto:preitysingh023@gmail.com"
            className="font-sans text-base text-cream/70 transition-colors hover:text-cream sm:text-lg"
          >
            email ↗
          </a>
          <a
            href="https://github.com/preity-singh"
            target="_blank"
            rel="noreferrer"
            className="font-sans text-base text-cream/70 transition-colors hover:text-cream sm:text-lg"
          >
            github ↗
          </a>
          <a
            href="https://www.linkedin.com/in/preity-singh"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-sans text-base text-cream/70 transition-colors hover:text-cream sm:text-lg"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-4 w-4 fill-current"
            >
              <rect
                x="1"
                y="1"
                width="22"
                height="22"
                rx="4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle cx="7" cy="7.8" r="1.4" />
              <rect x="5.8" y="10.5" width="2.4" height="8" />
              <path d="M11 10.5h2.3v1.2c.5-.8 1.4-1.4 2.7-1.4 2 0 3 1.3 3 3.8v4.9h-2.4v-4.4c0-1.2-.4-2-1.5-2-.8 0-1.3.6-1.5 1.1-.1.2-.1.5-.1.8v4.5H11z" />
            </svg>
            linkedin ↗
          </a>
        </div>
      </div>
    </section>
  );
}
