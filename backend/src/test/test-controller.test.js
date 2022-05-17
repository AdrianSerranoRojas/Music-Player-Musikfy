import { testTry } from "../controllers/test-controllers.js";
import { createPlaylist } from "../controllers/playList-controllers.js";
import { Playlists } from "../models/playList-models.js";

describe("given test service ", () => {
  describe("when is imboced  ", () => {
    describe(" it resolves   ", () => {
      test("then srend status should have been called", () => {
        // arrange
        const res = {
          sendStatus: jest.fn(),
        };
        const req = {
          sendStatus: jest.fn(),
        };
        //act
        testTry(req, res);
        //assert
        expect(res.sendStatus).toHaveBeenCalledWith(200);
      });
    });
  });
});

jest.mock("../models/playList-models.js");

describe("given create playlist service ", () => {
  describe("when is imboced   ", () => {
    describe(" it resolves   ", () => {
      test("then res.send should have been called ", async () => {
        const res = {
          status: jest.fn(),
          send: jest.fn(),
        };
        const req = {
          body: { title: "carapolla"  },
        };
        const next = {};
        //act
        Playlists.create.mockReturnValue({});
        await createPlaylist(req, res, next);
        //assert
        expect(res.status).toHaveBeenCalled();
      });
    });
  });
});
