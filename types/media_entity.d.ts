import { Sizes } from './sizes';

export interface MediaEntity {
  display_url: string;
  expanded_url: string;
  id_str: string;
  id: number;
  indices?: [number, number] | null;
  media_url_https: string;
  media_url: string;
  sizes: Sizes;
  source_status_id_str?: string | null;
  source_status_id?: number | null;
  source_user_id_str?: string | null;
  source_user_id?: number | null;
  type: string;
  url: string;
}
