import playlistRoute from "../routes/playList-routes";
import request from "supertest";
// import {jest} from '@jest/globals'

describe("playlist Router", () => {
  test("recived status code 2000", async () => {
    const response = await request(playlistRoute).get("/test").send();
    expect(response.statusCode).toBe(200);
  });

  test("should have a content-type: application/json in header", async () => {
    const response = await request(playlistRoute).get("/test").send();
    expect(response.headers["Content-Type"]).toEqual(
      expect.stringContaining("json")
    );
  });
  test("should responde with a title", async () => {
    const response = await request(playlistRoute).post("/test").send({title: "title carapo"});
    expect(expect.response.body.title).toBeDefined();
  });
});
