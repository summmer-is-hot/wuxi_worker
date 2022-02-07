export interface IComment {
    id: number;
    name: string;
    score: number;
    comment: string;
}

export interface ICommentItem {
    id: number;
    key: number;
    comment: string;
    score: number;
    salaryLevel: number;
    socialSecurityLevel: number;
    providentFundLevel: number;
    discount: number;
    addSocialSecurity: number;
    addProvidentFund: number;
}

