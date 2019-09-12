import { getUser, createUser } from "./api"
import { User } from "../types"

export const logIn = (uid: string, username: string): Promise<any> => {
    return getUser(uid)
        .then(res => {
            if (res.message) {
                storeUser(res.message, "user")
            } else {
                return createUser(username, uid)
                    .then(res => {
                        storeUser({ uid: res.message.uid, username: res.message.username, id: res.message.id }, "user")
                    })
            }
        })
}

export const logOut = (): void => {
    localStorage.clear()
    window.location.pathname = "/"
}

export const getStoredUser = (key: string): User | null => {
    let storedUser = localStorage.getItem(key)
    if (storedUser) {
        try {
            return JSON.parse(storedUser)
        } catch (e) {
            localStorage.removeItem(key)
            return null
        }
    }
    return null
}

export const storeUser = (user: User, key: string): void => {
    localStorage.setItem(key, JSON.stringify(user))
}