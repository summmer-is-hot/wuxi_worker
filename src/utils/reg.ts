/* eslint-disable @iceworks/best-practices/no-secret-info */
export const emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;

export const sixteenLengthReg = /^.{1,16}$/;

export const tenLengthReg = /^.{1,10}$/;

export const sixLengthReg = /^.{6,6}$/;

export const passwordReg = /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{6,16}$/;

