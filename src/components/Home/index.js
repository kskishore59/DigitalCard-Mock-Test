import {withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import {
  HomeMainContainer,
  NavHeader,
  HeaderImage,
  LogoutButton,
  ContentContainer,
  Heading,
} from './styledComponent'

const HomeRoute = props => {
  const onLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/ebank/login')
  }

  return (
    <HomeMainContainer>
      <NavHeader>
        <HeaderImage
          src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
          alt="website logo"
        />
        <LogoutButton onClick={onLogout}>Logout</LogoutButton>
      </NavHeader>
      <ContentContainer>
        <Heading>Your Flexibility, Our Excellence</Heading>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
            alt="digital card"
          />
        </div>
      </ContentContainer>
    </HomeMainContainer>
  )
}

export default withRouter(HomeRoute)
