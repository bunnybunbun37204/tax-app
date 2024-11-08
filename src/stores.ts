import { atom } from 'nanostores';

export const demo = atom(false);
export const user = atom({
  usernameOrEmail: '',
  password: '',
});
