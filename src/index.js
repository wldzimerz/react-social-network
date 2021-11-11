import store from "./redux/state";
import { rerenderEntireTree } from "./render";

import "./index.css";

rerenderEntireTree(store);
