require("jest-fetch-mock").enableMocks();
const RedListClient = require("./RedListClient")

describe("RedListClient", () => {
  describe("fetchSpeciesByCountry", () => {
    beforeEach(() => {
      fetch.resetMocks();
    });

    it("fetches endangered species for Azerbaijan", (done) => {
      const client = new RedListClient ();

      fetch.mockResponseOnce(JSON.stringify({ 
        count: 1,
        name: "AZ",
        result: [
          {
            "taxonid":42293,
            "scientific_name":"Abies nordmanniana",
            "subspecies":null,
            "rank":null,
            "subpopulation":null,
            "category":"LC"
          }
        ],
      }));

      client.fetchSpeciesByCountry("AZ", (data) => {
        expect(data.name).toEqual("AZ")
        expect(data.result[0].scientific_name).toEqual("Abies nordmanniana")
        expect(data.result.length).toEqual(1);
        done();
      });
    });
  });
});