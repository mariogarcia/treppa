import axios from 'axios'

const API_BASE_URL = 'http://172.17.0.3:5050'
export const CALL_API = 'CALL_API'

const makeCall = ({endpoint, method = 'GET', body}) => {
    const url = `${API_BASE_URL}${endpoint}`
    const params = {
        method: method,
        url,
        data: body,
        headers: {
            'Content-Type': 'application/json'
        }
    }

    return axios(params)
        .then(resp => { return resp })
        .catch(err => { return err })
}

export const apiMiddleware = store => next => action => {
    const callApi = action[CALL_API]

    if (typeof callApi === 'undefined') {
        return next(action)
    }

    const [requestStartedType, successType, failureType] = callApi.types

    next({type: requestStartedType})

    const params = {
        method: callApi.method,
        body: callApi.body,
        endpoint: callApi.endpoint
    }

    return makeCall(params)
        .then(response => {
            next({
                type: successType,
                payload: response.data
            })})
        .catch(err => {
            next({
                type: failureType,
                error: err.message
            })
        })

}
