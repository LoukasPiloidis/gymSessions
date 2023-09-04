import { styled } from "styled-components";
import Session from "../components/Session";
import Superset from "../components/Superset";
import { SessionType } from "../types";
import { getDay, getRoutine } from "../utils";
import { useState } from "react";

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
      <div>
        <SubtitleWrapper>
          <span onClick={() => handleClick("prev")}>prev</span>
          <Subtitle>{day}</Subtitle>
          <span onClick={() => handleClick("next")}>next</span>
        </SubtitleWrapper>
        Time to rest
      </div>
    );

  return (
    <div>
      <Title>{routine.name}</Title>
      <SubtitleWrapper>
        <span onClick={() => handleClick("prev")}>prev</span>
        <Subtitle>{day}</Subtitle>
        <span onClick={() => handleClick("next")}>next</span>
      </SubtitleWrapper>
      <TableTitle>
        <span>Sets</span>
        <span>Exercise</span>
        <span>Reps</span>
      </TableTitle>
      {routine.session.map((exercise) => {
        const { set, reps, name, superset, exercises } = exercise;
        if (!superset) {
          return <Session set={set} name={name} reps={reps} />;
        }
        return <Superset exercises={exercises} set={set} />;
      })}
    </div>
  );
};

export default Basics;

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

const TableTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px;
`;
