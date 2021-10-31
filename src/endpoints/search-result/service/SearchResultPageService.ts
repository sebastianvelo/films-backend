import {
  MoviesResponse,
  TVShowsResponse
} from "tmdb-js/lib/api/common/response/CommonResponse";
import TMDB from "../../../tmdb/TMDB";
import CardService from "../../common/service/card/CardService";
import { SearchResultProps } from "../model/SearchResultProps";

class SearchResultPageService {
  public static async getMovieExplorePage(
    query: string
  ): Promise<SearchResultProps> {
    const movies: MoviesResponse = await TMDB.search.getMovies({ query });
    return {
      results: {
        id: "results",
        title: `Results of "${query}"`,
        cards: movies.results.map(CardService.getMovieCard)
      }
    };
  }

  public static async getShowExplorePage(
    query: string
  ): Promise<SearchResultProps> {
    const shows: TVShowsResponse = await TMDB.search.getTVShows({ query });
    return {
      results: {
        id: "results",
        title: `Results of "${query}"`,
        cards: shows.results.map(CardService.getShowCard)
      }
    };
  }
}

export default SearchResultPageService;