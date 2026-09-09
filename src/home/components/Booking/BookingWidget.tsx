export function BookingWidget({ onBook }: { onBook: () => void }) {
  return <section className="relative mx-auto max-w-[1200px] px-3 lg:px-12" data-home-reveal>
    <form onSubmit={(event) => { event.preventDefault(); onBook(); }} className="glass-panel grid grid-cols-2 gap-3 p-3 shadow-[var(--shadow-cinema)] lg:grid-cols-[1fr_1fr_0.8fr_0.8fr_auto] lg:items-end lg:gap-4 lg:p-4">
      {["Check-in", "Check-out"].map((label) => <label key={label} className="block"><span className="eyebrow">{label}</span><input required type="date" className="mt-1 w-full border-b border-input bg-transparent pb-1 text-sm text-cream outline-none focus:border-gold" /></label>)}
      <label><span className="eyebrow">Guests</span><select className="mt-1 w-full border-b border-input bg-transparent pb-1 text-sm text-cream outline-none"><option>1</option><option>2</option><option>3</option><option>4+</option></select></label>
      <label><span className="eyebrow">Rooms</span><select className="mt-1 w-full border-b border-input bg-transparent pb-1 text-sm text-cream outline-none"><option>1</option><option>2</option><option>3</option><option>4+</option></select></label>
      <button className="col-span-2 border border-gold bg-gold px-5 py-2 text-[0.6rem] tracking-[0.35em] text-primary-foreground uppercase transition-colors hover:bg-transparent hover:text-gold lg:col-span-1">Book now</button>
    </form>
  </section>;
}