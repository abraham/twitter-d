import { Status } from './status';
import { UserEntities } from './user_entities';

interface FullUser {
  contributors_enabled: boolean;
  created_at: string;
  default_profile_image: boolean;
  default_profile: boolean;
  description: string;
  entities: UserEntities;
  favourites_count: number;
  follow_request_sent?: null;
  followers_count: number;
  following?: null;
  friends_count: number;
  geo_enabled: boolean;
  has_extended_profile: boolean;
  id_str: string;
  id: number;
  is_translation_enabled: boolean;
  is_translator: boolean;
  lang: string;
  listed_count: number;
  location: string;
  name: string;
  notifications?: null;
  profile_background_color: string;
  profile_background_image_url_https?: string | null;
  profile_background_image_url?: string | null;
  profile_background_tile: boolean;
  profile_banner_url?: string | null;
  profile_image_url_https: string;
  profile_image_url: string;
  profile_link_color: string;
  profile_location?: null;
  profile_sidebar_border_color: string;
  profile_sidebar_fill_color: string;
  profile_text_color: string;
  profile_use_background_image: boolean;
  protected: boolean;
  screen_name: string;
  status?: Status;
  statuses_count: number;
  time_zone?: string | null;
  translator_type: string;
  url?: string | null;
  utc_offset?: number | null;
  verified: boolean;
  withheld_in_countries?: string[] | null;
}

interface TrimmedUser {
  id_str: string;
  id: number;
}

export type User = TrimmedUser | FullUser
