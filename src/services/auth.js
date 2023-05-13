import axios from 'axios'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    async authenticate() {
        return axios.get('http://localhost:3001/authenticate');
    }
};