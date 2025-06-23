import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { DepoimentosCarousel } from "@/components/DepoimentosCarousel"
import {
  Heart,
  Brain,
  Users,
  Shield,
  Star,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Award,
  Lightbulb,
  MessageCircle,
  Instagram,
  Facebook,
  Zap,
  Target,
  Eye,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PsicologoLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-secondary-50">
      {/* Social Media Bar */}
      <div className="bg-[#5FA6DA]/20 text-dark py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-end space-x-4">
            <Link
              href="https://www.instagram.com/leandrononato.psi"
              target="_blank"
              className="flex items-center space-x-2 text-primary hover:text-primary-600 transition-colors"
            >
              <Instagram className="w-4 h-4" />
              <span className="text-sm">@leandrononato.psi</span>
            </Link>
            <Link
              href="https://www.facebook.com/leandrononato.psi"
              target="_blank"
              className="flex items-center space-x-2 text-primary hover:text-primary-600 transition-colors"
            >
              <Facebook className="w-4 h-4" />
              <span className="text-sm">Leandro Nonato Ramalho</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-primary-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center justify-between w-full md:w-auto">
              <div className="flex items-center space-x-2">
                <Image
                  src="/logoleandro.png"
                  alt="Logo Leandro Nonato Ramalho"
                  width={160}
                  height={120}
                  className="w-52 md:w-36 lg:w-48 h-auto max-w-full object-contain bg-transparent"
                  priority
                />
              </div>
              <Button asChild className="bg-whatsapp hover:bg-whatsapp-600 text-white font-bold px-2 py-1 text-xs md:px-6 md:py-3 md:text-base md:hidden">
                <Link href="https://wa.me/5567992619987" target="_blank">
                   <MessageCircle className="w-4 h-4 mr-1" />
                  AGENDAR CONSULTA
                </Link>
              </Button>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="#tratamentos" className="text-dark hover:text-primary transition-colors">
                Tratamentos
              </Link>
              <Link href="#diferenciais" className="text-dark hover:text-primary transition-colors">
                Diferenciais
              </Link>
              <Link href="#depoimentos" className="text-dark hover:text-primary transition-colors">
                Depoimentos
              </Link>
              <Link href="#sobre" className="text-dark hover:text-primary transition-colors">
                Sobre Mim
              </Link>
              <Link href="#faq" className="text-dark hover:text-primary transition-colors">
                FAQ
              </Link>
            </nav>
            <Button asChild className="bg-whatsapp hover:bg-whatsapp-600 text-white font-bold hidden md:flex">
              <Link href="https://wa.me/5567992619987" target="_blank">
              <MessageCircle className="w-5 h-5 mr-2" />
                AGENDE SUA CONSULTA
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-10 md:py-20 px-4 bg-gradient-to-r from-[#5FA6DA]/20 via-transparent to-[#3A71A3]/15">
        <div className="container mx-auto max-w-8xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
             
                <div className="text-lg text-primary font-medium">CRP 14/07892-7</div>
                <h1 className="text-4xl lg:text-6xl font-bold text-dark leading-tight">
                  Psicólogo
                  <span className="text-primary"> Leandro Nonato Ramalho</span>
                </h1>
                 <p className="text-lg text-primary"><strong>Atendimento Presencial em Campo Grande MS - ONLINE para todo Brasil.</strong></p>
                
               {/* <p className="text-xl text-dark-600 leading-relaxed">
                  Se você busca um espaço onde possa se sentir à vontade para ser quem você é, sem julgamentos, e
                  encontrar um caminho para lidar com suas questões, seja bem-vindo.
                </p> */}
               
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-whatsapp hover:bg-whatsapp-600 text-white font-bold">
                  <Link href="https://wa.me/5567992619987" target="_blank">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    AGENDE SUA CONSULTA
                  </Link>
                </Button>
              
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-dark">9+</div>
                  <div className="text-sm text-primary">Anos de Experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-dark">13+</div>
                  <div className="text-sm text-primary">Anos de Terapia Pessoal</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-dark">+12.000 Horas</div>
                  <div className="text-sm text-primary">de Atendimentos Realizados</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl transform rotate-6"></div>
              <Image
                src="/leandroheader2.jpg?height=600&width=500"
                alt="Psicólogo Leandro Nonato Ramalho"
                width={600}
                height={600}
                className="relative rounded-3xl shadow-2xl mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* O que te traz aqui? */}
      <section id="tratamentos" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-8xl">
          <div className="text-center mb-16">
            <Badge className="bg-primary-100 text-primary mb-4">Especialidades</Badge>
            <h2 className="text-4xl font-bold text-dark mb-4">O que te traz aqui?</h2>
            <p className="text-xl text-dark-600 max-w-3xl mx-auto">
              A vida anda te desafiando? As emoções estão à flor da pele? No meu consultório, você encontra um espaço
              para colocar as coisas em perspectiva, entender o que está acontecendo e encontrar um jeito mais leve de
              seguir em frente. Podemos conversar sobre:
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Sintomas Físicos de Origem Emocional",
                description:
                  "Seu corpo está falando o que a mente não consegue expressar? Podemos investigar a raiz emocional dos seus sintomas e encontrar caminhos para o alívio e a cura.",
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Ansiedade",
                description:
                  "Sufocado pela preocupação? Te ajudo a respirar fundo, compreender o que te aflige e encontrar meios para acalmar a mente e o corpo.",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Depressão",
                description:
                  "Perdeu a alegria de viver? Juntos, vamos resgatar o prazer nas pequenas coisas, fortalecer sua autoestima e encontrar um novo sentido para a vida.",
              },
              {
                icon: <Brain className="w-8 h-8" />,
                title: "Relacionamentos e Conflitos Familiares",
                description:
                  "Seus relacionamentos estão te desgastando ou em crise? Podemos identificar os padrões que se repetem e construir vínculos mais saudáveis e harmoniosos.",
              },
            ].map((tratamento, index) => (
              <Card
                key={index}
                className="border-primary-100 hover:shadow-lg transition-shadow duration-300 hover:border-primary-200"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary mb-4">
                    {tratamento.icon}
                  </div>
                  <CardTitle className="text-dark">{tratamento.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-dark-600">{tratamento.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Traumas e Luto",
                description:
                  "Marcas do passado te impedem de seguir em frente? Com técnicas delicadas e eficazes, te ajudo a processar essas experiências e atravessar essas dores.",
              },
              {
                icon: <Lightbulb className="w-8 h-8" />,
                title: "Questões Existenciais e Identidade",
                description:
                  "Se sente perdido, sem saber quem você é ou o que quer da vida? A terapia pode ser um espaço para se reconectar com sua essência e descobrir seu propósito.",
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Dificuldades Profissionais e Financeiras",
                description:
                  "O trabalho e o dinheiro estão te causando sofrimento? Com minha experiência em Psicologia Organizacional e em Psicologia do Dinheiro, compreendo e ajudo nas dores de empreendedores.",
              },
            ].map((tratamento, index) => (
              <Card
                key={index}
                className="border-primary-100 hover:shadow-lg transition-shadow duration-300 hover:border-primary-200"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary mb-4">
                    {tratamento.icon}
                  </div>
                  <CardTitle className="text-dark">{tratamento.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-dark-600">{tratamento.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-lg text-primary mb-6">
              <strong>Atendimento Flexível:</strong> Consultas presenciais em Campo Grande - MS e online para qualquer
              lugar do Brasil.
            </p>
            <Button asChild size="lg" className="bg-whatsapp hover:bg-whatsapp-600 text-white font-bold">
              <Link href="https://wa.me/5567992619987" target="_blank">
                <MessageCircle className="w-5 h-5 mr-2" />
                AGENDE SUA CONSULTA
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section id="diferenciais" className="py-20 px-4 bg-gradient-to-r from-[#5FA6DA]/20 via-transparent to-[#3A71A3]/15">
        <div className="container mx-auto max-w-8xl">
          <div className="text-center mb-16">
            <Badge className="bg-primary-100 text-primary mb-4">Por que escolher</Badge>
            <h2 className="text-4xl font-bold text-dark mb-4">O que me diferencia?</h2>
            <p className="text-xl text-dark-600 max-w-3xl mx-auto">
              Minha abordagem combina experiência clínica, formação continuada e um olhar humanizado para cada paciente.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="w-12 h-12" />,
                title: "Um olhar que integra diferentes saberes",
                description:
                  "Combino a psicologia tradicional, da Abordagem Centrada na Pessoa, com técnicas inovadoras para te oferecer um cuidado completo que respeite sua individualidade e necessidade.",
              },
              {
                icon: <Zap className="w-12 h-12" />,
                title: "Efeitos terapêuticos",
                description:
                  "Ao integrar diferentes abordagens, te ajudo não só a clarear e entender as causas do seu sofrimento, mas também a sentir maior alívio e bem-estar em relação a elas.",
              },
              {
                icon: <Brain className="w-12 h-12" />,
                title: "Formação sólida e atualizada",
                description:
                  "Estou sempre estudando e aprimorando meu trabalho, com especializações nacionais e internacionais e grupos de estudo contínuos.",
              },
              {
                icon: <Target className="w-12 h-12" />,
                title: "Plano terapêutico personalizado",
                description:
                  "Cada pessoa é única. Por isso, crio caminhos terapêuticos individualizados, respeitando sua história, seu tempo e sua necessidade.",
              },
            ].map((diferencial, index) => (
              <div
                key={index}
                className="text-center rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-primary-100 hover:border-primary-200 bg-white/50 backdrop-blur-sm"
              >
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-primary mx-auto mb-6 shadow-lg">
                  {diferencial.icon}
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">{diferencial.title}</h3>
                <p className="text-dark-600">{diferencial.description}</p>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {[
              {
                icon: <Eye className="w-12 h-12" />,
                title: "Ambiente facilitador",
                description:
                  "Meu consultório foi pensado para te transmitir calma, privacidade e conexão - um espaço onde você pode simplesmente ser você.",
              },
              {
                icon: <Heart className="w-12 h-12" />,
                title: "Acolhimento verdadeiro",
                description:
                  "Minha escuta atenta e empática tende a te proporcionar alívio desde as primeiras consultas.",
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: "Cuidados emergenciais",
                description:
                  "Tenho expertise em trabalhar com crises e surtos, promovendo alívios rápidos para estes casos.",
              },
            ].map((diferencial, index) => (
              <div
                key={index}
                className="text-center rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-primary-100 hover:border-primary-200 bg-white/50 backdrop-blur-sm"
              >
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-primary mx-auto mb-6 shadow-lg">
                  {diferencial.icon}
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">{diferencial.title}</h3>
                <p className="text-dark-600">{diferencial.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary-50 font-bold">
              <Link href="https://wa.me/5567992619987" target="_blank">
                <MessageCircle className="w-5 h-5 mr-2" />
                AGENDE SUA CONSULTA
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="bg-primary-100 text-primary mb-4">Experiências</Badge>
            <h2 className="text-4xl font-bold text-dark mb-4">O que dizem meus pacientes</h2>
            <p className="text-xl text-dark-600 max-w-3xl mx-auto">
              Histórias reais de transformação e crescimento pessoal.
            </p>
          </div>
          
          <DepoimentosCarousel />

          <div className="text-center mt-8">
            <Button asChild size="lg" className="bg-whatsapp hover:bg-whatsapp-600 text-white font-bold">
              <Link href="https://wa.me/5567992619987" target="_blank">
                <MessageCircle className="w-5 h-5 mr-2" />
                AGENDE SUA CONSULTA
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sobre Mim */}
      <section id="sobre" className="py-20 px-4 bg-gradient-to-r from-[#5FA6DA]/20 via-transparent to-[#3A71A3]/15">
        <div className="container mx-auto max-w-8xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-16 bg-gradient-to-r from-primary to-secondary rounded-2xl transform rotate"></div>
              <Image
                src="/leandrosobremim.jpg?height=500&width=400"
                alt="Psicólogo Leandro Nonato Ramalho"
                width={400}
                height={600}
                className="relative rounded-2xl mx-auto"
                priority
              />
            </div>
            <div className="space-y-6">
              <Badge className="bg-primary-100 text-primary">Sobre mim</Badge>
              <h2 className="text-4xl font-bold text-dark">Conheça o Psicólogo Leandro Nonato Ramalho</h2>
              <p className="text-sm text-dark-600 leading-relaxed">
                Sou <span className="font-bold text-primary">psicólogo clínico</span> com <span className="font-bold text-primary">9 anos de experiência</span>. Tenho 35 anos, sou casado, pai de dois filhos e atuo em
                Campo Grande - MS.
              </p>
              <p className="text-sm text-dark-600 leading-relaxed">
                Me formei pela <span className="font-bold text-primary">UFMS</span> e, para o trabalho na clínica me especializei na <span className="font-bold text-primary">Psicoterapia Centrada na Pessoa</span>,
                <span className="font-bold text-primary"> Bioneuroemoção</span> e <span className="font-bold text-primary">Focalização do Relacionamento Interior</span>. Outras formações que complementam meu olhar
                clínico são a <span className="font-bold text-primary">Decodificação Biológica dos Sintomas</span>, <span className="font-bold text-primary">Psicologia do Dinheiro</span> e a <span className="font-bold text-primary">Meta-PNL</span>.
              </p>
              <p className="text-sm text-dark-600 leading-relaxed">
                Tenho mais de <span className="font-bold text-primary">13 anos de terapia pessoal</span>, o que me permite estar mais inteiro e presente para quem me
                procura, além de participar de <span className="font-bold text-primary">supervisão clínica</span>, o que amplia minha percepção e me ajuda a avançar nos
                casos mais desafiadores.
              </p>
              <p className="text-sm text-dark-600 leading-relaxed">
                Coordenei por 3 anos o <span className="font-bold text-primary">Coletivo M.A.S.S.A.</span>, promovendo rodas de conversa, lives e palestras refletindo
                sobre masculinidades mais saudáveis para os homens, o que nos trouxe <span className="font-bold text-primary">reconhecimento público</span> e
                <span className="font-bold text-primary"> visibilidade nacional</span>.
              </p>
              <p className="text-sm text-dark-600 leading-relaxed">
                Acredito que a terapia é um <span className="font-bold text-primary">espaço de encontro</span>, onde podemos construir juntos um caminho para uma vida
                mais <span className="font-bold text-primary">leve, feliz e significativa</span>. Se você busca um profissional que te entenda de verdade e que te ajude
                a encontrar suas próprias respostas, entre em contato.
              </p>
             
              <Button asChild size="lg" className="bg-whatsapp hover:bg-whatsapp-600 text-white font-bold">
                <Link href="https://wa.me/5567992619987" target="_blank">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  AGENDE SUA CONSULTA
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-8xl">
          <div className="text-center mb-16">
            <Badge className="bg-primary-100 text-primary mb-4">Perguntas Frequentes</Badge>
            <h2 className="text-4xl font-bold text-dark mb-8">Suas dúvidas, minhas respostas</h2>
            {/* <p className="text-xl text-dark-600 max-w-3xl mx-auto">
              Aqui estão algumas das perguntas mais comuns que recebo sobre o processo terapêutico, atendimento e outros
              tópicos.
            </p> */}
          </div>
          <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold text-dark hover:text-primary transition-colors no-underline hover:no-underline">
                Como funciona a terapia online?
              </AccordionTrigger>
              <AccordionContent className="text-dark-600 text-base leading-relaxed">
                A terapia online funciona de forma muito similar à presencial, com a vantagem da flexibilidade. Utilizamos
                plataformas seguras para as sessões, garantindo a privacidade e o sigilo. Você pode realizar a sessão do
                conforto da sua casa ou de qualquer lugar com acesso à internet, desde que seja um ambiente tranquilo e
                privado.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-semibold text-dark hover:text-primary transition-colors no-underline hover:no-underline">
                Qual a duração de uma sessão e com que frequência?
              </AccordionTrigger>
              <AccordionContent className="text-dark-600 text-base leading-relaxed">
                As sessões de terapia têm duração de 50 minutos e, geralmente, são realizadas uma vez por semana. A
                frequência pode ser ajustada conforme a sua necessidade e o seu processo terapêutico, sempre em comum
                acordo.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-semibold text-dark hover:text-primary transition-colors no-underline hover:no-underline">
                Quais são as formas de pagamento?
              </AccordionTrigger>
              <AccordionContent className="text-dark-600 text-base leading-relaxed">
                Aceito diversas formas de pagamento, incluindo PIX, transferência bancária e boleto. Os detalhes
                são combinados individualmente para maior comodidade.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-semibold text-dark hover:text-primary transition-colors no-underline hover:no-underline">
                A terapia é sigilosa?
              </AccordionTrigger>
              <AccordionContent className="text-dark-600 text-base leading-relaxed">
                Sim, o sigilo é um pilar fundamental da prática psicológica. Todas as informações compartilhadas em sessão
                são estritamente confidenciais, conforme o Código de Ética Profissional do Psicólogo. Somente em casos de
                risco iminente a si mesmo ou a terceiros, ou por determinação judicial, o sigilo poderá ser quebrado, sempre
                com sua ciência.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-semibold text-dark hover:text-primary transition-colors no-underline hover:no-underline">
                Você atende convênios?
              </AccordionTrigger>
              <AccordionContent className="text-dark-600 text-base leading-relaxed">
                Não atendo diretamente por convênios. No entanto, muitos planos de saúde oferecem reembolso para sessões de
                psicoterapia. Posso fornecer o recibo e os documentos necessários para que você solicite o reembolso junto ao
                seu convênio.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="bg-whatsapp hover:bg-whatsapp-600 text-white font-bold">
              <Link href="https://wa.me/5567992619987" target="_blank">
                <MessageCircle className="w-5 h-5 mr-2" />
                AGENDE SUA CONSULTA
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      {/* <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Pronto para começar sua jornada de transformação?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Agende sua primeira consulta hoje mesmo e dê o primeiro passo em direção ao seu bem-estar emocional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-primary-50 font-bold">
              <Link href="https://wa.me/5567992619987" target="_blank">
                <Phone className="w-5 h-5 mr-2" />
                AGENDE SUA CONSULTA
              </Link>
            </Button>
          
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="bg-dark text-white py-12 px-4">
        <div className="container mx-auto max-w-8xl">
          <div className="grid md:grid-cols-4 gap-8 mx-auto">
            <div className="space-y-4">
              <Image
                src="/logoleandro.png"
                alt="Logo Leandro Nonato Ramalho"
                width={160}
                height={120}
                className="w-52 md:w-36 lg:w-48 h-auto max-w-full object-contain bg-transparent"
              />
              <p className="text-white">Cuidando da sua saúde mental com profissionalismo e humanização.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-white">+55 67 99261-9987</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-white">Nonatoleandro01@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-9 h-9 text-primary" />
                  <span className="text-white">
                    Rua Raul Pires Barbosa, 1119, Chácara Cachoeira, Campo Grande - MS
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Redes Sociais</h4>
              <div className="space-y-3">
                <Link
                  href="https://www.instagram.com/leandrononato.psi"
                  target="_blank"
                  className="flex items-center space-x-3 text-white hover:text-white transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  <span>@leandrononato.psi</span>
                </Link>
                <Link
                  href="https://www.facebook.com/leandrononato.psi"
                  target="_blank"
                  className="flex items-center space-x-3 text-white hover:text-white transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                  <span>Leandro Nonato Ramalho</span>
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Desenvolvido por</h4>
              <div className="flex items-center space-x-2">
                <Image
                  src="/logohwbranco.png"
                  alt="HW - Desenvolvimento Web"
                  width={120}
                  height={36}
                  className="h-14 w-auto"
                />
              </div>
            </div>
          </div>
          <div className="border-t border-dark-600 mt-8 pt-8 flex flex-col items-center">
            <p className="text-white text-center">
              © {new Date().getFullYear()} Leandro Nonato Ramalho - Psicólogo. Todos os direitos reservados.
            </p>
            <p className="text-primary-400 text-sm mt-2 text-center">
              CRP 14/07892-7 
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
