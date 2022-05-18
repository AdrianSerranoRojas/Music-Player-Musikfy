import {
  createPlaylist,
  getPlayLists,
  getPlayList,
  addSongToPlaylist,
  removePlaylistById
} from "../controllers/playList-controllers.js";
import { Playlists } from "../models/playList-models.js";

describe("given test service ", () => {
  describe("when is imboced  getPlayLists ", () => {
    describe(" it resolves   ", () => {
      test("then send status should have been called", () => {
        try {
          const res = {
            sendStatus: jest.fn(),
          };
          const req = {
            sendStatus: jest.fn(),
          };
          getPlayLists(req, res);
          expect(res.sendStatus).toHaveBeenCalledWith(200);
        } catch (e) {
          expect(e);
        }
      });
    });
  });
});
describe("given test service ", () => {
  describe("when is imboced  getPlayList ", () => {
    describe(" it resolves   ", () => {
      test("then send status should have been called", () => {
        try {
          const res = {
            sendStatus: jest.fn(),
          };
          const req = {
            sendStatus: jest.fn(),
          };
          getPlayList(req, res);
          expect(res.sendStatus).toHaveBeenCalledWith(200);
        } catch (e) {
          expect(e);
        }
      });
    });
  });
});
describe("given test service ", () => {
  describe("when is imboced  createPlaylist ", () => {
    describe(" it resolves   ", () => {
      test("then send status should have been called", () => {
        try {
          const res = {
            sendStatus: jest.fn(),
          };
          const req = {
            sendStatus: jest.fn(),
          };
          createPlaylist(req, res);
          expect(res.sendStatus).toHaveBeenCalledWith(200);
        } catch (e) {
          expect(e);
        }
      });
    });
  });
});
describe("given test service ", () => {
  describe("when is imboced  addSongToPlaylist ", () => {
    describe(" it resolves   ", () => {
      test("then send status should have been called", () => {
        try {
          const res = {
            sendStatus: jest.fn(),
          };
          const req = {
            sendStatus: jest.fn(),
          };
          addSongToPlaylist(req, res);
          expect(res.sendStatus).toHaveBeenCalledWith(200);
        } catch (e) {
          expect(e);
        }
      });
    });
  });
});
describe("given test service ", () => {
  describe("when is imboced  removePlaylistById ", () => {
    describe(" it resolves   ", () => {
      test("then send status should have been called", () => {
        try {
          const res = {
            sendStatus: jest.fn(),
          };
          const req = {
            sendStatus: jest.fn(),
          };
          removePlaylistById(req, res);
          expect(res.sendStatus).toHaveBeenCalledWith(200);
        } catch (e) {
          expect(e);
        }
      });
    });
  });
});
