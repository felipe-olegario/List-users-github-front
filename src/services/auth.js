import axios from 'axios'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    async authenticate() {
        return axios.get('http://3.82.122.231:3001/authenticate');
    }
};