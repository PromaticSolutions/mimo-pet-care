import { ShoppingBag } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const ShopPreview = () => {
  const navigate = useNavigate();
  
  const items = [
    { id: 1, name: "Chapéu de Sol 🌞", price: 50, emoji: "🎩" },
    { id: 2, name: "Cachecol Fofo 🧣", price: 30, emoji: "🧣" },
    { id: 3, name: "Óculos de Star ⭐", price: 75, emoji: "🕶️" },
  ];

  return (
    <Card className="gradient-card shadow-soft border-2 border-border/50 p-6">
      <div className="flex items-center gap-2 mb-4">
        <ShoppingBag className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-bold">Lojinha do Mimo</h3>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {items.map((item) => (
          <button
            key={item.id}
            className="aspect-square bg-gradient-to-br from-secondary/20 to-accent/20 rounded-xl border-2 border-border hover:border-primary/50 hover:scale-105 transition-all flex flex-col items-center justify-center gap-2 p-3"
          >
            <span className="text-3xl">{item.emoji}</span>
            <div className="text-center">
              <p className="text-xs font-medium line-clamp-1">{item.name}</p>
              <p className="text-xs text-primary font-bold">{item.price}💎</p>
            </div>
          </button>
        ))}
      </div>

      <Button 
        onClick={() => navigate("/shop")}
        className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl"
      >
        Ver Todos os Itens
      </Button>
    </Card>
  );
};
