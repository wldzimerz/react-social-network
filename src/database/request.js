import axios from "axios";

class Request {
  constructor() {
    this.host = "https://social-network.samuraijs.com/api/1.0/";
  }

  getUsers = (currentPage, pageSize, cb1, cb2) => {
    axios.get(`${this.host}/users?page=${currentPage}&count=${pageSize}`).then((res) => {
      cb1(res.data.items);
      cb2(false);
      // cb(res.data.items, res.data.totalCount); // set total users count to state
    });
  };

  getUserProfile = (userId, cb1) => {
    axios.get(`${this.host}/profile/${userId}`).then((res) => {
      cb1(res.data);
      // cb2(false);  // to hide the preloader
    });
  };

  changePage = (pageNumber, pageSize, cb1, cb2) => {
    axios.get(`${this.host}/users?page=${pageNumber}&count=${pageSize}`).then((res) => {
      cb1(res.data.items);
      cb2(false);
    });
  };

  handleChangePageSize = (currentPage, count, cb1, cb2) => {
    axios.get(`${this.host}/users?page=${currentPage}&count=${count}`).then((res) => {
      cb1(res.data.items);
      cb2(false);
    });
  };

  userAuthentification = (cb) => {
    axios
      .get(`${this.host}/auth/me`, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.resultCode === 0) {
          // const { id, login, email } = res.data.data;
          cb(res.data.data);
        }
        // cb2(false);
      });
  };
}

const request = new Request();

export default request;
