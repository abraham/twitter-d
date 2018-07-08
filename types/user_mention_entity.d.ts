export interface UserMentionEntity {
  id_str: string;
  id: number;
  indices?: number[] | null;
  name: string;
  screen_name: string;
}
