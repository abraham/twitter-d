export { Attributes } from './types/attributes';
export { BoundingBox } from './types/bounding_box';
export { Coordinates } from './types/coordinates';
export { Entities } from './types/entities';
export { ExtendedEntities } from './types/extended_entities';
export { HashtagEntity } from './types/hashtag_entity';
export { MediaEntity } from './types/media_entity';
export { Place } from './types/place';
export { QuotedStatusPermalink } from './types/quoted_status_permalink';
export { Size } from './types/size';
export { Sizes } from './types/sizes';
export { Status } from './types/status';
export { SymbolEntity } from './types/symbol_entity';
export { UrlEntity } from './types/url_entity';
export { FullUser, TrimmedUser, User } from './types/user';
export { UserDescriptionEntity } from './types/user_description_entity';
export { UserEntities } from './types/user_entities';
export { UserMentionEntity } from './types/user_mention_entity';
export { UserUrlEntity } from './types/user_url_entity';

import { FullUser, User } from './types/user';

export function isFullUser(user: User): user is FullUser {
  return 'screen_name' in user;
}
