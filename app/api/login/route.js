import {Users, hashThePassword} from '../../../users'

export async function POST(request) {

    const data = await request.json();
    console.log(Users);

    const user = Users.find((user) => user.login === data.login)

    if(!user) {
        return Response.json({ status: "failed", message: "Smothing want wrong" })
    }

    if(hashThePassword(data.password) !== user.password) {
        return Response.json({ status: "failed", message: "Incorect password" })
    }

    return Response.json({
        token: hashThePassword(`${user.login}:${user.password}`)
    })
}

export async function GET(request) {
    console.log(request.url)
    return Response.json({ status: "succcess" })
}
