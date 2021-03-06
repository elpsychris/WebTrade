const {ActionTypes} = require('../core/constants');

const initialState = {
  data: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.PORFOLIO:
        return Object.assign({},state,{
          data: action.data,
        });

    default:
      return state;
  }
};
