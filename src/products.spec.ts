import request from "supertest";
import { server } from "./app";

describe("produtos", () => {
  test("teste da lista de produtos", async () => {
    const response = await request(server).get("/products");
    

    expect(response.statusCode).toBe(200)
  });
});
