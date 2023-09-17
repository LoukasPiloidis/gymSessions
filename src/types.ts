export type ExerciseType = {
  name: string;
  reps: string | number;
  set?: number;
  exercises?: ExerciseType[];
  superset?: boolean;
};

export type SessionType = {
  name: string;
  session: ExerciseType[] | "Rest Day";
  activeWeeks: number;
};

export type ExerciseRendererProps = {
  session: ExerciseType[] | "Rest Day";
};
