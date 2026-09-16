import axios, { AxiosInstance } from "axios";
import { Config } from "../types/config";

export default function createAxiosInstance(config: Config): AxiosInstance {
  const instance = axios.create({
    baseURL: config.baseURL || "https://api.pxserv.net",
    headers: {
      "Content-Type": "application/json",
    },
  });

  instance.interceptors.request.use((req) => {
    if (config.apiKey) {
      req.headers["apikey"] = config.apiKey;
    }
    return req;
  });

  return instance;
}
