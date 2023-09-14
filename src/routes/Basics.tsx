import { styled } from "styled-components";
import Exercise from "../components/Exercise";
import Superset from "../components/Superset";
import { SessionType } from "../types";
import { getDay } from "../utils";
import { useEffect, useState } from "react";
import { palette } from "../palette";
import axios from "axios";
import config from "../config";

const { server } = config;

const Basics: React.FC = () => {
  const [dayToday, setDayToday] = useState(new Date().getDay());
  const [data, setData] = useState<SessionType | undefined>();
  const parsedToday = getDay(dayToday);

  useEffect(() => {
    const getData = async (day: string) => {
      const { data } = await axios.get<SessionType>(`${server}/Basics/${day}`);
      console.log(parsedToday);
      setData(data);
    };
    getData(parsedToday);
  }, [dayToday, parsedToday]);

  const handleClick = (type: "prev" | "next") => {
    if (type === "prev") {
      return setDayToday((prev) => prev - 1);
    }
    return setDayToday((prev) => prev + 1);
  };

  if (!data?.session)
    return (
      <MainWrapper>
        <SubtitleWrapper>
          <span onClick={() => handleClick("prev")}>prev</span>
          <Subtitle>{parsedToday}</Subtitle>
          <span onClick={() => handleClick("next")}>next</span>
        </SubtitleWrapper>
        Time to rest
      </MainWrapper>
    );

  return (
    <MainWrapper>
      <Title>{data.name}</Title>
      <SubtitleWrapper>
        <span onClick={() => handleClick("prev")}>prev</span>
        <Subtitle>{parsedToday}</Subtitle>
        <span onClick={() => handleClick("next")}>next</span>
      </SubtitleWrapper>
      <ExerciseWrapper>
        {data.session.map((exercise) => {
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
