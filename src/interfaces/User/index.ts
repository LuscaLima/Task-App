import { Document, Model } from 'mongoose'

/** Interface for user schema */
export interface IUserSchema extends Document {
  name: string
  email: string
  password: string
}

/** Interface for user base */
export interface IUserBase extends IUserSchema {}

/** Interface for user */
export interface IUser extends IUserBase {}

/** Interface for user model */
export interface IUserModel extends Model<IUser> {
  findByCredentials(email: string, password: string): IUser
}
