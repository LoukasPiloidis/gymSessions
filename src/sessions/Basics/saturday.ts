export default {
  name: "Stretch Routine",
  session: [
    { name: "FHL Calf Raise", set: 1, reps: 20 },
    { name: "KOT Calf Raise", set: 1, reps: 20 },
    {
      superset: true,
      set: 3,
      exercices: [
        { name: "Slant Calf Stretch", set: 2, reps: "1 min" },
        { name: "Slant J Curl", set: 2, reps: 20 },
        { name: "Incline Pigeon Pulse", set: 2, reps: 20 },
        { name: "Resisted Butterfly", set: 2, reps: 20 },
        { name: "Couch Stretch", set: 2, reps: "1 min" },
      ],
    },
  ],
};
