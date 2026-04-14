function MainLayout({ children }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-bg text-text antialiased">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-bg" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_8%,rgba(255,255,255,0.15),transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_90%,rgba(255,255,255,0.12),transparent_42%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_44%,rgba(255,255,255,0.03),transparent_68%)]" />
        <div className="grain-layer absolute inset-0 opacity-25" />
      </div>
      <main className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-5 pb-16 pt-6 sm:px-6 md:gap-20 md:px-10 md:pt-8">
        {children}
      </main>
    </div>
  );
}

export default MainLayout;
