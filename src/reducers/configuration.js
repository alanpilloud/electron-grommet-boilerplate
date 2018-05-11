const initialState = {
  ips: []
};

const configuration = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_SYSTEM_VALUES":
      return {
        ...state,
        ...action.systemValues
      };

    default:
      return state;
  }
};

export default configuration;
