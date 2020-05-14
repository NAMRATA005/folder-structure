let initialState = {
  firstName: "",
  lastName: "",
  Email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
  User_Name: "",
  user_password: "",
};

export const SignUpReducer = (state = initialState, action) => {
  console.log(action.payload, "kkk");
  switch (action.type) {
    case "OnChange_Value": {
      state = { ...state, [action.payload.name]: action.payload.value };
      return state;
      break;
    }
    default:
      return state;
  }
};
