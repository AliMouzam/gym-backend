class ResponseService {
  get2xxResponse(response: any) {
    return {
      status: true,
      name: response.statusCode === 200 ? 'OK' : 'Created',
      message: response.message,
      data: response.data,
    };
  }
  get4xxResponse(message: string) {
    return {
      status: false,
      name: 'Failure',
      message: message,
      data: null,
    };
  }
}
export default new ResponseService();
