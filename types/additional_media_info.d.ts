import { User } from './user';

export interface AdditionalMediaInfo {
  monetizable: boolean;
  source_user?: User | null;
}
