import React, { Component } from 'react'
import AnimeCard from './AnimeCard'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { getAnimesBySeason } from '../modules/api'
import { Anime } from '../types'
import { Card, Loader } from 'semantic-ui-react'


interface Props extends RouteComponentProps { }

interface State {
    loading: boolean
    animes: Anime[]
}
class Season extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            loading: false,
            animes: []
        }
    }
    componentDidUpdate(prevProps: Props) {
        if (prevProps.location.pathname !== this.props.location.pathname) {
            this.getAnimes()
        }
    }
    componentDidMount() {
        this.getAnimes()
    }
    getAnimes() {
        this.setState({
            loading: true
        })
        this.getSeasonAnime()
            .then(result => this.setState({
                animes: result.message.anime,
                loading: false
            }))
            .catch(error => {
                this.setState({
                    loading: false
                })
                console.error(error)
            })
    }
    getSeasonAnime = () => {
        const season: string = (this.props.match.params as { season: string }).season
        const validSeasons: { [season: string]: boolean } = {
            winter: true,
            summer: true,
            fall: true,
            spring: true
        }
        if (!validSeasons[season]) {
            this.props.history.push("/")
        }
        return getAnimesBySeason(season, "2019")
    }
    render() {
        return (
            <>
                {
                    this.state.loading ? <Loader active inline='centered' /> :
                        <Card.Group centered>
                            {this.state.animes.map(anime => {
                                return <AnimeCard key={anime.mal_id} anime={anime} />
                            })}
                        </Card.Group>
                }
            </>
        )
    }
}
export default withRouter(Season)