export default {
  name: "Back Ability",
  session: [
    { name: "Forward Sled", set: 4, reps: "50 yards" },
    {
      superset: true,
      set: 2,
      exercises: [
        { name: "ATG Split Squats w/30-sec Pause", reps: 1 },
        { name: "ATG-style Seated Goodmorning", reps: 12 },
      ],
    },
    {
      superset: true,
      set: 2,
      exercises: [
        { name: "Low Abs/Hip-Flexors", reps: 20 },
        { name: "QL", reps: 12 },
        { name: "Back Extensions", reps: 12 },
      ],
    },
    {
      superset: true,
      set: 2,
      exercises: [
        { name: "Pullover", reps: 12 },
        { name: "Trap 3 Eccentrics", reps: 6 },
      ],
    },
  ],
};
