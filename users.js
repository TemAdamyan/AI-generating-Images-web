import md5 from "md5"

export const hashThePassword = (password) => {
    return md5(password)
}


export const Users = [
    {
        id: 1,
        login: "Grigor",
        password: hashThePassword("12345678"),
        fullName: "Nver Abg",
        token: "miban"
    }
]

console.log(Users)
