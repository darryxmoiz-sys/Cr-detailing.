import Link from 'next/link';
import Reveal from '@/components/Reveal';
import ReelEmbed from '@/components/ReelEmbed';
import Sec, { Card, Faq } from '@/components/Sec';
import WhyUs from '@/components/WhyUs';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import { PHONE_DISPLAY, TEL, WA, services, whyUs, faqs, featuredReel } from '@/lib/data';

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy md:flex md:min-h-[640px] md:items-center md:px-5 md:py-28">
        <picture className="hero-img relative block h-[250px] w-full pt-0 md:absolute md:inset-0 md:-z-10 md:h-auto">
          <source media="(min-width: 768px)" srcSet="/hero.jpg" />
          <img src="/hero-mobile.jpg" alt="" className="h-full w-full object-cover object-center md:object-[center_55%]" />
        </picture>
        <div className="hero-shade absolute inset-0 -z-10 hidden md:block" />
        <div className="relative mx-auto w-full max-w-6xl px-5 pb-14 pt-2 md:p-0">
          <div className="max-w-xl">
            <Reveal delay={0.1}><p className="mb-3 font-semibold text-ice">Mallow, Co. Cork &middot; Mobile Valeting</p></Reveal>
            <Reveal delay={0.25}><h1 className="h text-4xl sm:text-5xl md:text-6xl">Your car, <span className="text-ice">showroom shine.</span></h1></Reveal>
            <Reveal delay={0.4}><p className="mt-5 max-w-md text-lg text-white/80">Mini valets, compound &amp; polishing, gloss enhancement and ceramic coating. We come to you.</p></Reveal>
            <Reveal delay={0.55} className="mt-8 flex flex-wrap gap-3">
              <a href={TEL} className="rounded-sm bg-ice px-7 py-4 font-semibold text-navy transition hover:bg-white">Call {PHONE_DISPLAY}</a>
              <a href={WA} className="rounded-sm border border-white/30 px-7 py-4 transition hover:border-ice hover:text-ice">WhatsApp us</a>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-ice text-navy">
        <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-5 py-5 text-center text-sm font-semibold md:grid-cols-4 md:text-base">
          {['Mobile, we come to you', 'Cars, vans & SUVs', 'Ceramic coating available', 'Mallow based'].map((t) => <li key={t}>{t}</li>)}
        </ul>
      </section>

      <Sec title="What we offer" intro="From a mini valet to full ceramic protection.">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(([t, d]) => <Card key={t}><h3 className="h text-lg">{t}</h3><p className="mt-2 text-sm text-white/70">{d}</p></Card>)}
        </div>
        <Link href="/services" className="mt-8 inline-block font-semibold text-ice hover:underline">See all services</Link>
      </Sec>

      <Sec tone="light" title="Why choose CR Detailing">
        <WhyUs items={whyUs} keys={['home', 'shield', 'star', 'calendar']} light />
      </Sec>

      <Sec title="Watch us in action" intro="A recent valet, straight from our Facebook page.">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <ReelEmbed url={featuredReel} large />
          <div>
            <p className="text-white/70">This is the kind of finish every car gets, whether it's a quick mini valet or full compound, polish and ceramic protection.</p>
            <Link href="/gallery" className="mt-5 inline-block rounded-sm bg-ice px-6 py-3 font-semibold text-navy transition hover:bg-white">Watch more reels</Link>
          </div>
        </div>
      </Sec>

      <Sec title="What customers say">
        <Testimonials />
      </Sec>

      <Sec tone="light" title="Common questions">
        <Faq items={faqs.slice(0, 4)} light />
      </Sec>
      <CTA />
    </>
  );
}
