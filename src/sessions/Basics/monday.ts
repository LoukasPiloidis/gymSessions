export default {
  name: "Knee Ability",
  session: [
    { name: "Backward Sled", set: 1, reps: "200 yards" },
    { name: "Reverse Step up", set: 2, reps: 20 },
    { name: "ATG Split Squat Pulse", set: 2, reps: 20 },
    { name: "ATG Squat Progression", set: 5, reps: 5 },
    {
      superset: true,
      set: 2,
      exercises: [
        { name: "Couch Stretch", reps: "1 min" },
        { name: "Nordic", reps: 8 },
        { name: "Tribialis Raise", reps: 20 },
      ],
    },
  ],
};
