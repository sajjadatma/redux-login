import { SHOW_LOADER, HIDE_LOADER } from "../Types/Types";

const loader = (state = false, action) => {
  switch (action.type) {
      case SHOW_LOADER:
          return action.data;
      case HIDE_LOADER:
          return action.data;
      default:
          return state;
  }
}

export default loader;