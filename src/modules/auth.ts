export type SessionUser = {
    name: string
    uid: number
}

export const logIn = (uid: number, name: string): void => {
    const sessionUser: SessionUser = { uid, name }
    localStorage.setItem("user", JSON.stringify(sessionUser))
}

export const logOut = (): void => {
    localStorage.clear()
    window.location.pathname = "/"
}

export const getUser = (): SessionUser | null => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
        return JSON.parse(storedUser)
    }
    return null
}