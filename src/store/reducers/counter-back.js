// initial state
const initialState = {
  counter: 0,
  color: "black",
};
/**
 * Action은 주문서다.
 */

// Action Type 정의
export const INCREASE_COUNTER = "counter/INCREATE_COUNTER";
export const DECREASE_COUNTER = "counter/DECREASE_COUNTER";
export const SET_COLOR = "counter/SET_COLOR";

const exampleAction = {
  type: INCREASE_COUNTER,
  payload: {},
};

// Action Craetor 정의 (액션을 만드는 함수)
export const increaseCounter = () => ({
  type: INCREASE_COUNTER,
  payload: {},
});

export const decreaseCounter = () => ({
  type: DECREASE_COUNTER,
  payload: {},
});

export const setColor = (color) => ({
  type: SET_COLOR,
  payload: { color },
});

// Reducer : 실제적으로 state를 변경하는 함수.
// (새로운 state를 반환하여 사용)
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE_COUNTER:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREASE_COUNTER:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case SET_COLOR:
      return {
        ...state,
        color: action.payload.color,
      };
    default:
      return state;
  }
}

export default counterReducer;
