import { type Authentication, type AuthenticationParams } from '@/domain/usecases'
import { type AccountModel } from '@/domain/models'
import { mockAccountModel } from '@/domain/test'

export class AuthenticationSpy implements Authentication {
  account = mockAccountModel()
  params!: AuthenticationParams

  async auth (params: AuthenticationParams): Promise<AccountModel | undefined> {
    this.params = params
    return await Promise.resolve(this.account)
  }
}
