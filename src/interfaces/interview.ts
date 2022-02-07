export interface IInterview {
    id: number,
    createTime: string,
    updateTime: string,
    companyName: string,
    introduction: string,
    companyImage: number,
    rate: number,
    likeNum: number,
    isDelete: boolean,
}

export interface IInterviewItem {
    id: number,
    head: number,
    nickName: string,
    createTime: string,
    interviewDetail: string,
}
