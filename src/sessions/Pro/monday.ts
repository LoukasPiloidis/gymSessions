export default {
  name: "Leg Day",
  session: [
    { name: "Backward Sled", set: 1, reps: "300 yards" },
    {
      superset: true,
      set: 3,
      exercises: [
        { name: "Tribialis Raise", reps: 25 },
        { name: "FHL Calf", reps: 25 },
        { name: "KOT Calf", reps: 25 },
      ],
    },
    { name: "Reverse Step up", set: 2, reps: 25 },
    { name: "ATG Split Squat Pulse", set: 2, reps: 20 },
    { name: "Full Squats", set: 5, reps: 5 },
    { name: "KOT Squat", set: 2, reps: 12 },
    {
      superset: true,
      set: 2,
      exercises: [
        { name: "Reverse Nordic", reps: 12 },
        { name: "Standing Pancake", reps: "1 min" },
      ],
    },
  ],
};
