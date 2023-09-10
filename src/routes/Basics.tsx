import { styled } from "styled-components";
import Exercise from "../components/Exercise";
import Superset from "../components/Superset";
import { SessionType } from "../types";
import { getDay, getRoutine } from "../utils";
import { useState } from "react";
import { palette } from "../palette";

const Basics = () => {
  const [dayToday, setDayToday] = useState(new Date().getDay());

  const day = getDay(dayToday);
  const routine = getRoutine(dayToday, "basics") as SessionType;

  const handleClick = (type: "prev" | "next") => {
    if (type === "prev") {
      return setDayToday((prev) => prev - 1);
    }
    return setDayToday((prev) => prev + 1);
  };

  if (!routine)
    return (
      <MainWrapper>
        <SubtitleWrapper>
          <span onClick={() => handleClick("prev")}>prev</span>
          <Subtitle>{day}</Subtitle>
          <span onClick={() => handleClick("next")}>next</span>
        </SubtitleWrapper>
        Time to rest
      </MainWrapper>
    );

  return (
    <MainWrapper>
      <Title>{routine.name}</Title>
      <SubtitleWrapper>
        <span onClick={() => handleClick("prev")}>prev</span>
        <Subtitle>{day}</Subtitle>
        <span onClick={() => handleClick("next")}>next</span>
      </SubtitleWrapper>
      <ExerciseWrapper>
        {routine.session.map((exercise) => {
          const { set, reps, name, superset, exercises } = exercise;

          if (!superset) {
            return <Exercise set={set} name={name} reps={reps} />;
          }
          return <Superset exercises={exercises} set={set} />;
        })}
      </ExerciseWrapper>
    </MainWrapper>
  );
};

export default Basics;

const MainWrapper = styled.div`
  color: ${palette.text};
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
`;

const SubtitleWrapper = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Subtitle = styled.h4`
  display: flex;
  justify-content: center;
`;

const ExerciseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
