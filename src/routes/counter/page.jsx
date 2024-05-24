// selector
// dispatch
// actionCreator
import { useSelector, useDispatch } from "react-redux";
import {
  increaseCounter,
  decreaseCounter,
  setColor,
} from "~/store/reducers/counter";

import ColorInput from "~/components/ColorInput";

export default function CounterPage() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <div>CounterPage</div>

      <div>
        <ColorInput />
      </div>

      <div style={{ display: "flex", flexDirection: "row" }}>
        <button
          onClick={() => {
            // action 생성 = 주문서 생성
            // = {type: 증가하는 주문, payload: 주문에 전달할 데이터}
            const action = increaseCounter();
            // dispatch: action을 dispatch하는 함수
            // = 주문서를 제출하는 함수.

            // 다음 dispatch 3개는 동일
            // dispatch({
            //   type: "counter/INCREATE_COUNTER",
            //   payload: {},
            // });
            dispatch(action);
            // dispatch(increaseCounter())
          }}
        >
          증가
        </button>
        <button
          onClick={() => {
            const action = decreaseCounter();
            dispatch(action);
          }}
        >
          감소
        </button>
      </div>

      <div>
        <h3 style={{ color: counter.color }}>{counter.counter}</h3>
      </div>
    </div>
  );
}
