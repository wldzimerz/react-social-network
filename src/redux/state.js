import { rerenderEntireTree } from "./../render";

let state = {
  MESSAGES: [
    { text: "Hi", time: "" },
    { text: "How are you", time: "" },
    { text: "I`m dev the social media network", time: "" },
    { text: "that's cool!", time: "" },
    { text: "accusantium", time: "" },
    { text: "consectetur", time: "" },
    { text: "media network", time: "" },
    { text: "How", time: "" },
    { text: "good luck", time: "" },
  ],
  USERS: [
    { img: "../../../assets/Denis.jpg", name: "Denis", time: "12:51", msg: "OK, got it!" },
    { img: "../../../assets/Anya.jpg", name: "Anya", time: "09:55", msg: "How are you" },
    { img: "../../../assets/Dmitry.jpg", name: "Dmitry", time: "08:15", msg: "HB 2 U" },
    { img: "../../../assets/Anastasia.jpg", name: "Anastasia", time: "04:10", msg: "do you have some.." },
    { img: "../../../assets/Alex.jpg", name: "Alex", time: "18:50", msg: "good luck" },
  ],
  POSTDATA: [
    { text: "Lorem, ipsum.", time: "07:45", likes: 112 },
    { text: "Lorem ipsum dolor sit amet.", time: "19:03", likes: 54 },
    { text: "Lorem ipsum dolor sit.", time: "17:59", likes: 23 },
    { text: "Lorem ipsum dolor sit amet consectetur adipisicing.", time: "13:10", likes: 5 },
    { text: "Nihil, accusantium.", time: "14:54", likes: 14 },
    { text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ", time: "09:15", likes: 0 },
  ],
  USERINFO: [
    {
      photo: "https://i.pinimg.com/236x/73/b0/c0/73b0c08a5d1578cb976a00d8665ffd77--all-blacks-rugby-wutang.jpg",
      location: "Russia, Saint-Petersburg",
      born: "August 21, 1996",
      website: "https://github.com/wldzimerz",
      friends: 463,
    },
  ],
};

export class UpdateState {
  updatePostdata = (postText) => {
    const newPost = {
      text: postText,
      time: `${new Date().getHours()}:${new Date().getMinutes()}`,
      likes: 0,
    };

    state.POSTDATA.push(newPost);
    rerenderEntireTree(state);
  };

  updateMessages = (messageText) => {
    const newMessage = {
      text: messageText,
      time: `${new Date().getHours()}:${new Date().getMinutes()}`,
    };

    state.MESSAGES.push(newMessage);
    rerenderEntireTree(state);
  };
}

export default state;
