import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  LoginFormContainer,
  FormContainer,
  LoginWebsiteLogo,
  InputContainer,
  LoginButton,
  UserNameInputField,
  PasswordInputField,
  InputLabel,
  ErrorMessage,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {user_id: username, pin: password}
    const url = 'https://apis.ccbp.in/ebank/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <>
        <InputLabel htmlFor="password">PIN</InputLabel>
        <PasswordInputField
          type="password"
          id="password"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Enter PIN"
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <InputLabel htmlFor="username">User ID</InputLabel>
        <UserNameInputField
          type="text"
          id="username"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="Enter User ID"
        />
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <LoginFormContainer>
        <FormContainer onSubmit={this.submitForm}>
          <LoginWebsiteLogo
            src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
            alt="website login"
          />
          <div>
            <h1>Welcome Back!</h1>
            <InputContainer>{this.renderUsernameField()}</InputContainer>
            <InputContainer>{this.renderPasswordField()}</InputContainer>
            <LoginButton type="submit">Login</LoginButton>
            {showSubmitError && <ErrorMessage>*{errorMsg}</ErrorMessage>}
          </div>
        </FormContainer>
      </LoginFormContainer>
    )
  }
}

export default LoginForm
