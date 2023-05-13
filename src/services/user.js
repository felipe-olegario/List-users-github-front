import axios from 'axios'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    async listUsers(since) {
        return axios.get(`http://localhost:3001/user/list/${since}`);
    },
    async getUser(login) {
        return axios.get(`http://localhost:3001/user/${login}`);
    },
    async getRepositories(login) {
        return axios.get(`http://localhost:3001/user/repos/${login}`);
    }
};