import crystalIcon from "@/assets/crystal-icon.png";

interface CrystalCounterProps {
  count: number;
}

export const CrystalCounter = ({ count }: CrystalCounterProps) => {
  return (
    <div className="flex items-center gap-2 bg-card shadow-soft px-4 py-2 rounded-full border-2 border-primary/20">
      <img src={crystalIcon} alt="Cristais" className="w-6 h-6 animate-pulse-slow" />
      <span className="font-bold text-lg text-primary">{count}</span>
      <span className="text-sm text-muted-foreground">cristais</span>
    </div>
  );
};
