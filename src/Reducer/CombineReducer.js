import { combineReducers } from "redux";
import { SignUpReducer } from "./SignUpReducer";
import { FolderReducer } from "./FolderReducer";
export const AllReducers = combineReducers({
  SignUpReducer,
  FolderReducer,
});
