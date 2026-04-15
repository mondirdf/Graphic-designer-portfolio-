const archiveProjects = [
  {
    title: 'KINETIC FORM',
    subtitle: 'Interaction Design',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA2lmDJpoziFaWenrtzRo_vafA97KbKX_fKKZciXTl4Fk7QzgX0xKzcZjYWhQ7mC3Dw9Wa0sJfxnhsvSA_VRNYC6nlj9tldX9WZswlJk_WMwiwN4g2UrwsWPxfGwTIr4URPgRu0XcdDcZo89YRv0C3QaXvWBiIA957EJDWq51cwC-qVIMSOzjNJmI4Z5IwGpSPQKbArSNbio-9DxuT-RAk8iIRDe1H0qIj6NPsTuf7nWo7FHM50Il862mLqSDaEmScI0pAY8luHeHU',
    alt: 'Close up of shadow play on a white textured wall',
  },
  {
    title: 'OSCILLATION',
    subtitle: 'Brand Identity',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAdQVDSfmNt3wyvrqc5OeKUvaeMI9ft-p3G-cTbOI978fqufKGwBH7Zj_V_5_BUPmIPEgkLHdIlz27GenyMaDx97mEi13S42KJxnhmyq6Xa3nNr8aaEbOWr6agWkyLNnXcu5vTIhoRkzLa7RJ2GkzkFFSDKwCNYP1TydYYtLExi8fwCAFIka2HkULKHTR4glWNxbuomTh37kvzkfJCBO5MQzeiTJJ-je56yVvJR93KTyVNK-pImFB-KitvKRMT6VzEl1QE2vzEtEZw',
    alt: 'Monochrome landscape of a mountain peak in mist',
  },
  {
    title: 'NEURAL FLOW',
    subtitle: 'Product Design',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC5dwWICi2xbUZICfWLfDDYLIJm8WtPJy0LTAt5-ZcR6Q1u-mcxSzAO46iUCGEMIzeudjywfFsV3sAlGis6c4JbkIn-ilDHjGj4ClHqWhJvp_vxSqKIOAZo7RIIcR77aOfg_ctvRYLD8N_TH102qTuKk9MZB_yXYDGS7vHtreQa8AOzHuWZgndA4QBPuR4FHxfiTiGlcBtUjdmPbplJ8wyB9LLlCDVKW_1zfg0kbrRC2q5H23ltOSHAwRI4DHIm1OUEZoe8Ue9_0Gk',
    alt: 'Digital smoky gray gradient art',
  },
];

function App() {
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
            <a className="border-b border-white/50 font-headline text-xs uppercase tracking-[0.2em] text-white" href="#">
              HOME
            </a>
            <a className="font-headline text-xs uppercase tracking-[0.2em] text-neutral-500 transition-colors duration-500 hover:text-white" href="#">
              WORK
            </a>
            <a className="font-headline text-xs uppercase tracking-[0.2em] text-neutral-500 transition-colors duration-500 hover:text-white" href="#">
              STUDIO
            </a>
            <a className="font-headline text-xs uppercase tracking-[0.2em] text-neutral-500 transition-colors duration-500 hover:text-white" href="#">
              CONTACT
            </a>
          </div>
          <div className="text-lg font-bold tracking-tighter text-white">THE MONOLITH</div>
        </nav>
      </header>

      <main className="relative z-10 mx-auto max-w-[1600px] px-8 pb-40 pt-32">
        <section className="mb-32">
          <div className="flex flex-col items-start gap-8">
            <div className="glass-card inline-flex items-center gap-3 rounded-full px-4 py-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
              <span className="text-[10px] uppercase tracking-widest text-neutral-400">
                Available for select projects 2024
              </span>
            </div>
            <h1 className="font-headline text-[clamp(4rem,15vw,12rem)] font-extrabold leading-[0.85] tracking-tighter text-white">
              DIGITAL
              <br />
              ARCHITECT.
            </h1>
            <div className="glass-card mt-12 max-w-xl rounded-2xl p-8">
              <p className="text-lg italic leading-relaxed text-neutral-400">
                "Synthesizing high-end editorial aesthetics with monolithic digital structures. We build experiences that transcend the transient."
              </p>
            </div>
          </div>
        </section>

        <section className="grid auto-rows-[300px] grid-cols-1 gap-8 md:grid-cols-12">
          <div className="glass-card group relative flex flex-col justify-end overflow-hidden rounded-2xl p-8 md:col-span-8 md:row-span-2">
            <img
              alt="Abstract architecture"
              className="absolute inset-0 h-full w-full object-cover opacity-60 grayscale transition-transform duration-700 ease-in-out group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKewZYB2rNRhRb-mFYXShghBrWlCc3_GT7BmP8nGFFXAoR5P1cZk4abl38kPTyaAqJqdTgpQqhtC_FsmaxQzhPCf1q678eV7ljVOUfpq-yzoIQDlwzIXvbYxkqikfqrqZ8aPX3R-kBZQG2Ly0u_JWOF4xZF18qeZr8KcjJrxvtP-QJb89TRHE8t3VefXBHm9m4DBfuf28tGoSeXNjnRO_EtMQG8Ot3g86Po8PtIAssk1tfLuh-H6-0-HEYBj8u6raZD1Iq9BQfJsE"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="relative z-10">
              <span className="mb-2 block text-[10px] uppercase tracking-[0.3em] text-white/60">EDITORIAL / WEB</span>
              <h3 className="font-headline text-4xl font-bold tracking-tight text-white">ETHEREAL MONOLITH</h3>
              <div className="mt-6 flex gap-4">
                <button className="rounded-full bg-white px-6 py-2 text-xs font-bold uppercase tracking-widest text-black transition-transform hover:scale-105">
                  View Case
                </button>
              </div>
            </div>
          </div>

          <div className="glass-card flex flex-col justify-between rounded-2xl border border-white/5 p-8 md:col-span-4 md:row-span-2">
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <span className="material-symbols-outlined text-3xl text-white">all_inclusive</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">Identity</span>
              </div>
              <h4 className="font-headline text-2xl font-light leading-tight text-white">Visualizing silence in the digital noise.</h4>
            </div>
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
              <img
                alt="Glass abstract"
                className="h-full w-full object-cover brightness-75 grayscale"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVgI5FjZ-1sAHZJl3sPZzLsPL55RuUK8jLLK_u_Y7j9o_vFjq8LNZK0lB6EkokiC54cOy5MF3VokVAOnSXdBjGWH0gi_OBauZRWtZYagzohQT-74-SxW1CC7lWPLiNUZbYcCg2RQ_Cy6cMYRN1hweEP8NbjiQz7l-_3ScN_6Q-dD7qViFIpF0Dmhsuq2MrZpAyNGVqWmRcMlnIZi6BaQxQhKdM3wTnZLg7egzFQtfuoVvLPWt9gxiwokxTozLk8Aqr38hsEWvAiZs"
              />
            </div>
          </div>

          <div className="glass-card group relative overflow-hidden rounded-2xl md:col-span-6 md:row-span-1">
            <img
              alt="Interior"
              className="absolute inset-0 h-full w-full object-cover opacity-40 grayscale transition-transform duration-1000 group-hover:scale-110"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcRFYYsGmjfHTYbxvkztmX1OGwmJzWTn0KoRdi8reSki6GFkOzBMN5NxQ2fuvXAvuik-jc1LpgsiFcy0VkbzQDnI8J-6p6IN5yi9JF2aS4c3yy-rGMQ_VRrK9dj5Agri1hBtpxuZwmc6fE_-0eKFnqlvZ_H4UdyHg8sgmvQykZx1tVq4VQC-QQ6hQmbZRSNs1dippdP_mcSPPIllFTF__TV5FzNv5blFqlqyf229Lc4XQDDSuQQ5mwsm3zSuYaerVa2ys9VxWdnvU"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="font-headline text-2xl font-light uppercase tracking-[0.4em] text-white">The Studio</h3>
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

        <section className="mt-40">
          <div className="mb-16 flex items-end justify-between">
            <div>
              <span className="mb-4 block text-[10px] uppercase tracking-[0.5em] text-neutral-500">Archive</span>
              <h2 className="font-headline text-5xl font-bold tracking-tighter text-white">SELECT WORKS</h2>
            </div>
            <button className="border-b border-white/20 pb-2 text-[10px] uppercase tracking-widest text-white transition-all hover:border-white">
              Explore all / 042
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
        <a className="scale-95 rounded-full bg-white p-3 text-black transition-transform duration-300 active:duration-75" href="#">
          <span className="material-symbols-outlined">home</span>
        </a>
        <a className="p-3 text-neutral-400 transition-transform duration-300 hover:scale-110" href="#">
          <span className="material-symbols-outlined">work_outline</span>
        </a>
        <a className="p-3 text-neutral-400 transition-transform duration-300 hover:scale-110" href="#">
          <span className="material-symbols-outlined">person</span>
        </a>
        <a className="p-3 text-neutral-400 transition-transform duration-300 hover:scale-110" href="#">
          <span className="material-symbols-outlined">mail</span>
        </a>
      </nav>

      <footer className="w-full border-t border-white/5 bg-neutral-950 px-8 py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12">
          <div className="font-headline text-4xl font-bold tracking-tighter text-white">THE MONOLITHIC ETHER.</div>
          <div className="flex gap-12">
            <a className="text-[10px] uppercase tracking-[0.3em] text-neutral-600 transition-all duration-700 hover:text-white" href="#">
              INSTAGRAM
            </a>
            <a className="text-[10px] uppercase tracking-[0.3em] text-neutral-600 transition-all duration-700 hover:text-white" href="#">
              BEHANCE
            </a>
            <a className="text-[10px] uppercase tracking-[0.3em] text-neutral-600 transition-all duration-700 hover:text-white" href="#">
              DRIBBBLE
            </a>
          </div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500">© 2024 THE MONOLITHIC ETHER. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>

      <div className="pointer-events-none fixed left-0 top-0 z-[10000] hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 mix-blend-difference lg:block" />
    </div>
  );
}

export default App;
