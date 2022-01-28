/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-multi-assign */
const deBounce = function (func: { (): void; apply?: any }, wait = 1000, immediate = true, throttle = false) {
  let timeout: NodeJS.Timeout | null; let args: null; let context: null; let timestamp: number; let
    result: any;
  const later = function () {
    // 据上一次触发时间间隔
    const last = +new Date() - timestamp;
    // 上次被包装函数被调用时间间隔last小于设定时间间隔wait
    if (last < wait && last > 0 && !throttle) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      // 如果设定为immediate为true 第一次点击的时候会触发 immediate为false 最后一次停止点击的时候会触发
      if (!immediate) {
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      }
    }
  };
  return (...args: any) => {
    // context = this;
    timestamp = +new Date();
    const callNow = immediate && !timeout;
    // 如果延时不存在，重新设定延时
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }
    return result;
  };
};

export { deBounce };
