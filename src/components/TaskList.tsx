import { useState } from "react";
import { Check, Plus } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

interface Task {
  id: string;
  title: string;
  completed: boolean;
  crystals: number;
}

const initialTasks: Task[] = [
  { id: "1", title: "Beber 1 copo de água 💧", completed: false, crystals: 5 },
  { id: "2", title: "Alongar por 2 minutos 🧘", completed: false, crystals: 10 },
  { id: "3", title: "Agradecer por algo hoje 🙏", completed: false, crystals: 5 },
  { id: "4", title: "Fazer uma pausa de 5 min 😌", completed: false, crystals: 10 },
  { id: "5", title: "Escrever 3 coisas boas ✨", completed: false, crystals: 15 },
];

interface TaskListProps {
  onTaskComplete: (crystals: number) => void;
}

export const TaskList = ({ onTaskComplete }: TaskListProps) => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const handleTaskToggle = (taskId: string) => {
    setTasks(tasks.map(task => {
      if (task.id === taskId && !task.completed) {
        onTaskComplete(task.crystals);
        toast.success(`Parabéns! +${task.crystals} cristais ✨`, {
          description: "Continue assim, você está indo muito bem!"
        });
        return { ...task, completed: true };
      }
      return task;
    }));
  };

  const completedCount = tasks.filter(t => t.completed).length;

  return (
    <Card className="gradient-card shadow-soft border-2 border-border/50 p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-bold">Tarefas de Hoje</h3>
          <p className="text-sm text-muted-foreground">
            {completedCount}/{tasks.length} completas
          </p>
        </div>
        <Button size="icon" variant="outline" className="rounded-full">
          <Plus className="w-4 h-4" />
        </Button>
      </div>

      <div className="space-y-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`flex items-center gap-3 p-3 rounded-xl border-2 transition-all ${
              task.completed
                ? "bg-primary/10 border-primary/30"
                : "bg-card border-border hover:border-primary/40"
            }`}
          >
            <Checkbox
              checked={task.completed}
              onCheckedChange={() => handleTaskToggle(task.id)}
              className="data-[state=checked]:bg-primary"
            />
            <div className="flex-1">
              <p className={`font-medium ${task.completed ? "line-through text-muted-foreground" : ""}`}>
                {task.title}
              </p>
            </div>
            <div className="flex items-center gap-1 px-2 py-1 bg-energy/20 rounded-full">
              <span className="text-xs font-bold text-energy-foreground">+{task.crystals}</span>
              <span className="text-xs">💎</span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
