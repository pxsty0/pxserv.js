import { AxiosInstance } from "axios";
import { DatabaseEntry } from "../types/database";

export default async function getData(
  key: string,
  client: AxiosInstance,
): Promise<DatabaseEntry> {
  try {
    const response = await client.post(`/database/getData`, { key });
    return response.data.data;
  } catch (err: any) {
    if (err.response && err.response.data && err.response.data.message) {
      throw new Error(err.response.data.message);
    }
    throw new Error(
      `Error sending PxServ request: ${err.message || err.toString()}`,
    );
  }
}
