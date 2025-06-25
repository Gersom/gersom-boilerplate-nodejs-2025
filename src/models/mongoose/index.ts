import User from './schemas/User.js'
import { IUser } from './schemas/User.js'
import { IStaticsMethods } from '../typeMethods.js'

export type IModels = {
  User: IUser & IStaticsMethods<IUser>
}

const models: IModels = {
  User: User as IUser & IStaticsMethods<IUser>
}

export default models