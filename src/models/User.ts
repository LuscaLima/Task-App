import mongoose, { Schema, Document } from 'mongoose'
import isEmail from 'validator/lib/isEmail'
import bcrypt from 'bcryptjs'

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    validate(value: string): boolean {
      if (!isEmail(value)) {
        throw new Error('Email is invalid')
      }

      return true
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    trim: true,
    validate(value: string): boolean {
      if (value.toLowerCase().includes('password')) {
        throw new Error('Password is invalid')
      }

      return true
    }
  }
})

/** To make the 'password' field visible outside the Document instance */
interface IUserDocument extends Document {
  password: string
}

UserSchema.pre<IUserDocument>('save', async function (next): Promise<void> {
  const user = this // Its better refer this like a user

  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8)
  }

  next()
})

const Users = mongoose.model('Users', UserSchema)

export default Users
