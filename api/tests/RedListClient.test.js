require("jest-fetch-mock").enableMocks();
const RedListClient = require("./lib/RedListClient")

describe("RedListClient", () => {
  describe("fetchSpeciesByCountry", () => {
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

      client.fetchSpeciesByCountry("Azerbaijan", (data) => {
        expect(data.name).toEqual("Azerbaijan")
        expect(data.assoc_animals[0]).toEqual("Northern Goshawk")
        expect(data.assoc_animals[5]).toEqual("Redpoll")
        expect(data.assoc_animals.length).toEqual(6)
      })
    });
  });
});