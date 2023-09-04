export default {
  name: "Posterior",
  session: [
    { name: "Forward Sled", set: 1, reps: "100 yards" },
    {
      superset: true,
      set: 3,
      exercises: [
        { name: "Hip Flexors", reps: 20 },
        { name: "Back Extensions", reps: 15 },
        { name: "QL", reps: 10 },
      ],
    },
    { name: "Seated Goodmornings", set: 3, reps: 10 },
    { name: "Full-Stretch RDL", set: 4, reps: 8 },
    { name: "Nordic", set: 3, reps: 5 },
    {
      superset: true,
      set: 2,
      exercises: [
        { name: "Jefferson Curl", reps: 12 },
        { name: "Incline Pigeon Pose", reps: 20 },
      ],
    },
  ],
};
