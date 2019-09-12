import React, { Component } from 'react'
import AnimeCard from './AnimeCard'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { Card, Loader } from 'semantic-ui-react'
import { searchAnimes } from '../modules/api'
import { Anime } from '../types'
import queryString from 'query-string'

interface Props extends RouteComponentProps { }

interface State {
    animes: Anime[]
    loading: boolean
}

class Search extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            animes: [],
            loading: false
        }
    }
    componentDidUpdate(prevProps: Props) {
        console.log(prevProps.location.search, this.props.location.search)
        if (prevProps.location.search !== this.props.location.search) {
            this.getSearchAnimes()
        }
    }
    componentDidMount() {
        this.getSearchAnimes()
    }
    getSearchAnimes() {
        const values = queryString.parse(this.props.location.search).query
        // let value = values
        // if (typeof values !== 'string' && values !== undefined && values !== null) {
        //     value = values.join(" ");
        // }
        this.setState({
            loading: true
        })
        searchAnimes(values)
            .then(result => this.setState({
                animes: result.message.results,
                loading: false
            }))
            .catch(error => {
                this.setState({
                    loading: false
                })
                console.error(error)
            })
    }
    render() {
        const { animes } = this.state
        return (
            <>
                {
                    this.state.loading ? <Loader active inline='centered' /> :
                        <Card.Group centered>
                            {animes ? this.state.animes.map(anime => {
                                return <AnimeCard key={anime.mal_id} anime={anime} />
                            }) : null
                            }
                        </Card.Group>
                }
            </>
        )
    }
}

export default withRouter(Search)