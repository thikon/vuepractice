import https from 'https'
import axios from 'axios'

class HttpRequest {
  constructor(url) {
    // this.axios = axios
    this.axiosInstance = axios.create({
      baseURL: url,
      timeout: 120000,
      httpsAgent: new https.Agent({
        rejectUnauthorized: false
      })
    })

    this.axiosInstance.defaults.headers.common['Cache-Control'] = 'no-cache'
    this.axiosInstance.defaults.headers.common['Content-Type'] =
      'application/json'
    this.axiosInstance.defaults.headers.common['Access-Control-Allow-Origin'] =
      '*'
    this.axiosInstance.defaults.headers.get.Accept = 'application/json'
    this.axiosInstance.defaults.headers.post.Accept = 'application/json'

    this.axiosInstance.interceptors.request.use(
      function(config) {
        // Do something before request is sent
        return config
      },
      function(error) {
        // Do something with request error
        return Promise.reject(error)
      }
    )

    // Add a response interceptor
    this.axiosInstance.interceptors.response.use(
      function(response) {
        // Do something with response data
        return response
      },
      function(error) {
        console.log('error.response', error.response)
        if (error.response.status === 401) {
          if (
            error.response.data != undefined &&
            error.response.data.msg == 'Wrong username/password'
          ) {
            return error
          } else {
            localStorage.removeItem('accessToken')
            localStorage.removeItem('userData')
            window.location = '/login'
            return error.response
          }
        } else if (
          error.response.status === 403 ||
          error.response.status === 405
        ) {
          return error.response
        }
        // if (error.response.status === 500) {
        if (
          error.response.data !== undefined &&
          error.response.data.code !== undefined &&
          error.response.data.code == 200
        ) {
          return error.response.data
        }

        return error.response
      }
    )
  }

  getAccessToken() {
    const token = localStorage.getItem('accessToken')
    return token || false
  }

  setHeader(header) {
    // this.axiosInstance.defaults.headers.common[header.key] = header.value
    this.axiosInstance.defaults.headers.common = header
    // this.axiosInstance.defaults.headers.post["Content-Type"] =
    //   "application/x-www-form-urlencoded";
  }

  setHeaderBearerAuth(token) {
    this.setHeader({ Authorization: `Bearer ${token}` })
  }

  get(methodName, data) {
    return this.axiosInstance.get(methodName, {
      params: data
    })
  }

  getBlob(methodName, data) {
    return this.axiosInstance.get(methodName, {
      params: data,
      responseType: 'blob'
    })
  }

  post(methodName, data) {
    return this.axiosInstance.post(methodName, data)
  }

  update(methodName, data) {
    return this.axiosInstance.put(methodName, data)
  }

  delete(methodName, param, data) {
    return this.axiosInstance.delete(methodName, {
      params: param,
      data: data
    })
  }

  request(type, url, data) {
    let promise = null
    switch (type) {
      case 'GET':
        promise = axios.get(url, { params: data })
        break
      case 'POST':
        promise = axios.post(url, data)
        break
      case 'PUT':
        promise = axios.put(url, data)
        break
      case 'DELETE':
        promise = axios.delete(url, data)
        break
      default:
        promise = axios.get(url, { params: data })
        break
    }
    return promise
  }
}

export default HttpRequest
