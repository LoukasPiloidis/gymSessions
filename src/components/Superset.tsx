import { useState } from "react";
import styled from "styled-components";
import Exercise, { Sets } from "./Exercise";

type Props = {
  exercises?: {
    set?: number;
    name: string;
    reps: number | string;
  }[];
  set?: number;
};

const Superset: React.FC<Props> = ({ exercises, set }) => {
  const [isDone, setIsDone] = useState(false);

  return (
    <Wrapper>
      <Sets onClick={() => setIsDone((prev) => !prev)}>{set}</Sets>
      <StyledWrapper>
        {exercises?.map(({ name, reps }) => (
          <Exercise name={name} reps={reps} isDone={isDone} />
        ))}
      </StyledWrapper>
    </Wrapper>
  );
};

export default Superset;

const Wrapper = styled.div`
  padding-left: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const StyledWrapper = styled.div<{ isDone?: boolean }>`
  width: calc(100% - 8px);
`;
