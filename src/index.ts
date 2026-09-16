import { Config } from "./types/config";
import setData from "./api/setData";
import getData from "./api/getData";
import getAll from "./api/getAll";
import removeData from "./api/removeData";
import toggleData from "./api/toggleData";
import { DatabaseEntry, DatabaseData } from "./types/database";

import { AxiosInstance } from "axios";
import createAxiosInstance from "./utils/axiosInstance";

class PxServ {
  config: Config;
  client: AxiosInstance;

  constructor(config: Config) {
    this.config = {
      apiKey: config.apiKey,
      baseURL: config.baseURL || "https://api.pxserv.net",
    };
    this.client = createAxiosInstance(this.config);
  }

  setData = async (key: string, value: string): Promise<void> => {
    return setData(key, value, this.client);
  };

  toggleData = async (key: string): Promise<void> => {
    return toggleData(key, this.client);
  };

  getData = async (key: string): Promise<DatabaseEntry> => {
    return getData(key, this.client);
  };

  getAll = async (): Promise<DatabaseData> => {
    return getAll(this.client);
  };

  removeData = async (key: string): Promise<void> => {
    return removeData(key, this.client);
  };
}

export default PxServ;
export type { DatabaseEntry, DatabaseData };
