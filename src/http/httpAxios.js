import axios from 'axios'
import qs from 'qs'

axios.interceptors.request.use(config => {
  console.log(config)
  return config
}, error => {
  console.log(error)
})

const checkStatus = (response) => {
  if (response.status === 200 || response.status === 304) {
    return response
  } else {
    return {
      'code': -404,
      'message': response.statusText,
      'data': response.statusText
    }
  }
}

const checkCode = (res) => {
  return res
}

export default {
  post (url, data) {
    return axios({
      method: 'post',
      url: url,
      data: qs.stringify(data),
      timeout: 3000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }).then(checkStatus).then(checkCode)
  },
  get (url, params) {
    return axios({
      method: 'get',
      url: url,
      params,
      timeout: 3000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).then(checkStatus).then(checkCode)
  }
}
