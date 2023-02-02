require("jest-fetch-mock").enableMocks();
const RedListClient = require("./lib/RedListClient")

describe("RedListClient", () => {
  describe("fetchEndangeredSpecies", () => {
    beforeEach(() => {
      fetch.resetMocks();
    });

    it("fetches endangered species for Azerbaijan", () => {
      const client = new RedListClient ();

      fetch.mockResponseOnce(JSON.stringify({ 
        name: "Azerbaijan",
        assoc_animals: [
          "Northern Goshawk",
          "Two-streaked Snake-eyed Skink",
          "Caucasian Bream",
          "Levant Sparrowhawk",
          "Shikra",
          "Redpoll"
        ],
      }));
    });
  });
});