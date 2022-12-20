
export const URL = {
    baseURL: "https://strangers-things.herokuapp.com/api/2209-ftb-et-web-pt"
}

export const setTargetValue = (callback) => {
    return (event) => {
        callback(event.target.value)
    }
}