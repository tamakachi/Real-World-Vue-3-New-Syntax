import axios from 'axios'

// create an axios instance with a const
const apiClient = axios.create({
  baseURL: `https://my-json-server.typicode.com/tamakachi/EventsJsonServer`,
  withCredentials: false, // default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

// export the getEvents function
export default {
  getEvents() {
    return apiClient.get('/events')
  },
  getEvent(id) {
    return apiClient.get('/events/' + id)
  }
}

