import React, { Component, MouseEvent } from 'react'
import ProfileModal from './Modal'
import { Menu, MenuItemProps, Input, Button, Segment, Modal } from 'semantic-ui-react'
import { BrowserRouter as Link, Redirect, withRouter, RouteComponentProps } from 'react-router-dom'

interface Props extends RouteComponentProps { }

interface State {
  modal: boolean,
  activeItem: string | undefined
  isUser: boolean
}

class NavBar extends Component<Props, State> {
  state = {
    activeItem: "",
    modal: false,
    isUser: false
  }

  handleItemClick: (event: MouseEvent, data: MenuItemProps) => void = (_, { name }) => {
    this.setState({ activeItem: name })
    this.handleRedirect(`/${name}`)
  }

  handleRedirect = (route: string) => {
    this.props.history.push(route)
  }
  toggleModal = () => {
    this.setState({
      modal: !this.state.modal
    })
  }
  toggleUser = () => {
    this.setState({
      isUser: !this.state.isUser,
      modal: !this.state.modal
    })
  }
  render() {
    const { activeItem } = this.state

    return (
      <Menu className="navBar"
        fixed="top"
        size="large"
        inverted
      >
        <Menu.Item header name="" className='link'
          onClick={this.handleItemClick}>Ani Lobby</Menu.Item>
        <Menu.Item
          name='winter'
          active={activeItem === 'winter'}
          className='link'
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='spring'
          active={activeItem === 'spring'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='summer'
          active={activeItem === 'summer'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='fall'
          active={activeItem === 'fall'}
          onClick={this.handleItemClick}
        />
        <Menu.Item >
          <Input className="searchInput" placeholder='Search for Anime' />
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Button className="navButton" basic inverted>
              Log In
          </Button>
          </Menu.Item>
          <Menu.Item>
            <Button className="navButton" basic inverted onClick={this.toggleModal}>
              Log Out
          </Button>
          </Menu.Item>

          <Menu.Item
            position='right'
            name='profile'
            active={activeItem === 'profile'}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
        <ProfileModal open={this.state.modal} isUser={this.state.isUser} toggleUser={this.toggleUser} />
      </Menu>
    )
  }
}

export default withRouter(NavBar)