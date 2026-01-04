import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import { applicationSchema } from './schema';
import { migrations } from './migrations';

export const adapter = new SQLiteAdapter({
  schema: applicationSchema,
  migrations: migrations,
});
