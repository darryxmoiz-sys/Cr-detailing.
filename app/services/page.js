import PageHead from '@/components/PageHead';
import Sec, { Card } from '@/components/Sec';
import WhyUs from '@/components/WhyUs';
import CTA from '@/components/CTA';
import { services, whyUs } from '@/lib/data';
export const metadata = { title: 'Services', description: 'Mini valets, compound & polishing, gloss enhancement, ceramic coating and water repellent windscreen treatment in Mallow.' };

export default function Services() {
  return (
    <>
      <PageHead title="Our services" text="Restore the shine, remove imperfections, protect your investment." />
      <Sec>
        {services.map(([t, d]) => (
          <div key={t} className="group grid gap-2 border-t border-white/15 py-6 md:grid-cols-2 md:px-4">
            <h2 className="h text-xl transition group-hover:translate-x-2 group-hover:text-ice md:text-2xl">{t}</h2>
            <p className="text-white/70">{d}</p>
          </div>
        ))}
      </Sec>
      <Sec tone="light" title="Why choose CR Detailing">
        <WhyUs items={whyUs} keys={['home', 'shield', 'star', 'calendar']} light />
      </Sec>
      <CTA />
    </>
  );
}
