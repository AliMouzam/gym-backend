import {NextFunction, Request, Response} from 'express';
import constants from '../../utilities/constants';
import responseService from '../../utilities/response';
import Joi from 'joi';
import messages from '../../utilities/messages';

class UserRequests {
  async signUp(req: Request, res: Response, next: NextFunction) {
    const schema = Joi.object({
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      phoneNo: Joi.string().required(),
      password: Joi.string().regex(
        constants.passwordRegex,
        messages.PASSWORD_FORMAT
      ),
      package: Joi.number().required(),
      gender: Joi.string(),
      age: Joi.number(),
      weightGroup: Joi.string(),
      cnicNo: Joi.string(),
      thumbInput: Joi.string(),
      registrarId: Joi.string(),
    });

    const {error} = schema.validate(req.body);
    if (!error) {
      next();
    } else {
      return res
        .status(constants.CODE.BAD_REQUEST)
        .send(responseService.get4xxResponse(error.details[0].message));
    }
  }
}
export default new UserRequests();
