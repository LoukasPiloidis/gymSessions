import axios from "axios";
import { SetStateAction, createContext, useState } from "react";
import config from "./config";

const { server } = config;

export type Data = {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  currentProgram: string;
  startDate: Date;
};

type ContextShape = {
  data: Data;
  setData?: React.Dispatch<SetStateAction<Data>>;
};

export const Context = createContext<ContextShape>({
  data: {
    id: "24c741aa-532b-11ee-be56-0242ac120002",
    firstName: "Loukas",
    lastName: "Piloidis",
    username: "piloten",
    currentProgram: "Basics",
    startDate: new Date(),
  },
});

const res = await axios.get(`${server}/24c741aa-532b-11ee-be56-0242ac120002`);

const ContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [data, setData] = useState<Data>(res.data as Data);

  return (
    <Context.Provider value={{ data, setData }}>{children}</Context.Provider>
  );
};

export default ContextProvider;
