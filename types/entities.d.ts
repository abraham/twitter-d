import { HashtagEntity } from './hashtag_entity';
import { MediaEntity } from './media_entity';
import { SymbolEntity } from './symbol_entity';
import { UrlEntity } from './url_entity';
import { UserMentionEntity } from './user_mention_entity';

export interface Entities {
  hashtags?: HashtagEntity[] | null;
  media?: MediaEntity[] | null;
  symbols?: SymbolEntity[] | null;
  urls?: UrlEntity[] | null;
  user_mentions?: UserMentionEntity[] | null;
}
