const navItems = [
  { href: "#story", label: "Story" },
  { href: "#results", label: "Results" },
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why me" },
  { href: "#contact", label: "Contact" }
];

const achievements = [
  {
    label: "[ACHIEVEMENT 1]",
    detail: "[Short proof point, result or milestone goes here.]",
    image: "/assets/achievement-all-ireland.webp",
    alt: "Sean Daly at the All-Ireland Student Enterprise Programme event"
  },
  {
    label: "[ACHIEVEMENT 2]",
    detail: "[Short proof point, result or milestone goes here.]",
    image: "/assets/achievement-hurling.webp",
    alt: "Sean Daly playing hurling"
  },
  {
    label: "[ACHIEVEMENT 3]",
    detail: "[Short proof point, result or milestone goes here.]",
    image: "/assets/achievement-patch.webp",
    alt: "Sean Daly speaking at Patch"
  }
];

const services = [
  {
    title: "Meta ads management",
    detail:
      "[SERVICE DESCRIPTION: how ongoing Facebook and Instagram ad management works.]",
    icon: "M6 18V8l6-4 6 4v10M9 10h6M9 14h6"
  },
  {
    title: "Campaign strategy and setup",
    detail:
      "[SERVICE DESCRIPTION: how you structure accounts, campaigns and tracking before spend scales.]",
    icon: "M5 17l5-5 3 3 6-8M5 7h6M5 11h3"
  },
  {
    title: "Creative direction",
    detail:
      "[SERVICE DESCRIPTION: how you brief, review and learn from ad creative.]",
    icon: "M7 7h10v10H7zM10 4v4M14 4v4M10 16v4M14 16v4"
  },
  {
    title: "Optimisation and reporting",
    detail:
      "[SERVICE DESCRIPTION: how you report clearly and improve campaigns month by month.]",
    icon: "M5 18h14M7 15v-4M12 15V6M17 15V9"
  }
];

export default function Home() {
  return (
    <main id="top">
      <Header />
      <Hero />
      <Story />
      <Results />
      <Services />
      <WhyWorkWithMe />
      <Contact />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="site-header sticky top-0 z-50 border-b bg-white/92 backdrop-blur">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-6 lg:px-8"
      >
        <a className="brand-lockup" href="#top" aria-label="Daly Growth Media home">
          <span className="brand-logo" aria-hidden="true" />
          <span className="brand-wordmark">Daly Growth Media</span>
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a key={item.href} className="nav-link" href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
        <a className="button button-small hidden sm:inline-flex" href="#contact">
          Book a call
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero-section section-shell pb-16 pt-16 sm:pt-20 lg:pb-24 lg:pt-28">
      <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]">
        <div className="hero-copy reveal max-w-3xl">
          <p className="eyebrow">Sean Daly | Meta ads specialist</p>
          <h1 className="hero-heading">
            <span>Meta ads that actually sell</span>
            <span className="hero-heading-soft">
              for Irish e-commerce brands.
            </span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl">
            Daly Growth Media runs, optimises and scales Facebook and Instagram
            campaigns with clear thinking, clean reporting and a steady hand on
            spend.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a className="button" href="#contact">
              Book a call
            </a>
            <a className="button button-secondary" href="#services">
              See services
            </a>
          </div>
        </div>

        <aside className="reveal panel-offset" aria-label="Daly Growth Media summary">
          <div className="hero-logo" aria-hidden="true" />
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue">
            One person, accountable work
          </p>
          <p className="mt-4 text-2xl font-semibold leading-tight text-brand-ink">
            You deal with Sean directly from strategy through to reporting.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 border-t border-brand-line pt-6 text-sm text-slate-700">
            <span>Paid social only</span>
            <span>Irish market focus</span>
            <span>E-commerce campaigns</span>
            <span>Plain-English calls</span>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section id="story" className="section-band">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="reveal photo-stack" aria-label="Photo placeholders for Sean Daly">
            <figure>
              <div
                className="photo-slot photo-one"
                role="img"
                aria-label="Portrait photo of Sean Daly"
              />
              <figcaption>[PHOTO 1: portrait of Sean]</figcaption>
            </figure>
            <figure className="photo-offset">
              <div
                className="photo-slot photo-two"
                role="img"
                aria-label="Working photo of Sean Daly"
              />
              <figcaption>[PHOTO 2: working or local photo]</figcaption>
            </figure>
          </div>

          <div className="reveal">
            <p className="eyebrow">About / my story</p>
            <h2 className="section-title">
              Local, direct and focused on the work that moves the account.
            </h2>
            <div className="story-placeholder mt-8">
              <p>[MY STORY HERE]</p>
              <p>
                Replace this block with a short first-person note: where you are
                from in Co. Clare, Ireland, how you got into paid social, why
                you work with Irish e-commerce brands and what you care about
                when managing someone else&apos;s ad spend.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Results() {
  return (
    <section id="results" className="section-shell">
      <div className="reveal max-w-3xl">
        <p className="eyebrow">Achievements / results</p>
        <h2 className="section-title">
          Proof, once you are ready to add the real numbers.
        </h2>
      </div>
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {achievements.map((achievement) => (
          <article className="stat-card reveal" key={achievement.label}>
            <img
              className="achievement-image"
              src={achievement.image}
              alt={achievement.alt}
              loading="lazy"
            />
            <div className="achievement-copy">
              <p className="text-3xl font-semibold text-brand-ink">
                {achievement.label}
              </p>
              <p className="mt-5 leading-7 text-slate-700">
                {achievement.detail}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="section-band">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="reveal">
            <p className="eyebrow">Services</p>
            <h2 className="section-title">
              Paid social support without pretending to do everything.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              The offer stays centred on Meta ads: strategy, build-out,
              creative learning, optimisation and reporting.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((service) => (
              <article className="service-card reveal" key={service.title}>
                <ServiceIcon path={service.icon} />
                <h3 className="mt-6 text-xl font-semibold text-brand-ink">
                  {service.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-700">{service.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceIcon({ path }: { path: string }) {
  return (
    <span className="service-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d={path}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.7"
        />
      </svg>
    </span>
  );
}

function WhyWorkWithMe() {
  return (
    <section id="why" className="section-shell">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="reveal">
          <p className="eyebrow">Why work with me</p>
          <h2 className="section-title">
            A senior pair of hands, not an agency handoff.
          </h2>
        </div>
        <div className="reveal trust-list">
          <div>
            <h3>You deal with me directly</h3>
            <p>
              No account-manager runaround. The person on the call is the
              person inside the ad account.
            </p>
          </div>
          <div>
            <h3>Built for Irish e-commerce</h3>
            <p>
              Campaign decisions are grounded in how Irish brands actually
              sell, fulfil and talk to customers.
            </p>
          </div>
          <div>
            <h3>Clear, practical communication</h3>
            <p>
              You get straight answers on what is working, what is not, and
              what should happen next.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section-band">
      <div className="section-shell pb-20 lg:pb-28">
        <div className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <div className="reveal">
            <p className="eyebrow">Contact</p>
            <h2 className="section-title">Ready to talk through the account?</h2>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              Send a note with where the brand is at, what you sell and what
              you want Meta ads to do next.
            </p>
            <div className="mt-9 space-y-5 text-base text-slate-700">
              <p>
                <span className="contact-label">Email</span>
                <a className="contact-link" href="mailto:[EMAIL HERE]">
                  [EMAIL HERE]
                </a>
              </p>
              <p>
                <span className="contact-label">Location</span>
                Co. Clare, Ireland
              </p>
            </div>
          </div>

          <form className="contact-form reveal" action="#" method="post">
            <div className="grid gap-5 sm:grid-cols-2">
              <label>
                Name
                <input name="name" type="text" autoComplete="name" required />
              </label>
              <label>
                Email
                <input name="email" type="email" autoComplete="email" required />
              </label>
            </div>
            <label>
              Brand website
              <input name="website" type="url" placeholder="https://" />
            </label>
            <label>
              What would you like help with?
              <textarea name="message" rows={5} required />
            </label>
            <button className="button" type="submit">
              Send enquiry
            </button>
            <p className="text-sm leading-6 text-slate-600">
              [FORM ACTION PLACEHOLDER: connect this form to your preferred
              form handler before launch.]
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-brand-line bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <a className="brand-lockup" href="#top" aria-label="Daly Growth Media home">
          <span className="brand-logo" aria-hidden="true" />
          <span className="brand-wordmark">Daly Growth Media</span>
        </a>
        <p className="text-sm text-slate-600">
          Meta ads for Irish e-commerce brands. Built from Ireland.
        </p>
      </div>
    </footer>
  );
}
