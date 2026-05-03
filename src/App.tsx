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
  Check
} from 'lucide-react';

// --- Components ---

const Button = ({ children, className = "", primary = true, onClick }: { children: React.ReactNode, className?: string, primary?: boolean, onClick?: () => void }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`px-8 py-4 rounded-2xl font-display font-bold text-lg shadow-lg cursor-pointer transition-all ${
      primary 
      ? "bg-brand-accent text-white hover:bg-orange-500 shadow-orange-200" 
      : "bg-white text-brand-primary border-2 border-brand-primary hover:bg-blue-50"
    } ${className}`}
  >
    {children}
  </motion.button>
);

const SectionTitle = ({ children, subtitle, light = false }: { children: React.ReactNode, subtitle?: string, light?: boolean }) => (
  <div className="text-center mb-12">
    <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? "text-white" : "text-slate-900"}`}>
      {children}
    </h2>
    {subtitle && <p className={`text-lg max-w-2xl mx-auto ${light ? "text-blue-100" : "text-slate-600"}`}>{subtitle}</p>}
  </div>
);


const Card = ({ children, className = "" }: { children: React.ReactNode, className?: string, key?: React.Key }) => (
  <div className={`p-8 rounded-3xl bg-white shadow-sm border border-slate-100 hover:shadow-md transition-shadow ${className}`}>
    {children}
  </div>
);

const FAQItem = ({ question, answer }: { question: string, answer: string, key?: React.Key }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="border-b border-slate-200 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
      >
        <span className="font-display font-semibold text-lg text-slate-800">{question}</span>
        <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
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
    
    <div className="relative flex overflow-x-hidden">
      <motion.div 
        animate={{ x: ["0%", "-50%"] }}
        transition={{ 
          ease: "linear", 
          duration: 25, 
          repeat: Infinity 
        }}
        className="flex whitespace-nowrap gap-6"
      >
        {[...Array(2)].map((_, listIdx) => (
          <div key={listIdx} className="flex gap-10">
            {[
              "https://i.ibb.co/Rp70nv2y/Chat-GPT-Image-3-de-mai-de-2026-17-06-28.png",
              "https://i.ibb.co/4wc6jhsf/Chat-GPT-Image-3-de-mai-de-2026-17-15-13.png",
              "https://i.ibb.co/b500B8Cr/Chat-GPT-Image-3-de-mai-de-2026-17-22-08.png",
              "https://i.ibb.co/v6bV8C0y/Chat-GPT-Image-3-de-mai-de-2026-17-05-15.png"
            ].map((imgSrc, imgIdx) => (
              <div 
                key={`${listIdx}-${imgIdx}`} 
                className="w-[300px] md:w-[400px] shrink-0 rounded-2xl overflow-hidden shadow-xl border-8 border-white transform hover:scale-105 transition-all duration-300"
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
  </section>
);

// --- Main App ---

export default function App() {
  const scrollToOffer = () => {
    document.getElementById('checkout-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen selection:bg-brand-primary selection:text-white bg-white">
      {/* 1. SEÇÃO HERO */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-brand-yellow/30">
        <div className="absolute top-0 left-0 w-full h-full opacity-40 school-pattern pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-brand-primary font-semibold text-sm mb-8 shadow-sm border border-blue-100"
          >
            <Sparkles className="w-4 h-4" />
            <span>Kit Digital Exclusivo</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 drop-shadow-sm"
          >
            Seu aluno terminou antes? <br />
            <span className="text-brand-primary">Agora você já sabe o que entregar.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-600 max-w-3xl mb-10 leading-relaxed"
          >
            O kit <strong className="text-slate-900">“Acabei, Professora!”</strong> reúne atividades rápidas, educativas e prontas para imprimir, criadas para manter os alunos ocupados e aprendendo enquanto a turma termina a tarefa principal.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Button onClick={scrollToOffer} className="mb-6">
              QUERO MEU KIT AGORA
            </Button>
            <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-slate-500">
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> Acesso imediato</span>
              <span className="flex items-center gap-1"><FileText className="w-4 h-4" /> Produto digital (PDF)</span>
              <span className="flex items-center gap-1"><Printer className="w-4 h-4" /> Pronto para imprimir</span>
            </div>
          </motion.div>

          {/* Mockup Placeholder */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16 w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-white/50 backdrop-blur-sm"
          >
            <div className="aspect-video bg-gradient-to-br from-brand-blue to-brand-mint relative flex items-center justify-center group">
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Visual representation of PDFs */}
                    <div className="absolute -left-12 bottom-0 w-32 h-44 bg-white rounded-lg shadow-lg -rotate-12 border border-slate-100 flex flex-col p-4">
                       <div className="w-full h-2 bg-slate-100 rounded mb-2"></div>
                       <div className="w-2/3 h-2 bg-slate-100 rounded mb-4"></div>
                       <div className="flex-1 grid grid-cols-3 gap-1">
                          {[...Array(9)].map((_, i) => <div key={i} className="bg-slate-50 rounded"></div>)}
                       </div>
                    </div>
                    <div className="absolute -right-12 bottom-0 w-32 h-44 bg-brand-yellow rounded-lg shadow-lg rotate-12 border border-slate-100 p-4 flex flex-col">
                       <div className="w-full h-2 bg-yellow-200 rounded mb-2"></div>
                       <div className="w-2/3 h-2 bg-yellow-200 rounded mb-4"></div>
                       <div className="flex-1 flex flex-col gap-2">
                          <div className="w-full h-8 bg-white/50 rounded"></div>
                          <div className="w-full h-8 bg-white/50 rounded"></div>
                       </div>
                    </div>
                    <div className="relative z-10 w-48 h-64 bg-white rounded-xl shadow-2xl border border-slate-100 transform translate-y-4 flex flex-col p-6">
                        <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mb-4">
                           <FileBadge className="text-brand-primary w-6 h-6" />
                        </div>
                        <div className="h-4 bg-slate-200 rounded w-full mb-3"></div>
                        <div className="h-4 bg-slate-200 rounded w-2/3 mb-6"></div>
                        <div className="space-y-3">
                           {[...Array(4)].map((_, i) => <div key={i} className="h-2 bg-slate-100 rounded w-full"></div>)}
                        </div>
                    </div>
                  </div>
               </div>
               <div className="absolute top-8 right-8 bg-brand-accent text-white px-6 py-2 rounded-full font-bold shadow-lg animate-bounce">
                  +100 ATIVIDADES
               </div>
            </div>
          </motion.div>
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
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            subtitle="Toda professora do Ensino Fundamental 1 conhece esse ciclo desgastante."
          >
            Você já passou por isso em sala?
          </SectionTitle>

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
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1 w-5 h-5 rounded-full bg-red-100 text-red-500 flex items-center justify-center shrink-0">
                      <span className="text-xs font-bold">✕</span>
                    </div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="pt-6">
                <p className="text-xl font-display font-bold text-slate-900 border-l-4 border-brand-accent pl-4">
                  Foi pensando exatamente nesse momento que nasceu o “Acabei, Professora!”.
                </p>
              </div>
            </div>

            <div className="bg-brand-blue/30 rounded-3xl p-8 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Heart className="w-32 h-32 text-blue-900" />
               </div>
               <div className="relative z-10">
                  <div className="aspect-square bg-white/60 backdrop-blur rounded-2xl flex flex-col items-center justify-center p-8 text-center border border-white">
                     <p className="text-2xl font-display font-medium text-slate-700 italic">
                       "E agora, o que eu faço?"
                     </p>
                     <img 
                      src="https://images.unsplash.com/photo-1544717297-fa95b3ee51f8?q=80&w=400&h=400&auto=format&fit=crop" 
                      alt="Professora sobrecarregada"
                      className="w-48 h-48 rounded-full object-cover my-6 shadow-lg border-4 border-white"
                     />
                     <span className="text-slate-500 text-sm">Chega de improviso e cansaço mental.</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SEÇÃO DA SOLUÇÃO */}
      <section className="py-24 bg-brand-blue/10">
        <div className="container mx-auto px-4">
          <SectionTitle 
            subtitle="Uma ferramenta prática e educativa para deixar sua aula fluir com tranquilidade."
          >
            Uma pasta pronta para salvar sua rotina.
          </SectionTitle>

          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-xl text-slate-600 leading-relaxed">
              O <strong>“Acabei, Professora!”</strong> é um kit digital com atividades extras, rápidas e educativas para entregar aos alunos que terminam antes. Assim, eles continuam aprendendo de forma independente, enquanto você consegue seguir com a aula sem perder o controle da turma.
            </p>
          </div>

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
              <Card key={i} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-2xl bg-brand-blue flex items-center justify-center text-brand-primary mb-4">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-slate-500">{benefit.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SEÇÃO “O QUE VEM NO KIT” */}
      <section className="py-24 bg-white">
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
                desc: "Cartazes, capas, etiquetas, controle de missões e páginas para organizar a rotina do já terminei.", 
                color: "bg-yellow-50 text-yellow-700",
                icon: <Layout className="w-8 h-8" />
              }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -5 }}
                className="group p-8 rounded-[40px] border border-slate-100 bg-white shadow-sm hover:shadow-xl transition-all"
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
        </div>
      </section>

      {/* SEÇÃO: ESTEIRA INFINITA DE ATIVIDADES (CARROSSEL) */}
      <ActivityCarousel title="Veja o material por dentro" subtitle="Exemplos reais das atividades que compõem o kit" />

      {/* 5. SEÇÃO DE TRANSFORMAÇÃO */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 school-pattern pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle light subtitle="A rotina que você sempre quis, agora em um kit pronto para usar.">
            Antes, era improviso. Agora, é rotina pronta.
          </SectionTitle>

          <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
            {/* Antes */}
            <div className="flex-1 bg-slate-800/50 backdrop-blur rounded-3xl p-8 border border-slate-700">
               <h3 className="text-2xl font-bold mb-6 text-red-400 flex items-center gap-2">
                 <span className="w-8 h-8 rounded-full bg-red-400/20 flex items-center justify-center text-sm">✕</span>
                 Cenário Atual (Sem o Kit)
               </h3>
               <ul className="space-y-4">
                 {[
                   "Aluno terminou e ficou sem fazer nada.",
                   "Professora teve que pensar em algo na hora.",
                   "Conversas e barulhos começaram.",
                   "Outros alunos perderam o foco total.",
                   "A aula ficou agitada e cansativa."
                 ].map((item, i) => (
                   <li key={i} className="flex items-start gap-3 text-slate-300">
                      <ArrowRight className="w-4 h-4 mt-1 shrink-0 text-slate-600" />
                      <span>{item}</span>
                   </li>
                 ))}
               </ul>
            </div>

            <div className="flex items-center justify-center">
               <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center shadow-lg transform md:rotate-0 rotate-90">
                  <ArrowRight className="text-white w-6 h-6" />
               </div>
            </div>

            {/* Depois */}
            <div className="flex-1 bg-brand-primary/10 backdrop-blur rounded-3xl p-8 border border-brand-primary/30">
               <h3 className="text-2xl font-bold mb-6 text-brand-primary flex items-center gap-2">
                 <span className="w-8 h-8 rounded-full bg-brand-primary/20 flex items-center justify-center text-sm">✓</span>
                 Com o Kit Instalado
               </h3>
               <ul className="space-y-4">
                 {[
                   "Aluno terminou e recebeu uma missão pronta.",
                   "Suporte contínuo para quem termina rápido.",
                   "O aluno ficou ocupado, focado e aprendendo.",
                   "A sala continuou tranquila e em silêncio.",
                   "Sua rotina ficou organizada e profissional."
                 ].map((item, i) => (
                   <li key={i} className="flex items-start gap-3 text-blue-100">
                      <Check className="w-4 h-4 mt-1 shrink-0 text-brand-primary" />
                      <span className="font-medium">{item}</span>
                   </li>
                 ))}
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SEÇÃO “PARA QUEM É” */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
               <img 
                src="https://images.unsplash.com/photo-1577891729319-f4874c739880?q=80&w=800&auto=format&fit=crop" 
                alt="Professora entusiasmada"
                className="rounded-[40px] shadow-2xl"
               />
            </div>
            <div className="md:w-1/2">
               <h2 className="text-3xl font-bold mb-8 text-slate-900 leading-tight">
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
                   <div key={i} className="flex gap-3 p-4 rounded-2xl bg-brand-mint/30 border border-brand-mint">
                      <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                      <span className="text-slate-700 font-medium">{item}</span>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SEÇÃO “COMO USAR” */}
      <section className="py-24 bg-brand-yellow/10">
        <div className="container mx-auto px-4">
          <SectionTitle subtitle="Implementação rápida que não exige esforço adicional.">
            Como usar em sala de aula?
          </SectionTitle>

          <div className="grid md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {[
              { step: 1, text: "Imprima as atividades que desejar." },
              { step: 2, text: "Organize em uma pasta, caixa ou no cantinho da sala." },
              { step: 3, text: "Quando o aluno terminar antes, entregue uma missão." },
              { step: 4, text: "O aluno realiza a atividade de forma independente." },
              { step: 5, text: "Você mantém a turma focada e a aula fluindo." }
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                 <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center mb-6 border-4 border-brand-yellow">
                    <span className="text-2xl font-bold text-slate-800">{s.step}</span>
                 </div>
                 <p className="text-slate-600 font-medium px-2">{s.text}</p>
                 {i < 4 && (
                   <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 text-slate-200">
                      <ArrowRight className="w-8 h-8" />
                   </div>
                 )}
              </div>
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
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle subtitle="Presentes exclusivos para quem garantir o kit hoje.">
            Comprando hoje, você também recebe bônus especiais.
          </SectionTitle>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Cartaz: Terminei, e agora?", desc: "Para colocar na sala e orientar os alunos visualmente.", icon: <Layout /> },
              { title: "Controle de Missões", desc: "Folha para acompanhar o progresso de cada aluno.", icon: <ClipboardCheck /> },
              { title: "Capas e Etiquetas", desc: "Personalize sua pasta e materiais do kit.", icon: <Sparkles /> },
              { title: "Versão Econômica", desc: "Atividades em P&B para economizar tinta.", icon: <Printer /> }
            ].map((bonus, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                className="p-6 rounded-3xl bg-brand-lilac/30 border-2 border-brand-lilac flex flex-col items-center text-center shadow-sm"
              >
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-purple-600 mb-6">
                   {bonus.icon}
                </div>
                <h4 className="text-slate-900 font-bold mb-3">{bonus.title}</h4>
                <p className="text-sm text-slate-500">{bonus.desc}</p>
                <div className="mt-4 text-xs font-bold text-purple-600 bg-white px-3 py-1 rounded-full uppercase tracking-wider">
                  BÔNUS GRÁTIS
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9 & 10. OFERTA E VALOR */}
      <section id="checkout-section" className="py-32 bg-brand-blue relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 school-pattern pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 items-stretch">
               
               {/* Content */}
               <div className="lg:w-1/2 flex flex-col justify-center">
                  <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                    Quanto vale ter sempre uma atividade pronta?
                  </h2>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    Pense em quantas vezes por semana você precisa improvisar algo às pressas. Agora imagine ter um material pronto, organizado e fácil de aplicar sempre que isso acontecer.
                  </p>
                  <ul className="space-y-4 mb-4">
                    {[
                      "Economia real de tempo de planejamento.",
                      "Muito mais organização na sua rotina.",
                      "Redução drástica de barulhos na aula.",
                      "Alunos mais autônomos e focados.",
                      "Muito mais tranquilidade emocional para você."
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                         <div className="w-5 h-5 rounded-full bg-brand-primary/20 flex items-center justify-center">
                            <Check className="w-3 h-3 text-brand-primary" />
                         </div>
                         {item}
                      </li>
                    ))}
                  </ul>
               </div>

               {/* Pricing Card */}
               <div className="lg:w-1/2">
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="p-10 rounded-[50px] bg-white shadow-2xl relative border-8 border-brand-primary/10"
                  >
                    <div className="absolute top-0 right-10 -translate-y-1/2 bg-yellow-400 text-slate-900 px-6 py-2 rounded-full font-bold text-sm shadow-md">
                       OFERTA LIMITADA
                    </div>

                    <div className="mb-8 text-center pb-8 border-b border-slate-100">
                       <h3 className="text-2xl font-bold text-slate-900 mb-4">Leve agora o Kit completo</h3>
                       <div className="flex flex-col items-center">
                          <span className="text-slate-400 line-through text-lg">De R$ 47,00</span>
                          <div className="flex items-baseline gap-1">
                             <span className="text-lg font-bold text-slate-900">R$</span>
                             <span className="text-6xl font-black text-brand-primary">27,00</span>
                          </div>
                          <span className="text-slate-500 font-medium">Acesso Vitalício em PDF</span>
                       </div>
                    </div>

                    <div className="space-y-3 mb-10">
                       {[
                         "Kit 'Acabei, Professora!'",
                         "Atividades de Português e Matemática",
                         "Lógica, Criatividade e Socioemocional",
                         "Todos os Bônus Especiais",
                         "Cartazes de Apoio para sala",
                         "Garantia de Satisfação"
                       ].map((item, i) => (
                         <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                            <span>{item}</span>
                         </div>
                       ))}
                    </div>

                    <Button className="w-full text-xl py-6 mb-6">
                       SIM, QUERO MEU KIT AGORA
                    </Button>

                    <div className="flex justify-center flex-col items-center gap-4">
                       <div className="flex gap-4 opacity-50 grayscale hover:grayscale-0 transition-all">
                          {/* Payment methods icons would go here, simplified for demo */}
                          <div className="w-10 h-6 bg-slate-200 rounded"></div>
                          <div className="w-10 h-6 bg-slate-200 rounded"></div>
                          <div className="w-10 h-6 bg-slate-200 rounded"></div>
                       </div>
                       <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
                          <ShieldCheck className="w-4 h-4" /> Pagamento 100% Seguro
                       </div>
                    </div>
                  </motion.div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. SEÇÃO DE GARANTIA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto rounded-3xl bg-slate-50 p-12 flex flex-col md:flex-row gap-12 items-center text-center md:text-left border border-slate-100">
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
          </div>
        </div>
      </section>

      {/* 12. SEÇÃO DE DEPOIMENTOS */}
      <section className="py-24 bg-brand-mint/20">
        <div className="container mx-auto px-4">
          <SectionTitle subtitle="O que outras educadoras estão dizendo.">
            Comunidade de Professoras
          </SectionTitle>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: "Prof. Carla Silva", role: "Fundamental 1", text: "Usei com minha turma do 2º ano e foi ótimo. Os alunos que terminavam rápido agora já sabem que têm uma missão para fazer. Me sinto muito mais no controle!" },
              { name: "Luciana M.", role: "Pedagoga", text: "Me ajudou muito nos momentos em que alguns alunos terminavam antes. O material é lindo e flui super bem. Ficou tudo mais organizado na escola." },
              { name: "Patrícia Souza", role: "Alfabetizadora", text: "Material bonito, prático e muito fácil de imprimir. Meus pequenos adoraram os desafios e pararam de correr pela sala. Recomendo muito!" }
            ].map((d, i) => (
              <Card key={i} className="relative pt-12 italic text-slate-700 bg-white/80 backdrop-blur">
                 <div className="absolute top-8 left-8 text-6xl text-brand-mint select-none pointer-events-none">“</div>
                 <p className="mb-6 relative z-10 leading-relaxed">
                   {d.text}
                 </p>
                 <div className="flex items-center gap-4 not-italic">
                    <div className="w-12 h-12 rounded-full bg-slate-200 border-2 border-white shadow-sm flex items-center justify-center font-bold text-slate-400">
                       {d.name.charAt(0)}
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
            ))}
          </div>
          <div className="mt-12 text-center text-slate-500 text-sm">
             Área destinada a depoimentos de clientes reais. Mostre os resultados que sua solução gera!
          </div>
        </div>
      </section>

      {/* 13. SEÇÃO DE FAQ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
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
      <section className="py-32 bg-brand-yellow relative text-center">
        <div className="container mx-auto px-4 relative z-10">
           <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 max-w-4xl mx-auto leading-tight">
             Na próxima vez que um aluno disser “professora, já terminei”, você não vai precisar improvisar.
           </h2>
           <p className="text-xl text-slate-700 mb-12 max-w-2xl mx-auto">
             Tenha em mãos uma solução profissional para manter seus alunos aprendendo e sua sala em total harmonia.
           </p>
           <Button onClick={scrollToOffer} className="shadow-2xl">
              QUERO BAIXAR O KIT AGORA
           </Button>
           <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm font-bold text-slate-700 uppercase tracking-widest">
              <span className="flex items-center gap-1"><Download className="w-4 h-4" /> Download Imediato</span>
              <span className="flex items-center gap-1"><Printer className="w-4 h-4" /> Pronto para Imprimir</span>
              <span className="flex items-center gap-1"><Heart className="w-4 h-4" /> Amado por +1000 Professoras</span>
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
