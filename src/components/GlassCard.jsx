function GlassCard({ className = '', children }) {
  return (
    <div
      className={`glass-panel relative overflow-hidden rounded-3xl border border-border bg-glass shadow-glass backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}

export default GlassCard;
