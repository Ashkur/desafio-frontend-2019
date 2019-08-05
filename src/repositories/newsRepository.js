import Repository from "./Repository"

const resource = "/bins/11qq59"
export default {
  get() {
    return Repository.get(`${resource}`)
  }
};