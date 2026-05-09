export interface UserToken {
  userId: string
  token: string
  type: "RESET_PASSWORD"
  expiresAt: Date
}