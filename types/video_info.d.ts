import { VideoVariant } from './video_variant';

export interface VideoInfo {
  aspect_ratio?: [number, number] | null;
  variants?: VideoVariant[] | null;
}
