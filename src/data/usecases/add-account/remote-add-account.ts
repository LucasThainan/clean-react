import { type HttpPostClient } from '@/data/protocols/http'
import { type AddAccountParams, type AddAccount } from '@/domain/usecases'
import { type AccountModel } from '@/domain/models'

export class RemoteAddAccount implements AddAccount {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<AddAccountParams, AccountModel>
  ) { }

  async add (params: AddAccountParams): Promise<AccountModel | undefined> {
    await this.httpPostClient.post({
      url: this.url,
      body: params
    })
    return undefined
  }
}
