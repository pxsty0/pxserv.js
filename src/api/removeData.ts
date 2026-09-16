import { AxiosInstance } from "axios";
import { PxServResult } from "../types/result";

export default async function removeData(
  key: string,
  client: AxiosInstance,
): Promise<PxServResult> {
  try {
    const response = await client.post(`/database/removeData`, { key });
    const data = response.data;

    return {
      status: response.status,
      message: data["message"],
      data: {},
    };
  } catch (err: any) {
    throw new Error(`Error sending PxServ request: ${err.toString()}`);
  }
}
