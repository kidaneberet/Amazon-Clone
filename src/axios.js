import axios from 'axios';


const instance = axios.create({
  // The API (Cloud function) URL
  baseURL: "https://us-central1-fir-3d763.cloudfunctions.net/api",
});

export default instance;