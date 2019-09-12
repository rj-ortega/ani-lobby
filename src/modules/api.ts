import { Anime, SearchResponse, User, Season } from "../types"

interface Obj {
    [key: string]: string
}

interface ApiResponse<T> {
    message: T
}

const routes: Obj = {
    api: "https://ani-lobby.herokuapp.com/api/v1",
    seasons: "seasons",
    search: "search?search=",
    users: "users",
    anime: "anime"
}

const handleError = (error: Error): void => {
    console.log(error)
}

export const request = (url: string): Promise<any> => {
    return fetch(url)
        .then(res => res.json())
        .catch(handleError)
}

export const postUser = (url: string, username: string, uid: string): Promise<any> => {
    return fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            uid,
        })
    }).then(res => res.json())
        .catch(handleError)
}
// export const patchUser = (url )

export const getAnimesBySeason = (season: string | undefined, year: string): Promise<ApiResponse<Season>> => {
    return request(`${routes.api}/${routes.seasons}?year=${year}&season=${season}`)
}

export const getAnimesByUser = (userId: string): Promise<ApiResponse<Anime[]>> => {
    return request(`${routes.api}/${routes.users}/${userId}/${routes.anime}`)
}

export const searchAnimes = (query: string | string[] | null | undefined): Promise<ApiResponse<SearchResponse>> => {
    return request(`${routes.api}/${routes.search}${query}`)
}

export const getUser = (userId: string): Promise<ApiResponse<User>> => {
    return request(`${routes.api}/${routes.users}/${userId}`)
}

export const createUser = (username: string, uid: string): Promise<ApiResponse<User>> => {
    return postUser(`${routes.api}/${routes.users}`, username, uid)
}