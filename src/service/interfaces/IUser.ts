import {User} from '../implementations/user';

export interface IUser {
  firstName: string;
  lastName: string;
  phoneNo: string;
  password: string;
  package: number;
  gender: string;
  age: number;
  weightGroup: string;
  cnicNo: string;
  thumbInput: string;
  registrarId: string;
  signUp(data: IUser): Promise<IUser | string>;
}
