const { Song, Artist, User } = require('../models')
const { NotFoundError } = require('../errors')
const { validateStringNotEmptyOrBlank, validateGenres, validateObjectId, validateDate } = require('../validators')

async function createSong(userId, { artist, name, genres, album, date }) {
    validateObjectId(userId)
    validateObjectId(artist)
    validateStringNotEmptyOrBlank(name, 'song name')
    validateGenres(genres)
    if (album) validateStringNotEmptyOrBlank(album, 'album')
    if (date) validateDate(date)

    const user = await User.findById(userId)

    if(!user) throw NotFoundError(`user with id ${userId} not found`)
        
    const artistFounded = await Artist.findOne({ _id: artist })

    if (!artistFounded) throw new NotFoundError(`artist with id ${artist} not found`)

    const { _id } = await Song.create({ artist, name, genres, album, date })

    return { id: _id.toString() }
}

module.exports = createSong