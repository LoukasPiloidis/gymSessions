export default {
  name: "Upper",
  session: [
    { name: "Forward + Backward Sled", set: 1, reps: "200 yards" },
    {
      superset: true,
      set: 3,
      exercises: [
        { name: "5-sec Eccentric Trap-3", reps: 5 },
        { name: "Band Pullapart", reps: 20 },
      ],
    },
    {
      superset: true,
      set: 3,
      exercises: [
        { name: "ATG Shoulder Press", reps: 8 },
        { name: "Full-Range External Rotations", reps: 8 },
      ],
    },
    {
      superset: true,
      set: 3,
      exercises: [
        { name: "ATG Dip", reps: 5 },
        { name: "Full chin up", reps: 5 },
      ],
    },
    {
      superset: true,
      set: 3,
      exercises: [
        { name: "Pullover", reps: 12 },
        { name: "Smith Curl", reps: 12 },
      ],
    },
  ],
};
