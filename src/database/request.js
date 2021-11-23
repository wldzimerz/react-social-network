import axios from "axios";

class Request {
  constructor() {
    this.host = "https://social-network.samuraijs.com/api/1.0/";
  }

  getUsers = (currentPage, pageSize, cb) => {
    axios.get(`${this.host}/users?page=${currentPage}&count=${pageSize}`).then((res) => {
      cb(res.data.items);
      // cb(res.data.items, res.data.totalCount); // set total users count to state
    });
  };

  changePage = (pageNumber, pageSize, cb) => {
    axios.get(`${this.host}/users?page=${pageNumber}&count=${pageSize}`).then((res) => {
      cb(res.data.items);
    });
  };

  handleChangePageSize = (currentPage, cb, count) => {
    axios.get(`${this.host}/users?page=${currentPage}&count=${count}`).then((res) => {
      cb(res.data.items);
    });
  };
}

const request = new Request();

export default request;
