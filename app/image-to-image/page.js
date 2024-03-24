import GenerateView from './ImageToImageView'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default function Generate() {
    const cookieStore = cookies()
    const token = cookieStore.get('token')

    if(!token) {
        return redirect('/login')
    }


    return (
        <GenerateView/>
    )
}