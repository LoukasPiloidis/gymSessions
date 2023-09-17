import axios from "axios";
import { SetStateAction, createContext, useEffect, useState } from "react";
import config from "./config";

const { server } = config;

export type UserData = {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  current_program: string;
  start_date: number;
};

type ContextShape = {
  data: UserData | null;
  setData: React.Dispatch<SetStateAction<UserData | null>> | null;
};

export const Context = createContext<ContextShape | null>(null);

const ContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [data, setData] = useState<UserData | null>(null);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get<UserData>(
        `${server}/24c741aa-532b-11ee-be56-0242ac120002`
      );
      setData(data);
    };
    getData();
  }, []);

  return (
    <Context.Provider value={{ data, setData }}>{children}</Context.Provider>
  );
};

export default ContextProvider;
