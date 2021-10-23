import styled from 'styled-components'

export const HomeMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #183b56;
  height: 100vh;
`

export const NavHeader = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  padding-left: 30px;
  padding-right: 30px;
`

export const HeaderImage = styled.img`
  height: 50px;
  margin: 5px;
`

export const LogoutButton = styled.button`
  border: 1px solid #e0eefe;
  border-radius: 5px;
  background-color: transparent;
  color: #e0eefe;
  width: 100px;
  height: 35px;
  cursor: pointer;
`

export const ContentContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Heading = styled.h1`
  color: #ffffff;
`
