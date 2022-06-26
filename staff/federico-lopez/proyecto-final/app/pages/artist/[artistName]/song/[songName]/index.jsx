import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { Title, Title2, Title3, ChevronLeftImage, SongIconImage, FavoriteImage, Footer, FlexColSection, InterpretationsList, Tag, ButtonBlue, ChevronUpImage } from '../../../../../components'
import { retrieveSong, retrieveInterpretationsFromSong, context } from '../../../../../logic'
import Apium from '../../../../../vendor/Apium'

export default function Song({ interpretations, song }) {
    const router = useRouter()

    const [likedSong, setLikedSong] = useState(false)

    const artistName = song.artist.name

    const onBackClick = () => {
        router.back()
    }

    const onFavoriteClick = () => likedSong === false ? setLikedSong(true) : setLikedSong(false)

    return <>
        <header className="w-full fixed top-0 bg-white p-4 gap-4 shadow-custom-items z-50">
            <div className="flex flex-col gap-4">
                <button className="w-8 h-8" onClick={onBackClick} >
                    <ChevronLeftImage />
                </button>                <div className="flex flex-col justify-between gap-2">
                    <div className="flex gap-2">
                        <SongIconImage className="w-6 h-6" grey={true} />
                        <Title2>Song</Title2>
                    </div>
                    <div className="flex justify-between items-center">
                        <Title>{song.name}</Title>
                        <FavoriteImage className="w-6 h-6 -mb-1" full={likedSong} onClick={onFavoriteClick} />
                    </div>
                </div>
                <Link href={`/artist/${artistName}`}>
                    <a className="w-fit">
                        <Title3>{artistName}</Title3>
                    </a>
                </Link>
                <div className="flex gap-2 bg-white overflow-x-scroll scrollbar-hide">
                    <Tag active={true} >guitar</Tag>
                    <Tag>ukelele</Tag>
                    <Tag>bass</Tag>
                    <Tag>piano</Tag>
                    <Tag>trumpet</Tag>
                </div>
            </div>
        </header>

        {/* <FlexColSection class="w-full min-h-screen h-full overflow-scroll flex flex-col items-center"> */}
        <div className="pt-64">
            <FlexColSection className="items-center">

                <div className="w-full h-14 px-4 bg-primary flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <h3 className="text-xl text-myblack font-bold">Interpretations</h3>
                        <p className="text-xs text-mygrey">({interpretations.length})</p>
                    </div>
                    <ButtonBlue>Add New</ButtonBlue>
                </div>



                {interpretations.length > 0 &&
                    <InterpretationsList interpretations={interpretations} artistName={artistName} songName={song.name} />
                }

                {interpretations.length === 0 && <p>There are not available interpretations for this song</p>}

            </FlexColSection>
        </div>
        <Footer />
    </>
}

export async function getServerSideProps({ params }) {
    const api = new Apium(context.API_URL)

    const [interpretations, song] = await Promise.all([
        retrieveInterpretationsFromSong(params.songName, params.artistName),
        retrieveSong(params.songName, params.artistName)
    ])

    return {
        props: {
            interpretations,
            song
        }
    }
}