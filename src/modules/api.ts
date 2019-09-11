interface Obj {
    [key: string]: string
}

interface ApiResponse {
    message: Anime[]
}

interface Anime {
    name: string
    description: string
}

const routes: Obj = {
    api: "https://ani-lobby.herokuapp.com/api/v1",
    seasons: "seasons",
    search: "search/?search=",
    users: "users",
    anime: "anime"
}

const handleError = (error: Error): void => {
    console.log(error)
}

export const request = (url: string): Promise<ApiResponse> => {
    return fetch(url)
        .then(res => res.json())
        .catch(handleError)
}

export const getAnimesBySeason = (season: string | undefined, year: string): Promise<ApiResponse> => {
    return request(`${routes.api}/${routes.seasons}/${year}/${season}`)
}

export const getAnimesByUser = (userId: string): Promise<ApiResponse> => {
    return request(`${routes.api}/${routes.users}/${userId}/${routes.anime}`)
}

export const searchAnimes = (query: string): Promise<ApiResponse> => {
    return request(`${routes.api}/${routes.search}${query}`)
}

export const getUser = (userId: string): Promise<ApiResponse> => {
    return request(`${routes.api}/${routes.users}/${userId}`)
}