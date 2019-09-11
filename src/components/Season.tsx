import React, { Component } from 'react'
import AnimeCard from './AnimeCard'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { tsPropertySignature } from '@babel/types'

interface Props extends RouteComponentProps { }
interface Anime {
    string: string
}
interface State {
    animes: Anime[]
}

class Season extends Component<Props, State> {
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
export default withRouter(Season)