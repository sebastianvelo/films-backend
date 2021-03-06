import { EpisodeResponse } from "tmdb-js/lib/api/request/episode/response/Response";
import { MovieResponse } from "tmdb-js/lib/api/request/movie/response/Response";
import { PersonDetailsResponse } from "tmdb-js/lib/api/request/person/response/Response";
import { SeasonWithEpisodesResponse } from "tmdb-js/lib/api/request/season/response/Response";
import { TVShowResponse } from "tmdb-js/lib/api/request/tv-show/response/Response";
import { DataItemProps } from "../../../../detail/model/DetailPageProps";
import DataItemHelper from "../../data-item/DataItemHelper";

class DetailDescriptionHelper {

    public static getShowDescription = (show: TVShowResponse): DataItemProps | undefined =>
        DataItemHelper.getDataItem(`Description`, `${show.overview}`);

    public static getMovieDescription = (movie: MovieResponse): DataItemProps | undefined =>
        DataItemHelper.getDataItem(`Description`, `${movie.overview}`);

    public static getPersonDescription = (person: PersonDetailsResponse): DataItemProps | undefined =>
        DataItemHelper.getDataItem(`Biography`, person.biography);

    public static getSeasonDescription = (season: SeasonWithEpisodesResponse): DataItemProps | undefined =>
        DataItemHelper.getDataItem(`Description`, season.overview);

    public static getEpisodeDescription = (episode: EpisodeResponse): DataItemProps | undefined =>
        DataItemHelper.getDataItem(`Description`, episode.overview);
}

export default DetailDescriptionHelper;