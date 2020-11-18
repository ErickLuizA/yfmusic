import { UserModel } from '../../domain/models/User'
import { UserParams } from '../../domain/useCases/User/CreateUserUseCase'

export interface IUserRepository {
  create: (params: UserParams) => Promise<UserModel>

  load: (email: string) => Promise<UserModel>

  updateAccessToken: (userId: string, token: string) => Promise<void>
}