import type { Status } from './status';
import type { UserEntities } from './user_entities';

export interface FullUser {
  created_at: string;
  default_profile_image: boolean;
  default_profile: boolean;
  description?: string | null;
  entities: UserEntities;
  favourites_count: number;
  followers_count: number;
  friends_count: number;
  id_str: string;
  id: number;
  listed_count: number;
  location?: string | null;
  name: string;
  profile_banner_url?: string;
  profile_image_url_https: string;
  protected: boolean;
  screen_name: string;
  status?: Status;
  statuses_count: number;
  url?: string | null;
  verified: boolean;
  withheld_in_countries?: string[];
  withheld_scope?: string;
}

export interface TrimmedUser {
  id_str: string;
  id: number;
}

export type User = TrimmedUser | FullUser;
