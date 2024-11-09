import { atom } from 'nanostores';

export const demo = atom(false);
export const user = atom({
  usernameOrEmail: '',
  password: '',
});

export const totalIncome = atom<number | null>(100);
export const totalDeduction = atom<number | null>(100);
export const totalTax = atom<number | null>(100000);
