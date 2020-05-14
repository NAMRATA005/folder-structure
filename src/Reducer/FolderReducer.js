let initialState = {
  folderArray: [],
  childfolderArray: [],
  initFolderArray: [
    { name: "namrata", sub: [{ name: "namrata-1", sub: [] }] },
    {
      name: "sanjib",
      sub: [
        { name: "sanjib-1", sub: [] },
        { name: "sanjib-2", sub: [] },
      ],
    },
  ],
};

export const FolderReducer = (state = initialState, action) => {
  console.log(action.payload, "kkk");
  const { payload, type } = action;
  switch (type) {
    case "ADD_NEW_FOLDER": {
      state = { ...state, folderArray: [...state.folderArray, payload] };
      return state;
    }
    case "ADD_CHILD_NEW_FOLDER": {
      state = {
        ...state,
        childfolderArray: [...state.childfolderArray, payload],
      };
      return state;
    }
    default:
      return state;
  }
};
