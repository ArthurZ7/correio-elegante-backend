import {
  Table,
  Column,
  Model,
  DataType,
  Unique,
  AutoIncrement,
  PrimaryKey,
} from 'sequelize-typescript';

@Table({ tableName: 'users' })
export class Users extends Model<Users> {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
  })
  id: number;

  @Unique(true)
  @Column({
    type: DataType.UUID,
    allowNull: false,
    defaultValue: DataType.UUIDV4,
  })
  public_id: number;

  @Unique(false)
  @Column({
    type: DataType.STRING(150),
    allowNull: false,
  })
  nome: string;

  @Unique(true)
  @Column({
    type: DataType.STRING(11),
    allowNull: false,
  })
  cpf: string;

  @Unique(true)
  @Column({
    type: DataType.STRING(11),
    allowNull: false,
  })
  telefone: string;

  @Unique(false)
  @Column({
    type: DataType.ENUM,
    values: ['feminino', 'masculino'],
    allowNull: false,
  })
  sexo: string;

  @Unique(false)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  idade: number;

  @Unique(false)
  @Column({
    type: DataType.STRING(1000),
    allowNull: true,
  })
  bio: string;

  @Unique(false)
  @Column({
    type: DataType.STRING(1000),
    allowNull: true,
  })
  token: string;

  @Unique(false)
  @Column({
    type: DataType.STRING(1000),
    allowNull: true,
  })
  foto: string;
}
