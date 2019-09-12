import React, { Component, MouseEvent } from 'react'
import { Menu, MenuItemProps, Input, Button, Icon } from 'semantic-ui-react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import LoginModal from './LoginModal'

import { openFirebaseAuth } from '../modules/firebase'
import { getUser, logOut } from '../modules/auth'

interface Props extends RouteComponentProps { }

interface State {
  modal: boolean
  activeItem: string | undefined
  isUser: boolean
  year: string
}

const currentYear: string = new Date().getFullYear().toString()

class NavBar extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      activeItem: this.props.location.pathname,
      modal: false,
      isUser: false,
      year: currentYear,
    }
  }

  handleItemClick: (event: MouseEvent, data: MenuItemProps) => void = (_, { name }) => {
    this.setState({ activeItem: name })
    if (name != null) this.handleRedirect(name)
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
  closeModal = () => {
    this.setState({
      modal: !this.state.modal
    })
  }

  render() {
    const { activeItem } = this.state
    const loadProfileButtons = () => {
      const user = getUser()
      if (user === null) {
        return (
          <Menu.Menu position="right">
            <Menu.Item >
              <Button className="navButton" id="loginButton" basic color="black" onClick={this.toggleModal}>
                Sign In
              </Button>
            </Menu.Item>
            <Menu.Item>
            </Menu.Item>
          </Menu.Menu >
        )
      }
      return (
        <Menu.Menu position="right">
          <Menu.Item
            name='/profile'
            active={activeItem === '/profile'}
            className='link'
            onClick={this.handleItemClick}
          >
            <Icon name="user circle" size="large" /> &nbsp; {user.name || "Profile"}
          </Menu.Item>
          <Menu.Item >
            <Button className="navButton" id="logoutButton" basic color="black" onClick={logOut}>
              Sign Out
              </Button>
          </Menu.Item>
          <Menu.Item>
          </Menu.Item>
        </Menu.Menu >
      )
    }
    return (
      <Menu pointing className="navBar"
        fixed="top"
      >
        <Menu.Item header name=""
          onClick={this.handleItemClick}><img src="/assets/spirited_away.svg" alt="spirited away logo" />&nbsp;Ani Lobby</Menu.Item>
        <Menu.Item
          name='/season/winter'
          className='link'
          active={activeItem === '/winter'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='/season/spring'
          className='link'
          active={activeItem === '/spring'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='/season/summer'
          className='link'
          active={activeItem === '/summer'}
          onClick={this.handleItemClick}
        >Summer</Menu.Item>
        <Menu.Item
          name='/season/fall'
          className='link'
          active={activeItem === '/fall'}
          onClick={this.handleItemClick}
        />
        <Menu.Item className='link'>
          <Input id="search" className="searchInput" placeholder='Search all Anime' />
        </Menu.Item>
        {loadProfileButtons()}
        <LoginModal open={this.state.modal} closeModal={this.closeModal} />
      </Menu >
    )
  }
}

export default withRouter(NavBar)