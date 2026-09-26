export type Workout = {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: string;
  duration: number; // minutes
  caloriesBurned: number; // kcal
  sets: number;
  reps: string;
  rating: number;
  description: string;
  instructions: string[];
};
