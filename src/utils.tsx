import monday from "./sessions/Basics/monday";
import tuesday from "./sessions/Basics/tuesday";
import wednesday from "./sessions/Basics/wednesday";
import thursday from "./sessions/Basics/thursday";
import friday from "./sessions/Basics/friday";
import saturday from "./sessions/Basics/saturday";

import mondayDense from "./sessions/Strength/monday";
import tuesdayDense from "./sessions/Strength/tuesday";
import wednesdayDense from "./sessions/Strength/wednesday";
import thursdayDense from "./sessions/Strength/thursday";
import fridayDense from "./sessions/Strength/friday";

import mondayPro from "./sessions/Pro/monday";
import wednesdayPro from "./sessions/Pro/wednesday";
import fridayPro from "./sessions/Pro/friday";

export const getRoutine = (day: number, type: "basics" | "dense" | "pro") => {
  if (type === "basics") {
    switch (day) {
      case 1:
        return monday;
      case 2:
        return tuesday;
      case 3:
        return wednesday;
      case 4:
        return thursday;
      case 5:
        return friday;
      case 6:
        return saturday;
      default:
        return null;
    }
  }

  if (type === "dense") {
    switch (day) {
      case 1:
        return mondayDense;
      case 2:
        return tuesdayDense;
      case 3:
        return wednesdayDense;
      case 4:
        return thursdayDense;
      case 5:
        return fridayDense;
      default:
        return null;
    }
  }

  if (type === "pro") {
    switch (day) {
      case 1:
        return mondayPro;
      case 3:
        return wednesdayPro;
      case 5:
        return fridayPro;
      default:
        return null;
    }
  }
};

export const getDay = (day: number) => {
  switch (day) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default:
      return "Sunday";
  }
};
