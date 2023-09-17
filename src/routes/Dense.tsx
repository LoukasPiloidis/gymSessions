import { styled } from "styled-components";
import { SessionType } from "../types";
import { getDay } from "../utils";
import { useContext, useEffect, useState } from "react";
import { palette } from "../palette";
import axios from "axios";
import config from "../config";
import { Context } from "../Context";
import ExerciseRenderer from "../components/ExerciseRenderer";

const { server } = config;

const Dense: React.FC = () => {
  const initialData = useContext(Context);
  const [dayToday, setDayToday] = useState(new Date().getDay());
  const [data, setData] = useState<SessionType | undefined>();
  const parsedToday = getDay(dayToday);

  useEffect(() => {
    if (initialData?.data?.current_program) {
      const getData = async (day: string) => {
        const { data } = await axios.get<SessionType>(
          `${server}/${initialData.data?.current_program}/${day}`
        );
        setData(data);
      };
      getData(parsedToday);
    }
  }, [dayToday, initialData, parsedToday]);

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
      <Subtitle>Week {initialData?.data?.start_date} / 12</Subtitle>
      <ExerciseRenderer session={data.session} />
    </MainWrapper>
  );
};

export default Dense;

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
