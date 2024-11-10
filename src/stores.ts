import { atom } from 'nanostores';

export const demo = atom(false);
export const user = atom({
  usernameOrEmail: '',
  password: '',
});

export const totalDeduction = atom(0);
export const salaryAfterTax = atom(0);
