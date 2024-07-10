import { Document } from "../document/Document";

export type Folder = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  parentFolder: string | null;
  documents?: Array<Document>;
};
