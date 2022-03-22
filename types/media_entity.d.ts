import type { AdditionalMediaInfo } from './additional_media_info';
import type { Sizes } from './sizes';
import type { VideoInfo } from './video_info';

export interface MediaEntity {
  additional_media_info?: AdditionalMediaInfo | null;
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
  video_info?: VideoInfo | null;
}
