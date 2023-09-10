export default {
  name: "Stretch Routine",
  session: [
    { name: "FHL Calf Raise", set: 1, reps: 20 },
    { name: "KOT Calf Raise", set: 1, reps: 20 },
    {
      superset: true,
      set: 3,
      exercises: [
        { name: "Slant Calf Stretch", reps: "1 min" },
        { name: "Slant J Curl", reps: 20 },
        { name: "Incline Pigeon Pulse", reps: 20 },
        { name: "Resisted Butterfly", reps: 20 },
        { name: "Couch Stretch", reps: "1 min" },
      ],
    },
  ],
};
