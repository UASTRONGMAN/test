import axios from 'axios'
import {IUserModel} from "../models/IUserModel";

const AxiosInstance = axios.create({
    baseURL: 'owu.linkpc.net/carsAPI/v2',
    // headers: {}
})

const userRegistration = {
    registration: ({username, password}: IUserModel) => {
        return fetch('owu.linkpc.net/carsAPI/v2/users', {
            method: 'POST',
            body: JSON.stringify({
                username: username,
                password: password
            }),
            headers: {
                'Content-type': 'charset=UTF-8',
            },
        })
            .then(value => value.json())
    }
}

export {
    userRegistration
}