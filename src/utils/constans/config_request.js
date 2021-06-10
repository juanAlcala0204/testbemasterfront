export const ENDPOINT = "http://localhost:4000/app";

export const REQUEST_CONFIG = {
    get: {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    },
    post: (data) => ({
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    }),
    put: (data) => ({
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
}