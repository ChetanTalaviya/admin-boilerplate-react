import axios from '../../axios'

export const getDashboard = async () => {
    return await axios.get('/dashboard')
}