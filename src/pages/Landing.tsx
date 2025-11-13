import { Star, Heart, Target, Users, BookHeart, Smile, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SimpleLink from "@/components/SimpleLink";
import mimoPet from "@/assets/mimo-pet.png";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  const benefits = [
    {
      icon: Heart,
      title: "Pet Virtual que Cresce com Você",
      description: "Cuide do seu Mimo e veja ele crescer conforme você cuida de si mesmo",
    },
    {
      icon: Target,
      title: "Metas de Autocuidado",
      description: "Pequenas ações diárias que fazem grande diferença na sua saúde mental",
    },
    {
      icon: Star,
      title: "Sistema de Recompensas",
      description: "Ganhe cristais e itens exclusivos para customizar seu pet",
    },
    {
      icon: Users,
      title: "Conecte-se com Amigos",
      description: "Compartilhe sua jornada e envie carinho para outros cuidadores",
    },
    {
      icon: BookHeart,
      title: "Modo Reflexão",
      description: "Diário pessoal e registro de humor para acompanhar seu bem-estar",
    },
    {
      icon: Smile,
      title: "Sem Pressão ou Julgamentos",
      description: "Ambiente acolhedor e livre de cobranças para sua jornada",
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Crie Seu Mimo",
      description: "Escolha um nome fofo para seu pet virtual - uma capivara brasileira cheia de carinho",
    },
    {
      number: "2",
      title: "Complete Metas Diárias",
      description: "Pequenas ações de autocuidado como beber água, alongar ou agradecer",
    },
    {
      number: "3",
      title: "Ganhe Recompensas",
      description: "Receba cristais para comprar roupas, acessórios e itens para seu Mimo",
    },
    {
      number: "4",
      title: "Veja Seu Pet Crescer",
      description: "Seu progresso se reflete no crescimento e felicidade do seu Mimo",
    },
  ];

  const plans = [
    {
      name: "Gratuito",
      price: "R$ 0",
      features: [
        "3 metas diárias",
        "Sistema de cristais",
        "Pet virtual básico",
        "Explorações",
      ],
      cta: "Começar Grátis",
      popular: false,
    },
    {
      name: "Mimo",
      price: "R$ 9,90/mês",
      features: [
        "Metas ilimitadas",
        "Modo Reflexão",
        "Proteção contra ausência",
        "Bônus semanais",
        "Skins exclusivas",
      ],
      cta: "Assinar Mimo",
      popular: true,
    },
    {
      name: "Mimo Plus",
      price: "R$ 29,90/mês",
      features: [
        "Tudo do Mimo",
        "Itens ilimitados",
        "Função social completa",
        "Modo Terapia",
        "50 diamantes/mês",
        "Sem anúncios",
      ],
      cta: "Assinar Mimo Plus",
      popular: false,
    },
  ];

  const testimonials = [
    {
      quote: "O Mimo me ajudou a criar uma rotina de autocuidado sem me sentir pressionada. É como ter um amigo virtual me incentivando!",
      author: "Ana Carolina",
      role: "Designer",
      emoji: "👩‍🎨",
    },
    {
      quote: "Finalmente um app de bem-estar que não parece mais uma obrigação. O sistema de recompensas é viciante no melhor sentido!",
      author: "Pedro Silva",
      role: "Desenvolvedor",
      emoji: "👨‍💻",
    },
    {
      quote: "Estou usando há 3 meses e minha ansiedade diminuiu muito. Ver meu Mimo crescer me motiva a cuidar de mim mesma.",
      author: "Juliana Santos",
      role: "Estudante",
      emoji: "👩‍🎓",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src={mimoPet} alt="Mimo" className="w-10 h-10" />
              <span className="text-xl font-bold text-primary">Mimo</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <SimpleLink href="#recursos">Recursos</SimpleLink>
              <SimpleLink href="#como-funciona">Como Funciona</SimpleLink>
              <SimpleLink href="#precos">Preços</SimpleLink>
              <SimpleLink href="#faq">FAQ</SimpleLink>
            </nav>
            <Button onClick={() => navigate("/app")} className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Começar Agora
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge variant="secondary" className="w-fit">
              ✨ Transforme autocuidado em diversão
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Cuide de você.
              <br />
              <span className="text-primary">Cuide do seu Mimo.</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              O aplicativo de autocuidado gamificado que transforma pequenos hábitos saudáveis em uma jornada divertida e emocionalmente recompensadora. Sem pressão, sem julgamentos. 🦫✨
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={() => navigate("/app")} size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Começar Gratuitamente <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg">
                Ver Como Funciona
              </Button>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-5 h-5 fill-energy text-energy" />
                  ))}
                </div>
                <span className="text-sm font-medium">4.9/5</span>
              </div>
              <div className="text-sm text-muted-foreground">2.500+ usuários</div>
              <Badge variant="secondary" className="bg-primary/10 text-primary border-0">
                100% Gratuito
              </Badge>
            </div>
          </div>

          {/* Pet Preview Card */}
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-border">
            <div className="space-y-6">
              <div className="text-center">
                <img src={mimoPet} alt="Mimo" className="w-48 h-48 mx-auto animate-float" />
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold">Conheça o Mimo!</h3>
                <p className="text-muted-foreground">Seu companheiro virtual de autocuidado</p>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Badge variant="outline" className="bg-card border-primary/20">
                  🎯 Metas Diárias
                </Badge>
                <Badge variant="outline" className="bg-card border-primary/20">
                  ✨ Recompensas
                </Badge>
              </div>
              <div className="flex items-center justify-center gap-4">
                <Badge className="bg-energy/10 text-energy border-energy/20">
                  +50 cristais
                </Badge>
                <Badge className="bg-love/10 text-love border-love/20">
                  Pet feliz!
                </Badge>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="recursos" className="bg-secondary/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Por que escolher o <span className="text-primary">Mimo</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Autocuidado gamificado que funciona de verdade
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="como-funciona" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Como funciona?</h2>
            <p className="text-lg text-muted-foreground">Simples, intuitivo e divertido</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="precos" className="bg-secondary/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Planos para todos</h2>
            <p className="text-lg text-muted-foreground">Comece grátis e faça upgrade quando quiser</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className={`p-8 relative ${plan.popular ? 'border-primary border-2 shadow-lg' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                    Popular
                  </Badge>
                )}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-3xl font-bold text-primary">{plan.price}</p>
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={() => navigate("/premium")}
                    className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90 text-primary-foreground' : ''}`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.cta}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8">
            💡 Economize até 20% com o plano anual
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">O que dizem nossos usuários</h2>
            <p className="text-lg text-muted-foreground">Milhares de pessoas já transformaram seu autocuidado</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="space-y-4">
                  <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{testimonial.emoji}</div>
                    <div>
                      <p className="font-bold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="text-4xl">🦫✨</div>
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Pronto para começar sua jornada?
            </h2>
            <p className="text-lg text-white/90">
              Junte-se a milhares de pessoas que já transformaram o autocuidado em uma experiência divertida e recompensadora.
            </p>
            <Button onClick={() => navigate("/app")} size="lg" variant="secondary" className="text-lg px-8">
              Criar Meu Mimo Agora
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2024 Mimo - Seu Pet de Autocuidado. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
