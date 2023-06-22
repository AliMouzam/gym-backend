import mongoose from 'mongoose';
import {IUser} from '../service/interfaces/IUser';

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNo: {
    type: String,
    required: true,
  },
  package: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
  },
  age: {
    type: Number,
  },
  weightGroup: {
    type: String,
  },
  cnicNo: {
    type: String,
  },
  thumbInput: {
    type: String,
  },
  registrarId: {
    type: Number,
  },
});

export default mongoose.model<IUser>('User', UserSchema);
