import axios from 'axios'


const instance = axios.create({
    //baseURL: 'http://localhost:3010/',
    baseURL: 'https://gmail-nodeks-server.herokuapp.com/',
})


export const api = {
    sendMessage(name: string,
                message: string,
                email: string) {

        return instance.post('sendMessge', {name, message,email});
    },

}

