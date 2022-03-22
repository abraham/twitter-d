import type { UserDescriptionEntity } from './user_description_entity';
import type { UserUrlEntity } from './user_url_entity';

export interface UserEntities {
  description: UserDescriptionEntity;
  url?: UserUrlEntity | null;
}
