import type { Attributes } from './attributes';
import type { BoundingBox } from './bounding_box';

export interface Place {
  attributes: Attributes;
  bounding_box: BoundingBox;
  contained_within?: string[] | null;
  country_code: string;
  country: string;
  full_name: string;
  id: string;
  name: string;
  place_type: string;
  url: string;
}
