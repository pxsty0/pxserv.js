import PxServ from "./index";

describe("PxServJS Test", () => {
  let pxServ: any;

  beforeAll(() => {
    pxServ = new PxServ({
      apiKey: "API_KEY",
    });
  });

  test("Save Data", async () => {
    const result = await pxServ.setData("temp", "24.3°C");
    expect(result).toBeUndefined();
  });

  test("Get Data", async () => {
    const result = await pxServ.getData("temp");
    expect(result.value).toBe("24.3°C");
  });

  test("Toggle Data", async () => {
    const result = await pxServ.toggleData("light");
    expect(result).toBeUndefined();
  });

  test("Get All Data", async () => {
    const result = await pxServ.getAll();
    expect(result).toBeDefined();
  });

  test("Remove Data", async () => {
    const resultTemp = await pxServ.removeData("temp");
    const resultLight = await pxServ.removeData("light");

    expect(resultTemp).toBeUndefined();
    expect(resultLight).toBeUndefined();
  });
});
