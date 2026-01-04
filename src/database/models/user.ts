import { Model, Q } from '@nozbe/watermelondb';
import {
  field,
  text,
  date,
  children,
  writer,
  json,
  readonly,
} from '@nozbe/watermelondb/decorators';
import { USERS_TABLE } from '../mmkv/schema';

const sanitizeAlarms = (raw: any) => {
  return Array.isArray(raw) ? raw.map(String) : [];
};

export default class User extends Model {
  static table = USERS_TABLE;

  // Associações
  // Isso diz: "Este usuário tem muitos registros na tabela water_entries"
  @children('water_entries') entries;

  @text('name')
  name!: string;
  @field('age')
  age!: number;
  @field('weight')
  weight!: number;
  @field('height')
  height!: number;
  @text('gender')
  gender!: string;

  // Configs
  @field('daily_goal')
  dailyGoal!: number;
  @text('measurement_unit')
  measurementUnit!: string;
  @field('alarms_enabled')
  alarmsEnabled!: boolean;

  // Como Watermelon não salva arrays nativamente, usamos JSON
  @json('alarm_times', sanitizeAlarms) alarmTimes!: string;

  @readonly @date('created_at') createdAt!: Date;
  @readonly @date('updated_at') updatedAt!: Date;

  // Actions (Lógica encapsulada no Model)

  // Exemplo: Adicionar um registro de água para este usuário
  @writer async addWaterEntry(volume: number) {
    const newEntry = await this.collections
      .get('water_entries')
      .create(entry => {
        entry.user.set(this); // Aqui fazemos o Vínculo (Relacionamento)
        entry.volume = volume;
        entry.date = Date.now();
      });
    return newEntry;
  }

  get todayEntries() {
    const startOfDay = new Date().setHours(0, 0, 0, 0);
    const endOfDay = new Date().setHours(23, 59, 59, 999);

    return this.entries.extend(
      Q.where('date', Q.between(startOfDay, endOfDay)),
    );
  }
}
