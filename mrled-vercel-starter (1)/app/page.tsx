'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Sparkles, Lightbulb, Wrench, ShieldCheck, Phone, Mail, ArrowRight, Building2, Cpu, MonitorUp, Hammer, CircleDollarSign, Truck, Clock3, Instagram, Facebook, Music2 as TikTok } from 'lucide-react'

function Stat({ value, label }: { value: string, label: string }) {
  return (
    <div className="text-center">
      <div className="text-4xl font-extrabold text-white sm:text-5xl">{value}</div>
      <div className="mt-1 text-sm text-white/60">{label}</div>
    </div>
  )
}

function Section({ id, title, subtitle, children }: any) {
  return (
    <section id={id} className="relative w-full py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(0,96,255,0.15),transparent_60%),radial-gradient(ellipse_at_bottom_right,rgba(0,255,204,0.12),transparent_65%)]" />
      <div className="relative mx-auto max-w-7xl px-4">
        {title && (
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-10 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{title}</h2>
            {subtitle && <p className="mt-3 text-balance text-sm text-white/70 sm:text-base">{subtitle}</p>}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  )
}

function Pill({ children }: { children: React.ReactNode }) {
  return <span className="rounded-full bg-white/10 px-2 py-1 text-white/80">{children}</span>
}

export default function Page() {
  return (
    <div className="min-h-screen w-full bg-[#0B0E1A] text-white">
      <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#0B0E1A]/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-sky-500 to-blue-700 shadow-md shadow-sky-500/20">
              <span className="text-lg font-black leading-none">ML</span>
            </div>
            <div>
              <div className="text-base font-extrabold tracking-wide">MR LED EC</div>
              <div className="-mt-1 text-xs text-white/60">Pantallas LED de gran formato</div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 md:flex">
            <a href="#servicios" className="text-sm text-white/80 hover:text-white">Servicios</a>
            <a href="#proyectos" className="text-sm text-white/80 hover:text-white">Proyectos</a>
            <a href="#tecnica" className="text-sm text-white/80 hover:text-white">Técnica</a>
            <a href="#contacto" className="text-sm text-white/80 hover:text-white">Contacto</a>
          </nav>

          <div className="flex items-center gap-2">
            <a href="#contacto" className="rounded-2xl bg-sky-500 px-4 py-2 text-sm font-bold shadow-sky-500/30 hover:bg-sky-400">Cotiza ahora</a>
          </div>
        </div>
      </header>

      <section className="relative isolate overflow-hidden">
        <div className="absolute -inset-x-20 -top-40 h-[400px] rotate-6 bg-gradient-to-r from-sky-600/30 via-indigo-600/20 to-cyan-500/30 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="mb-4 inline-block rounded-full bg-sky-600/20 px-3 py-1 text-sky-300">Indoor • Outdoor • Rental • Fijo</span>
            <h1 className="text-balance text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Pantallas LED <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">de gran formato</span>
            </h1>
            <p className="mt-4 max-w-prose text-white/70">
              Diseñamos, instalamos y damos mantenimiento a pantallas LED para eventos, retail y publicidad.
              Alto brillo, bajo consumo y soporte experto.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#contacto" className="rounded-2xl bg-sky-500 px-6 py-3 text-base font-bold hover:bg-sky-400 flex items-center gap-2">
                <Sparkles className="h-5 w-5" /> Cotiza tu pantalla
              </a>
              <a href="#proyectos" className="rounded-2xl border border-white/20 bg-white/5 px-6 py-3 text-base font-bold text-white hover:bg-white/10 flex items-center gap-2">
                <MonitorUp className="h-5 w-5" /> Ver proyectos
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-6">
              <Stat value={"+150"} label="Eventos realizados" />
              <Stat value={"96%"} label="Satisfacción clientes" />
              <Stat value={"24/7"} label="Soporte técnico" />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-tr from-black via-indigo-950 to-slate-900 p-2 shadow-2xl">
              <div className="relative h-full w-full rounded-2xl bg-[conic-gradient(at_50%_50%,#00e5ff_0deg,#007bff_90deg,#8b5cf6_180deg,#00e5ff_360deg)] opacity-80" />
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
            </div>
            <div className="absolute -bottom-6 left-1/2 w-[85%] -translate-x-1/2 rounded-2xl bg-white/5 p-4 backdrop-blur">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-sm text-white/80"><ShieldCheck className="h-4 w-4" />Garantía y soporte local</div>
                <div className="flex items-center gap-2 text-sm text-white/80"><Clock3 className="h-4 w-4" />Entrega rápida</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Section id="servicios" title="Servicios" subtitle="Soluciones LED a la medida: alquiler, venta e instalación profesional.">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: <Building2 className="h-6 w-6" />, title: "Alquiler para eventos", desc: "Tarimas, conciertos, ferias y corporativos con montaje rápido." },
            { icon: <Hammer className="h-6 w-6" />, title: "Instalación fija", desc: "Centros comerciales, fachadas, retail y señalética digital." },
            { icon: <Cpu className="h-6 w-6" />, title: "Control & contenido", desc: "Procesadores, calibración, y gestión de playlists y anuncios." },
            { icon: <Wrench className="h-6 w-6" />, title: "Soporte y mantenimiento", desc: "Prevención, repuestos y asistencia 24/7." },
            { icon: <CircleDollarSign className="h-6 w-6" />, title: "Financiamiento", desc: "Opciones flexibles para proyectos de cualquier tamaño." },
            { icon: <Truck className="h-6 w-6" />, title: "Logística", desc: "Transporte y montaje certificados para máxima seguridad." },
          ].map((s, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-sky-500/10">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/20 text-sky-300">{s.icon}</div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm text-white/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="proyectos" title="Proyectos" subtitle="Algunas muestras. Reemplaza las imágenes con tus instalaciones reales.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1,2,3,4,5,6].map((n) => (
            <div key={n} className="group relative overflow-hidden rounded-2xl border border-white/10">
              <div className={`aspect-video w-full bg-cover bg-center opacity-90 transition group-hover:scale-105`} style={{ backgroundImage: `url(https://picsum.photos/800/450?random=${n})` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-3 left-3 flex items-center gap-2 text-sm">
                <Pill>Evento #{n}</Pill>
                <Pill>P3.9 • 3x5m</Pill>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="tecnica" title="Especificaciones técnicas" subtitle="Tecnología con brillo alto, bajo consumo y excelente pixel pitch.">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5">
            <div className="border-b border-white/10 p-5">
              <h3 className="flex items-center gap-2 text-lg font-semibold"><Lightbulb className="h-5 w-5 text-yellow-300" /> Brillo y color</h3>
            </div>
            <div className="space-y-2 p-5 text-sm text-white/70">
              <SpecItem label="Brillo" value=">= 5,000 nits (outdoor)" />
              <SpecItem label="Gama" value="≥ 16 bit, HDR opcional" />
              <SpecItem label="Frecuencia" value=">= 3,840 Hz" />
              <SpecItem label="Ángulo de visión" value=">= 160°" />
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5">
            <div className="border-b border-white/10 p-5">
              <h3 className="flex items-center gap-2 text-lg font-semibold"><MonitorUp className="h-5 w-5 text-sky-300" /> Módulos & tamaños</h3>
            </div>
            <div className="space-y-2 p-5 text-sm text-white/70">
              <SpecItem label="Pixel pitch" value="P2.6 • P3.9 • P4.8 • P6.9" />
              <SpecItem label="Formato" value="Curvo / apilado / colgado" />
              <SpecItem label="Uso" value="Interior y exterior" />
              <SpecItem label="Consumo" value="Optimizado, bajo consumo" />
            </div>
          </div>
        </div>
        <p className="mt-4 text-center text-xs text-white/50">*Valores de referencia. Ajustables según modelo y proyecto.</p>
      </Section>

      <Section id="contacto" title="Cotiza tu pantalla" subtitle="Cuéntanos tu idea y te respondemos pronto.">
        <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="mb-3 text-lg font-semibold">Contáctanos</h3>
            <div className="space-y-3 text-sm">
              <Field label="Nombre" placeholder="Tu nombre" />
              <Field label="Email" type="email" placeholder="tucorreo@ejemplo.com" />
              <Field label="Teléfono" type="tel" placeholder="+593…" />
              <Field label="Proyecto" textarea placeholder="Cuéntanos medidas, interior/exterior, fecha…" />
              <div className="pt-2">
                <button className="w-full rounded-2xl bg-sky-500 py-3 font-semibold hover:bg-sky-400">Enviar consulta</button>
              </div>
              <p className="text-xs text-white/60">Este formulario es de ejemplo (front‑end). Podemos conectarlo a tu email o WhatsApp.</p>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-6">
            <div className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-5">
              <h4 className="font-semibold">O contáctanos directo</h4>
              <a className="flex items-center gap-2 text-white/80 hover:text-white" href="mailto:mrled.ecuador@gmail.com"><Mail className="h-4 w-4" /> mrled.ecuador@gmail.com</a>
              <a className="flex items-center gap-2 text-white/80 hover:text-white" href="https://wa.me/593989480207" target="_blank" rel="noreferrer"><Phone className="h-4 w-4" /> +593 98 948 0207</a>
              <div className="text-xs text-white/50">Ambato - Ecuador</div>
              <div className="text-xs text-white/50">Horario de atención: Lun-Vie 9:00 a 19:00</div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-sky-600/20 to-cyan-500/10 p-5">
              <div className="mb-2 flex items-center gap-2 text-sky-200"><CheckCircle2 className="h-5 w-5" /> ¿Por qué MR LED EC?</div>
              <ul className="list-inside list-disc text-sm text-white/80">
                <li>Instalaciones seguras y certificadas</li>
                <li>Calibración profesional y color fiel</li>
                <li>Soporte 24/7 y repuestos locales</li>
              </ul>
              <a href="#proyectos" className="mt-4 inline-flex items-center gap-2 rounded-2xl border border-white/20 px-4 py-2 text-white hover:bg-white/10">
                Ver más <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </Section>

      <footer className="border-t border-white/10 bg-black/40 py-10">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="text-sm text-white/60">© {new Date().getFullYear()} MR LED EC. Todos los derechos reservados.</div>
            <div className="flex items-center gap-6 text-sm text-white/70">
              <a href="https://www.instagram.com/mrled_ec?igsh=bWpjM2F5b3l1cGEz&utm_source=qr" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-white">
                <Instagram className="h-4 w-4" /> Instagram
              </a>
              <a href="https://www.facebook.com/share/176GoUjSZs/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-white">
                <Facebook className="h-4 w-4" /> Facebook
              </a>
              <a href="https://www.tiktok.com/@mrled.ec?_t=ZM-8ynzmQFNZfK&_r=1" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-white">
                <TikTok className="h-4 w-4" /> TikTok
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function Field({ label, textarea, ...props }: any) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-medium text-white/70">{label}</span>
      {textarea ? (
        <textarea className="w-full rounded-xl border border-white/15 bg-black/30 p-3 text-sm outline-none ring-0 placeholder:text-white/40 focus:border-sky-400" rows={5} {...props} />
      ) : (
        <input className="w-full rounded-xl border border-white/15 bg-black/30 p-3 text-sm outline-none ring-0 placeholder:text-white/40 focus:border-sky-400" {...props} />
      )}
    </label>
  )
}

function SpecItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-black/20 px-4 py-3">
      <span className="text-white/70">{label}</span>
      <span className="font-medium text-white">{value}</span>
    </div>
  )
}
