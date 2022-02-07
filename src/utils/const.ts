/* eslint-disable @typescript-eslint/indent */
import head_one from '@/assets/head_one.jpeg';
import head_two from '@/assets/head_two.jpeg';
import head_three from '@/assets/head_three.jpeg';
import head_four from '@/assets/head_four.jpeg';
import head_five from '@/assets/head_five.jpeg';
import head_six from '@/assets/head_six.jpeg';
import head_seven from '@/assets/head_seven.jpeg';
import head_eight from '@/assets/head_eight.jpeg';
import head_nine from '@/assets/head_nine.jpeg';
import head_ten from '@/assets/head_ten.jpeg';
import star_one from '@/assets/star_one.png';
import star_two from '@/assets/star_two.png';
import star_three from '@/assets/star_three.png';
import star_four from '@/assets/star_four.png';
import star_five from '@/assets/star_five.png';

export const codeMessage = {
    200: '服务器成功返回请求的数据。',
    201: '新建或修改数据成功。',
    202: '一个请求已经进入后台排队（异步任务）。',
    204: '删除数据成功。',
    400: '您的操作失败，请稍后重试。',
    401: '用户没有权限（令牌、用户名、密码错误）。',
    403: '用户得到授权，但是访问是被禁止的。',
    404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
    406: '请求的格式不可得。',
    410: '请求的资源被永久删除，且不会再得到的。',
    422: '当创建一个对象时，发生一个验证错误。',
    500: '服务器发生错误，请检查服务器。',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。',
};

export const scoreArray: number[] = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

export const salaryLevel: any[] = [
    {
        name: '高',
        value: 1,
    },
    {
        name: '中偏高',
        value: 2,
    },
    {
        name: '中',
        value: 3,
    },
    {
        name: '中偏低',
        value: 4,
    },
    {
        name: '低',
        value: 5,
    },
];

export const discount: any[] = [
    {
        name: '不打折',
        value: 1,
    },
    {
        name: '8折',
        value: 2,
    },
    {
        name: '8折以下',
        value: 3,
    },
];

export const socialSecurityLevel: any[] = [
    {
        name: '全额缴纳',
        value: 1,
    },
    {
        name: '工资8折缴纳',
        value: 2,
    },
    {
        name: '最低基数缴纳',
        value: 3,
    },
    {
        name: '其他',
        value: 4,
    },
    {
        name: '不缴纳',
        value: 5,
    },
];

export const addSocialSecurity: any[] = [
    {
        name: '有',
        value: 1,
    },
    {
        name: '无',
        value: 0,
    },
];

export const providentFundLevel: any[] = [
    {
        name: '工资12%以上',
        value: 1,
    },
    {
        name: '工资8%',
        value: 2,
    },
    {
        name: '最低',
        value: 3,
    },
    {
        name: '其他',
        value: 4,
    },
    {
        name: '无',
        value: 5,
    },
];

export const addProvidentFund: any[] = [
    {
        name: '有',
        value: 1,
    },
    {
        name: '无',
        value: 0,
    },
];

export const companySize: any[] = [
    {
        name: '0-49人',
        value: 1,
    },
    {
        name: '50-99人',
        value: 2,
    },
    {
        name: '100-499人',
        value: 3,
    },
    {
        name: '500-999人',
        value: 4,
    },
    {
        name: '1000人以上',
        value: 5,
    },
];

export const headImg: any = (index: number) => {
    let img: any;
    switch (index) {
        case 1:
            img = head_one;
            break;
        case 2:
            img = head_two;
            break;
        case 3:
            img = head_three;
            break;
        case 4:
            img = head_four;
            break;
        case 5:
            img = head_five;
            break;
        case 6:
            img = head_six;
            break;
        case 7:
            img = head_seven;
            break;
        case 8:
            img = head_eight;
            break;
        case 9:
            img = head_nine;
            break;
        case 10:
            img = head_ten;
            break;
        default:
            img = head_one;
            break;
    }
    return img;
};

export const companyImg: any = (index: number) => {
    let img: any;
    switch (index) {
        case 1:
            img = star_one;
            break;
        case 2:
            img = star_two;
            break;
        case 3:
            img = star_three;
            break;
        case 4:
            img = star_four;
            break;
        case 5:
            img = star_five;
            break;
        default:
            img = star_one;
            break;
    }
    return img;
};
