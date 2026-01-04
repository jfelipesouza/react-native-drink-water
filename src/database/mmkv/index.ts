import { Database } from '@nozbe/watermelondb';

import { adapter } from './adapter';
import User from '../models/user';
import WaterEntry from '../models/water-entry';

const database = new Database({
  adapter,
  modelClasses: [User, WaterEntry],
});

export { database };
