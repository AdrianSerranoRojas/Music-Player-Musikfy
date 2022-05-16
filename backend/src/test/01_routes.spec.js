// import productRoutes from "../routes";
import playlistRoute from "../routes/playList-routes";
import request from "supertest";
// import {jest} from '@jest/globals'

describe("playlist Router", () => {
  test("recived status code 2000",  () => {
      const response = request(playlistRoute).get("/test").send()
      expect(response.statusCode).toBe(200);
  });
});
