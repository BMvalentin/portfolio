"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconExternalLink,
  IconBrandNextjs,
  IconBrandTypescript,
  IconDatabase,
  IconBrandTailwind,
  IconBrandFramer,
  IconCreditCard,
  IconBrandGit,
  IconBrandMysql,
  IconRocket,
  IconCode,
  IconChartBar,
  IconSettings,
  IconBrandNodejs,
  IconPrismPlus,
  IconBrandPrisma
} from '@tabler/icons-react';

// Componente para los Títulos Estilo Framer
const SectionHeading = ({ main, sub }: { main: string; sub: string }) => (
  <div className="mb-12">
    <h2 className="text-5xl md:text-7xl font-black text-white italic uppercase tracking-[-0.05em] leading-[0.9]">
      {main}<br />
      <span className="text-white/10">{sub}</span>
    </h2>
    <div className="h-1.5 w-20 bg-accent mt-6 rounded-full"></div>
  </div>
);

export default function Portfolio() {
  const projects = [
    {
      title: "Urban Barber",
      subtitle: "SaaS de Turnos y Pagos",
      description: "Aplicación web para gestión de turnos con integración a Mercado Pago y notificaciones automáticas.",
      link: "https://urbanbarber-web.vercel.app/",
      image: "/image/Barber.jpg",
    },
    {
      title: "Gestión OK",
      subtitle: "SaaS de Inventario",
      description: "Sistema de administración de stock multivariante (talles/colores) y gestión de proveedores.",
      link: "https://gestionok.vercel.app/",
      image: "/image/Stock.jpg",
    },
    {
      title: "Lavadero Web",
      subtitle: "SaaS Gestor de Servicios",
      description: "Sistema de reserva y flujo de trabajo automotriz con alertas personalizadas por email.",
      link: "https://lavadero-web.vercel.app/",
      image: "/image/Lavadero.jpg",
    }
  ];

  const services = [
    {
      title: "Desarrollo SaaS",
      description: "Creación de plataformas escalables con modelos de suscripción y gestión de datos complejos.",
      icon: <IconRocket size={24} />
    },
    {
      title: "Software a Medida",
      description: "Soluciones exclusivas diseñadas desde cero para cubrir las necesidades específicas de tu flujo de trabajo.",
      icon: <IconSettings size={24} />
    },
    {
      title: "Full Stack Web",
      description: "Interfaces modernas y rápidas conectadas a arquitecturas de backend robustas y seguras.",
      icon: <IconCode size={24} />
    },
  ];

  const tools = [
    { name: "Next.js", icon: <IconBrandNextjs size={24} /> },
    { name: "Node.js", icon: <IconBrandNodejs size={24} /> },
    { name: "TypeScript", icon: <IconBrandTypescript size={24} /> },
    { name: "Prisma", icon: <IconBrandPrisma size={24} /> },
    { name: "MySQL", icon: <IconBrandMysql size={24} /> },
    { name: "SQLServer", icon: <IconDatabase size={24} /> },
    { name: "Tailwind", icon: <IconBrandTailwind size={24} /> },
    { name: "Git", icon: <IconBrandGit size={24} /> },
  ];

  const stats = [
    { label: "Años de Experiencia", value: "+3" },
    { label: "Proyectos Completados", value: "+4" },
    { label: "Clientes Felices", value: "+6" },
  ];

  return (
    <div className="min-h-screen bg-background text-neutral-400 font-sans selection:bg-accent/20 relative">

      {/* NAVEGACIÓN - Absolute (No baja con el scroll) */}
      <nav className="absolute top-8 w-full z-50 flex justify-center px-4">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-panel/80 backdrop-blur-xl border border-white/5 px-6 py-2.5 rounded-full flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em]"
        >
          <a href="#sobre-mi" className="hover:text-accent transition-colors">Sobre mí</a>
          <a href="#proyectos" className="hover:text-accent transition-colors">Proyectos</a>
          <a href="#servicios" className="hover:text-accent transition-colors">Servicios</a>
          <a href="#herramientas" className="hover:text-accent transition-colors">Stack</a>
        </motion.div>
      </nav>

      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto min-h-screen">

        {/* SIDEBAR - Largo y alineado al contenido */}
        <aside className="w-full lg:w-1/3 p-4 lg:p-6 pt-32 lg:pt-32">
          <div className="bg-panel border border-white/5 rounded-[3rem] p-8 md:p-12 flex flex-col justify-between shadow-2xl relative overflow-hidden min-h-[calc(100vh-10rem)] h-fit lg:sticky lg:top-32 py-16">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none"></div>

            <div className="relative z-10 space-y-12">
              <div className="relative w-36 h-36 md:w-44 md:h-44 justify-self-center mx-auto">
                <div className="absolute -inset-6 bg-accent/10 rounded-full blur-3xl"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border border-neutral-800 shadow-2xl">
                  <img
                    src="image/perfil.jpg"
                    alt="Valentín Méndez"
                    className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-1000"
                  />
                </div>
              </div>

              <div className="space-y-8 text-center">
                <h1 className="text-5xl md:text-6xl font-black text-white italic tracking-tight uppercase leading-[0.95]">
                  Valentín<br />
                  <span className="block mt-2 text-white/20">Méndez</span>
                </h1>
                <div className="h-1 w-12 bg-accent mx-auto rounded-full"></div>
              </div>
            </div>

            <div className="relative z-10 mt-16 space-y-6">
              <div className="flex gap-4 justify-center">
                {[
                  { icon: <IconBrandGithub size={22} />, href: "https://github.com/BMvalentin" },
                  { icon: <IconBrandLinkedin size={22} />, href: "https://www.linkedin.com/in/valentinmendez/" },
                  { icon: <IconMail size={22} />, href: "mailto:valentinmendez0042@gmail.com" }
                ].map((social, i) => (
                  <a key={i} href={social.href} target="_blank" className="p-4 bg-white/[0.03] rounded-2xl border border-white/5 hover:border-accent/40 hover:bg-accent/5 hover:text-white transition-all duration-500">
                    {social.icon}
                  </a>
                ))}
              </div>
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-800 to-transparent"></div>
              <div className="text-center text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-600 italic">
                Analista de Sistemas & Full Stack
              </div>
            </div>
          </div>
        </aside>

        {/* CONTENIDO PRINCIPAL */}
        <main className="w-full lg:w-2/3 px-6 lg:px-12 pt-32 pb-24 space-y-32">

          {/* SOBRE MÍ */}
          <section id="sobre-mi" className="scroll-mt-32">
            <div className="max-w-xl space-y-12">
              <SectionHeading main="SOBRE" sub="MÍ" />
              <p className="text-2xl md:text-4xl font-medium text-white leading-tight tracking-tight italic">
                Me enfoco en el diseño de <span className="text-accent">soluciones escalables</span> y la arquitectura de software, optimizando procesos mediante herramientas digitales eficientes.
              </p>
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-neutral-900">
                {stats.map((stat, i) => (
                  <div key={i} className="flex flex-col gap-1">
                    <span className="text-4xl md:text-6xl font-black text-white italic tracking-tighter leading-none">{stat.value}</span>
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-neutral-500 leading-tight">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* PROYECTOS */}
          <section id="proyectos" className="scroll-mt-32">
            <SectionHeading main="MIS" sub="PROYECTOS" />
            <div className="space-y-4 max-w-2xl">
              {projects.map((project, index) => (
                <motion.a key={index} href={project.link} target="_blank" className="group flex flex-col sm:flex-row items-center bg-panel border border-white/5 hover:border-accent/20 transition-all p-5 gap-6 rounded-[2rem]">
                  <div className="relative h-28 w-28 flex-shrink-0 overflow-hidden rounded-2xl border border-neutral-800">
                    <Image src={project.image} alt={project.title} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="text-xl font-bold text-neutral-200 group-hover:text-white">{project.title}</h4>
                      <IconExternalLink size={16} className="text-neutral-700 group-hover:text-accent" />
                    </div>
                    <p className="text-accent/70 font-mono text-[10px] font-bold uppercase tracking-widest mb-2">{project.subtitle}</p>
                    <p className="text-sm text-neutral-500 line-clamp-2">{project.description}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </section>

          {/* SERVICIOS */}
          <section id="servicios" className="scroll-mt-32">
            <SectionHeading main="MIS" sub="SERVICIOS" />
            <div className="flex flex-col gap-6 max-w-2xl">
              {services.map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-10 bg-panel border border-white/5 rounded-[2.5rem] flex flex-col md:flex-row items-start md:items-center gap-8 hover:border-accent/20 transition-all group"
                >
                  {/* CORRECCIÓN: Renderizamos el icono directamente */}
                  <div className="w-16 h-16 bg-accent/5 rounded-3xl flex-shrink-0 flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-white italic uppercase tracking-tight">
                      {service.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-neutral-500 max-w-md">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* HERRAMIENTAS / STACK */}
          <section id="herramientas" className="scroll-mt-32 pb-12">
            <SectionHeading main="STACK" sub="TÉCNICO" />
            <div className="flex flex-wrap gap-4 max-w-2xl">
              {tools.map((tool) => (
                <div key={tool.name} className="group relative flex items-center justify-center w-16 h-16 bg-panel border border-white/5 rounded-full hover:border-accent/40 hover:bg-accent/5 transition-all duration-500" title={tool.name}>
                  <div className="absolute inset-1 rounded-full border border-white/[0.02] group-hover:border-accent/10"></div>
                  <div className="text-neutral-500 group-hover:text-accent group-hover:scale-110 transition-all duration-500">{tool.icon}</div>
                </div>
              ))}
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}