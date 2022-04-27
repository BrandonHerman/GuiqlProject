import axios from 'axios';
import {apiEndpoint, apiConfig} from "./apiConfig";

export class ApiCalls{
    getToken(){
        return new Promise((resolve, reject) => {
            axios.get(`${apiEndpoint}/users/session`, {headers: {Authorization: `Bearer ${sessionStorage.getItem('token')}`}})
            .then(res => {
                console.log('Response: ');
                resolve(res);
            })
            .catch(error => {
                console.log(error);
                reject(error);
            })
            .finally(() => {
                console.log('I\'m in');
            });

        })
    }
}