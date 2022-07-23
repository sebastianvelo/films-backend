import { EpisodeResponse } from "tmdb-js/lib/api/request/episode/response/Response";
import { MovieResponse } from "tmdb-js/lib/api/request/movie/response/Response";
import { PersonDetailsResponse } from "tmdb-js/lib/api/request/person/response/Response";
import { SeasonWithEpisodesResponse } from "tmdb-js/lib/api/request/season/response/Response";
import { TVShowResponse } from "tmdb-js/lib/api/request/tv-show/response/Response";
import { DetailHeaderProps } from "../../../../detail/model/DetailPageProps";

class DetailHeaderService {
    public static getMovieHeader = (movie: MovieResponse): DetailHeaderProps => ({
        title: `${movie.title}`
    });

    public static getPersonHeader = (person: PersonDetailsResponse): DetailHeaderProps => ({
        title: `${person.name}`,
    });

    public static getShowHeader = (tv: TVShowResponse): DetailHeaderProps => ({
        title: `${tv.original_name}`,
        subtitle: `(${tv.vote_average})`
    });

    public static getSeasonHeader = (season: SeasonWithEpisodesResponse): DetailHeaderProps => ({
        title: `${season.name}`,
    });

    public static getEpisodeHeader = (episode: EpisodeResponse): DetailHeaderProps => ({
        title: `${episode.name} (${episode.season_number}x${episode.episode_number})`,
    })
}

export default DetailHeaderService;