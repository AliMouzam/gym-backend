import {Request, Response} from 'express';
import responseService from '../utilities/response';
import userHandler from '../handlers/userHandler';
import constants from '../utilities/constants';

class UserController {
  async signUp(req: Request, res: Response) {
    try {
      const response = await userHandler.signUp(req);
      if (!response.status) {
        return res.status(constants.CODE.BAD_REQUEST).send(response);
      }
      return res.status(constants.CODE.CREATED).send(response);
    } catch (error: any) {
      return res
        .status(constants.CODE.BAD_REQUEST)
        .send(responseService.get4xxResponse(error.message));
    }
  }
}

export default new UserController();
