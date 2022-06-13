import Apium from '../vendor/Apium'
import { context } from './context'

export async function retrieveInterpretationsFromSong(songId) {
    // TODO validate songId
    
    const api = new Apium(context.API_URL)

    const { status, payload } = await api.get(
        `songs/${songId}`)

    const data = JSON.parse(payload)

    if (status === 200) return data

    else if (status >= 400 && status < 500) throw new Error(data.error)

    else if (status >= 500) throw new Error('server error')
}