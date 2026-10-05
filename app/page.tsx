import Image from 'next/image';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconExternalLink,
  IconBrandNextjs,
  IconBrandTypescript,
  IconDatabase,
  IconBrandTailwind,
  IconBrandGit,
  IconBrandMysql,
  IconRocket,
  IconChartBar,
  IconSettings,
  IconBrandNodejs,
  IconBrandPrisma,
  IconBrandPython
} from '@tabler/icons-react';

// Componente para los Títulos con Estilo Neón Violeta y espacio para tildes
const SectionHeading = ({ main, sub }: { main: string; sub: string }) => (
  <div className="mb-8 md:mb-12">
    <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white italic uppercase tracking-[-0.05em] leading-[1.1]">
      {main}<br />
      <span className="text-accent drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]">
        {sub}
      </span>
    </h2>
    <div className="h-1.5 w-20 bg-accent mt-4 md:mt-6 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.6)]"></div>
  </div>
);

const socials = [
  { label: "GitHub", href: "https://github.com/BMvalentin", icon: IconBrandGithub, external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/valentinmendez/", icon: IconBrandLinkedin, external: true },
  { label: "Email", href: "mailto:valentinmendez.dev@gmail.com", icon: IconMail, external: false },
];

export default function Portfolio() {
  const projects = [
    {
      title: "Urban Barber",
      subtitle: "SaaS de Turnos y Pagos",
      description: "Aplicación web para gestión de turnos con integración a Mercado Pago y notificaciones automáticas.",
      link: "https://mayoraz.vercel.app/",
      image: "/image/Barber.jpg",
      technologies: ["Next.js", "Prisma", "Mercado Pago", "MySQL"]
    },
    {
      title: "Gestión OK",
      subtitle: "SaaS de Inventario",
      description: "Plataforma integral SaaS diseñada para optimizar la gestión comercial de negocios. Permite administrar stock multivariante (talles y colores), controlar proveedores y registrar un historial detallado de entradas y salidas en tiempo real. Incluye un catálogo online con integración directa a WhatsApp para agilizar y concretar ventas de forma fluida.",
      link: "https://gestionok.vercel.app/",
      image: "/image/Stock.jpg",
      technologies: ["TypeScript", "Next.js", "Tailwind", "Prisma"]
    },
    {
      title: "Lavadero Web",
      subtitle: "SaaS Gestor de Servicios",
      description: "Sistema de reserva y flujo de trabajo automotriz con alertas personalizadas por email.",
      link: "https://lavadero-web.vercel.app/",
      image: "/image/Lavadero.jpg",
      technologies: ["React", "Node.js", "PostgreSQL", "Nodemailer"]
    },
     {
      title: "Gourmet",
      subtitle: "SaaS Gestor de Pedidos",
      description: "Sistema integral de gestion de pedidos para restaurantes, con panel de administración y notificaciones automáticas. Cuenta con pasarela de pagos, impresion de comandas, control de stock y multi roles.",
      link: "https://foodie-burgers.vercel.app/",
      image: "/image/gourmet.jpg",
      technologies: ["React", "Node.js", "PostgreSQL", "Nodemailer"]
    }
  ];

  const services = [
    {
      title: "Desarrollo de Software",
      description: "Construcción de aplicaciones web interactivas y escalables. Creación de plataformas lógicas con código limpio, priorizando la experiencia de usuario y el rendimiento.",
      icon: <IconRocket size={24} aria-hidden="true" />
    },
    {
      title: "Arquitectura & Backend",
      description: "Diseño y optimización de bases de datos relacionales y estructuras de servidores robustas, asegurando la integridad, velocidad y seguridad de tus datos.",
      icon: <IconSettings size={24} aria-hidden="true" />
    },
    {
      title: "Análisis de Datos & BI",
      description: "Transformación de datos crudos en valor real. Modelado de datos, pipelines ETL y creación de dashboards dinámicos para simplificar la toma de decisiones estratégicas.",
      icon: <IconChartBar size={24} aria-hidden="true" />
    }
  ];

  const tools = [
    { name: "Next.js", icon: <IconBrandNextjs size={24} /> },
    { name: "Node.js", icon: <IconBrandNodejs size={24} /> },
    { name: "TypeScript", icon: <IconBrandTypescript size={24} /> },
    { name: "Python", icon: <IconBrandPython size={24} /> },
    { name: "SQLServer", icon: <IconDatabase size={24} /> },
    { name: "MySQL", icon: <IconBrandMysql size={24} /> },
    { name: "Prisma", icon: <IconBrandPrisma size={24} /> },
    { name: "Power BI", icon: <IconChartBar size={24} /> },
    { name: "Tailwind", icon: <IconBrandTailwind size={24} /> },
    { name: "Git", icon: <IconBrandGit size={24} /> },
  ];

  return (
    <div className="min-h-screen bg-background text-neutral-400 font-sans selection:bg-accent/20 relative">

      <nav aria-label="Navegación principal" className="absolute top-6 sm:top-8 w-full z-50 flex justify-center px-2 sm:px-4">
        <div className="animate-nav-in bg-panel/80 backdrop-blur-xl border border-white/5 px-3 sm:px-6 py-2.5 rounded-full flex gap-2.5 sm:gap-8 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.1em] sm:tracking-[0.2em] whitespace-nowrap">
          <a href="#sobre-mi" className="hover:text-accent focus-visible:text-accent transition-colors">Sobre mí</a>
          <a href="#proyectos" className="hover:text-accent focus-visible:text-accent transition-colors">Proyectos</a>
          <a href="#servicios" className="hover:text-accent focus-visible:text-accent transition-colors">Servicios</a>
          <a href="#herramientas" className="hover:text-accent focus-visible:text-accent transition-colors">Stack</a>
        </div>
      </nav>

      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto min-h-screen">

        {/* SIDEBAR */}
        <aside className="w-full lg:w-1/3 p-4 lg:p-6 pt-24 lg:pt-20">
          <div className="bg-panel border border-white/5 rounded-[2.5rem] sm:rounded-[3rem] p-6 sm:p-8 md:p-12 flex flex-col justify-between shadow-2xl relative overflow-hidden lg:h-[calc(100vh-10rem)] h-fit lg:sticky lg:top-20">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none"></div>

            <div className="relative z-10 space-y-10 sm:space-y-12">
              <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 mx-auto">
                <div className="absolute -inset-6 bg-accent/10 rounded-full blur-3xl"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border border-neutral-800 shadow-2xl">
                  <Image
                    src="/image/perfil.jpg"
                    alt="Valentín Méndez"
                    fill
                    sizes="(max-width: 768px) 144px, 176px"
                    preload
                    className="object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>

              <div className="space-y-6 sm:space-y-8 text-center">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white italic tracking-tight uppercase leading-[1.1]">
                  Valentín<br />
                  <span className="block mt-2 text-accent drop-shadow-[0_0_20px_rgba(168,85,247,0.7)]">
                    Méndez
                  </span>
                </h1>
                <div className="h-1 w-12 bg-accent mx-auto rounded-full shadow-[0_0_15px_rgba(168,85,247,0.8)]"></div>
              </div>
            </div>

            <div className="relative z-10 mt-12 sm:mt-16 space-y-6">
              <div className="flex gap-3 sm:gap-4 justify-center">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      {...(social.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="p-3.5 sm:p-4 text-neutral-400 bg-white/[0.03] rounded-2xl border border-white/5 hover:border-accent/40 hover:bg-accent/5 hover:text-white transition-colors duration-300"
                    >
                      <Icon size={22} aria-hidden="true" />
                    </a>
                  );
                })}
              </div>
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-800 to-transparent"></div>
              <div className="text-center text-[10px] font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-neutral-500 italic leading-loose">
                Analista de Sistemas <br />
                Full Stack Dev & Data Analyst
              </div>
            </div>
          </div>
        </aside>

        {/* CONTENIDO PRINCIPAL */}
        <main className="w-full lg:w-2/3 px-6 lg:px-12 pt-10 lg:pt-32 pb-24 space-y-20 md:space-y-32">

          {/* SOBRE MÍ */}
          <section id="sobre-mi" className="scroll-mt-32">
            <div className="max-w-2xl space-y-10 sm:space-y-12">
              <SectionHeading main="SOBRE" sub="MÍ" />
              <p className="text-xl sm:text-2xl md:text-4xl font-medium text-white leading-[1.3] tracking-tight italic">
                Me enfoco en el diseño, desarrollo de <span className="text-accent drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">soluciones escalables</span> y el análisis de datos, optimizando procesos del negocio mediante código limpio e insights estratégicos.
              </p>
            </div>
          </section>

          {/* PROYECTOS */}
          <section id="proyectos" className="scroll-mt-32">
            <SectionHeading main="MIS" sub="PROYECTOS" />
            <div className="space-y-4 max-w-2xl">
              {projects.map((project, index) => (
                <a
                  key={index}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col sm:flex-row items-center bg-panel border border-white/5 hover:border-accent/20 focus-visible:border-accent/40 transition-colors p-4 sm:p-5 gap-5 sm:gap-6 rounded-[1.75rem] sm:rounded-[2rem]"
                >
                  <div className="relative h-24 w-24 sm:h-28 sm:w-28 flex-shrink-0 overflow-hidden rounded-2xl border border-neutral-800">
                    <Image
                      src={project.image}
                      alt={`Vista previa de ${project.title}`}
                      fill
                      sizes="112px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 text-center sm:text-left w-full">
                    <div className="flex justify-between items-center gap-3 mb-1">
                      <h3 className="text-lg sm:text-xl font-bold text-neutral-200 group-hover:text-white transition-colors">{project.title}</h3>
                      <IconExternalLink size={16} aria-hidden="true" className="shrink-0 text-neutral-700 group-hover:text-accent transition-colors" />
                    </div>
                    <p className="text-accent/80 font-mono text-[10px] font-bold uppercase tracking-widest mb-2">{project.subtitle}</p>
                    <p className="text-sm text-neutral-400 leading-relaxed mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="text-[10px] px-2 py-0.5 bg-white/5 border border-white/10 rounded-full text-neutral-300 uppercase font-bold tracking-tight">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* SERVICIOS */}
          <section id="servicios" className="scroll-mt-32">
            <SectionHeading main="MIS" sub="SERVICIOS" />
            <div className="flex flex-col gap-5 sm:gap-6 max-w-2xl">
              {services.map((service, i) => (
                <div
                  key={i}
                  className="p-6 sm:p-8 md:p-10 bg-panel border border-white/5 rounded-[2rem] sm:rounded-[2.5rem] flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 hover:border-accent/20 transition-colors group"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-accent/10 rounded-3xl flex-shrink-0 flex items-center justify-center text-accent group-hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(168,85,247,0.2)] group-hover:shadow-[0_0_35px_rgba(168,85,247,0.4)]">
                    {service.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white italic uppercase tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-neutral-400 max-w-md">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* HERRAMIENTAS / STACK */}
          <section id="herramientas" className="scroll-mt-32">
            <SectionHeading main="STACK" sub="TÉCNICO" />
            <div className="flex flex-wrap gap-3 sm:gap-4 max-w-2xl">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  role="img"
                  aria-label={tool.name}
                  title={tool.name}
                  className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-panel border border-white/5 rounded-full hover:border-accent/40 transition-colors duration-300"
                >
                  <div className="absolute inset-1 rounded-full border border-white/[0.02] group-hover:border-accent/10 transition-colors"></div>
                  <div className="text-neutral-400 group-hover:text-accent transition-colors duration-300 group-hover:drop-shadow-[0_0_12px_rgba(168,85,247,0.5)]">{tool.icon}</div>
                </div>
              ))}
            </div>
          </section>

        </main>
      </div>

    </div>
  );
}
