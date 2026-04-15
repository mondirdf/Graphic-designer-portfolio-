import { useEffect } from 'react';

const archiveProjects = [
  {
    title: 'AELCI BRANDING',
    subtitle: 'Branding / Identity',
    image:
      'https://images.unsplash.com/photo-1600508774634-4e11d34730e2?auto=format&fit=crop&w=1000&q=80',
    alt: 'AELCI branding mockup on stationery',
  },
  {
    title: 'TUNAY INTERIOR BRANDING',
    subtitle: 'Branding / Identity',
    image:
      'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=1000&q=80',
    alt: 'TUNAY interior branding presentation',
  },
  {
    title: 'AERIS COFFEE BRAND',
    subtitle: 'Branding / Identity',
    image:
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1000&q=80',
    alt: 'AERIS coffee brand packaging mockup',
  },
];

function App() {
  useEffect(() => {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('#home, #work, #about, #contact');

    navItems.forEach((item) => {
      item.addEventListener('click', () => {
        const targetId = item.dataset.section;
        const section = document.getElementById(targetId);

        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }

        navItems.forEach((i) => i.classList.remove('active'));
        item.classList.add('active');
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;

            navItems.forEach((item) => {
              item.classList.remove('active');

              if (item.dataset.section === id) {
                item.classList.add('active');
              }
            });
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0a0a0a] font-body text-[#e5e2e1] selection:bg-white selection:text-black">
      <div className="grain-overlay" />
      <div className="radial-glow left-[-10%] top-[-20%]" />
      <div className="radial-glow bottom-[-20%] right-[-10%]" />

      <header className="fixed top-0 z-50 w-full bg-neutral-950/40 shadow-2xl shadow-black/40 backdrop-blur-3xl">
        <nav className="flex w-full items-center justify-between px-8 py-6">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-white">grid_view</span>
            <span className="font-headline text-xs uppercase tracking-[0.2em] text-white">CURATOR</span>
          </div>
          <div className="hidden items-center gap-8 md:flex">
            <a className="border-b border-white/50 font-headline text-xs uppercase tracking-[0.2em] text-white" href="#home">
              HOME
            </a>
            <a className="font-headline text-xs uppercase tracking-[0.2em] text-neutral-500 transition-colors duration-500 hover:text-white" href="#work">
              WORK
            </a>
            <a className="font-headline text-xs uppercase tracking-[0.2em] text-neutral-500 transition-colors duration-500 hover:text-white" href="#about">
              STUDIO
            </a>
            <a className="font-headline text-xs uppercase tracking-[0.2em] text-neutral-500 transition-colors duration-500 hover:text-white" href="#contact">
              CONTACT
            </a>
          </div>
          <div className="text-lg font-bold tracking-tighter text-white">BRAND DESIGNER</div>
        </nav>
      </header>

      <main className="relative z-10 mx-auto max-w-[1600px] px-8 pb-40 pt-32">
        <section className="mb-32" id="home">
          <div className="flex flex-col items-start gap-8">
            <div className="glass-card inline-flex items-center gap-3 rounded-full px-4 py-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
              <span className="text-[10px] uppercase tracking-widest text-neutral-400">
                Available for freelance projects
              </span>
            </div>
            <h1 className="font-headline text-[clamp(4rem,15vw,12rem)] font-extrabold leading-[0.85] tracking-tighter text-white">
              BRAND
              <br />
              DESIGNER.
            </h1>
            <div className="glass-card mt-12 max-w-xl rounded-2xl p-8">
              <p className="text-lg italic leading-relaxed text-neutral-400">
                "I design brands that communicate clearly, feel premium, and stay memorable."
              </p>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-neutral-400 md:text-base">
              Crafting visual identities, branding systems, and social media designs.
            </p>
          </div>
        </section>

        <section className="grid auto-rows-[300px] grid-cols-1 gap-8 md:grid-cols-12" id="about">
          <div className="glass-card group relative flex flex-col justify-end overflow-hidden rounded-2xl p-8 md:col-span-8 md:row-span-2">
            <img
              alt="AELCI fashion branding mockup"
              className="absolute inset-0 h-full w-full object-cover opacity-60 grayscale transition-transform duration-700 ease-in-out group-hover:scale-105"
              src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&w=1600&q=80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="relative z-10">
              <span className="mb-2 block text-[10px] uppercase tracking-[0.3em] text-white/60">Brand Identity</span>
              <h3 className="font-headline text-4xl font-bold tracking-tight text-white">AELCI BRANDING</h3>
              <p className="mt-3 max-w-xl text-sm text-white/80">Minimal and elegant brand identity for a fashion label.</p>
              <div className="mt-6 flex gap-4">
                <button
                  className="rounded-full bg-white px-6 py-2 text-xs font-bold uppercase tracking-widest text-black transition-transform hover:scale-105"
                  onClick={() => scrollToSection('work')}
                  type="button"
                >
                  View Projects
                </button>
              </div>
            </div>
          </div>

          <div className="glass-card flex flex-col justify-between rounded-2xl border border-white/5 p-8 md:col-span-4 md:row-span-2">
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <span className="material-symbols-outlined text-3xl text-white">all_inclusive</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">Social Media</span>
              </div>
              <h4 className="font-headline text-2xl font-light leading-tight text-white">Clear brand visuals built for consistent digital presence.</h4>
            </div>
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
              <img
                alt="Social media branding templates"
                className="h-full w-full object-cover brightness-75 grayscale"
                src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80"
              />
            </div>
          </div>

          <div className="glass-card group relative overflow-hidden rounded-2xl md:col-span-6 md:row-span-1">
            <img
              alt="TUNAY interior branding mockup"
              className="absolute inset-0 h-full w-full object-cover opacity-40 grayscale transition-transform duration-1000 group-hover:scale-110"
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="font-headline text-2xl font-light uppercase tracking-[0.4em] text-white">TUNAY INTERIOR BRANDING</h3>
            </div>
          </div>

          <div className="glass-card flex flex-col items-center justify-center rounded-2xl p-6 text-center md:col-span-3 md:row-span-1">
            <span className="font-headline text-4xl font-bold text-white">12+</span>
            <span className="mt-2 text-[10px] uppercase tracking-[0.2em] text-neutral-500">Years of Craft</span>
          </div>

          <div className="flex flex-col items-center justify-center rounded-2xl bg-white p-6 text-center md:col-span-3 md:row-span-1">
            <span className="font-headline text-4xl font-bold text-black">A++</span>
            <span className="mt-2 text-[10px] uppercase tracking-[0.2em] text-neutral-700">Design Merit</span>
          </div>
        </section>

        <section className="mt-40" id="work">
          <div className="mb-16 flex items-end justify-between">
            <div>
              <span className="mb-4 block text-[10px] uppercase tracking-[0.5em] text-neutral-500">Archive</span>
              <h2 className="font-headline text-5xl font-bold tracking-tighter text-white">SELECT WORKS</h2>
            </div>
            <button
              className="border-b border-white/20 pb-2 text-[10px] uppercase tracking-widest text-white transition-all hover:border-white"
              onClick={() => scrollToSection('contact')}
              type="button"
            >
              Work With Me
            </button>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {archiveProjects.map((project) => (
              <div className="group cursor-none" key={project.title}>
                <div className="glass-card mb-6 aspect-[4/5] overflow-hidden rounded-[24px] border border-white/5 shadow-2xl shadow-black/60">
                  <img
                    alt={project.alt}
                    className="h-full w-full object-cover opacity-80 grayscale transition-transform duration-500 group-hover:scale-105"
                    src={project.image}
                  />
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-headline text-xl font-bold uppercase tracking-tight text-white">{project.title}</h4>
                    <span className="text-[10px] uppercase tracking-widest text-neutral-500">{project.subtitle}</span>
                  </div>
                  <span className="material-symbols-outlined text-neutral-600 transition-colors group-hover:text-white">north_east</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <nav className="fixed bottom-8 left-1/2 z-50 flex -translate-x-1/2 gap-4 rounded-full border border-white/10 bg-white/5 px-4 py-2 shadow-[0_20px_40px_rgba(0,0,0,0.4)] backdrop-blur-2xl md:hidden">
        <a className="nav-item active scale-95 rounded-full bg-white p-3 text-black transition-transform duration-300 active:duration-75" data-section="home" href="#home">
          <span className="material-symbols-outlined">home</span>
        </a>
        <a className="nav-item p-3 text-neutral-400 transition-transform duration-300 hover:scale-110" data-section="work" href="#work">
          <span className="material-symbols-outlined">work_outline</span>
        </a>
        <a className="nav-item p-3 text-neutral-400 transition-transform duration-300 hover:scale-110" data-section="about" href="#about">
          <span className="material-symbols-outlined">person</span>
        </a>
        <a className="nav-item p-3 text-neutral-400 transition-transform duration-300 hover:scale-110" data-section="contact" href="#contact">
          <span className="material-symbols-outlined">mail</span>
        </a>
      </nav>

      <footer className="w-full border-t border-white/5 bg-neutral-950 px-8 py-20" id="contact">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12">
          <div className="font-headline text-4xl font-bold tracking-tighter text-white">ABOUT THE DESIGNER</div>
          <p className="max-w-3xl text-center text-sm leading-relaxed text-neutral-500 md:text-base">
            Graphic designer focused on branding, visual identity and social media design. Helping brands build strong and
            consistent visual presence.
          </p>
          <a
            className="contact-button rounded-full border border-white/20 px-6 py-2 text-[10px] uppercase tracking-[0.3em] transition-all duration-700"
            href="mailto:hello@branddesigner.studio"
          >
            Contact Me
          </a>
          <div className="flex gap-12">
            <a
              className="text-[10px] uppercase tracking-[0.3em] text-neutral-600 transition-all duration-700 hover:text-white"
              href="https://www.instagram.com/"
              rel="noreferrer"
              target="_blank"
            >
              INSTAGRAM
            </a>
            <a
              className="text-[10px] uppercase tracking-[0.3em] text-neutral-600 transition-all duration-700 hover:text-white"
              href="https://www.behance.net/"
              rel="noreferrer"
              target="_blank"
            >
              BEHANCE
            </a>
            <a
              className="text-[10px] uppercase tracking-[0.3em] text-neutral-600 transition-all duration-700 hover:text-white"
              href="https://dribbble.com/"
              rel="noreferrer"
              target="_blank"
            >
              DRIBBBLE
            </a>
          </div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500">© 2026 BRAND DESIGNER. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>

      <div className="pointer-events-none fixed left-0 top-0 z-[10000] hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 mix-blend-difference lg:block" />
    </div>
  );
}

export default App;
