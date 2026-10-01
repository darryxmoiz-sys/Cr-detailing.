import PageHead from '@/components/PageHead';
import Sec, { Card } from '@/components/Sec';
import CTA from '@/components/CTA';
import { LOCATION } from '@/lib/data';
export const metadata = { title: 'About', description: 'CR Detailing is a mobile valeting service run by Collin, based in Mallow, Co. Cork.' };

const values = [['Pride in the work', 'Every job is carried out with real care and attention.'], ['100% standard', 'The aim on every vehicle is a 100% standard of work.'], ['Mobile convenience', 'The service comes to you, wherever your car is parked.']];

export default function About() {
  return (
    <>
      <PageHead title="About CR Detailing" text="A mobile valeting service built on pride in the work." />
      <Sec>
        <div className="max-w-2xl space-y-4 text-lg text-white/75">
          <h2 className="h text-2xl text-white md:text-3xl">Hi, I'm Collin</h2>
          <p>I'm the owner of CR Detailing, a mobile valeting service based in {LOCATION}. I take real pride in what I do, and I make sure my standard is 100% on every car.</p>
          <p>If you're interested in booking a date, message the page, call, or WhatsApp, and I'll get back to you.</p>
        </div>
      </Sec>
      <Sec tone="light" title="What drives the work">
        <div className="grid gap-5 md:grid-cols-3">{values.map(([t, d]) => <Card key={t} light><h3 className="h text-lg text-navy">{t}</h3><p className="mt-2 text-sm text-navy/70">{d}</p></Card>)}</div>
      </Sec>
      <CTA />
    </>
  );
}
