import type { VideoVariant } from './video_variant';

export interface VideoInfo {
  aspect_ratio?: [number, number] | null;
  duration_millis?: number | null;
  variants?: VideoVariant[] | null;
}
