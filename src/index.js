import store from "./redux/store";
import { rerenderEntireTree } from "./render";

import "./index.css";

rerenderEntireTree(store);
