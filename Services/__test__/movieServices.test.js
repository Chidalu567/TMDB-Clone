import { getSpecificMovie } from "../movieServices";

describe("Test to validate that the service returns a data to the ui", () => {
  test("Expect a return of an object", async () => {
    const result = await getSpecificMovie(
      `https://api.themoviedb.org/3/movie/436969?api_key=67de45401430218afb0057fa04ee72fd`
    );
    expect(result).toBeTruthy();
  });
});
