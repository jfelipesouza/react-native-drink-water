import { Model } from '@nozbe/watermelondb';
import {
  field,
  date,
  relation,
  readonly,
} from '@nozbe/watermelondb/decorators';
import { WATER_ENTRIES_TABLE } from '../mmkv/schema';

export default class WaterEntry extends Model {
  static table = WATER_ENTRIES_TABLE;

  // Relacionamento Inverso: Este registro pertence a UM User
  @relation('users', 'user_id') user;

  @field('volume') volume!: number;
  @date('date') date!: Date;
  @field('beverage_type') beverageType!: string;

  @readonly @date('created_at') createdAt!: Date;
  @readonly @date('updated_at') updatedAt!: Date;
}
