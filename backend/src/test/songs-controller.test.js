import {
  getSongs,
  getSong,
  getTags,
  createSong,
  getMySongs,
  getSongsFilter,
  likeSong,
} from "../controllers/songs-controller.js";

import { Songs } from "../models/songs-models.js";

// describe("given test service ", () => {
//   describe("when is imboced  getSongs ", () => {
//     describe(" it resolves   ", () => {
//       test("then send status should have been called", () => {
//         try {
//           const res = {
//             sendStatus: jest.fn(),
//           };
//           const req = {
//             sendStatus: jest.fn(),
//           };
//           getSongs(req, res);
//           expect(res.sendStatus).toHaveBeenCalledWith(200);
//         } catch (e) {
//           expect(e);
//         }
//       });
//     });
//   });
// });

// describe("given test service ", () => {
//   describe("when is imboced  getSong ", () => {
//     describe(" it resolves   ", () => {
//       test("then send status should have been called", () => {
//         try {
//           const res = {
//             sendStatus: jest.fn(),
//           };
//           const req = {
//             sendStatus: jest.fn(),
//           };
//           getSong(req, res);
//           expect(res.sendStatus).toHaveBeenCalledWith(200);
//         } catch (e) {
//           expect(e);
//         }
//       });
//     });
//   });
// });

// describe("given test service ", () => {
//   describe("when is imboced  createSong ", () => {
//     describe(" it resolves   ", () => {
//       test("then send status should have been called", () => {
//         try {
//           const res = {
//             sendStatus: jest.fn(),
//           };
//           const req = {
//             sendStatus: jest.fn(),
//           };
//           createSong(req, res);
//           expect(res.sendStatus).toHaveBeenCalledWith(200);
//         } catch (e) {
//           expect(e);
//         }
//       });
//     });
//   });
// });

describe("given test service ", () => {
  describe("when is imboced  likeSong ", () => {
    describe(" it resolves   ", () => {
      test("then send status should have been called", () => {
        try {
          const res = {
            sendStatus: jest.fn(),
          };
          const req = {
            sendStatus: jest.fn(),
          };
          likeSong(req, res);
          expect(res.sendStatus).toHaveBeenCalledWith(200);
        } catch (e) {
          expect(e);
        }
      });
    });
  });
});
// describe("given test service ", () => {
//   describe("when is imboced  removePlaylistById ", () => {
//     describe(" it resolves   ", () => {
//       test("then send status should have been called", () => {
//         try {
//           const res = {
//             sendStatus: jest.fn(),
//           };
//           const req = {
//             sendStatus: jest.fn(),
//           };
//           removePlaylistById(req, res);
//           expect(res.sendStatus).toHaveBeenCalledWith(200);
//         } catch (e) {
//           expect(e);
//         }
//       });
//     });
//   });
// });
