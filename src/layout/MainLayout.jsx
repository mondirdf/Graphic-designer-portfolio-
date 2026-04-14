function MainLayout({ children }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-bg text-text antialiased">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-bg" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(255,255,255,0.14),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_85%,rgba(255,255,255,0.10),transparent_42%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_70%)]" />
        <div className="grain-layer absolute inset-0 opacity-30" />
      </div>
      <main className="mx-auto flex w-full max-w-7xl flex-col gap-20 px-6 pb-16 pt-8 md:px-10">
        {children}
      </main>
    </div>
  );
}

export default MainLayout;
