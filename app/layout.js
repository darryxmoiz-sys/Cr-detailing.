import './globals.css';
import Link from 'next/link';
import { Rajdhani, Inter } from 'next/font/google';
import SmoothScroll from '@/components/SmoothScroll';
import Preloader from '@/components/Preloader';
import Nav from '@/components/Nav';
import FloatingButtons from '@/components/FloatingButtons';
import { PHONE_DISPLAY, TEL, WA, FB, LOCATION } from '@/lib/data';

const display = Rajdhani({ subsets: ['latin'], weight: ['700'], variable: '--font-display' });
const body = Inter({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-body' });

export const metadata = {
  title: { default: 'CR Detailing | Mobile Valeting, Mallow', template: '%s | CR Detailing Mallow' },
  description: 'Mobile valeting, compound & polishing, gloss enhancement and ceramic coating in Mallow, Co. Cork. We come to you.',
};
const schema = { '@context': 'https://schema.org', '@type': 'AutoRepair', name: 'CR Detailing', telephone: '+353874301057', areaServed: 'Mallow, Co. Cork' };

export default function RootLayout({ children }) {
  return (
    <html lang="en-IE" className={`${display.variable} ${body.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <SmoothScroll /><Preloader /><Nav />
        <main className="overflow-x-clip">{children}</main>
        <footer className="bg-deep px-5 py-12 text-sm text-white/50">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
            <div><p className="h text-lg text-white">CR <span className="text-ice">Detailing</span></p><p className="mt-2">Mobile valeting. Based in {LOCATION}.</p></div>
            <div className="space-y-1"><Link href="/services" className="block hover:text-ice">Services</Link><Link href="/gallery" className="block hover:text-ice">Gallery</Link><Link href="/faq" className="block hover:text-ice">FAQ</Link><Link href="/contact" className="block hover:text-ice">Contact</Link></div>
            <div className="space-y-1"><a href={TEL} className="block hover:text-ice">{PHONE_DISPLAY}</a><a href={WA} className="block hover:text-ice">WhatsApp</a><a href={FB} target="_blank" rel="noreferrer" className="block hover:text-ice">Facebook</a></div>
          </div>
        </footer>
        <FloatingButtons />
      </body>
    </html>
  );
}
