import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Clock, Sparkles, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import mimoPet from "@/assets/mimo-pet.png";

const Exploration = () => {
  const navigate = useNavigate();
  const [energy, setEnergy] = useState(100);
  const [isExploring, setIsExploring] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [selectedAdventure, setSelectedAdventure] = useState<any>(null);

  const adventures = [
    {
      id: 1,
      name: "Floresta Tranquila",
      duration: 30,
      energyCost: 20,
      rewards: "10-15 cristais + 1 item",
      emoji: "🌲",
      description: "Uma caminhada relaxante pela floresta",
    },
    {
      id: 2,
      name: "Cachoeira Mágica",
      duration: 60,
      energyCost: 40,
      rewards: "25-35 cristais + 2 itens",
      emoji: "💧",
      description: "Explore as águas cristalinas",
    },
    {
      id: 3,
      name: "Montanha Misteriosa",
      duration: 120,
      energyCost: 60,
      rewards: "50-70 cristais + item raro",
      emoji: "⛰️",
      description: "Uma aventura desafiadora",
    },
  ];

  useEffect(() => {
    if (isExploring && timeRemaining > 0) {
      const timer = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            completeExploration();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isExploring, timeRemaining]);

  const startExploration = (adventure: any) => {
    if (energy < adventure.energyCost) {
      toast.error("Energia insuficiente! Complete mais tarefas.");
      return;
    }

    setEnergy(energy - adventure.energyCost);
    setSelectedAdventure(adventure);
    setIsExploring(true);
    setTimeRemaining(adventure.duration * 60);
    toast.success(`${adventure.name} iniciada! 🎒`);
  };

  const completeExploration = () => {
    const rewards = Math.floor(Math.random() * 20) + 10;
    setIsExploring(false);
    setSelectedAdventure(null);
    toast.success(`Exploração completa! +${rewards} cristais 🎉`);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-sm border-b border-border shadow-soft">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="rounded-full"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              <h1 className="text-xl font-bold">Explorações</h1>
            </div>
            <div className="flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-bold">{energy}</span>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 max-w-4xl">
        {isExploring ? (
          <Card className="p-6 text-center space-y-6">
            <div className="space-y-2">
              <span className="text-6xl">{selectedAdventure?.emoji}</span>
              <h2 className="text-2xl font-bold">{selectedAdventure?.name}</h2>
              <p className="text-muted-foreground">
                Mimo está explorando...
              </p>
            </div>

            <div className="space-y-2">
              <img
                src={mimoPet}
                alt="Mimo"
                className="w-32 h-32 mx-auto animate-bounce"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2 text-2xl font-bold text-primary">
                <Clock className="w-6 h-6" />
                {formatTime(timeRemaining)}
              </div>
              <Progress
                value={
                  ((selectedAdventure?.duration * 60 - timeRemaining) /
                    (selectedAdventure?.duration * 60)) *
                  100
                }
                className="h-2"
              />
            </div>

            <p className="text-sm text-muted-foreground">
              O Mimo voltará em breve com recompensas! ✨
            </p>
          </Card>
        ) : (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold">
                Escolha uma Aventura para o Mimo
              </h2>
              <p className="text-muted-foreground">
                Quanto mais longa a exploração, melhores as recompensas!
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {adventures.map((adventure) => (
                <Card
                  key={adventure.id}
                  className="p-4 border-2 hover:border-primary/50 transition-all hover:scale-105"
                >
                  <div className="space-y-4">
                    <div className="aspect-square bg-gradient-to-br from-secondary/20 to-accent/20 rounded-xl flex items-center justify-center">
                      <span className="text-6xl">{adventure.emoji}</span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-bold text-lg">{adventure.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {adventure.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-xs">
                          <Clock className="w-3 h-3 mr-1" />
                          {adventure.duration}min
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          <Sparkles className="w-3 h-3 mr-1" />
                          {adventure.energyCost}
                        </Badge>
                      </div>

                      <div className="pt-2">
                        <p className="text-xs text-primary font-bold">
                          Recompensas:
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {adventure.rewards}
                        </p>
                      </div>
                    </div>

                    <Button
                      onClick={() => startExploration(adventure)}
                      disabled={energy < adventure.energyCost}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl"
                    >
                      {energy < adventure.energyCost
                        ? "Energia Insuficiente"
                        : "Iniciar Exploração"}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Exploration;
