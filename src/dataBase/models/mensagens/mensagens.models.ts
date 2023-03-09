import {
  Table,
  Column,
  Model,
  DataType,
  Unique,
  AutoIncrement,
  PrimaryKey,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Users } from '../users/users.models';

@Table({ tableName: 'mensagens' })
export class Mensagens extends Model<Mensagens> {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
  })
  id: number;

  @Unique(false)
  @Column({
    type: DataType.STRING(1000),
    allowNull: true,
  })
  mensagem: string;

  @Unique(false)
  @Column({
    type: DataType.UUID,
    allowNull: true,
    references: {
      model: Users,
      key: 'public_id',
    },
  })
  remetente: string;

  @Unique(false)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    references: {
      model: Users,
      key: 'id',
    },
  })
  destinatario: number;
}
