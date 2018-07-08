import { Description } from './description';
import { Url } from './url';

export interface UserEntities {
  description: Description;
  url?: Url | null;
}
