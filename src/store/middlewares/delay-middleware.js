/**
 * action객체에서 meta라는 값의 delay에 따라 delay만큼 지연시켰다가 next를 호출하는 미들웨어
 */
const delayMiddleware = (store) => (next) => (action) => {
  if (!action.meta || !action.meta.delay) {
    // meta.delay가 없는 경우 바로 다음 미들웨어 호출
    return next(action);
  }
  let timeOutId = setTimeout(() => next(action), action.meta.delay);
  return function cancel() {
    clearTimeout(timeOutId);
  };
};

export default delayMiddleware;
