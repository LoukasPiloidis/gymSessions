import { isEnvDev } from "./utils";

const prod = "https://gym-sessions-backend.vercel.app";
const dev = "http://localhost:4000";

export default {
  server: isEnvDev ? dev : prod,
};
