import Repository from "./Repository"

const resource = "/bins/qfhnh"
export default {
  get() {
    return Repository.get(`${resource}`)
  }
};