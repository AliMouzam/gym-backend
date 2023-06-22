import UserModel from '../models/userModel';
import {User} from '../service/implementations/user';
import {IUser} from '../service/interfaces/IUser';

class UserQueries {
  async signUp(input: IUser) {
    try {
      return await new UserModel(input).save();
    } catch (error: any) {
      console.log(error.message);
      throw new Error(error);
    }
  }
  async findUser(phoneNo: string) {
    try {
      return await UserModel.findOne({phoneNo: phoneNo});
    } catch (error: any) {
      console.log(error.message);
      throw new Error(error);
    }
  }

  async findUserById(id: string) {
    try {
      return await UserModel.findById({_id: id});
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
export default new UserQueries();
