import axios from "axios";

class Request {
  constructor() {
    this.instance = axios.create({
      baseURL: "https://social-network.samuraijs.com/api/1.0",
      withCredentials: true,
      headers: {
        "API-KEY": "a1aa4767-dee7-4e07-9fd8-040fb8095111",
      },
    });
  }

  getUsers = (currentPage, pageSize, cb1, cb2) => {
    this.instance.get(`/users?page=${currentPage}&count=${pageSize}`).then((res) => {
      cb1(res.data.items);
      cb2(false);
      // cb(res.data.items, res.data.totalCount); // set total users count to state
    });
  };

  getUserProfile = (userId, cb1) => {
    this.instance.get(`/profile/${userId}`).then((res) => {
      cb1(res.data);
      // cb2(false);  // to hide the preloader
    });
  };

  changePage = (pageNumber, pageSize, cb1, cb2) => {
    this.instance.get(`/users?page=${pageNumber}&count=${pageSize}`).then((res) => {
      cb1(res.data.items);
      cb2(false);
    });
  };

  handleChangePageSize = (currentPage, count, cb1, cb2) => {
    this.instance.get(`/users?page=${currentPage}&count=${count}`).then((res) => {
      cb1(res.data.items);
      cb2(false);
    });
  };

  userAuthentification = (cb) => {
    this.instance.get(`/auth/me`).then((res) => {
      if (res.data.resultCode === 0) {
        cb(res.data.data);
        localStorage.setItem("userAuth", true);
      }
    });
  };

  setFollowUser = (isFollow, userId, cb) => {
    switch (isFollow) {
      case false:
        this.instance.post(`/follow/${userId}`).then((res) => {
          if (res.data.resultCode === 0) {
            cb(userId);
          }
        });
        break;
      case true:
        this.instance.delete(`/follow/${userId}`).then((res) => {
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
