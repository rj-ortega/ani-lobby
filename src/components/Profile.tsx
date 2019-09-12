import React, { Component } from 'react'
import AnimeCard from './AnimeCard'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { Anime, User } from '../types'
import { Card, Loader, Message } from 'semantic-ui-react'


interface Props extends RouteComponentProps { }

interface State {
    loading: boolean
    animes: Anime[]
    user?: User
}
class Profile extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            loading: false,
            animes: []
        }
    }
    // componentDidUpdate(prevProps: Props) {
    //     if (prevProps.location.pathname !== this.props.location.pathname) {
    //         this.getAnimes()
    //     }
    // }

    render() {
        const { animes } = this.state

        return (
            <>
                {
                    this.state.loading ? <Loader active inline='centered' /> :
                        <Card.Group centered>
                            {animes.length ? animes.map(anime => {
                                return <AnimeCard key={anime.mal_id} anime={anime} />
                            }) : <Message id="not-found" floating>
                                    <h3>Add some anime to your profile</h3>
                                    <img className="gif" src="/assets/ok.gif" alt="one punch man gif" />
                                </Message >
                            }
                        </Card.Group>
                }
            </>
        )
    }
}
export default withRouter(Profile)