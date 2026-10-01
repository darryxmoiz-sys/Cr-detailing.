'use client';
import { useState } from 'react';
import { WA } from '@/lib/data';

export default function ContactForm({ light = false }) {
  const [f, setF] = useState({ name: '', vehicle: '', message: '' });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const send = (e) => {
    e.preventDefault();
    const text = `Hi CR Detailing, my name is ${f.name || '—'}.\nVehicle: ${f.vehicle || '—'}\n\n${f.message || ''}`;
    window.open(`${WA}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const wrap = light ? 'bg-white shadow-md' : 'panel';
  const label = light ? 'text-navy/60' : 'text-white/60';
  const input = light
    ? 'border-navy/15 bg-white text-navy focus:border-ice'
    : 'border-white/15 bg-white/5 text-white focus:border-ice';
  const hint = light ? 'text-navy/40' : 'text-white/40';

  return (
    <form onSubmit={send} className={`${wrap} grid max-w-xl gap-4 rounded-xl p-6`}>
      <div>
        <label htmlFor="name" className={`mb-1 block text-sm ${label}`}>Your name</label>
        <input id="name" required value={f.name} onChange={set('name')} className={`w-full rounded-sm border px-4 py-3 outline-none ${input}`} placeholder="Jane Doe" />
      </div>
      <div>
        <label htmlFor="vehicle" className={`mb-1 block text-sm ${label}`}>Vehicle</label>
        <input id="vehicle" value={f.vehicle} onChange={set('vehicle')} className={`w-full rounded-sm border px-4 py-3 outline-none ${input}`} placeholder="e.g. BMW 3 Series" />
      </div>
      <div>
        <label htmlFor="message" className={`mb-1 block text-sm ${label}`}>What would you like done?</label>
        <textarea id="message" required rows={4} value={f.message} onChange={set('message')} className={`w-full rounded-sm border px-4 py-3 outline-none ${input}`} placeholder="Mini valet, ceramic coating..." />
      </div>
      <button type="submit" className="rounded-sm bg-ice px-6 py-3 font-semibold text-navy transition hover:bg-white">Send via WhatsApp</button>
      <p className={`text-xs ${hint}`}>This opens WhatsApp with your message ready to send, so nothing is sent without you confirming.</p>
    </form>
  );
}
