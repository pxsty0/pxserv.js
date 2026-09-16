import { AxiosInstance } from "axios";
import { DatabaseData } from "../types/database";

export default async function getAll(
  client: AxiosInstance,
): Promise<DatabaseData> {
  try {
    const response = await client.get(`/database/getAll`);
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
