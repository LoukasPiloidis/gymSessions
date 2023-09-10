import { useState } from "react";
import styled from "styled-components";

type Props = {
  set?: number;
  name: string;
  reps: number | string;
  isDone?: boolean;
};

const Exercise: React.FC<Props> = ({
  set,
  name,
  reps,
  isDone: isSupersetDone,
}) => {
  const [isDone, setIsDone] = useState(false);

  return (
    <Wrapper isDone={isSupersetDone ?? isDone} hasSet={!!set}>
      {set && <Sets onClick={() => setIsDone((prev) => !prev)}>{set}</Sets>}
      <Name>{name}</Name>
      <Reps>{reps}</Reps>
    </Wrapper>
  );
};

export default Exercise;

const Wrapper = styled.div<{ isDone?: boolean; hasSet?: boolean }>`
  padding: 12px 16px;
  display: grid;
  grid-template-columns: ${({ hasSet }) =>
    hasSet ? "32px auto auto" : "auto auto"};
  column-gap: 8px;
  margin-bottom: 4px;
  font-size: 18px;
  border: 1px solid black;
  border-radius: 8px;

  ${({ isDone }) =>
    isDone &&
    `
    background-color: blue;
  `}
`;

export const Sets = styled.span`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 20px;
  background-color: gray;
`;

const Name = styled.span`
  justify-self: start;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Reps = styled.span`
  justify-self: end;
  display: flex;
  justify-content: center;
  align-items: center;
`;
