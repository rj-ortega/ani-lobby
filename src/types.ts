export interface Season {
    season_name: string
    season_year: number
    anime: Anime[]
}
export interface Anime {
    id: string
    mal_id: number
    created_at: string
    updated_at: string
    title: string
    url: string
    image_url: string
    score: number
    episodes: number
    synopsis: string
    genres: Genres[]
    users: User[] | null
}
export interface Genres {
    mal_id: number
    name: string
    url: string
}
export interface User {
    id?: string,
    uid: string,
    username: string
    animes?: null | []
}
export interface SearchResponse {
    results: Anime[]
}