import commonUtility from '../../../api/utilities/commonUtility';
import messages from '../../../api/utilities/messages';
import {Document, Types} from 'mongoose';
import userQueries from '../../queries/userQueries';
import {IUser} from '../interfaces/IUser';
import _ from 'lodash';

export class User implements IUser {
  firstName = '';
  lastName = '';
  phoneNo = '';
  password = '';
  package = 0;
  gender = '';
  age = 0;
  weightGroup = '';
  cnicNo = '';
  thumbInput = '';
  registrarId = '';

  async signUp(data: IUser): Promise<IUser | string> {
    try {
      //Finding User
      const userExist = await userQueries.findUser(data.phoneNo);
      if (userExist) {
        return messages.USER_EXIST;
      }
      //Hashing Password
      if (data.password) {
        data.password = await commonUtility.hash(data.password);
      }
      //Creating User
      const user = await userQueries.signUp(data);
      if (!user) {
        return messages.SIGNUP_ERROR;
      }
      return user;
    } catch (error: any) {
      return error.message;
    }
  }
}
