import { AxiosInstance } from "axios";
import { PxServResult } from "../types/result";

export default async function getAll(
  client: AxiosInstance,
): Promise<PxServResult> {
  try {
    const response = await client.get(`/database/getAll`);
    const data = response.data;

    return {
      status: response.status,
      message: data["message"],
      data: data["data"],
    };
  } catch (err: any) {
    throw new Error(`Error sending PxServ request: ${err.toString()}`);
  }
}
