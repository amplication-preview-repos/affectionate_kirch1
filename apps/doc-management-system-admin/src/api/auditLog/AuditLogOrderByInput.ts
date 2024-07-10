import { SortOrder } from "../../util/SortOrder";

export type AuditLogOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  action?: SortOrder;
  timestamp?: SortOrder;
  userId?: SortOrder;
  documentId?: SortOrder;
};
