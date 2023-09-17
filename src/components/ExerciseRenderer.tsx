import React from "react";
import styled from "styled-components";
import { ExerciseRendererProps } from "../types";
import Exercise from "./Exercise";
import Superset from "./Superset";

const ExerciseRenderer: React.FC<ExerciseRendererProps> = ({ session }) => {
  if (session === "Rest Day") {
    return <ExerciseWrapper>{session}</ExerciseWrapper>;
  }
  return (
    <ExerciseWrapper>
      {session.map((exercise, index) => {
        const { set, reps, name, superset, exercises } = exercise;

        if (!superset) {
          return <Exercise set={set} name={name} reps={reps} key={index} />;
        }
        return <Superset exercises={exercises} set={set} key={index} />;
      })}
    </ExerciseWrapper>
  );
};

export default ExerciseRenderer;

const ExerciseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
