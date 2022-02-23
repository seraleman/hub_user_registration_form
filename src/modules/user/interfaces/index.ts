export interface User {
  dateOfBirth: string
  documentType: string
  document: string
  email: string
  entity: string
  fullName: string
  password: string
  phoneNumber: string
  position: string
  role: string
}

export interface UserStore {
  user: User
}

export interface UserForm {
  dateOfBirth: string
  documentType: string
  document: string
  documentConfirmation: string
  email: string
  emailConfirmation: string
  entity: string
  fullName: string
  phoneNumber: string
  position: string
}
