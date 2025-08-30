export const ADMIN_LOG = {
    email: "hangman@gmail.com",
    password: "hangman",
}

export const checkCredentials = (email: string, password: string): boolean => {
    return (email == ADMIN_LOG.email) && (password == ADMIN_LOG.password)
}