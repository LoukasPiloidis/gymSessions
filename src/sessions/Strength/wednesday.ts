export default {
  name: "Lower Body Session 2",
  session: [
    { name: "Sled", set: 1, reps: "5 min" },
    {
      superset: true,
      set: 3,
      exercises: [
        { name: "Tribialis Raise", reps: 20 },
        { name: "Nordic", reps: 5 },
        { name: "Hip Flexors", reps: 20 },
      ],
    },
    { name: "ATG Split Squat", set: 10, reps: "5 per minute" },
    { name: "Couch Stretch", set: 2, reps: "30 secs" },
  ],
};
