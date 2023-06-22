/* eslint-disable prefer-const */
import {Request} from 'express';
import {User} from '../../src/service/implementations/user';
import constants from '../utilities/constants';
import messages from '../utilities/messages';
import {IUser} from '../../src/service/interfaces/IUser';
import response from '../utilities/response';
class UserHandler {
  async signUp(req: Request) {
    try {
      const user: IUser = new User();
      const result = await user.signUp(req.body as IUser);
      if (typeof result === 'string') {
        return response.get4xxResponse(result);
      }
      return response.get2xxResponse({
        statusCode: constants.CODE.OK,
        data: result,
        message: messages.SIGNUP_SUCCESSFULL,
      });
    } catch (error: any) {
      return response.get4xxResponse(error.message);
    }
  }
}

export default new UserHandler();
