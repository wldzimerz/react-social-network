import axios from "axios";

class Request {
  constructor() {
    this.host = "https://social-network.samuraijs.com/api/1.0/";
    this.apiKey = "a1aa4767-dee7-4e07-9fd8-040fb8095111";
  }

  getUsers = (currentPage, pageSize, cb1, cb2) => {
    axios
      .get(`${this.host}/users?page=${currentPage}&count=${pageSize}`, {
        withCredentials: true,
      })
      .then((res) => {
        cb1(res.data.items);
        cb2(false);
        // cb(res.data.items, res.data.totalCount); // set total users count to state
      });
  };

  getUserProfile = (userId, cb1) => {
    axios
      .get(`${this.host}/profile/${userId}`, {
        withCredentials: true,
      })
      .then((res) => {
        cb1(res.data);
        // cb2(false);  // to hide the preloader
      });
  };

  changePage = (pageNumber, pageSize, cb1, cb2) => {
    axios
      .get(`${this.host}/users?page=${pageNumber}&count=${pageSize}`, {
        withCredentials: true,
      })
      .then((res) => {
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
          cb(res.data.data);
        }
      });
  };

  setFollowUser = (type, userId, cb) => {
    const requestOptions = {
      withCredentials: true,
      headers: {
        "API-KEY": this.apiKey,
      },
    };
    switch (type) {
      case "Follow":
        axios.post(`${this.host}/follow/${userId}`, {}, requestOptions).then((res) => {
          if (res.data.resultCode === 0) {
            cb(userId);
          }
        });
        break;
      case "Unfollow":
        axios.delete(`${this.host}/follow/${userId}`, requestOptions).then((res) => {
          if (res.data.resultCode === 0) {
            cb(userId);
          }
        });
        break;
      default:
        break;
    }
  };
}

const request = new Request();

export default request;
