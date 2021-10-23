import {NotFoundContainer, Heading, Desc, Image} from './styledComponents'

const NotFound = () => (
  <>
    <NotFoundContainer>
      <Image
        src="https://assets.ccbp.in/frontend/react-js/ebank-not-found-img.png"
        alt="not found"
      />
      <Heading>Page Not Found</Heading>
      <Desc>we are sorry, the page you requested could not be found.</Desc>
    </NotFoundContainer>
  </>
)

export default NotFound
