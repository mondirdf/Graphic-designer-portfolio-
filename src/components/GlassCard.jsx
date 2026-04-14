function GlassCard({ className = '', children }) {
  return (
    <div
      className={`glass-panel relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_24px_55px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.14)] backdrop-blur-xl transition-all duration-500 ${className}`}
    >
      {children}
    </div>
  );
}

export default GlassCard;
