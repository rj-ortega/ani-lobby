import React from 'react'
import { Card, Icon, Image, Popup } from 'semantic-ui-react'
import { Anime, Genres } from '../types'

interface Props {
    anime: Anime
}

export const AnimeCard: React.FC<Props> = ({ anime }): JSX.Element => {
    const displayGenres = () => {
        return anime.genres.map((genre: Genres) => {
            return genre.name
        })
    }
    return (
        <Card className="card">
            <Icon.Group size="huge">
                <Image className="card-image" src={anime.image_url} wrapped ui={false} />
                <Icon corner="top right" name='heart outline' />
            </Icon.Group>
            <Card.Content>
                <Popup trigger={
                    <Card.Header className="title has-tooltip">{anime.title}
                    </Card.Header>
                } >{anime.title}</Popup>
                <Card.Description className="synopsis">
                    {anime.synopsis}
                </Card.Description>
            </Card.Content>
            <Card.Content extra className="genres">
                {displayGenres().join(", ")}
            </Card.Content>
        </Card>
    )
}