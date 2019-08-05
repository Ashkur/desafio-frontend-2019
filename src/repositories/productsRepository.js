import Repository from "./Repository"

const resource = "/bins/dbycd"
export default {
  get() {
    return Repository.get(`${resource}`)
  }
};