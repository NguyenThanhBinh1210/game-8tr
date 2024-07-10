import axios, { type AxiosInstance } from 'axios'

import { clearLS, getAccessTokenFromLS, setAccesTokenToLS, setProfileFromLS } from './auth'

class Http {
  instance: AxiosInstance
  private accessToken: string
  constructor() {
    this.accessToken = getAccessTokenFromLS()
    this.instance = axios.create({
      baseURL: 'http://localhost:4001/api',
      // baseURL: 'https://v1.nguyenkims.fun/api',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    this.instance.interceptors.request.use(
      (config) => {
        if (this.accessToken && config.headers) {
          config.headers['Authorization'] = `Bearer ${this.accessToken}`
          return config
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )

    this.instance.interceptors.response.use((response) => {
      const { url } = response.config
      if (url === '/v1/auth/login-user'|| url === '/v1/auth/register') {
        clearLS()
        const dataProfile = response
        const newUser = dataProfile.data.user
        this.accessToken = response.data.token
        console.log(this.accessToken)
        // this.refreshToken = response.data.refresh_token
        setProfileFromLS(newUser)
        setAccesTokenToLS(this.accessToken)
        // setRefreshTokenToLS(this.refreshToken)
      } else if (url === '/user/log-out') {
        // this.accessToken = ''
        // this.refreshToken = ''
        // clearLS()
      }
      return response
    })
  }
}

const http = new Http().instance

export default http
