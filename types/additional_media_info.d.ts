import type { CallToActions } from './call_to_actions';
import type { User } from './user';

export interface AdditionalMediaInfo {
  call_to_actions?: CallToActions | null;
  description?: string | null;
  embeddable?: boolean | null;
  monetizable: boolean;
  source_user?: User | null;
  title?: string | null;
}
