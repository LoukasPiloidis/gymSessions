import { useState } from "react";
import styled from "styled-components";

type Props = {
  set?: number;
  name: string;
  reps: number | string;
};

const Session: React.FC<Props> = ({ set, name, reps }) => {
  const [isDone, setIsDone] = useState(false);

  return (
    <Wrapper onClick={() => setIsDone((prev) => !prev)} isDone={isDone}>
      <span>{set}</span>
      <Name>{name}</Name>
      <Reps>{reps}</Reps>
    </Wrapper>
  );
};

export default Session;

const Wrapper = styled.div<{ isDone?: boolean }>`
  display: grid;
  grid-template-columns: 40px auto 100px;
  padding: 12px;
  margin-bottom: 4px;
  font-size: 20px;
  border: 1px solid blue;
  border-radius: 8px;

  ${({ isDone }) =>
    isDone &&
    `
      background-color: blue;
  `}
`;

const Name = styled.span``;

const Reps = styled.span`
  justify-self: end;
`;
