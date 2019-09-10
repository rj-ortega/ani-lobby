import React, { Component, MouseEvent } from 'react'
import { Menu, MenuItemProps, Input, Button } from 'semantic-ui-react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import ProfileModal from './Modal'

import { openFirebaseAuth } from '../modules/firebase'
import { getUser, logOut } from '../modules/auth'

interface Props extends RouteComponentProps { }

interface State {
  modal: boolean
  activeItem: string | undefined
  isUser: boolean
}

class NavBar extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      activeItem: "",
      modal: false,
      isUser: false,
    }
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
    }, () => {
      openFirebaseAuth()
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
    const loadProfileButtons = () => {
      if (getUser() === null) {
        return (
          <Menu.Menu position="right">
            <Menu.Item>
              <Button className="navButton" basic inverted onClick={this.toggleModal}>
                Sign In
              </Button>
            </Menu.Item>
          </Menu.Menu >
        )
      }
      return (
        <Menu.Menu position="right">
          <Menu.Item>
            <Button className="navButton" basic inverted onClick={logOut}>
              Sign Out
              </Button>
          </Menu.Item>
          <Menu.Item
            name='profile'
            active={activeItem === 'profile'}
            className='link'
            onClick={this.handleItemClick}
          />
        </Menu.Menu >
      )
    }
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
        {loadProfileButtons()}
        <ProfileModal open={this.state.modal} isUser={this.state.isUser} toggleUser={this.toggleUser} />
      </Menu >
    )
  }
}

export default withRouter(NavBar)