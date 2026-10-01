const stars = [0, 1, 2, 3, 4];

export default function Testimonials() {
  return (
    <div>
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-ice/40 bg-ice/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-ice">
        Testimonials coming soon
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {[1, 2, 3].map((n) => (
          <div key={n} className="panel rounded-xl p-6">
            <div className="mb-3 flex gap-1">
              {stars.map((s) => (
                <svg key={s} viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-ice/50 stroke-[1.5]"><path d="M12 2l2.9 6.3L22 9.3l-5 4.9 1.2 7.1L12 17.9 5.8 21.3 7 14.2 2 9.3l7.1-1z" /></svg>
              ))}
            </div>
            <p className="text-white/50 italic">This space is reserved for a real review from a happy CR Detailing customer.</p>
            <p className="mt-4 text-sm font-semibold text-white/40">— Client name, on request</p>
          </div>
        ))}
      </div>
    </div>
  );
}
