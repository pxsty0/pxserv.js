import { AxiosInstance } from "axios";

export default async function toggleData(
  key: string,
  client: AxiosInstance,
): Promise<void> {
  try {
    await client.post(`/database/toggleData`, { key });
  } catch (err: any) {
    if (err.response && err.response.data && err.response.data.message) {
      throw new Error(err.response.data.message);
    }
    throw new Error(
      `Error sending PxServ request: ${err.message || err.toString()}`,
    );
  }
}
