import { appSchema, tableSchema } from '@nozbe/watermelondb';

const USERS_TABLE = 'users';
const WATER_ENTRIES_TABLE = 'water_entries';

export { USERS_TABLE, WATER_ENTRIES_TABLE };

export const applicationSchema = appSchema({
  version: 1,
  tables: [
    // Tabela de Usuários
    tableSchema({
      name: USERS_TABLE,
      columns: [
        { name: 'name', type: 'string' },
        { name: 'age', type: 'number', isOptional: true },
        { name: 'weight', type: 'number' }, // Importante para calcular a meta
        { name: 'height', type: 'number', isOptional: true },
        { name: 'gender', type: 'string', isOptional: true },
        // Configurações
        { name: 'daily_goal', type: 'number' }, // Meta diária em ml ou oz
        { name: 'measurement_unit', type: 'string' }, // 'ml' | 'oz'
        { name: 'alarms_enabled', type: 'boolean' },
        { name: 'alarm_times', type: 'string', isOptional: true }, // Vamos salvar JSON aqui
        { name: 'created_at', type: 'number' },
        { name: 'updated_at', type: 'number' },
      ],
    }),
    // Tabela de Registros de Água
    tableSchema({
      name: WATER_ENTRIES_TABLE,
      columns: [
        { name: 'user_id', type: 'string', isIndexed: true }, // Chave estrangeira
        { name: 'volume', type: 'number' },
        { name: 'date', type: 'number' }, // Timestamp do registro
        { name: 'beverage_type', type: 'string', isOptional: true }, // Ex: 'water', 'soda', 'coffee' (Opcional para futuro)
        { name: 'created_at', type: 'number' },
        { name: 'updated_at', type: 'number' },
      ],
    }),
  ],
});
