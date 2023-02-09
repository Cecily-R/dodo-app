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

    it("fetches species info for Abies nordmanniana", (done) => {
      const client = new RedListClient ();

      fetch.mockResponseOnce(JSON.stringify({ 
        name: "Abies nordmanniana",
        result: [
          {
              "taxonid": 42293,
              "scientific_name": "Abies nordmanniana",
              "kingdom": "PLANTAE",
              "phylum": "TRACHEOPHYTA",
              "class": "PINOPSIDA",
              "order": "PINALES",
              "family": "PINACEAE",
              "genus": "Abies",
              "main_common_name": "Caucasian Fir",
              "category": "LC",
              "population_trend": "Stable",
          }
        ],
      }));

      client.fetchSpeciesInfo("Abies nordmanniana", (data) => {
        expect(data.name).toEqual("Abies nordmanniana")
        expect(data.result[0].scientific_name).toEqual("Abies nordmanniana")
        expect(data.result.length).toEqual(1);
        done();
      });
    });

    it("fetches species by comprehensive group", (done) => {
      const client = new RedListClient ();

      fetch.mockResponseOnce(JSON.stringify({ 
        count: 1,
        result:[
          {
            "taxonid":42641,
            "scientific_name":"Abditomys latidens",
            "category":"DD"
          }
        ]
      }));

      client.fetchSpeciesByGroup("mammals", (data) => {
        expect(data.count).toEqual(1)
        expect(data.result[0].scientific_name).toEqual("Abditomys latidens")
        expect(data.result.length).toEqual(1);
        done();
      });
    })
  })
});