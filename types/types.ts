export type User = {
  'username': string,
  'is_active': boolean
  'email': string,
  'first_name'?: string,
  'last_name'?: string,
  [key: string]: any
}

export type UserForm = {
  username: string,
  password: string
  [key: string]: any
}

export type Token = {
  access: string,
  refresh: string
}

export type AccessToken = Pick<Token, 'access'>
