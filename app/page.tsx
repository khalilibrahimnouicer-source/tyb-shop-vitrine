import { ArrowUpRight, Camera, MapPin, MessageCircle, PackageCheck, Sparkles } from 'lucide-react'
const logoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0796-4f8my7pYSpB8QZwqBVrISwT1LlCRVq.jpeg'
const profileUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0795-3X3LOeZCWQuMxHOxNCRnA6muklRv8r.png'

const collections = [
  { label: 'Sélection sport', detail: 'Pièces iconiques & confort', tone: 'from-zinc-900 to-zinc-700' },
  { label: 'Essentials', detail: 'Les basiques qui font la différence', tone: 'from-stone-800 to-stone-500' },
  { label: 'Lifestyle', detail: 'Un style pensé pour tous les jours', tone: 'from-neutral-950 to-neutral-800' },
]

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0b0b0b] text-[#f3f1ed]">
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
        <a href="#top" className="flex items-center gap-3" aria-label="TYB Shop accueil">
          <img src={logoUrl} alt="Logo TYB Shop" className="size-10 rounded-full object-cover ring-1 ring-white/20" />
          <span className="text-sm font-semibold tracking-[0.26em]">TYB SHOP</span>
        </a>
        <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.2em] text-white/60 sm:flex">
          <a href="#selection" className="transition-colors hover:text-white">Sélection</a>
          <a href="#livraison" className="transition-colors hover:text-white">Livraison</a>
          <a href="#contact" className="transition-colors hover:text-white">Contact</a>
        </nav>
        <a href="https://snapchat.com/add/shopidf771" target="_blank" rel="noreferrer" className="inline-flex h-9 items-center justify-center gap-1.5 rounded-full border border-white/20 px-4 text-xs uppercase tracking-[0.12em] text-white transition-colors hover:bg-white hover:text-black">Nous écrire <ArrowUpRight className="size-4" /></a>
      </header>

      <section id="top" className="relative mx-auto grid min-h-[calc(100vh-88px)] w-full max-w-7xl items-center gap-14 px-5 pb-20 pt-10 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-12 lg:pb-24 lg:pt-16">
        <div className="relative z-10 max-w-2xl">
          <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#d4a94c]"><span className="h-px w-10 bg-[#d4a94c]" /> Streetwear & lifestyle</p>
          <h1 className="max-w-xl text-5xl font-semibold leading-[0.94] tracking-[-0.06em] sm:text-7xl lg:text-[6.6rem]">Ton style.<br /><span className="text-white/45">Ta ville.</span><br />TYB Shop.</h1>
          <p className="mt-8 max-w-md text-base leading-7 text-white/60 sm:text-lg">Une sélection de vêtements sport et lifestyle, livrée directement chez toi en Île-de-France.</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#selection" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#f3f1ed] px-7 text-sm font-semibold text-black transition-colors hover:bg-white">Découvrir la sélection <ArrowUpRight className="size-4" /></a>
            <a href="https://snapchat.com/add/shopidf771" target="_blank" rel="noreferrer" className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-7 text-sm text-white transition-colors hover:bg-white hover:text-black"><MessageCircle className="size-4" /> Commander par message</a>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 text-xs uppercase tracking-[0.16em] text-white/45"><span className="flex items-center gap-2"><MapPin className="size-4 text-[#d4a94c]" /> Livraison IDF</span><span className="flex items-center gap-2"><PackageCheck className="size-4 text-[#d4a94c]" /> Commande simple</span></div>
        </div>
        <div className="relative mx-auto w-full max-w-[510px] lg:justify-self-end">
          <div className="absolute -inset-5 rounded-[2rem] bg-white/[0.04] blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.7rem] border border-white/15 bg-[#151515] p-3 shadow-2xl shadow-black">
            <img src={profileUrl} alt="Profil public TYB Shop" className="aspect-[828/1792] w-full rounded-[1.15rem] object-cover object-top opacity-90" />
            <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/20 bg-black/65 p-4 backdrop-blur-md"><div className="flex items-center gap-3"><img src={logoUrl} alt="" className="size-10 rounded-full" /><div><p className="text-sm font-semibold">TYB Shop 👑</p><p className="text-xs text-white/55">@shopidf771 · en ligne</p></div><span className="ml-auto size-2.5 rounded-full bg-emerald-400" /></div></div>
          </div>
        </div>
      </section>

      <section id="selection" className="border-t border-white/10 bg-[#111111] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"><div className="mx-auto max-w-7xl"><div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#d4a94c]">La sélection TYB</p><h2 className="max-w-lg text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Des pièces qui<br /><span className="text-white/45">parlent pour toi.</span></h2></div><p className="max-w-xs text-sm leading-6 text-white/50">Retrouve nos arrivages et disponibilités en nous écrivant directement.</p></div><div className="grid gap-4 md:grid-cols-3">{collections.map((item, index) => <article key={item.label} className={`group relative min-h-72 overflow-hidden rounded-2xl bg-gradient-to-br ${item.tone} p-6 transition-transform hover:-translate-y-1`}><div className="absolute -right-10 -top-10 size-40 rounded-full border border-white/10" /><div className="absolute -bottom-20 -left-12 size-64 rounded-full border border-white/10" /><div className="relative flex h-full flex-col justify-between"><span className="text-xs text-white/40">0{index + 1}</span><div><Sparkles className="mb-8 size-5 text-[#d4a94c]" /><h3 className="text-2xl font-medium tracking-tight">{item.label}</h3><p className="mt-2 text-sm text-white/55">{item.detail}</p></div></div></article>)}</div></div></section>

      <section id="livraison" className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12 lg:py-28"><div><p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#d4a94c]">Simple & local</p><h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">On s’occupe du style.<br /><span className="text-white/45">Toi, profite.</span></h2></div><div className="grid gap-8 border-l border-white/15 pl-6 sm:grid-cols-3 sm:pl-10"><div><span className="text-3xl font-semibold text-[#d4a94c]">01</span><h3 className="mt-5 font-medium">Tu choisis</h3><p className="mt-2 text-sm leading-6 text-white/50">Envoie-nous la pièce que tu recherches.</p></div><div><span className="text-3xl font-semibold text-[#d4a94c]">02</span><h3 className="mt-5 font-medium">On confirme</h3><p className="mt-2 text-sm leading-6 text-white/50">Disponibilité, taille et prix en direct.</p></div><div><span className="text-3xl font-semibold text-[#d4a94c]">03</span><h3 className="mt-5 font-medium">On livre</h3><p className="mt-2 text-sm leading-6 text-white/50">Livraison rapide partout en IDF.</p></div></div></section>

      <footer id="contact" className="border-t border-white/10 px-5 py-10 sm:px-8 lg:px-12"><div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between"><div><div className="flex items-center gap-3"><img src={logoUrl} alt="Logo TYB Shop" className="size-12 rounded-full" /><div><p className="font-semibold tracking-[0.2em]">TYB SHOP</p><p className="mt-1 text-xs text-white/45">Sportwear & lifestyle · Île-de-France</p></div></div></div><div className="flex flex-col gap-3 text-sm text-white/55 sm:items-end"><a className="flex items-center gap-2 hover:text-white" href="https://snapchat.com/add/shopidf771" target="_blank" rel="noreferrer"><MessageCircle className="size-4" /> @shopidf771</a><a className="flex items-center gap-2 hover:text-white" href="#top"><Camera className="size-4" /> Suivre nos arrivages</a></div></div><p className="mx-auto mt-12 max-w-7xl text-[11px] uppercase tracking-[0.18em] text-white/25">© 2026 TYB Shop. Tous droits réservés.</p></footer>
    </main>
  )
}

