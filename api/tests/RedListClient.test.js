require("jest-fetch-mock").enableMocks();
const RedListClient = require("./lib/RedListClient")

describe("RedListClient", () => {
  describe("fetchEndangeredSpecies", () => {
    beforeEach(() => {
      fetch.resetMocks();
    });

    it("fetches endangered species for Azerbijan", () => {
      const client = new RedListClient ()

    })
  })
})