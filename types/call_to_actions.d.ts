import { VisitSite } from './visit_site';
import { WatchNow } from './watch_now';

export interface CallToActions {
  visit_site?: VisitSite | null;
  watch_now?: WatchNow | null;
}
