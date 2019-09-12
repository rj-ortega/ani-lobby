import React, { Component, MouseEvent } from 'react'
import { Card, Icon, Image, Popup } from 'semantic-ui-react'
import { Anime, Genres } from '../types'
import { getStoredUser } from '../modules/auth'
import ComingSoon from './ComingSoon'

interface Props {
    anime: Anime
}
interface State {
    modal: boolean
}
class AnimeCard extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            modal: false,
        }
    }
    displayGenres = () => {
        if (this.props.anime.genres) {
            return this.props.anime.genres.map((genre: Genres) => {
                return genre.name
            })
        }
        return [""]
    }
    handleClick: (event: MouseEvent) => void = (event) => {
        if (localStorage.user) {
            console.log(this.props.anime)
            console.log(getStoredUser("user"))
        }
    }
    toggleModal = () => {
        this.setState({
            modal: !this.state.modal
        })
    }
    closeModal = () => {
        this.setState({
            modal: !this.state.modal
        })
    }
    render() {
        const { anime } = this.props
        return (
            <Card className="card">
                <Icon.Group className="icon-container" size="huge">
                    <Image className="card-image" src={anime.image_url} wrapped ui={false} />
                    <i className="top right corner heart outline icon" onClick={this.toggleModal}></i>
                </Icon.Group>
                <Card.Content>
                    <Popup trigger={
                        <Card.Header className="title has-tooltip">{anime.title}
                        </Card.Header>}
                    > {anime.title}
                    </Popup>
                    <a id="world-tag" target="_blank" href={anime.url}>MAL Website: <Icon name='world' inverted size="small" /></a>
                    <Card.Meta>Score: {anime.score}
                    </Card.Meta>
                    <Card.Meta>Episodes: {anime.episodes}</Card.Meta>
                    <Card.Description className="synopsis">
                        {anime.synopsis}
                    </Card.Description>
                </Card.Content>
                <Popup trigger={
                    <Card.Content extra className="genres">
                        {this.displayGenres().join(", ")}
                    </Card.Content>
                } >{this.displayGenres().join(", ")}</Popup>
                <ComingSoon open={this.state.modal} closeModal={this.closeModal} />
            </Card >
        )
    }
};
export default AnimeCard