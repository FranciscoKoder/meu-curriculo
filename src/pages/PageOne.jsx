import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useReactToPrint } from 'react-to-print';
import { 
  Github as GithubIcon, 
  Linkedin as LinkedinIcon, 
  Mail, 
  Phone, 
  User, 
  GraduationCap, 
  Award, 
  ChevronRight,
  Terminal,
  Zap,
  Monitor,
  Code2,
  RefreshCw,
  Server,
  Cpu,
  CheckCircle2,
  Building2,
  Download
} from 'lucide-react';

const SkillBadge = ({ children }) => (
  <motion.span 
    whileHover={{ scale: 1.05, y: -2 }}
    className="px-3 py-1 bg-amber-400/10 border border-amber-400/20 text-amber-600 rounded-lg text-xs font-semibold tracking-wide print:px-2 print:py-0.5 print:text-[9px] print:border-amber-400/30 print:bg-transparent"
  >
    {children}
  </motion.span>
);

const SectionTitle = ({ icon: Icon, title, dark = false }) => (
  <div className={`flex items-center gap-3 mb-6 print:mb-3 ${dark ? 'text-amber-400' : 'text-slate-900'}`}>
    <div className={`p-2 rounded-xl ${dark ? 'bg-amber-400/10' : 'bg-amber-100'} print:p-1.5 print:bg-transparent print:border print:border-amber-200`}>
      <Icon size={20} className="print:size-4 print:text-amber-500" />
    </div>
    <h2 className="text-xl print:text-base font-black tracking-tight uppercase italic">{title}</h2>
  </div>
);

const ContactItem = ({ icon: Icon, label, value, href }) => (
  <div className="flex items-start gap-4 mb-4 print:mb-2 group">
    <div className="mt-1 p-2 bg-slate-800 rounded-lg text-slate-400 group-hover:text-amber-400 group-hover:bg-slate-700 transition-all duration-300 print:p-1.5 print:bg-slate-800 print:text-amber-400">
      <Icon size={16} className="print:size-3.5" />
    </div>
    <div className="flex-1">
      <p className="text-[10px] print:text-[8px] text-slate-500 uppercase font-black tracking-[0.2em] mb-1 print:mb-0">{label}</p>
      {href ? (
        <a 
          href={href} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-sm print:text-[10px] text-slate-300 hover:text-white transition-colors break-all font-medium print:text-slate-300 print:no-underline"
        >
          <span className="print:hidden">{value}</span>
          <span className="hidden print:inline">{href}</span>
        </a>
      ) : (
        <p className="text-sm print:text-[10px] text-slate-300 font-medium print:text-slate-300">{value}</p>
      )}
    </div>
  </div>
);

const CertificateCard = ({ title, url }) => (
  <motion.a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ x: 5 }}
    className="flex items-center justify-between p-5 bg-white border border-zinc-200 rounded-2xl hover:border-amber-400 hover:shadow-xl transition-all group"
  >
    <div className="flex items-center gap-5">
      <div className="p-3 bg-zinc-100 rounded-xl group-hover:bg-amber-100 transition-colors">
        <Award className="text-zinc-500 group-hover:text-amber-600" size={24} />
      </div>
      <div>
        <span className="block font-bold text-slate-800 group-hover:text-slate-900 transition-colors">{title}</span>
        <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Verificado</span>
      </div>
    </div>
    <ChevronRight className="text-zinc-300 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" size={20} />
  </motion.a>
);

const TechnicalSkillCard = ({ icon: Icon, text }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="flex items-center gap-4 p-4 bg-white border border-zinc-100 rounded-xl shadow-sm hover:shadow-md transition-all border-l-4 border-l-amber-400 print:p-2 print:gap-2 print:border print:border-l-4 print:border-zinc-200 print:border-l-amber-400 print:shadow-none"
  >
    <div className="text-amber-500 shrink-0">
      <Icon size={18} className="print:size-4" />
    </div>
    <span className="text-sm print:text-[10px] font-bold text-slate-700 leading-tight">{text}</span>
  </motion.div>
);

function PageOne() {
  const componentRef = useRef(null);
  
  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: 'Curriculo_Vitor_Francisco',
    print: async (printIframe) => {
      const document = printIframe.contentDocument;
      if (document) {
        const title = document.createElement('title');
        title.innerText = 'Curriculo_Vitor_Francisco';
        document.head.appendChild(title);
        printIframe.contentWindow?.print();
      }
    },
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const technicalSkills = [
    { icon: Code2, text: "Desenvolvimento Frontend com React e Vue.js" },
    { icon: RefreshCw, text: "Arquitetura offline-first e sincronização de dados" },
    { icon: Server, text: "Integração de APIs REST e sistemas backend" },
    { icon: Zap, text: "Comunicação em tempo real e integração com IoT" },
    { icon: Cpu, text: "Sistemas embarcados (ESP32 e afins)" },
    { icon: CheckCircle2, text: "Boas práticas de UI/UX e componentização" },
    { icon: Building2, text: "Desenvolvimento web orientado a requisitos corporativos" }
  ];

  return (
    <div className="bg-zinc-50 min-h-screen">
      <button 
        onClick={handlePrint}
        className="fixed top-6 right-6 z-50 flex items-center gap-2 px-4 py-2 bg-slate-900 text-amber-400 font-bold uppercase tracking-widest text-xs rounded-full shadow-2xl border border-slate-700 hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all cursor-pointer print:hidden"
      >
        <Download size={16} /> Exportar PDF
      </button>

      <div ref={componentRef} className="flex flex-col md:flex-row min-h-screen font-sans selection:bg-amber-400 selection:text-amber-950 bg-zinc-50 print:bg-white print:w-[210mm] print:h-[297mm] print:flex-row print:overflow-hidden mx-auto">
        
        <aside className="md:w-1/3 lg:w-1/4 bg-slate-900 text-slate-100 p-8 md:p-12 md:sticky md:top-0 md:h-screen overflow-y-auto border-r border-slate-800 shadow-2xl z-10 print:w-[75mm] print:h-[297mm] print:p-8 print:relative print:shrink-0 print:shadow-none">
          <div className="flex flex-col items-center text-center mb-10 print:mb-6">
            <div className="relative mb-8 print:mb-4">
              <div className="absolute inset-0 bg-amber-400 rounded-full blur-3xl opacity-20 animate-pulse print:hidden"></div>
              <img
                src="/meu-curriculo/img/dev.jpeg"
                alt="Vitor Francisco"
                className="relative w-36 h-36 md:w-44 md:h-44 rounded-3xl object-cover border-2 border-slate-700 p-1 bg-slate-800 transform rotate-3 print:rotate-0 print:w-32 print:h-32 transition-transform duration-500"
              />
            </div>
            <h1 className="text-3xl md:text-4xl print:text-2xl font-black tracking-tighter leading-[0.9] mb-4 print:mb-2 uppercase italic text-white text-center">
              Vitor <br /> <span className="text-amber-400 not-italic">Francisco</span>
            </h1>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-800 rounded-full border border-slate-700 print:px-2 print:py-0.5">
              <Terminal size={12} className="text-amber-400 print:size-2.5" />
              <span className="text-slate-400 text-[10px] print:text-[8px] font-bold tracking-[0.2em] uppercase mt-0.5">Fullstack Developer</span>
            </div>
          </div>

          <nav className="space-y-10 print:space-y-6">
            <section>
              <SectionTitle icon={User} title="Perfil" dark />
              <p className="text-slate-400 text-sm print:text-[10px] leading-relaxed text-justify font-medium text-pretty">
                Estudante de Ciência da Computação focado em inovação e performance. Experiência prática em sistemas de saúde e automação industrial, unindo software robusto com interfaces intuitivas.
              </p>
            </section>

            <section>
              <SectionTitle icon={Zap} title="Stack" dark />
              <div className="flex flex-wrap gap-2 print:gap-1">
                {[
                  "React", "Vue.js", "Quasar", "PHP", "MySQL", 
                  "Java", "Python", "Git", "ESP32", 
                  "UI/UX", "Adobe Suite"
                ].map(skill => (
                  <SkillBadge key={skill}>{skill}</SkillBadge>
                ))}
              </div>
            </section>

            <section>
              <SectionTitle icon={Phone} title="Network" dark />
              <div className="space-y-1 print:space-y-0">
                <ContactItem icon={Phone} label="Whatsapp" value="(83) 98868-2997" />
                <ContactItem icon={Mail} label="Email" value="vitorfariasdev@gmail.com" />
                <ContactItem icon={GithubIcon} label="GitHub" value="@FranciscoKoder" href="https://github.com/FranciscoKoder" />
                <ContactItem icon={LinkedinIcon} label="LinkedIn" value="vitor-fariasprogram" href="https://www.linkedin.com/in/vitor-fariasprogram/" />
              </div>
            </section>
          </nav>
        </aside>

        <main className="flex-1 p-6 md:p-16 lg:p-24 space-y-20 paper-texture print:bg-white print:p-10 print:space-y-8">
          <motion.section {...fadeInUp}>
            <SectionTitle icon={Monitor} title="Sobre Mim" />
            <div className="max-w-4xl space-y-8 print:space-y-4">
              <p className="text-slate-600 print:text-black leading-relaxed text-lg print:text-[10.5px] text-justify text-pretty font-medium">
                Sou bacharelando em Ciência da Computação pela Universidade Estadual da Paraíba (UEPB), com uma formação técnica sólida que integra desenvolvimento web moderno e sistemas embarcados. Atuo na criação de soluções completas e escaláveis, conectando APIs complexas a interfaces intuitivas e responsivas. Possuo forte domínio em React e Vue.js, seguindo boas práticas de arquitetura. Tenho experiência no desenvolvimento de aplicações offline-first e integração com dispositivos IoT (ESP32), visando confiabilidade e escalabilidade.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 print:grid-cols-2 print:gap-2">
                {technicalSkills.map((skill, index) => (
                  <TechnicalSkillCard 
                    key={index} 
                    icon={skill.icon} 
                    text={skill.text} 
                  />
                ))}
              </div>
            </div>
          </motion.section>

          <motion.section {...fadeInUp}>
            <SectionTitle icon={GraduationCap} title="Formação" />
            <div className="space-y-10 print:space-y-4">
              <div className="relative pl-10 border-l-2 border-amber-400/30 print:pl-6 print:border-amber-400/20">
                <div className="absolute -left-[11px] top-0 w-5 h-5 bg-amber-400 rounded-full border-4 border-zinc-50 print:w-3 print:h-3 print:-left-[7px] print:border-white shadow-xl shadow-amber-400/20 print:shadow-none"></div>
                <div className="bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm print:p-3 print:rounded-xl print:border-zinc-200 print:shadow-none">
                  <h3 className="text-xl print:text-sm font-black text-slate-900 uppercase tracking-tight">Ciência da Computação</h3>
                  <p className="text-amber-600 font-bold text-xs print:text-[9px] mb-4 print:mb-1 uppercase tracking-[0.2em]">UEPB • 7° Período • Em curso</p>
                  <div className="flex flex-wrap gap-2 mt-4 print:mt-1 print:gap-1">
                    {["Java", "C", "Python", "Arquitetura", "MySQL"].map(tag => (
                      <span key={tag} className="text-[10px] print:text-[8px] font-bold text-slate-400 bg-slate-50 px-2 py-0.5 rounded-md uppercase tracking-wider print:bg-zinc-100">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative pl-10 border-l-2 border-zinc-200 print:pl-6">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-zinc-300 rounded-full border-4 border-zinc-50 print:w-2 print:h-2 print:-left-[5px] print:border-white"></div>
                <h3 className="text-lg print:text-sm font-bold text-slate-800 uppercase tracking-tight">Ensino Médio Técnico</h3>
                <p className="text-slate-500 font-semibold text-sm print:text-[9px] uppercase tracking-widest">ECIT Bráulio Maia Júnior • 2021</p>
              </div>
            </div>
          </motion.section>

          <section className="space-y-10 print:hidden">
            <div className="flex justify-between items-end mb-8">
              <SectionTitle icon={Award} title="Certificações" />
              <div className="hidden md:block h-[1px] flex-1 bg-zinc-200 mx-8 mb-11"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
              <CertificateCard 
                title="Desenvolvimento JAVA" 
                url="/meu-curriculo/img/UC-d7e84d52-06b9-4633-9c47-9f81f90dc109.pdf" 
              />
              <CertificateCard 
                title="Gerenciamento de Risco" 
                url="/meu-curriculo/img/Gerenciamento%20de%20Risco.pdf" 
              />
              <CertificateCard 
                title="Banco de Dados" 
                url="/meu-curriculo/img/BancodeDados.pdf" 
              />
            </div>
          </section>

          <footer className="pt-8 border-t border-zinc-200 flex justify-between items-center text-[10px] print:text-[8px] font-bold text-slate-400 uppercase tracking-[0.3em] print:pt-4">
            <span>© 2026 Vitor Francisco</span>
            <span className="text-amber-400">Software Engineer</span>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default PageOne;