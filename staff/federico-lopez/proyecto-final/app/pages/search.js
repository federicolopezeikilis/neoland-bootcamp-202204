import { retrieveArtistsAndSongs } from "logic"
import { Header, Footer, SearchForm, FlexColSection } from '../components'
import { verifyTokenWithAPICall } from '../helpers'
import { useState } from 'react'
import { ArtistsAndSongsResultsList } from "../components"

export default function Search({ token }) {
    const [artistsAndSongs, setArtistsAndSongs] = useState(null)

    // const onFormSubmit = async event => {
    //     event.preventDefault()

    //     const query = event.target.search.value

    //     try {
    //         const artistsAndSongsResults = await retrieveArtistsAndSongs(query)

    //         console.log(artistsAndSongsResults)
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }

    // const onFormSubmit = event => {
    //     event.preventDefault()
    // }

    const onChangeQuery = async event => {
        const query = event.target.value

        if (query) {
            const artistsAndSongsFounded = await retrieveArtistsAndSongs(query)

            setArtistsAndSongs(artistsAndSongsFounded)
        } else {
            setArtistsAndSongs(null)
        }
    }

    const onCancelClick = async event => {
        setArtistsAndSongs(null)
    }

    return <>
        <Header pageProps="Search" />
        <FlexColSection className="py-24 items-center" >
            
            <SearchForm
                onChangeInput={onChangeQuery}
                onCancelClick={onCancelClick} />

            {artistsAndSongs &&
            <ArtistsAndSongsResultsList results={artistsAndSongs} />}

        </FlexColSection>
        <Footer userRegistered={!!token} page="search" ></Footer>
    </>
}


export async function getServerSideProps({ req, res }) {
    const token = await verifyTokenWithAPICall(req, res)
    if (token) {
        return {
            props: { token }
        }
    } else {
        return {
            props: {}
        }
    }
}