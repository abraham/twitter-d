export type { Attributes } from './types/attributes';
export type { BoundingBox } from './types/bounding_box';
export type { Coordinates } from './types/coordinates';
export type { Entities } from './types/entities';
export type { ExtendedEntities } from './types/extended_entities';
export type { HashtagEntity } from './types/hashtag_entity';
export type { MediaEntity } from './types/media_entity';
export type { Place } from './types/place';
export type { QuotedStatusPermalink } from './types/quoted_status_permalink';
export type { Size } from './types/size';
export type { Sizes } from './types/sizes';
export type { Status } from './types/status';
export type { SymbolEntity } from './types/symbol_entity';
export type { UrlEntity } from './types/url_entity';
export type { FullUser, TrimmedUser, User } from './types/user';
export type { UserDescriptionEntity } from './types/user_description_entity';
export type { UserEntities } from './types/user_entities';
export type { UserMentionEntity } from './types/user_mention_entity';
export type { UserUrlEntity } from './types/user_url_entity';

import type { FullUser, User } from './types/user';

export function isFullUser(user: User): user is FullUser {
  return 'screen_name' in user;
}
