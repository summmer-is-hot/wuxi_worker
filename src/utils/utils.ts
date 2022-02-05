/* eslint-disable no-param-reassign */
/* eslint-disable no-empty */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
/* eslint-disable no-proto */
/* eslint-disable prefer-spread */
/* eslint-disable prefer-rest-params */
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
const setCookie = (key, value) => {
  const d = new Date();
  d.setTime(d.getTime() + (30 * 24 * 60 * 60 * 1000));
  const expires = `expires=${d.toUTCString()}`;
  document.cookie = `${key}=${value}; ${expires}`;
};

function type(x: any, strict = false) {
  strict = !!strict;

  // fix typeof null = object
  if (x === null) {
    return 'null';
  }

  const t = typeof x;

  // 严格模式 区分NaN和number
  if (strict && t === 'number' && isNaN(x)) {
    return 'nan';
  }

  // number string boolean undefined symbol
  if (t !== 'object') {
    return t;
  }

  let cls: string;
  let clsLow: string;
  try {
    cls = toString.call(x).slice(8, -1);
    clsLow = cls.toLowerCase();
  } catch (e) {
    // ie下的 activex对象
    return 'object';
  }

  if (clsLow !== 'object') {
    if (strict) {
      // 区分NaN和new Number
      if (clsLow === 'number' && isNaN(x)) {
        return 'NaN';
      }
      // 区分 String() 和 new String()
      if (clsLow === 'number' || clsLow === 'boolean' || clsLow === 'string') {
        return cls;
      }
    }
    return clsLow;
  }

  if (x.constructor === Object) {
    return clsLow;
  }

  // Object.create(null)
  try {
    // __proto__ 部分早期firefox浏览器
    if (Object.getPrototypeOf(x) === null || x.__proto__ === null) {
      return 'object';
    }
  } catch (e) {
    // ie下无Object.getPrototypeOf会报错
  }

  // function A() {}; new A
  try {
    const cname = x.constructor.name;

    if (typeof cname === 'string') {
      return cname;
    }
  } catch (e) {
    // 无constructor
  }

  return 'unknown';
}

// 仅对对象和数组进行深拷贝，其他类型，直接返回
function isClone(x: any) {
  const t = type(x);
  return t === 'object' || t === 'array';
}

function deepCopy<T>(sourceData: T): T {
  if (!isClone(sourceData)) return sourceData;

  if (Array.isArray(sourceData)) {
    return sourceData.map((item) => deepCopy(item)) as unknown as T;
  }
  const obj: T = {} as T;
  for (const key in sourceData) {
    if (typeof sourceData[key] === 'object' && sourceData[key] !== null) {
      obj[key] = deepCopy(sourceData[key]);
    } else {
      obj[key] = sourceData[key];
    }
  }
  return obj;
}

// 通过JSON深拷贝
function deepCopyJSON<T>(sourceData: T, errOrDef = true): T {
  if (!isClone(sourceData)) return sourceData;

  try {
    return JSON.parse(JSON.stringify(sourceData));
  } catch (e: any) {
    if (errOrDef === true) {
      throw e;
    } else {
      try {
        console.error('cloneJSON error: ' + e.message);
      } catch (error) { }
      return errOrDef as unknown as T;
    }
  }
}

function getQuery(variable: any) {
  const query = window.location.search.substring(1);
  const vars = query.split('&');
  for (let i = 0; i < vars.length; i++) {
    const pair = vars[i].split('=');
    if (pair[0] === variable) { return pair[1]; }
  }
  return (false);
}
export {
  deBounce,
  getCookie,
  setCookie,
  deepCopy,
  deepCopyJSON,
  getQuery,
};
