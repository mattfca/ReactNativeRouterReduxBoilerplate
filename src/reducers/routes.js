const initialState = {
  scene: {},
};

export default function routes(state = initialState, action = {}) {
  switch ("ACTION:",action.type) {
    // focus action is dispatched when a new screen comes into focus
    case "focus":
      return {
        ...state,
        scene: action.scene,
      };
      
    // ...other actions

    default:
      return state;
  }
}
