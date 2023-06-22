import bcrypt from 'bcryptjs';
class CommonUtility {
  async hash(data: string) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(data, salt);
  }
}

export default new CommonUtility();
