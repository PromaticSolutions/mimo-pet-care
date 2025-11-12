import { useState } from "react";
import { PetDisplay } from "@/components/PetDisplay";
import { TaskList } from "@/components/TaskList";
import { CrystalCounter } from "@/components/CrystalCounter";
import { ShopPreview } from "@/components/ShopPreview";
import { ExplorationCard } from "@/components/ExplorationCard";
import { Button } from "@/components/ui/button";
import { Menu, Settings, Users, Crown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const [crystals, setCrystals] = useState(0);
  const [energy, setEnergy] = useState(75);
  const [happiness, setHappiness] = useState(85);

  const handleTaskComplete = (earnedCrystals: number) => {
    setCrystals(prev => prev + earnedCrystals);
    setEnergy(prev => Math.min(100, prev + 5));
    setHappiness(prev => Math.min(100, prev + 3));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-sm border-b border-border shadow-soft">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button size="icon" variant="ghost" className="rounded-full">
                <Menu className="w-5 h-5" />
              </Button>
              <h1 className="text-xl font-bold text-primary">Mimo</h1>
            </div>
            
            <div className="flex items-center gap-2">
              <CrystalCounter count={crystals} />
              <Button 
                size="icon" 
                variant="ghost" 
                className="rounded-full"
                onClick={() => navigate("/premium")}
              >
                <Crown className="w-5 h-5 text-primary" />
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full">
                <Users className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full">
                <Settings className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 space-y-6 max-w-5xl">
        {/* Welcome Message */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Bem-vindo de volta! 🌸
          </h2>
          <p className="text-muted-foreground">
            Seu Mimo está te esperando com carinho!
          </p>
        </div>

        {/* Pet Display */}
        <PetDisplay 
          name="Mimo"
          level={3}
          energy={energy}
          happiness={happiness}
        />

        {/* Tasks */}
        <TaskList onTaskComplete={handleTaskComplete} />

        {/* Grid: Shop & Exploration */}
        <div className="grid md:grid-cols-2 gap-6">
          <ShopPreview />
          <ExplorationCard />
        </div>

        {/* Tips */}
        <div className="bg-muted/50 border-2 border-border/50 rounded-2xl p-6 text-center">
          <p className="text-sm text-muted-foreground">
            💡 <span className="font-medium">Dica:</span> Complete tarefas diárias para ganhar cristais e fazer seu Mimo crescer feliz e saudável!
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            Feito com 💚 para seu bem-estar
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
