import React, { Component } from 'react'
import { AnimeCard } from './AnimeCard'
import { withRouter, RouteComponentProps } from 'react-router-dom'

type User = {
    id: string,
    created_at: string,
    updated_at: string,
    username: string
    animes: null | []
}

interface Anime {
    string: string
}

interface Props extends RouteComponentProps { }

interface State {
    animes: Anime[]
}

class Profile extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            animes: []
        }
    }
    render() {
        const { animes } = this.state
        return null
    }
    // const cards = (animes) => {
    //     return animes.map(anime => {
    //         <AnimeCard anime={anime} />
    //     })
    // }
    // return (
    //     <>
    //         {cards(this.props.animes)}
    //     </>
    // )

}
export default withRouter(Profile)