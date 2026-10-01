import PageHead from '@/components/PageHead';
import Sec from '@/components/Sec';
import ReelEmbed from '@/components/ReelEmbed';
import CTA from '@/components/CTA';
import { reels, featuredReel, bmwReel } from '@/lib/data';
export const metadata = { title: 'Gallery', description: 'Watch CR Detailing mobile valeting jobs from Mallow, Co. Cork.' };

export default function GalleryPage() {
  const rest = reels.filter((u) => u !== featuredReel && u !== bmwReel);
  return (
    <>
      <PageHead title="See the shine for yourself" text="Real valets, straight from our Facebook page." />
      <Sec>
        <div className="mb-10 grid gap-6 sm:grid-cols-2">
          <ReelEmbed url={featuredReel} large />
          <ReelEmbed url={bmwReel} large />
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {rest.map((url) => <ReelEmbed key={url} url={url} />)}
        </div>
      </Sec>
      <CTA />
    </>
  );
}
