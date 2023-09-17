export const getDay = (day: number) => {
  switch (day) {
    case 1:
      return "monday";
    case 2:
      return "tuesday";
    case 3:
      return "wednesday";
    case 4:
      return "thursday";
    case 5:
      return "friday";
    case 6:
      return "saturday";
    default:
      return "sunday";
  }
};

export const getPrevDay = (prev: number) => {
  if (prev === 0) {
    return 6;
  }
  return prev - 1;
};

export const getNextDay = (prev: number) => {
  if (prev === 6) {
    return 0;
  }
  return prev + 1;
};

export const isEnvDev =
  location.hostname === "localhost" || location.hostname === "127.0.0.1";
