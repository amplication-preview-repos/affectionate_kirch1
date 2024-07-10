import { PermissionUpdateManyWithoutRolesInput } from "./PermissionUpdateManyWithoutRolesInput";

export type RoleUpdateInput = {
  name?: string | null;
  description?: string | null;
  permissions?: PermissionUpdateManyWithoutRolesInput;
};
