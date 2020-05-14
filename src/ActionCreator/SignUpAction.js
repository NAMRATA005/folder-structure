export const OnChange_Value = (onChange) => {
  return {
    type: "OnChange_Value",
    payload: onChange,
  };
};

export const ADD_NEW_FOLDER = (folder) => {
  return {
    type: "ADD_NEW_FOLDER",
    payload: folder,
  };
};

export const ADD_CHILD_NEW_FOLDER = (folder) => {
  return {
    type: "ADD_CHILD_NEW_FOLDER",
    payload: folder,
  };
};
