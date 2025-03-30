import type { Ref } from "vue";

export const getParentEl = (el: HTMLElement): HTMLElement | null => {
  if (!el) return null;
  if (el === document.documentElement) return null;
  if (el.parentElement) return el.parentElement;
  return null;
};

export const getScrollParent = (el: HTMLElement | null): HTMLElement | null => {
  if (el === null) return null;
  if (el === document.documentElement) return document.documentElement;
  const overflowY = getComputedStyle(el).overflowY;
  const overflowX = getComputedStyle(el).overflowX;
  const scrollTypes = ['auto', 'scroll', 'overlay'];
  if (scrollTypes.includes(overflowY) || scrollTypes.includes(overflowX)) {
    return el;
  }
  const parentEl = getParentEl(el);
  // console.log(parentEl, 'parentEl');
  return getScrollParent(parentEl!);
};

export const throttleLast = (func: (...args: any[]) => void, delay: number) => {
  let lastTime = 0; // 上一次执行的时间
  let timer: ReturnType<typeof setTimeout> | null = null; // 定时器

  return (...args: any[]) => {
    const now = Date.now();

    // 如果时间间隔超过 delay，立即执行
    if (now - lastTime >= delay) {
      lastTime = now;
      func(...args);
    } else {
      // 如果时间间隔不足，设置一个定时器，确保最后一次调用
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        lastTime = Date.now();
        func(...args);
      }, delay - (now - lastTime));
    }
  };
};

// 执行动画帧 delay 延迟多久执行  intervalDelay 是否间隔执行
export const requestAf = (fn: Function, delay: Ref<number>, intervalDelay: boolean) => {
  let startTime: number | null = null;
  function timeFn(timestamp: number) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    if (elapsed >= delay.value) {
      fn();
      if (intervalDelay) {
        startTime = timestamp; // 重置开始时间
        requestInfo.id = requestAnimationFrame(timeFn);
      }
    } else {
      requestInfo.id = requestAnimationFrame(timeFn);
    }
  }

  const requestInfo = {
    id: requestAnimationFrame(timeFn),
  };

  return requestInfo;
};

//  取消动画帧
export const clearAf = (rafInfo: {id: number | null}) => {
  if (rafInfo && rafInfo.id && typeof rafInfo.id === 'number') {
    cancelAnimationFrame(rafInfo.id);
  } else {
    console.warn('cancelAnimationFrame: id is an invalid number');
  }
};
