"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import useEmblaCarousel from 'embla-carousel-react'

export function DepoimentosCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const scrollPrev = () => {
    if (emblaApi) emblaApi.scrollPrev()
  }

  const scrollNext = () => {
    if (emblaApi) emblaApi.scrollNext()
  }

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -mx-4">
          {[
            {
              text: "Após 10 meses de acompanhamento, tenho uma aceitação melhor das situações e consigo permanecer mais calmo diante dos problemas, buscando a melhor forma de resolvê-los ou aceitá-los. Alguns traumas de infância foram curados, impactando positivamente na minha autoestima e aumentando a felicidade com a vida presente.",
              name: "R.N.A.",
              rating: 5
            },
            {
              text: "Para mim, o seu maior diferencial  profissional são] As técnicas utilizadas para liberar emoções, ressignificar memórias.. não são apenas conversas, conseguimos chegar ao fundo do problema. Isso tem extrema importância",
              name: "C.X.",
              rating: 5
            },
            {
              text: "como você descreveria o meu trabalho para outra pessoa que pudesse se beneficiar dele? Que você vai na raiz dos problemas de infância e isso muda 100% o comportamento e a forma como vemos o mundo como adultos. Não é um processo fácil, mas vale e muito a pena pra quem busca consciência e cura!",
              name: "J.F.",
              rating: 5
            },
            {
              text: "como você descreveria o meu trabalho para outra pessoa que pudesse se beneficiar dele? Descreveria q a forma de abordagem e as técnicas propiciam resultados reais.",
              name: "C.C.A",
              rating: 5
            },
            {
              text: "Incrível e completo, trabalha a emoção e acaba por aliviar sintomas físicos e psicossomáticos",
              name: "G.N.A",
              rating: 5
            },
            {
              text: "Excelente psicologo, humano e profissional! Me ajudou nos momentos que eu mais precisar, e principalmente a lidar com meus conflitos internos, sempre indico ele! Sou grata pelo seu trabalho Doutor!",
              name: "Eloyna Perdoncini",
              rating: 5
            },
            {
              text: "Profissional de excelência, assertivo nas análises e observações que são pontuadas com sensibilidade e empatia. Super recomendo.",
              name: "Simara Mineto",
              rating: 5
            }
          ].map((depoimento, index) => (
            <div key={index} className="min-w-full px-4">
              <Card className="border-primary-100">
                <CardContent className="pt-6">
                  <p className="text-dark-600 mb-6 italic text-lg">
                    "{depoimento.text}"
                  </p>
                  <div className="flex justify-center mb-4">
                    {[...Array(depoimento.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-primary font-semibold">{depoimento.name}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <button 
        onClick={scrollPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
      >
        <ChevronLeft className="w-6 h-6 text-primary" />
      </button>
      <button 
        onClick={scrollNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
      >
        <ChevronRight className="w-6 h-6 text-primary" />
      </button>
    </div>
  )
} 