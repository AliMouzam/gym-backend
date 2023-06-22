import {responseName} from '../enum/enum';
import constants from './constants';

class ResponseService {
  get2xxResponse(response: any) {
    return {
      status: true,
      name:
        response.statusCode === constants.CODE.OK
          ? responseName.ok
          : responseName.created,
      message: response.message,
      data: response.data,
    };
  }
  get4xxResponse(message: string) {
    return {
      status: false,
      name: responseName.failure,
      message: message,
      data: null,
    };
  }
}
export default new ResponseService();
