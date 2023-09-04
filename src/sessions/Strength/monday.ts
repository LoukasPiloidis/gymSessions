export default {
  name: "Lower Body Session",
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
    { name: "Reverse Step up", set: 10, reps: "10 per minute" },
    { name: "Couch Stretch", set: 2, reps: "30 secs" },
  ],
};
