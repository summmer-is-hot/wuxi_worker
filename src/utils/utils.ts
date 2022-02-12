const uuid = () => {
  var s: any = [];
  var hexDigits = "0123456789abcdef";
  for (var i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = "-";

  var uuid = s.join("");
  return String(uuid);
}

const dateFormat = (date: any, fmt?: any) => {
  date = new Date(date);
  if (!fmt) fmt = 'YYYY-mm-dd HH:MM:SS';
  let ret: any;
  const opt = {
    'Y+': date.getFullYear().toString(), // 年
    'm+': (date.getMonth() + 1).toString(), // 月
    'd+': date.getDate().toString(), // 日
    'H+': date.getHours().toString(), // 时
    'M+': date.getMinutes().toString(), // 分
    'S+': date.getSeconds().toString(), // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };
  for (const k in opt) {
    ret = new RegExp('(' + k + ')').exec(fmt);
    if (ret) {
      fmt = fmt.replace(ret[1], ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, '0'));
    }
  }
  return fmt;
};


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
  numConvert,
  dateFormat,
  uuid
};
