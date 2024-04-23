import { type AddAccount, type AddAccountParams } from '@/domain/usecases'
import { type AccountModel } from '@/domain/models'
import { mockAccountModel } from '@/domain/test'

export class AddAccountSpy implements AddAccount {
  account = mockAccountModel()
  params!: AddAccountParams
  callsCount: number = 0

  async add (params: AddAccountParams): Promise<AccountModel | undefined> {
    this.params = params
    this.callsCount++
    return this.account
  }
}
