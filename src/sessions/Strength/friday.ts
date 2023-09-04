export default {
  name: "Lower Body Session 3",
  session: [
    { name: "Sled", set: 1, reps: "5 min" },
    {
      superset: true,
      set: 3,
      exercises: [
        { name: "Tribialis Raise", reps: 20 },
        { name: "Hip Flexors", reps: 20 },
        { name: "Straight-Leg Calf Raise", reps: 15 },
      ],
    },
    { name: "Dumbbell VMO Squat", set: 10, reps: "10 per minute" },
    { name: "Couch Stretch", set: 2, reps: "30 secs" },
  ],
};
