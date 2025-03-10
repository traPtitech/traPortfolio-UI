import { http, HttpResponse } from 'msw'
import {
  Account,
  AccountType,
  User,
  UserAccountState,
  UserDetail
} from '../lib/apis'

const sampleAccounts: Account[] = [
  {
    id: '',
    displayName: '',
    type: AccountType.atcoder,
    url: 'https://sample.com'
  },
  {
    id: '',
    displayName: '',
    type: AccountType.blog,
    url: 'https://sample.com'
  },
  {
    id: '',
    displayName: '',
    type: AccountType.ctftime,
    url: 'https://sample.com'
  },
  {
    id: '',
    displayName: '',
    type: AccountType.facebook,
    url: 'https://sample.com'
  },
  {
    id: '',
    displayName: '',
    type: AccountType.github,
    url: 'https://sample.com'
  },
  {
    id: '',
    displayName: '',
    type: AccountType.hackthebox,
    url: 'https://sample.com'
  },
  {
    id: '',
    displayName: '',
    type: AccountType.homepage,
    url: 'https://sample.com'
  },
  {
    id: '',
    displayName: '',
    type: AccountType.pixiv,
    url: 'https://sample.com'
  },
  {
    id: '',
    displayName: '',
    type: AccountType.qiita,
    url: 'https://sample.com'
  },
  {
    id: '',
    displayName: '',
    type: AccountType.soundcloud,
    url: 'https://sample.com'
  },
  {
    id: '',
    displayName: '',
    type: AccountType.twitter,
    url: 'https://sample.com'
  },
  {
    id: '',
    displayName: '',
    type: AccountType.zenn,
    url: 'https://sample.com'
  }
]

const sampleActiveUser: UserDetail = {
  id: '00000000-0000-0000-0000-000000000000',
  name: 'ActiveAccount',
  realName: '有効アカウント',
  accounts: sampleAccounts,
  bio: '',
  state: UserAccountState.active
}

const sampleDeactivatedUser: UserDetail = {
  id: '00000000-0000-0000-0001-000000000000',
  name: 'DeactivatedAccount',
  realName: '凍結済みアカウント',
  accounts: sampleAccounts,
  bio: '',
  state: UserAccountState.deactivated
}

const sampleSuspendedUser: UserDetail = {
  id: '00000000-0000-0000-0002-000000000000',
  name: 'SuspendedAccount',
  realName: '一時停止中アカウント',
  accounts: sampleAccounts,
  bio: '',
  state: UserAccountState.suspended
}

const sampleUserDetails: UserDetail[] = [
  sampleActiveUser,
  sampleDeactivatedUser,
  sampleSuspendedUser
]

export const sampleUsers: User[] = sampleUserDetails.map(user => ({
  id: user.id,
  name: user.name,
  realName: user.realName
}))

export const handlers = [
  // apis.getUsers
  http.get<
    { includeSuspended?: string; name?: string; limit?: string },
    never,
    User[],
    '/api/v1/users'
  >('/api/v1/users', () => {
    return HttpResponse.json(sampleUsers)
  }),

  // apis.getUser
  http.get<never, never, UserDetail, '/api/v1/users/:userId'>(
    '/api/v1/users/:userId',
    () => {
      return HttpResponse.json(sampleActiveUser)
    }
  )
]
