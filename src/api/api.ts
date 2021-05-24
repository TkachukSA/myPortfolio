import axios from 'axios'



export const api = {
    sendMessage(name: string,
                message: string,
                email: string) {
        return axios.post('https://gmail-nodeks-server.herokuapp.com/sendMessge', {name, message, email});
    },

}

