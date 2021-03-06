import { CreditPerson } from "tmdb-js/lib/api/model/credit/Credit";
import { Character, Episode } from "tmdb-js/lib/api/model/episode/Episode";
import { TVShow } from "tmdb-js/lib/api/model/film/Film";
import { Image } from "tmdb-js/lib/api/model/image/Image";
import { PersonDetail } from "tmdb-js/lib/api/model/person/Person";
import { MovieResponse } from "tmdb-js/lib/api/request/movie/response/Response";
import { SeasonResponse } from "tmdb-js/lib/api/request/season/response/Response";
import { TVShowResponse } from "tmdb-js/lib/api/request/tv-show/response/Response";
import { ItemProps } from "../../../watch-list/model/WatchListPageProps";
import { CardProps } from "../../model/CardProps";
import MediaHelper from "../media/MediaHelper";

class CardHelper {
  public static getMovieCard = (movie: MovieResponse): CardProps => ({
    title: movie.title,
    subtitle: `${movie.release_date?.substring(0, 4)}`,
    image: MediaHelper.getImage(movie.poster_path, movie.title),
    path: `/movie/${movie.id}`
  });

  public static getShowCard = (show: TVShow): CardProps => ({
    title: show.original_name,
    subtitle: `${show.first_air_date?.substring(0, 4)}`,
    image: MediaHelper.getImage(show.poster_path, show.title),
    path: `/show/${show.id}`
  });

  public static getPersonCard = (person: PersonDetail): CardProps => ({
    title: person.name,
    subtitle: person.birthday,
    image: MediaHelper.getImage(person.profile_path, person.name),
    path: `/person/${person.id}`
  });

  public static getCastMemberCard = (castMember: CreditPerson): CardProps => ({
    title: castMember.name,
    subtitle: `as ${castMember.character}`,
    image: MediaHelper.getImage(castMember.profile_path, castMember.name),
    path: `/person/${castMember.id}`
  });

  public static getCrewCard = (crew: Character): CardProps => ({
    title: crew.name,
    subtitle: `as ${crew.job}`,
    image: MediaHelper.getImage(crew.profile_path, crew.name),
    path: `/person/${crew.id}`
  });

  public static getShowAppareances = (castMember: any): CardProps => ({
    title: castMember.name,
    subtitle: `as ${castMember.character}`,
    path: `/show/${castMember.id}`,
    image: MediaHelper.getImage(castMember.poster_path, castMember.name),
  });

  public static getMovieAppareances = (castMember: any): CardProps => ({
    title: castMember.original_title,
    subtitle: `as ${castMember.character}`,
    path: `/movie/${castMember.id}`,
    image: MediaHelper.getImage(castMember.poster_path, castMember.original_title),
  });

  public static getSeasonCard = (season: SeasonResponse, show?: string | number): CardProps => ({
    title: `${season.name}`,
    subtitle: `${season.episode_count} episodes`,
    image: MediaHelper.getImage(season.poster_path, season.name),
    path: `/show/${show}/s/${season.season_number}`
  });

  public static getEpisodeCard = (episode: Episode, show: string): CardProps => ({
    title: `${episode.name}`,
    subtitle: `${episode.vote_average}/10`,
    image: MediaHelper.getImage(episode.still_path, episode.name),
    path: `/show/${show}/s/${episode.season_number}/e/${episode.episode_number}`
  });

  public static getGalleryImage = (image: Image): CardProps => ({
    image: MediaHelper.getImage(image.file_path, image.id)
  });

  public static getShowSuggestionCard = (show: TVShowResponse): ItemProps => ({
    title: show.original_name ?? "",
    poster: MediaHelper.getImage(show.poster_path, show.title),
    info: `${show.seasons?.filter(season => season.season_number).length} seasons`,
    category: show.genres?.map((genre) => genre.name).join(", "),
    path: `/show/${show.id}`
  });
}

export default CardHelper;
