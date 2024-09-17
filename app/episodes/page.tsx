import {API} from '../../assets/api/api'
import {PageWrapper} from '../../components/PageWrapper/PageWrapper'
import {Card} from '../../components/Card/Card'
import {GetServerSideProps} from 'next'

export const getServerSideProps: GetServerSideProps = async ({res}) => {
    const episodes = await API.rickAndMorty.getEpisodes()

    if (!episodes) {
        return { notFound: true }
    }

    return {
        props: { episodes }
    }
}

const getEpisodes = async () => {
    const res = await
}

const Episodes = () => {

    const episodesList = episodes.results.map(episode => (
        <Card key={episode.id} name={episode.name}/>
    ))

    return (
        <PageWrapper>
            {episodesList}
        </PageWrapper>
    )
}

export default Episodes
