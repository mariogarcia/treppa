
/**
 * Middleware responsible for intercepting all actions
 * carrying the meta property
 *
 * @param store The react store
 * @param next The next middleware
 * @param action the action received by the middleware
 * @since 0.1.0
 */
const analytics = store => next => action => {
    if (!action || !action.meta || !action.meta.analytics) {
        return next(action);
    }

    const { data, event } = action.meta.analytics

    fakeAnalyticsApi(event, data)
        .then(resp => {
            console.log('Recorded:', event, data);
        })
        .catch(err => {
            console.error('An error ocurred while sending analytics:', err.toString());
        })

    return next(action);
};

/**
 * Function acting like a remote analytics api
 *
 * @param eventName the type of event sent
 * @param data payload sent to the analytics service
 * @return a JS Promise
 */
const fakeAnalyticsApi = (eventName, data) => {
    return new Promise((resolve, reject) => {
        resolve('Success!');
    })
}

export default analytics;
