import Repository from "./Repository"

const resource = "/bins/y3zct"
export default {
  get() {
    return Repository.get(`${resource}`)
  }
};