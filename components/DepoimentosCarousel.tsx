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
              text: "O atendimento do Leandro mudou minha vida. Sua abordagem acolhedora e profissional me ajudou a superar momentos difíceis e encontrar um novo sentido para minha vida.",
              name: "Maria Silva",
              rating: 5
            },
            {
              text: "Nunca imaginei que a terapia online poderia ser tão efetiva. O Leandro consegue criar um ambiente seguro mesmo à distância, e suas técnicas são realmente transformadoras.",
              name: "João Santos",
              rating: 5
            },
            {
              text: "Como empreendedor, sempre tive dificuldades com ansiedade. O trabalho do Leandro me ajudou a desenvolver ferramentas práticas para lidar com o estresse do dia a dia.",
              name: "Pedro Oliveira",
              rating: 5
            },
            {
              text: "A terapia com o Leandro me ajudou a superar um luto muito difícil. Sua sensibilidade e profissionalismo foram fundamentais nesse processo.",
              name: "Ana Costa",
              rating: 5
            },
            {
              text: "Depois de anos tentando diferentes abordagens, encontrei no Leandro um profissional que realmente entende as questões masculinas. Recomendo fortemente!",
              name: "Carlos Mendes",
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