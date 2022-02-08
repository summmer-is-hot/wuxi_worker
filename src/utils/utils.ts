function deBounce<T>(fn: T, delay: number): () => void {
  let timer: NodeJS.Timeout;
  return function (): void {
    const args: any[] = Array.prototype.map.call(arguments, (val: any) => val);
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      typeof fn === 'function' && fn.apply(null, args);
      clearTimeout(timer);
    }, delay > 0 ? delay : 1000);
  };
}

const getCookie = (key: any) => {
  const name = `${key}=`;
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    const c = ca[i].trim();
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
};

// 设置cookie,默认是30天
const setCookie = (key: string, value: any) => {
  const d = new Date();
  d.setTime(d.getTime() + (30 * 24 * 60 * 60 * 1000));
  const expires = `expires=${d.toUTCString()}`;
  document.cookie = `${key}=${value}; ${expires}`;
};

function getQuery(variable: any) {
  const query = window.location.search.substring(1);
  const vars = query.split('&');
  for (let i = 0; i < vars.length; i++) {
    const pair = vars[i].split('=');
    if (pair[0] === variable) { return pair[1]; }
  }
  return (false);
}

function numConvert(num: any) {
  if (num >= 10000) {
    num = Math.round(num / 100) / 100 + 'W';
  } else if (num >= 1000) {
    num = Math.round(num / 10) / 100 + 'K';
  }
  return num;
}

export {
  deBounce,
  getCookie,
  setCookie,
  getQuery,
  numConvert
};
