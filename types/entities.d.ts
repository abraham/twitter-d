import type { HashtagEntity } from './hashtag_entity';
import type { MediaEntity } from './media_entity';
import type { SymbolEntity } from './symbol_entity';
import type { UrlEntity } from './url_entity';
import type { UserMentionEntity } from './user_mention_entity';

export interface Entities {
  hashtags?: HashtagEntity[] | null;
  media?: MediaEntity[] | null;
  symbols?: SymbolEntity[] | null;
  urls?: UrlEntity[] | null;
  user_mentions?: UserMentionEntity[] | null;
}
