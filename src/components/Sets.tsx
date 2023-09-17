import React, { SetStateAction } from "react";
import styled from "styled-components";
import { palette } from "../palette";
import CheckMarkIcon from "../assets/checkmark";

type Props = {
  set?: number;
  setIsDone: React.Dispatch<SetStateAction<boolean>>;
  isDone?: boolean;
  isSuperset?: boolean;
};

const Sets: React.FC<Props> = ({ set, setIsDone, isDone, isSuperset }) => {
  return (
    <Wrapper
      onClick={() => setIsDone((prev) => !prev)}
      $isSuperset={isSuperset}
      $isDone={isDone}
    >
      {isDone ? <CheckMarkIcon /> : set}
    </Wrapper>
  );
};

export default Sets;

export const Wrapper = styled.span<{
  $isSuperset?: boolean;
  $isDone?: boolean;
}>`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 20px;
  background-color: ${palette.button};
  color: ${palette.text};
  opacity: ${({ $isSuperset, $isDone }) =>
    $isSuperset && $isDone ? "0.5" : "auto"};
`;
