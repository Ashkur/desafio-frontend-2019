import axios from "axios"

const baseDomain = "https://api.myjson.com"

const baseURL = `${baseDomain}`

export default axios.create({
  baseURL
});