export default {
  name: "Shoulder Ability",
  session: [
    { name: "Forward + Backward Sled", set: 1, reps: "100 yards" },
    {
      superset: true,
      set: 2,
      exercises: [
        { name: "ATG Dip Progression", reps: "max" },
        { name: "Full-Range External Rotations", reps: 12 },
      ],
    },
    {
      superset: true,
      set: 2,
      exercises: [
        { name: "ATG-style Incline Dumbbell Press", reps: "10 - 15" },
        { name: "ATG Face Pull", reps: 15 },
      ],
    },
    {
      superset: true,
      set: 2,
      exercises: [
        { name: "ATG-style Shoulder Press", reps: "8-12" },
        { name: "ATG Pull-up Progression", reps: "max" },
      ],
    },
    { name: "Forward + Backward Sled", set: 1, reps: "100 yards" },
  ],
};
