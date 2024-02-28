import { styled } from "styled-components";
import { SessionType } from "../types";
import { getDay, getNextDay, getPrevDay } from "../utils";
import { useContext, useEffect, useState } from "react";
import { palette } from "../palette";
import axios from "axios";
import config from "../config";
import { Context } from "../Context";
import ExerciseRenderer from "../components/ExerciseRenderer";
import NextArrow from "../assets/NextArrow";
import BackArrow from "../assets/BackArrow";

const { server } = config;

const Basics: React.FC = () => {
  const initialData = useContext(Context);
  const [dayToday, setDayToday] = useState(new Date().getDay());
  const [data, setData] = useState<SessionType | undefined>();
  const parsedToday = getDay(dayToday);

  useEffect(() => {
    const getData = async (day: string) => {
      const { data } = await axios.get<SessionType>(`${server}/dense/${day}`);
      setData(data);
    };
    getData(parsedToday);
  }, [dayToday, parsedToday]);

  const handleClick = (type: "prev" | "next") => {
    if (type === "prev") {
      return setDayToday(getPrevDay);
    }
    return setDayToday(getNextDay);
  };

  if (!data?.session)
    return (
      <MainWrapper>
        <SubtitleWrapper>
          <span onClick={() => handleClick("prev")}>
            <BackArrow />
          </span>
          <Subtitle>{parsedToday}</Subtitle>
          <span onClick={() => handleClick("next")}>
            <NextArrow />
          </span>
        </SubtitleWrapper>
        Loading...
      </MainWrapper>
    );

  return (
    <MainWrapper>
      <Title>{data.name}</Title>
      <SubtitleWrapper>
        <span onClick={() => handleClick("prev")}>
          <BackArrow />
        </span>
        <Subtitle>{parsedToday}</Subtitle>
        <span onClick={() => handleClick("next")}>
          <NextArrow />
        </span>
      </SubtitleWrapper>
      <Subtitle>Week {initialData?.data?.start_date} / 12</Subtitle>
      <ExerciseRenderer session={data.session} />
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
