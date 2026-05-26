export enum UserRole {
  ADMIN = "ADMIN",
  USER = "USER",
}
export function hasPermission(
  userRole: UserRole,
  requiredRole: UserRole
) {
  return userRole === requiredRole
}