import PageHead from '@/components/PageHead';
import Sec, { Faq } from '@/components/Sec';
import CTA from '@/components/CTA';
import { faqs } from '@/lib/data';
export const metadata = { title: 'FAQ', description: 'Answers to common questions about booking a mobile valet with CR Detailing in Mallow.' };

export default function FaqPage() {
  return (
    <>
      <PageHead title="Frequently asked questions" text="Everything you need to know before booking." />
      <Sec><Faq items={faqs} /></Sec>
      <CTA />
    </>
  );
}
