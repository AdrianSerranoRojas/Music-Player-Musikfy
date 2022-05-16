import playlistRoute from "../routes/playList-routes";
import request from "supertest";


// describe("playlist Router", () => {
//   test("recived status code 2000",  () => {
//       const response = request(playlistRoute).get("/test").send()
//       expect(response.statusCode).toBe(200);
//   });
// });
beforeAll(async () => await server.initTestServer());
afterEach(async () => await server.clearUsersCollection());
afterAll(async () => await server.stopTestServer());


describe("playlist Router", () => {
  test("recived status code 2000", async () => {
    // try {
      const response = await request(playlistRoute).get("/test").send();
      console.log(response);
      // expect(response.statusCode).toBe(200);
    // } catch (error) {
    //   console.log(error);
    // }
  });
});
