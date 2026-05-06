import React from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  Clock, 
  FileText, 
  Download, 
  ShieldCheck, 
  Star, 
  BookOpen, 
  Brain, 
  Palette, 
  Heart, 
  Layout, 
  Printer, 
  Users, 
  ChevronDown,
  ArrowRight,
  FileBadge,
  Sparkles,
  ClipboardCheck,
  Check,
  Pencil
} from 'lucide-react';

// --- Components ---

const Button = ({ children, className = "", primary = true, onClick, href }: { children: React.ReactNode, className?: string, primary?: boolean, onClick?: () => void, href?: string }) => {
  const Component = href ? motion.a : motion.button;
  
  return (
    <Component
      href={href}
      initial={{ scale: 1 }}
      animate={{ 
        scale: [1, 1.02, 1],
        boxShadow: primary 
          ? ["0 10px 15px -3px rgba(249, 115, 22, 0.2)", "0 20px 25px -5px rgba(249, 115, 22, 0.4)", "0 10px 15px -3px rgba(249, 115, 22, 0.2)"]
          : ["0 4px 6px -1px rgba(0, 0, 0, 0.1)", "0 10px 15px -3px rgba(0, 0, 0, 0.1)", "0 4px 6px -1px rgba(0, 0, 0, 0.1)"]
      }}
      transition={{ 
        duration: 2, 
        repeat: Infinity,
        ease: "easeInOut"
      }}
      whileHover={{ 
        scale: 1.05, 
        y: -5,
        rotate: [0, -1, 1, 0],
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.95, y: 0 }}
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
      className={`relative overflow-hidden inline-flex items-center justify-center px-8 py-5 rounded-2xl font-display font-bold text-lg cursor-pointer transition-all ${
        primary 
        ? "bg-brand-accent text-white hover:bg-orange-500" 
        : "bg-white text-brand-primary border-2 border-brand-primary hover:bg-blue-50"
      } ${className}`}
    >
      <motion.div
        className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full"
        animate={{
          translateX: ["100%", "-100%"],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 1
        }}
      />
      <span className="relative z-10">{children}</span>
    </Component>
  );
};

const SectionTitle = ({ children, subtitle, light = false }: { children: React.ReactNode, subtitle?: string, light?: boolean }) => (
  <div className="text-center mb-12">
    <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? "text-white" : "text-slate-900"}`}>
      {children}
    </h2>
    {subtitle && <p className={`text-lg max-w-2xl mx-auto ${light ? "text-blue-100" : "text-slate-600"}`}>{subtitle}</p>}
  </div>
);


const Card = ({ children, className = "" }: { children: React.ReactNode, className?: string, key?: React.Key }) => (
  <motion.div 
    whileHover={{ 
      y: -8, 
      scale: 1.02,
      boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" 
    }}
    whileTap={{ scale: 0.98 }}
    transition={{ type: "spring", stiffness: 400, damping: 30 }}
    className={`p-8 rounded-3xl bg-white shadow-sm border border-slate-100 transition-colors ${className}`}
  >
    {children}
  </motion.div>
);

const FAQItem = ({ question, answer }: { question: string, answer: string, key?: React.Key }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="border-b border-slate-200 last:border-0">
      <motion.button 
        whileHover={{ x: 5 }}
        whileTap={{ scale: 0.99 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none cursor-pointer"
      >
        <span className="font-display font-semibold text-lg text-slate-800">{question}</span>
        <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </motion.button>
      {isOpen && (
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="pb-6 text-slate-600 leading-relaxed overflow-hidden"
        >
          {answer}
        </motion.div>
      )}
    </div>
  );
};

const ActivityCarousel = ({ title, subtitle }: { title?: string, subtitle?: string }) => (
  <section className="py-20 bg-slate-50 overflow-hidden border-y border-slate-100">
    <div className="container mx-auto px-4 mb-10 text-center">
       {title && <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">{title}</h2>}
       {subtitle && <p className="text-slate-500">{subtitle}</p>}
    </div>
    
    <div className="space-y-10">
      {/* Row 1: Left to Right */}
      <div className="relative flex overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing select-none pb-4">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            ease: "linear", 
            duration: 20, 
            repeat: Infinity 
          }}
          className="flex whitespace-nowrap gap-6 px-4"
        >
          {[...Array(2)].map((_, listIdx) => (
            <div key={listIdx} className="flex gap-10">
              {[
                "https://i.ibb.co/Rp70nv2y/Chat-GPT-Image-3-de-mai-de-2026-17-06-28.png",
                "https://i.ibb.co/2118g1J7/TABUADAS-INFANTIS-PARA-FAZER.png",
                "https://i.ibb.co/QFtgvKdB/TABUADAS-INFANTIS-PARA-FAZER-1.png",
                "https://i.ibb.co/HfGxMdxf/TABUADAS-INFANTIS-PARA-FAZER-2.png",
                "https://i.ibb.co/4wc6jhsf/Chat-GPT-Image-3-de-mai-de-2026-17-15-13.png",
                "https://i.ibb.co/b500B8Cr/Chat-GPT-Image-3-de-mai-de-2026-17-22-08.png",
                "https://i.ibb.co/MD1czcdj/Chat-GPT-Image-3-de-mai-de-2026-17-30-44.png",
                "https://i.ibb.co/BH3KSb8F/diferen-as-de-imagens.png",
                "https://i.ibb.co/v6bV8C0y/Chat-GPT-Image-3-de-mai-de-2026-17-05-15.png"
              ].map((imgSrc, imgIdx) => (
                <div 
                  key={`${listIdx}-${imgIdx}`} 
                  className="w-[280px] md:w-[350px] shrink-0 rounded-2xl overflow-hidden shadow-xl border-8 border-white transform hover:scale-105 transition-all duration-300"
                >
                  <img 
                    src={imgSrc} 
                    alt={`Exemplo de Atividade ${imgIdx + 1}`} 
                    className="w-full h-auto object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Row 2: Right to Left */}
      <div className="relative flex overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing select-none pb-4">
        <motion.div 
          animate={{ x: ["-50%", "0%"] }}
          transition={{ 
            ease: "linear", 
            duration: 25, 
            repeat: Infinity 
          }}
          className="flex whitespace-nowrap gap-6 px-4"
        >
          {[...Array(2)].map((_, listIdx) => (
            <div key={listIdx} className="flex gap-10">
              {[
                "https://i.ibb.co/BH3KSb8F/diferen-as-de-imagens.png",
                "https://i.ibb.co/v6bV8C0y/Chat-GPT-Image-3-de-mai-de-2026-17-05-15.png",
                "https://i.ibb.co/b500B8Cr/Chat-GPT-Image-3-de-mai-de-2026-17-22-08.png",
                "https://i.ibb.co/MD1czcdj/Chat-GPT-Image-3-de-mai-de-2026-17-30-44.png",
                "https://i.ibb.co/HfGxMdxf/TABUADAS-INFANTIS-PARA-FAZER-2.png",
                "https://i.ibb.co/QFtgvKdB/TABUADAS-INFANTIS-PARA-FAZER-1.png",
                "https://i.ibb.co/2118g1J7/TABUADAS-INFANTIS-PARA-FAZER.png",
                "https://i.ibb.co/4wc6jhsf/Chat-GPT-Image-3-de-mai-de-2026-17-15-13.png",
                "https://i.ibb.co/Rp70nv2y/Chat-GPT-Image-3-de-mai-de-2026-17-06-28.png"
              ].map((imgSrc, imgIdx) => (
                <div 
                  key={`${listIdx}-${imgIdx}`} 
                  className="w-[280px] md:w-[350px] shrink-0 rounded-2xl overflow-hidden shadow-xl border-8 border-white transform hover:scale-105 transition-all duration-300"
                >
                  <img 
                    src={imgSrc} 
                    alt={`Exemplo de Atividade ${imgIdx + 1}`} 
                    className="w-full h-auto object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);



// --- Main App ---

export default function App() {
  const scrollToCheckout = () => {
    const element = document.getElementById('checkout-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCheckout = (url = 'https://pay.cakto.com.br/bfi7tx9_872281') => {
    window.location.href = url;
  };

  return (
    <div className="min-h-screen selection:bg-brand-primary selection:text-white bg-white">
      {/* 1. SEÇÃO HERO */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-brand-yellow/30">
        <div className="absolute top-0 left-0 w-full h-full opacity-40 school-pattern pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-brand-primary font-semibold text-sm mb-8 shadow-sm border border-blue-100">
            <Sparkles className="w-4 h-4" />
            <span>Kit Digital Exclusivo</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 drop-shadow-sm">
            Seu aluno terminou antes? <br />
            <span className="text-brand-primary">Agora você já sabe o que entregar.</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mb-8 leading-relaxed">
            O kit <strong className="text-slate-900">“Acabei, Professora!”</strong> reúne atividades rápidas, educativas e prontas para imprimir, criadas para manter os alunos ocupados e aprendendo enquanto a turma termina a tarefa principal.
          </p>

          {/* Compact Hero Mockup */}
          <div className="w-full max-w-2xl relative flex items-center justify-center px-4 mb-16">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-brand-primary/10 blur-3xl rounded-full" />
            
            <div className="relative w-full aspect-[16/9] flex items-center justify-center">
              {/* Back Page 1 */}
              <motion.div 
                initial={{ rotate: -15, x: -80 }}
                className="absolute w-1/2 aspect-[3/4] bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden"
              >
                 <img src="https://i.ibb.co/4wc6jhsf/Chat-GPT-Image-3-de-mai-de-2026-17-15-13.png" alt="Preview 1" className="w-full h-full object-cover" />
              </motion.div>

              {/* Back Page 2 */}
              <motion.div 
                initial={{ rotate: 15, x: 80 }}
                className="absolute w-1/2 aspect-[3/4] bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden"
              >
                 <img src="https://i.ibb.co/b500B8Cr/Chat-GPT-Image-3-de-mai-de-2026-17-22-08.png" alt="Preview 2" className="w-full h-full object-cover" />
              </motion.div>

              {/* Main Cover */}
              <motion.div 
                whileHover={{ y: -10, scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="relative z-10 w-2/3 max-w-[280px] aspect-[3/4] bg-white rounded-2xl shadow-2xl border-4 border-white overflow-hidden transform transition-all cursor-pointer"
              >
                 <img 
                   src="https://i.ibb.co/Rp70nv2y/Chat-GPT-Image-3-de-mai-de-2026-17-06-28.png" 
                   alt="Capa do Kit" 
                   className="w-full h-full object-cover"
                   referrerPolicy="no-referrer"
                 />
                 <div className="absolute top-4 right-4 bg-yellow-400 text-slate-900 text-[10px] font-black px-2 py-1 rounded-md shadow-sm uppercase tracking-tighter">
                    Pronto para imprimir
                 </div>
              </motion.div>

              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 z-20 bg-brand-primary text-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border-2 border-white"
              >
                 <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <Sparkles className="w-5 h-5" />
                 </div>
                 <div className="pr-2 text-left">
                    <p className="text-xs font-bold leading-none capitalize">Kit Completo</p>
                    <p className="text-[10px] text-blue-100 font-medium">Ed. Infantil & Fundamental</p>
                 </div>
              </motion.div>
            </div>
          </div>

          <div>
            <Button onClick={() => scrollToCheckout()} className="mb-6">
              QUERO MEU KIT AGORA
            </Button>
            <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-slate-500">
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> Acesso imediato</span>
              <span className="flex items-center gap-1"><FileText className="w-4 h-4" /> Produto digital (PDF)</span>
              <span className="flex items-center gap-1"><Printer className="w-4 h-4" /> Pronto para imprimir</span>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-10 opacity-20 hidden lg:block">
           <Layout className="w-24 h-24 text-brand-primary rotate-12" />
        </div>
        <div className="absolute bottom-40 left-10 opacity-20 hidden lg:block">
           <Sparkles className="w-16 h-16 text-brand-accent -rotate-12" />
        </div>
      </section>

      {/* CARROSSEL TOPO */}
      <ActivityCarousel title="Pronto para imprimir e usar" subtitle="Veja a qualidade pedagógica de cada página do kit" />

      {/* 2. SEÇÃO DE IDENTIFICAÇÃO DA DOR */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 text-center">
            <SectionTitle 
              subtitle="Toda professora do Ensino Fundamental 1 conhece esse ciclo desgastante."
            >
              Você já passou por isso em sala?
            </SectionTitle>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <p className="text-lg text-slate-600 leading-relaxed">
                Você prepara a atividade, começa a orientar a turma e, poucos minutos depois, um aluno levanta a mão e diz: <span className="italic font-medium text-brand-primary">“Professora, já terminei.”</span>
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Enquanto os outros ainda estão fazendo, ele começa a conversar, levantar, chamar sua atenção ou distrair os colegas que precisam de silêncio.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Alunos rápidos ficam sem ter o que fazer",
                  "A professora precisa improvisar tarefas na hora",
                  "A turma perde o foco e a concentração",
                  "O aluno começa a conversar ou circular na sala",
                  "Sobrecarga tentando atender a todos ao mesmo tempo",
                  "O tempo ocioso vira bagunça e interrupções"
                ].map((item, idx) => (
                  <li 
                    key={idx}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1 w-5 h-5 rounded-full bg-red-100 text-red-500 flex items-center justify-center shrink-0">
                      <span className="text-xs font-bold">✕</span>
                    </div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-6">
                <p className="text-xl font-display font-bold text-slate-900 border-l-4 border-brand-accent pl-4">
                  Foi pensando exatamente nesse momento que nasceu o “Acabei, Professora!”.
                </p>
              </div>
            </div>

            <div className="relative aspect-square flex items-center justify-center p-12">
              {/* Stacked Images Effect */}
              <motion.div 
                initial={{ rotate: -15, x: -40 }}
                className="absolute w-[80%] h-auto rounded-2xl shadow-2xl border-4 border-white overflow-hidden transform"
              >
                <img 
                  src="https://i.ibb.co/b500B8Cr/Chat-GPT-Image-3-de-mai-de-2026-17-22-08.png" 
                  alt="Kit Preview 1" 
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              
              <motion.div 
                initial={{ rotate: 15, x: 40 }}
                className="absolute w-[80%] h-auto rounded-2xl shadow-2xl border-4 border-white overflow-hidden transform"
              >
                <img 
                  src="https://i.ibb.co/4wc6jhsf/Chat-GPT-Image-3-de-mai-de-2026-17-15-13.png" 
                  alt="Kit Preview 2" 
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              <motion.div 
                initial={{ y: 0 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative w-full h-auto rounded-3xl shadow-2xl border-8 border-white overflow-hidden z-10 transition-transform"
              >
                <img 
                  src="https://i.ibb.co/Rp70nv2y/Chat-GPT-Image-3-de-mai-de-2026-17-06-28.png" 
                  alt="Kit Principal Preview" 
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 text-white text-center">
                  <p className="font-display font-medium text-lg leading-tight uppercase tracking-widest bg-brand-primary px-4 py-1 inline-block rounded-full mb-2">
                    A Solução que você buscava
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
      </section>

      {/* 3. SEÇÃO DA SOLUÇÃO */}
      <section className="py-24 bg-brand-blue/10 overflow-hidden">
        <div className="container mx-auto px-4 mt-12">
            <SectionTitle>
              Uma pasta pronta para salvar sua rotina.
            </SectionTitle>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Printer, title: "Pronto para Imprimir", desc: "Folhas em A4 configuradas para sua impressora." },
              { icon: Users, title: "Foco no Aluno", desc: "Ideal para quem termina antes do tempo médio." },
              { icon: Brain, title: "Independente", desc: "Atividades que não exigem explicações longas." },
              { icon: Clock, title: "Ganha Tempo", desc: "Economiza seu precioso tempo de planejamento." },
              { icon: Palette, title: "Criatividade", desc: "Desenvolve lógica e imaginação rindo." },
              { icon: BookOpen, title: "Educativo", desc: "Reforça português, matemática e mais." },
              { icon: Heart, title: "Organização", desc: "Mantém a sala calma e silenciosa." },
              { icon: FileBadge, title: "Versatilidade", desc: "Pode ser usado todos os dias da semana." }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="flex flex-col items-center text-center h-full">
                  <div className="w-12 h-12 rounded-2xl bg-brand-blue flex items-center justify-center text-brand-primary mb-4">
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-slate-500">{benefit.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SEÇÃO “O QUE VEM NO KIT” */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <SectionTitle>O que você recebe no Kit Acabei, Professora!</SectionTitle>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                tag: "Linguagem", 
                title: "Atividades de Português", 
                desc: "Caça-palavras, formação de palavras, frases, interpretação simples, sílabas e escrita criativa.", 
                color: "bg-blue-50 text-blue-600",
                icon: <BookOpen className="w-8 h-8" /> 
              },
              { 
                tag: "Exatas", 
                title: "Atividades de Matemática", 
                desc: "Continhas, sequência numérica, desafios rápidos, problemas simples, tabuada e raciocínio lógico.", 
                color: "bg-orange-50 text-orange-600",
                icon: <Brain className="w-8 h-8" />
              },
              { 
                tag: "Cognitivo", 
                title: "Atividades de Raciocínio", 
                desc: "Labirintos, códigos secretos, enigmas, atenção visual, padrões e desafios de observação.", 
                color: "bg-green-50 text-green-600",
                icon: <ClipboardCheck className="w-8 h-8" />
              },
              { 
                tag: "Expressão", 
                title: "Atividades Criativas", 
                desc: "Desenhos guiados, criação de personagens, finais de histórias e propostas de imaginação.", 
                color: "bg-pink-50 text-pink-600",
                icon: <Palette className="w-8 h-8" />
              },
              { 
                tag: "Comportamento", 
                title: "Atividades Socioemocionais", 
                desc: "Reflexões simples, sentimentos, atitudes gentis, gratidão, convivência e autocuidado.", 
                color: "bg-purple-50 text-purple-600",
                icon: <Heart className="w-8 h-8" />
              },
              { 
                tag: "Premium", 
                title: "Materiais de Organização", 
                desc: "Capas, etiquetas, controle de missões e páginas para organizar a rotina do já terminei.", 
                color: "bg-yellow-50 text-yellow-700",
                icon: <Layout className="w-8 h-8" />
              }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -8, scale: 1.05, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="group p-8 rounded-[40px] border border-slate-100 bg-white shadow-sm transition-all flex flex-col items-center text-center"
              >
                <div className={`w-16 h-16 rounded-3xl mb-6 flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <span className={`text-xs font-bold uppercase tracking-widest mb-2 block ${item.color.split(' ')[1]}`}>
                  {item.tag}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col items-center mt-16">
            <Button onClick={() => scrollToCheckout()} className="bg-brand-primary text-white shadow-brand-primary/25">
              QUERO RECEBER TUDO ISSO AGORA
            </Button>
          </div>
        </div>
      </section>

      {/* SEÇÃO: ESTEIRA INFINITA DE ATIVIDADES (CARROSSEL) */}
      <ActivityCarousel title="Veja o material por dentro" subtitle="Exemplos reais das atividades que compõem o kit" />





      {/* 6. SEÇÃO “PARA QUEM É” */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="w-full">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900 leading-tight text-center">
                  Esse kit é ideal para você se…
                </h2>
               <div className="space-y-4">
                 {[
                   "Você é professora da Educação Infantil ou Fundamental 1.",
                   "Você tem alunos que terminam as atividades muito rápido.",
                   "Você quer evitar bagunça e conversas fora de hora.",
                   "Você precisa de atividades extras prontas e organizadas.",
                   "Você quer economizar seu tempo de planejamento semanal.",
                   "Você gosta de materiais bonitos, lúdicos e fáceis de usar.",
                   "Você quer ter uma pasta pronta para salvar seu dia."
                 ].map((item, i) => (
                   <motion.div 
                    key={i} 
                    whileHover={{ x: 8, scale: 1.02, backgroundColor: "rgba(187, 247, 208, 0.7)" }}
                    whileTap={{ scale: 0.98 }}
                    className="flex gap-3 p-4 rounded-2xl bg-brand-mint/30 border border-brand-mint transition-colors cursor-default"
                   >
                      <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                      <span className="text-slate-700 font-medium">{item}</span>
                   </motion.div>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SEÇÃO “COMO USAR” */}
      <section className="py-24 bg-brand-yellow/10 overflow-hidden">
        <div className="container mx-auto px-4 mt-8">
            <SectionTitle subtitle="Implementação rápida que não exige esforço adicional.">
              Como usar em sala de aula?
            </SectionTitle>

          <div className="grid md:grid-cols-5 gap-8 max-w-6xl mx-auto items-start">
            {[
              { step: 1, text: "Imprima as atividades que desejar." },
              { step: 2, text: "Organize em uma pasta, caixa ou no cantinho da sala." },
              { step: 3, text: "Quando o aluno terminar antes, entregue uma missão." },
              { step: 4, text: "O aluno realiza a atividade de forma independente." },
              { step: 5, text: "Você mantém a turma focada e a aula fluindo." }
            ].map((s, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -10, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center text-center relative group"
              >
                 <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center mb-6 border-4 border-brand-yellow">
                    <span className="text-2xl font-bold text-slate-800">{s.step}</span>
                 </div>
                 <p className="text-slate-600 font-medium px-2">{s.text}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
             <p className="text-2xl font-display font-medium text-brand-primary">
                Simples, prático e pronto para transformar sua rotina.
             </p>
          </div>
        </div>
      </section>

      {/* 8. SEÇÃO DE BÔNUS */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 mt-8">
            <SectionTitle subtitle="Presentes exclusivos para quem garantir o kit hoje.">
              Comprando hoje, você também recebe bônus especiais.
            </SectionTitle>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { 
                title: "Bônus - MAIS 50 ATIVIDADES EXTRAS", 
                desc: "Material complementar exclusivo para ampliar as possibilidades de ensino.", 
                icon: <FileText className="w-5 h-5" />,
                img: "https://i.ibb.co/XZgjxXKB/Chat-GPT-Image-3-de-mai-de-2026-20-24-11.png"
              },
              { 
                title: "Kit Escrita Guiada para Alunos", 
                desc: "ALFABETO PONTILHADO ANIMADO para ajudar seus alunos a desenvolverem a coordenação e a formação das letras de forma simples e prática.", 
                icon: <Pencil className="w-5 h-5" />,
                img: "https://i.ibb.co/gLqFWrDt/Chat-GPT-Image-6-de-mai-de-2026-10-53-33.png"
              },
              { 
                title: "Bobbie Goods para Colorir", 
                desc: "Lindos desenhos estilo Bobbie Goods para despertar a criatividade e o foco dos seus alunos após as atividades.", 
                icon: <Sparkles className="w-5 h-5" />,
                img: "https://i.ibb.co/8nYBKTx8/Chat-GPT-Image-6-de-mai-de-2026-14-57-38.png"
              },
              { 
                title: "Controle de Missões", 
                desc: "Folha para acompanhar o progresso de cada aluno de forma lúdica.", 
                icon: <ClipboardCheck className="w-5 h-5" />,
                img: "https://i.ibb.co/yBh9RMvX/Chat-GPT-Image-3-de-mai-de-2026-20-29-57.png"
              }
            ].map((bonus, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="p-8 rounded-[2rem] bg-white border border-slate-100 flex flex-col items-center text-center shadow-xl hover:shadow-2xl transition-all group overflow-hidden"
              >
                {/* Custom Mockup Visual */}
                <div className="relative w-full aspect-square mb-8 flex items-center justify-center">
                  <div className="absolute inset-0 bg-brand-lilac/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
                  
                  {bonus.img && (
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 0 }}
                      className="relative w-32 h-44 bg-white rounded-xl shadow-2xl border-4 border-white overflow-hidden rotate-2 transition-transform duration-500"
                    >
                      <img 
                        src={bonus.img} 
                        alt={bonus.title} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </motion.div>
                  )}

                  <div className="absolute -top-2 -right-2 bg-brand-primary text-white p-2 rounded-xl shadow-lg z-20">
                    {bonus.icon}
                  </div>
                </div>

                <h4 className="text-slate-900 font-bold text-lg mb-3 leading-tight uppercase tracking-tight">{bonus.title}</h4>
                <p className="text-sm text-slate-500 mb-6 flex-grow">{bonus.desc}</p>
                
                <div className="w-full pt-4 border-t border-slate-50">
                  <span className="text-[10px] font-black text-brand-primary uppercase tracking-widest bg-brand-primary/5 px-4 py-2 rounded-full">
                    LIBERADO GRÁTIS
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* New Strategic CTA Button */}
          <div className="flex flex-col items-center mt-16">
            <Button onClick={() => scrollToCheckout()} className="mb-4">
              QUERO TODOS OS BÔNUS + MEU KIT
            </Button>
            <p className="text-xs text-slate-400 font-medium">Acesso imediato e vitalício ao material</p>
          </div>
        </div>
      </section>

      {/* 9 & 10. OFERTA E VALOR */}
      <section id="checkout-section" className="py-32 bg-brand-blue relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 school-pattern pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Escolha o melhor plano para você
            </h2>
            <p className="text-lg text-slate-600 mb-16 max-w-2xl mx-auto">
              Tenha acesso imediato a um material pronto, organizado e fácil de aplicar. Escolha o plano que melhor atende sua sala de aula.
            </p>

            <div className="max-w-xl mx-auto">
               
               {/* Pricing Card - Ouro (Full Access) */}
               <motion.div 
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="flex flex-col p-8 md:p-10 rounded-[50px] bg-white shadow-2xl relative border-8 border-brand-primary/10 transition-all text-left"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-slate-900 px-8 py-3 rounded-full font-bold text-sm shadow-xl whitespace-nowrap z-20">
                     ✨ OFERTA EXCLUSIVA: ACESSO TOTAL ✨
                  </div>

                  <div className="mb-8 border-b border-slate-100 pb-8 text-center md:text-left">
                     <div className="text-brand-primary font-bold text-xs uppercase tracking-widest mb-1 flex items-center justify-center md:justify-start gap-2">
                        <Sparkles className="w-4 h-4 fill-yellow-400 text-yellow-400" /> PLANO OURO (ACESSO COMPLETO)
                     </div>
                     <h3 className="text-2xl font-bold text-slate-900 mb-6 italic">Quanto vale ter sua rotina pronta?</h3>
                     
                     <div className="flex flex-col items-center md:items-start">
                        <span className="text-slate-400 line-through text-lg">De R$ 67,00</span>
                        <div className="flex items-baseline gap-1">
                           <span className="text-xl font-bold text-slate-900">R$</span>
                           <span className="text-7xl font-black text-brand-primary">10,00</span>
                        </div>
                        <p className="text-slate-500 text-sm mt-3 font-medium">Pagamento único • Acesso Vitalício</p>
                     </div>
                  </div>

                  <div className="space-y-4 mb-10 flex-grow">
                     {[
                       "Kit 'Acabei, Professora!' (+100 Atividades)",
                       "+50 Atividades Extras + Planner Completo",
                       "BÔNUS: Kit Escrita Guiada p/ Alunos",
                       "BÔNUS: Bobbie Goods p/ colorir",
                       "CERTIFICADOS de Motivação Escolar",
                       "GRUPO DE MATERIAIS no WhatsApp",
                       "Acesso Vitalício + Todas as Atualizações"
                     ].map((item, i) => (
                       <div key={i} className="flex items-start gap-3 text-sm text-slate-600">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className={i > 1 && i < 6 ? "font-bold text-slate-800" : ""}>{item}</span>
                       </div>
                     ))}
                  </div>

                  <Button 
                    href="https://pay.cakto.com.br/bfi7tx9_872281" 
                    className="w-full text-xl py-7 shadow-lg shadow-brand-primary/20"
                  >
                     QUERO O ACESSO COMPLETO POR R$ 10
                  </Button>
                  
                  <div className="mt-8 flex flex-col items-center gap-4">
                     <div className="flex gap-4 opacity-50 grayscale hover:grayscale-0 transition-all">
                        <div className="px-2 py-1 bg-slate-200 rounded font-bold text-[10px]">PIX</div>
                        <div className="px-2 py-1 bg-slate-200 rounded font-bold text-[10px]">CARTÃO</div>
                        <div className="px-2 py-1 bg-slate-200 rounded font-bold text-[10px]">BOLETO</div>
                     </div>
                     <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
                        <ShieldCheck className="w-4 h-4 text-emerald-500" /> Transação 100% Segura
                     </div>
                  </div>
                </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. SEÇÃO DE DEPOIMENTOS */}
      <section className="py-24 bg-brand-mint/20 overflow-hidden">
        <div className="container mx-auto px-4 mt-8">
            <SectionTitle subtitle="O que outras educadoras estão dizendo.">
              Comunidade de Professoras
            </SectionTitle>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: "Prof. Carla Silva", role: "Fundamental 1", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150", text: "O Kit Acabei, Professora! mudou a dinâmica da minha sala. Aqueles 10 minutos de 'caos' quando os primeiros terminavam sumiram. Agora eles ficam engajados e eu consigo dar atenção para quem ainda está fazendo a tarefa principal." },
              { name: "Luciana M.", role: "Pedagoga", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150", text: "Me ajudou muito nos momentos em que alguns alunos terminavam antes. O material é lindo e flui super bem. Ficou tudo mais organizado na escola." },
              { name: "Patrícia Souza", role: "Alfabetizadora", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150", text: "Material bonito, prático e muito fácil de imprimir. Meus pequenos adoraram os desafios e pararam de correr pela sala. Recomendo muito!" }
            ].map((d, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="relative pt-12 italic text-slate-700 bg-white/80 backdrop-blur h-full">
                  <div className="absolute top-8 left-8 text-6xl text-brand-mint select-none pointer-events-none">“</div>
                  <p className="mb-6 relative z-10 leading-relaxed">
                    {d.text}
                  </p>
                  <div className="flex items-center gap-4 not-italic">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm flex items-center justify-center bg-slate-100">
                        <img 
                          src={d.image} 
                          alt={d.name} 
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div>
                        <h5 className="font-bold text-slate-900 text-sm">{d.name}</h5>
                        <span className="text-xs text-slate-500 font-medium">{d.role}</span>
                      </div>
                  </div>
                  <div className="mt-4 flex gap-1">
                      {[...Array(5)].map((_, j) => <Star key={j} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center text-slate-500 text-sm">
             Área destinada a depoimentos de clientes reais.
          </div>
        </div>
      </section>

      {/* 11. SEÇÃO DE GARANTIA */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 mt-8">
          <motion.div 
            whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)" }}
            className="max-w-4xl mx-auto rounded-3xl bg-slate-50 p-12 flex flex-col md:flex-row gap-12 items-center text-center md:text-left border border-slate-100 transition-all"
          >
             <div className="flex-shrink-0">
                <div className="relative w-40 h-40 flex items-center justify-center">
                   <ShieldCheck className="w-full h-full text-emerald-500/20 absolute" />
                   <div className="relative z-10 flex flex-col items-center">
                      <span className="text-4xl font-bold text-emerald-600">7</span>
                      <span className="text-sm font-bold text-emerald-600 uppercase">Dias</span>
                   </div>
                </div>
             </div>
             <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Você compra sem risco.</h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Se por algum motivo você sentir que o material não é para você, poderá solicitar reembolso dentro do prazo de garantia de 7 dias após a compra. Sem letras miúdas, sem complicaçoes.
                </p>
                <p className="font-medium text-slate-800">
                  Você pode acessar, baixar, avaliar e decidir com total tranquilidade.
                </p>
             </div>
          </motion.div>
        </div>
      </section>

      {/* 13. SEÇÃO DE FAQ */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 mt-8">
          <div className="max-w-3xl mx-auto">
            <SectionTitle>Dúvidas frequentes</SectionTitle>
            <div className="mt-12">
              {[
                { q: "O material é físico ou digital?", a: "É um produto digital em PDF de alta qualidade. Você recebe as instruções e o link para baixar e imprimir quantas vezes desejar logo após a confirmação do pagamento." },
                { q: "Serve para qual idade?", a: "O kit foi pensado estrategicamente para alunos da Educação Infantil e Ensino Fundamental 1 (1º ao 5º ano), podendo ser adaptado conforme o nível de dificuldade da sua turma específica." },
                { q: "Preciso imprimir colorido?", a: "Não necessariamente. O material possui design pensado para ser funcional em preto e branco também. Além disso, incluímos um bônus de Versão Econômica com menos preenchimento de tinta." },
                { q: "Posso usar mais de uma vez?", a: "Sim! Uma vez baixado, o PDF é seu. Você pode imprimir e utilizar com suas turmas ano após ano sempre que precisar." },
                { q: "As atividades são difíceis?", a: "Pelo contrário. Elas foram desenvolvidas para serem rápidas, lúdicas e resolvidas de forma independente, ideais para preencher o tempo ocioso sem exigir sua intervenção direta." },
                { q: "Recebo o material na hora?", a: "Sim. Pagamentos via Cartão de Crédito ou PIX liberam o acesso instantaneamente. Você receberá os dados de acesso no seu e-mail cadastrado imediatamente." }
              ].map((faq, i) => (
                <FAQItem key={i} question={faq.q} answer={faq.a} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 14. SEÇÃO FINAL DE CTA */}
      <section className="py-32 bg-brand-yellow overflow-hidden relative text-center">
        <div className="container mx-auto px-4 relative z-10 mt-8">
           <div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 max-w-4xl mx-auto leading-tight">
                Na próxima vez que um aluno disser “professora, já terminei”, você não vai precisar improvisar.
              </h2>
              <p className="text-xl text-slate-700 mb-12 max-w-2xl mx-auto">
                Tenha em mãos uma solução profissional para manter seus alunos aprendendo e sua sala em total harmonia.
              </p>
              <Button onClick={() => scrollToCheckout()} className="shadow-2xl">
                  QUERO BAIXAR O KIT AGORA
              </Button>
              <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm font-bold text-slate-700 uppercase tracking-widest">
                  <span className="flex items-center gap-1"><Download className="w-4 h-4" /> Download Imediato</span>
                  <span className="flex items-center gap-1"><Printer className="w-4 h-4" /> Pronto para Imprimir</span>
                  <span className="flex items-center gap-1"><Heart className="w-4 h-4" /> Amado por +1000 Professoras</span>
              </div>
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 text-slate-500 text-sm text-center border-t border-slate-800">
         <div className="container mx-auto px-4">
            <p className="mb-4">© {new Date().getFullYear()} Acabei, Professora! • Todos os direitos reservados.</p>
            <p className="max-w-2xl mx-auto">
              Ao adquirir o kit, você concorda que o uso é individual e intransferível. Pirataria é crime. Valorize o trabalho de quem cria materiais educativos de qualidade.
            </p>
         </div>
      </footer>
    </div>
  );
}
