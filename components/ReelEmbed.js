export default function ReelEmbed({ url, large = false }) {
  const w = large ? 340 : 267;
  const h = large ? 605 : 476;
  const src = `https://www.facebook.com/plugins/video.php?height=${h}&href=${encodeURIComponent(url)}&show_text=false&width=${w}&t=0`;
  return (
    <div className="mx-auto aspect-[9/16] w-full overflow-hidden rounded-xl border border-white/10 bg-panel shadow-xl shadow-black/40" style={{ maxWidth: w }}>
      <iframe src={src} width={w} height={h} style={{ border: 'none', overflow: 'hidden', width: '100%', height: '100%' }}
        loading="lazy" allow="autoplay; encrypted-media; picture-in-picture; web-share" allowFullScreen title="CR Detailing reel" />
    </div>
  );
}
